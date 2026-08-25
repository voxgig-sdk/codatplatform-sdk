<?php
declare(strict_types=1);

// Custom entity test

require_once __DIR__ . '/../codatplatform_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CustomEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CodatplatformSDK::test(null, null);
        $ent = $testsdk->Custom(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = custom_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "custom." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_CUSTOM_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $custom_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.custom")));
        $custom_ref01_data = null;
        if (count($custom_ref01_data_raw) > 0) {
            $custom_ref01_data = Helpers::to_map($custom_ref01_data_raw[0][1]);
        }

        // UPDATE
        $custom_ref01_ent = $client->Custom(null);
        $custom_ref01_data_up0_up = [
            "id" => $custom_ref01_data["id"],
            "platform_key" => $setup["idmap"]["platform_key"],
        ];

        $custom_ref01_markdef_up0_name = "dataSource";
        $custom_ref01_markdef_up0_value = "Mark01-custom_ref01_" . $setup["now"];
        $custom_ref01_data_up0_up[$custom_ref01_markdef_up0_name] = $custom_ref01_markdef_up0_value;

        $custom_ref01_resdata_up0_result = $custom_ref01_ent->update($custom_ref01_data_up0_up, null);
        $custom_ref01_resdata_up0 = Helpers::to_map(is_object($custom_ref01_resdata_up0_result) && method_exists($custom_ref01_resdata_up0_result, 'data_get') ? $custom_ref01_resdata_up0_result->data_get() : $custom_ref01_resdata_up0_result);
        $this->assertNotNull($custom_ref01_resdata_up0);
        $this->assertEquals($custom_ref01_resdata_up0["id"], $custom_ref01_data_up0_up["id"]);
        $this->assertEquals($custom_ref01_resdata_up0[$custom_ref01_markdef_up0_name], $custom_ref01_markdef_up0_value);

        // LOAD
        $custom_ref01_match_dt0 = [
            "id" => $custom_ref01_data["id"],
        ];
        $custom_ref01_data_dt0_loaded = $custom_ref01_ent->load($custom_ref01_match_dt0, null);
        $custom_ref01_data_dt0_load_result = Helpers::to_map(is_object($custom_ref01_data_dt0_loaded) && method_exists($custom_ref01_data_dt0_loaded, 'data_get') ? $custom_ref01_data_dt0_loaded->data_get() : $custom_ref01_data_dt0_loaded);
        $this->assertNotNull($custom_ref01_data_dt0_load_result);
        $this->assertEquals($custom_ref01_data_dt0_load_result["id"], $custom_ref01_data["id"]);

    }
}

function custom_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/custom/CustomTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CodatplatformSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["custom01", "custom02", "custom03", "integration01", "integration02", "integration03", "company01", "company02", "company03", "connection01", "connection02", "connection03", "platform_key01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CODATPLATFORM_TEST_CUSTOM_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CODATPLATFORM_TEST_CUSTOM_ENTID" => $idmap,
        "CODATPLATFORM_TEST_LIVE" => "FALSE",
        "CODATPLATFORM_TEST_EXPLAIN" => "FALSE",
        "CODATPLATFORM_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CODATPLATFORM_TEST_CUSTOM_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["platform_key"])) {
        $idmap_resolved["platform_key"] = $idmap_resolved["platform_key01"];
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
