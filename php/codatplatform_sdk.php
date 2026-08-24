<?php
declare(strict_types=1);

// Codatplatform SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CodatplatformSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CodatplatformUtility();
        $this->_utility = $utility;

        $config = CodatplatformConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CodatplatformHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CodatplatformHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CodatplatformFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CodatplatformFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CodatplatformUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CodatplatformHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CodatplatformHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CodatplatformHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CodatplatformSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CodatplatformError($op . "_allow",
                "CodatplatformSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CodatplatformHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CodatplatformHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CodatplatformError("graphql_error",
                "CodatplatformSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_access_token = null;

    // Canonical facade: $client->AccessToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->access_token()
    // resolves here too.
    public function AccessToken($data = null)
    {
        require_once __DIR__ . '/entity/access_token_entity.php';
        if ($data === null) {
            if ($this->_access_token === null) {
                $this->_access_token = new AccessTokenEntity($this, null);
            }
            return $this->_access_token;
        }
        return new AccessTokenEntity($this, $data);
    }


    private $_all = null;

    // Canonical facade: $client->All()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->all()
    // resolves here too.
    public function All($data = null)
    {
        require_once __DIR__ . '/entity/all_entity.php';
        if ($data === null) {
            if ($this->_all === null) {
                $this->_all = new AllEntity($this, null);
            }
            return $this->_all;
        }
        return new AllEntity($this, $data);
    }


    private $_api_key = null;

    // Canonical facade: $client->ApiKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_key()
    // resolves here too.
    public function ApiKey($data = null)
    {
        require_once __DIR__ . '/entity/api_key_entity.php';
        if ($data === null) {
            if ($this->_api_key === null) {
                $this->_api_key = new ApiKeyEntity($this, null);
            }
            return $this->_api_key;
        }
        return new ApiKeyEntity($this, $data);
    }


    private $_branding = null;

    // Canonical facade: $client->Branding()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branding()
    // resolves here too.
    public function Branding($data = null)
    {
        require_once __DIR__ . '/entity/branding_entity.php';
        if ($data === null) {
            if ($this->_branding === null) {
                $this->_branding = new BrandingEntity($this, null);
            }
            return $this->_branding;
        }
        return new BrandingEntity($this, $data);
    }


    private $_company = null;

    // Canonical facade: $client->Company()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->company()
    // resolves here too.
    public function Company($data = null)
    {
        require_once __DIR__ . '/entity/company_entity.php';
        if ($data === null) {
            if ($this->_company === null) {
                $this->_company = new CompanyEntity($this, null);
            }
            return $this->_company;
        }
        return new CompanyEntity($this, $data);
    }


    private $_company_access_token = null;

    // Canonical facade: $client->CompanyAccessToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->company_access_token()
    // resolves here too.
    public function CompanyAccessToken($data = null)
    {
        require_once __DIR__ . '/entity/company_access_token_entity.php';
        if ($data === null) {
            if ($this->_company_access_token === null) {
                $this->_company_access_token = new CompanyAccessTokenEntity($this, null);
            }
            return $this->_company_access_token;
        }
        return new CompanyAccessTokenEntity($this, $data);
    }


    private $_connection = null;

    // Canonical facade: $client->Connection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connection()
    // resolves here too.
    public function Connection($data = null)
    {
        require_once __DIR__ . '/entity/connection_entity.php';
        if ($data === null) {
            if ($this->_connection === null) {
                $this->_connection = new ConnectionEntity($this, null);
            }
            return $this->_connection;
        }
        return new ConnectionEntity($this, $data);
    }


    private $_connection_management_access_token = null;

    // Canonical facade: $client->ConnectionManagementAccessToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connection_management_access_token()
    // resolves here too.
    public function ConnectionManagementAccessToken($data = null)
    {
        require_once __DIR__ . '/entity/connection_management_access_token_entity.php';
        if ($data === null) {
            if ($this->_connection_management_access_token === null) {
                $this->_connection_management_access_token = new ConnectionManagementAccessTokenEntity($this, null);
            }
            return $this->_connection_management_access_token;
        }
        return new ConnectionManagementAccessTokenEntity($this, $data);
    }


    private $_connection_management_allowed_origin = null;

    // Canonical facade: $client->ConnectionManagementAllowedOrigin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connection_management_allowed_origin()
    // resolves here too.
    public function ConnectionManagementAllowedOrigin($data = null)
    {
        require_once __DIR__ . '/entity/connection_management_allowed_origin_entity.php';
        if ($data === null) {
            if ($this->_connection_management_allowed_origin === null) {
                $this->_connection_management_allowed_origin = new ConnectionManagementAllowedOriginEntity($this, null);
            }
            return $this->_connection_management_allowed_origin;
        }
        return new ConnectionManagementAllowedOriginEntity($this, $data);
    }


    private $_custom = null;

    // Canonical facade: $client->Custom()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom()
    // resolves here too.
    public function Custom($data = null)
    {
        require_once __DIR__ . '/entity/custom_entity.php';
        if ($data === null) {
            if ($this->_custom === null) {
                $this->_custom = new CustomEntity($this, null);
            }
            return $this->_custom;
        }
        return new CustomEntity($this, $data);
    }


    private $_data_status = null;

    // Canonical facade: $client->DataStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data_status()
    // resolves here too.
    public function DataStatus($data = null)
    {
        require_once __DIR__ . '/entity/data_status_entity.php';
        if ($data === null) {
            if ($this->_data_status === null) {
                $this->_data_status = new DataStatusEntity($this, null);
            }
            return $this->_data_status;
        }
        return new DataStatusEntity($this, $data);
    }


    private $_data_type = null;

    // Canonical facade: $client->DataType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data_type()
    // resolves here too.
    public function DataType($data = null)
    {
        require_once __DIR__ . '/entity/data_type_entity.php';
        if ($data === null) {
            if ($this->_data_type === null) {
                $this->_data_type = new DataTypeEntity($this, null);
            }
            return $this->_data_type;
        }
        return new DataTypeEntity($this, $data);
    }


    private $_history = null;

    // Canonical facade: $client->History()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->history()
    // resolves here too.
    public function History($data = null)
    {
        require_once __DIR__ . '/entity/history_entity.php';
        if ($data === null) {
            if ($this->_history === null) {
                $this->_history = new HistoryEntity($this, null);
            }
            return $this->_history;
        }
        return new HistoryEntity($this, $data);
    }


    private $_integration = null;

    // Canonical facade: $client->Integration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->integration()
    // resolves here too.
    public function Integration($data = null)
    {
        require_once __DIR__ . '/entity/integration_entity.php';
        if ($data === null) {
            if ($this->_integration === null) {
                $this->_integration = new IntegrationEntity($this, null);
            }
            return $this->_integration;
        }
        return new IntegrationEntity($this, $data);
    }


    private $_option = null;

    // Canonical facade: $client->Option()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->option()
    // resolves here too.
    public function Option($data = null)
    {
        require_once __DIR__ . '/entity/option_entity.php';
        if ($data === null) {
            if ($this->_option === null) {
                $this->_option = new OptionEntity($this, null);
            }
            return $this->_option;
        }
        return new OptionEntity($this, $data);
    }


    private $_product = null;

    // Canonical facade: $client->Product()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product()
    // resolves here too.
    public function Product($data = null)
    {
        require_once __DIR__ . '/entity/product_entity.php';
        if ($data === null) {
            if ($this->_product === null) {
                $this->_product = new ProductEntity($this, null);
            }
            return $this->_product;
        }
        return new ProductEntity($this, $data);
    }


    private $_profile = null;

    // Canonical facade: $client->Profile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->profile()
    // resolves here too.
    public function Profile($data = null)
    {
        require_once __DIR__ . '/entity/profile_entity.php';
        if ($data === null) {
            if ($this->_profile === null) {
                $this->_profile = new ProfileEntity($this, null);
            }
            return $this->_profile;
        }
        return new ProfileEntity($this, $data);
    }


    private $_pull_operation = null;

    // Canonical facade: $client->PullOperation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pull_operation()
    // resolves here too.
    public function PullOperation($data = null)
    {
        require_once __DIR__ . '/entity/pull_operation_entity.php';
        if ($data === null) {
            if ($this->_pull_operation === null) {
                $this->_pull_operation = new PullOperationEntity($this, null);
            }
            return $this->_pull_operation;
        }
        return new PullOperationEntity($this, $data);
    }


    private $_push = null;

    // Canonical facade: $client->Push()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->push()
    // resolves here too.
    public function Push($data = null)
    {
        require_once __DIR__ . '/entity/push_entity.php';
        if ($data === null) {
            if ($this->_push === null) {
                $this->_push = new PushEntity($this, null);
            }
            return $this->_push;
        }
        return new PushEntity($this, $data);
    }


    private $_push_option = null;

    // Canonical facade: $client->PushOption()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->push_option()
    // resolves here too.
    public function PushOption($data = null)
    {
        require_once __DIR__ . '/entity/push_option_entity.php';
        if ($data === null) {
            if ($this->_push_option === null) {
                $this->_push_option = new PushOptionEntity($this, null);
            }
            return $this->_push_option;
        }
        return new PushOptionEntity($this, $data);
    }


    private $_queue = null;

    // Canonical facade: $client->Queue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->queue()
    // resolves here too.
    public function Queue($data = null)
    {
        require_once __DIR__ . '/entity/queue_entity.php';
        if ($data === null) {
            if ($this->_queue === null) {
                $this->_queue = new QueueEntity($this, null);
            }
            return $this->_queue;
        }
        return new QueueEntity($this, $data);
    }


    private $_refresh_data = null;

    // Canonical facade: $client->RefreshData()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->refresh_data()
    // resolves here too.
    public function RefreshData($data = null)
    {
        require_once __DIR__ . '/entity/refresh_data_entity.php';
        if ($data === null) {
            if ($this->_refresh_data === null) {
                $this->_refresh_data = new RefreshDataEntity($this, null);
            }
            return $this->_refresh_data;
        }
        return new RefreshDataEntity($this, $data);
    }


    private $_setting = null;

    // Canonical facade: $client->Setting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->setting()
    // resolves here too.
    public function Setting($data = null)
    {
        require_once __DIR__ . '/entity/setting_entity.php';
        if ($data === null) {
            if ($this->_setting === null) {
                $this->_setting = new SettingEntity($this, null);
            }
            return $this->_setting;
        }
        return new SettingEntity($this, $data);
    }


    private $_supplemental_data = null;

    // Canonical facade: $client->SupplementalData()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->supplemental_data()
    // resolves here too.
    public function SupplementalData($data = null)
    {
        require_once __DIR__ . '/entity/supplemental_data_entity.php';
        if ($data === null) {
            if ($this->_supplemental_data === null) {
                $this->_supplemental_data = new SupplementalDataEntity($this, null);
            }
            return $this->_supplemental_data;
        }
        return new SupplementalDataEntity($this, $data);
    }


    private $_supplemental_data_config = null;

    // Canonical facade: $client->SupplementalDataConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->supplemental_data_config()
    // resolves here too.
    public function SupplementalDataConfig($data = null)
    {
        require_once __DIR__ . '/entity/supplemental_data_config_entity.php';
        if ($data === null) {
            if ($this->_supplemental_data_config === null) {
                $this->_supplemental_data_config = new SupplementalDataConfigEntity($this, null);
            }
            return $this->_supplemental_data_config;
        }
        return new SupplementalDataConfigEntity($this, $data);
    }


    private $_sync = null;

    // Canonical facade: $client->Sync()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sync()
    // resolves here too.
    public function Sync($data = null)
    {
        require_once __DIR__ . '/entity/sync_entity.php';
        if ($data === null) {
            if ($this->_sync === null) {
                $this->_sync = new SyncEntity($this, null);
            }
            return $this->_sync;
        }
        return new SyncEntity($this, $data);
    }


    private $_sync_setting = null;

    // Canonical facade: $client->SyncSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sync_setting()
    // resolves here too.
    public function SyncSetting($data = null)
    {
        require_once __DIR__ . '/entity/sync_setting_entity.php';
        if ($data === null) {
            if ($this->_sync_setting === null) {
                $this->_sync_setting = new SyncSettingEntity($this, null);
            }
            return $this->_sync_setting;
        }
        return new SyncSettingEntity($this, $data);
    }


    private $_validation = null;

    // Canonical facade: $client->Validation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->validation()
    // resolves here too.
    public function Validation($data = null)
    {
        require_once __DIR__ . '/entity/validation_entity.php';
        if ($data === null) {
            if ($this->_validation === null) {
                $this->_validation = new ValidationEntity($this, null);
            }
            return $this->_validation;
        }
        return new ValidationEntity($this, $data);
    }


    private $_webhook = null;

    // Canonical facade: $client->Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook()
    // resolves here too.
    public function Webhook($data = null)
    {
        require_once __DIR__ . '/entity/webhook_entity.php';
        if ($data === null) {
            if ($this->_webhook === null) {
                $this->_webhook = new WebhookEntity($this, null);
            }
            return $this->_webhook;
        }
        return new WebhookEntity($this, $data);
    }


    private $_webhook_zapier_key = null;

    // Canonical facade: $client->WebhookZapierKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook_zapier_key()
    // resolves here too.
    public function WebhookZapierKey($data = null)
    {
        require_once __DIR__ . '/entity/webhook_zapier_key_entity.php';
        if ($data === null) {
            if ($this->_webhook_zapier_key === null) {
                $this->_webhook_zapier_key = new WebhookZapierKeyEntity($this, null);
            }
            return $this->_webhook_zapier_key;
        }
        return new WebhookZapierKeyEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CodatplatformSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
