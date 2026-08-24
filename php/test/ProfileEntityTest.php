<?php
declare(strict_types=1);

// Profile entity test

require_once __DIR__ . '/../codatplatform_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ProfileEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CodatplatformSDK::test(null, null);
        $ent = $testsdk->Profile(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "profile" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CodatplatformSDK::test($seed, null);
        $seen = iterator_to_array($base->Profile(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CodatplatformConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CodatplatformSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Profile(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = profile_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "profile." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_PROFILE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $profile_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.profile")));
        $profile_ref01_data = null;
        if (count($profile_ref01_data_raw) > 0) {
            $profile_ref01_data = Helpers::to_map($profile_ref01_data_raw[0][1]);
        }

        // LIST
        $profile_ref01_ent = $client->Profile(null);
        $profile_ref01_match = [];

        $profile_ref01_list_result = $profile_ref01_ent->list($profile_ref01_match, null);
        $this->assertIsArray($profile_ref01_list_result);

        // UPDATE
        $profile_ref01_data_up0_up = [
        ];

        $profile_ref01_markdef_up0_name = "apiKey";
        $profile_ref01_markdef_up0_value = "Mark01-profile_ref01_" . $setup["now"];
        $profile_ref01_data_up0_up[$profile_ref01_markdef_up0_name] = $profile_ref01_markdef_up0_value;

        $profile_ref01_resdata_up0_result = $profile_ref01_ent->update($profile_ref01_data_up0_up, null);
        $profile_ref01_resdata_up0 = Helpers::to_map($profile_ref01_resdata_up0_result);
        $this->assertNotNull($profile_ref01_resdata_up0);
        $this->assertEquals($profile_ref01_resdata_up0[$profile_ref01_markdef_up0_name], $profile_ref01_markdef_up0_value);

    }
}

function profile_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/profile/ProfileTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CodatplatformSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["profile01", "profile02", "profile03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CODATPLATFORM_TEST_PROFILE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CODATPLATFORM_TEST_PROFILE_ENTID" => $idmap,
        "CODATPLATFORM_TEST_LIVE" => "FALSE",
        "CODATPLATFORM_TEST_EXPLAIN" => "FALSE",
        "CODATPLATFORM_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CODATPLATFORM_TEST_PROFILE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["CODATPLATFORM_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["CODATPLATFORM_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new CodatplatformSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["CODATPLATFORM_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CODATPLATFORM_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
