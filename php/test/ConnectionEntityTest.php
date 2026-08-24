<?php
declare(strict_types=1);

// Connection entity test

require_once __DIR__ . '/../codatplatform_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ConnectionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CodatplatformSDK::test(null, null);
        $ent = $testsdk->Connection(null);
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
                "connection" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CodatplatformSDK::test($seed, null);
        $seen = iterator_to_array($base->Connection(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CodatplatformConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CodatplatformSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Connection(null)->stream("list", null, null) as $item) {
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
        $setup = connection_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "connection." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_CONNECTION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $connection_ref01_ent = $client->Connection(null);
        $connection_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.connection"), "connection_ref01"));
        $connection_ref01_data["company_id"] = $setup["idmap"]["company01"];

        $connection_ref01_data_result = $connection_ref01_ent->create($connection_ref01_data, null);
        $connection_ref01_data = Helpers::to_map($connection_ref01_data_result);
        $this->assertNotNull($connection_ref01_data);
        $this->assertNotNull($connection_ref01_data["id"]);

        // LIST
        $connection_ref01_match = [
            "company_id" => $setup["idmap"]["company01"],
        ];

        $connection_ref01_list_result = $connection_ref01_ent->list($connection_ref01_match, null);
        $this->assertIsArray($connection_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($connection_ref01_list_result),
            ["id" => $connection_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $connection_ref01_data_up0_up = [
            "id" => $connection_ref01_data["id"],
            "company_id" => $setup["idmap"]["company_id"],
        ];

        $connection_ref01_markdef_up0_name = "created";
        $connection_ref01_markdef_up0_value = "Mark01-connection_ref01_" . $setup["now"];
        $connection_ref01_data_up0_up[$connection_ref01_markdef_up0_name] = $connection_ref01_markdef_up0_value;

        $connection_ref01_resdata_up0_result = $connection_ref01_ent->update($connection_ref01_data_up0_up, null);
        $connection_ref01_resdata_up0 = Helpers::to_map($connection_ref01_resdata_up0_result);
        $this->assertNotNull($connection_ref01_resdata_up0);
        $this->assertEquals($connection_ref01_resdata_up0["id"], $connection_ref01_data_up0_up["id"]);
        $this->assertEquals($connection_ref01_resdata_up0[$connection_ref01_markdef_up0_name], $connection_ref01_markdef_up0_value);

        // LOAD
        $connection_ref01_match_dt0 = [
            "id" => $connection_ref01_data["id"],
        ];
        $connection_ref01_data_dt0_loaded = $connection_ref01_ent->load($connection_ref01_match_dt0, null);
        $connection_ref01_data_dt0_load_result = Helpers::to_map($connection_ref01_data_dt0_loaded);
        $this->assertNotNull($connection_ref01_data_dt0_load_result);
        $this->assertEquals($connection_ref01_data_dt0_load_result["id"], $connection_ref01_data["id"]);

        // REMOVE
        $connection_ref01_match_rm0 = [
            "id" => $connection_ref01_data["id"],
        ];
        $connection_ref01_ent->remove($connection_ref01_match_rm0, null);

        // LIST
        $connection_ref01_match_rt0 = [
            "company_id" => $setup["idmap"]["company01"],
        ];

        $connection_ref01_list_rt0_result = $connection_ref01_ent->list($connection_ref01_match_rt0, null);
        $this->assertIsArray($connection_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($connection_ref01_list_rt0_result),
            ["id" => $connection_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function connection_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/connection/ConnectionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CodatplatformSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["connection01", "connection02", "connection03", "company01", "company02", "company03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CODATPLATFORM_TEST_CONNECTION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CODATPLATFORM_TEST_CONNECTION_ENTID" => $idmap,
        "CODATPLATFORM_TEST_LIVE" => "FALSE",
        "CODATPLATFORM_TEST_EXPLAIN" => "FALSE",
        "CODATPLATFORM_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CODATPLATFORM_TEST_CONNECTION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["company_id"])) {
        $idmap_resolved["company_id"] = $idmap_resolved["company01"];
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
