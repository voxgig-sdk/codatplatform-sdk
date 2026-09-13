# Custom entity test

require "minitest/autorun"
require "json"
require_relative "../Codatplatform_sdk"
require_relative "runner"

class CustomEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CodatplatformSDK.test(nil, nil)
    ent = testsdk.Custom(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = custom_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "custom." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_CUSTOM_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    custom_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.custom")))
    custom_ref01_data = nil
    if custom_ref01_data_raw.length > 0
      custom_ref01_data = Helpers.to_map(custom_ref01_data_raw[0][1])
    end

    # UPDATE
    custom_ref01_ent = client.Custom(nil)
    custom_ref01_data_up0_up = {
      "id" => custom_ref01_data["id"],
      "platform_key" => setup[:idmap]["platform_key"],
    }

    custom_ref01_markdef_up0_name = "dataSource"
    custom_ref01_markdef_up0_value = "Mark01-custom_ref01_#{setup[:now]}"
    custom_ref01_data_up0_up[custom_ref01_markdef_up0_name] = custom_ref01_markdef_up0_value

    custom_ref01_resdata_up0_result = custom_ref01_ent.update(custom_ref01_data_up0_up, nil)
    custom_ref01_resdata_up0 = Helpers.to_map(custom_ref01_resdata_up0_result.respond_to?(:data_get) ? custom_ref01_resdata_up0_result.data_get : custom_ref01_resdata_up0_result)
    assert !custom_ref01_resdata_up0.nil?
    assert_equal custom_ref01_resdata_up0["id"], custom_ref01_data_up0_up["id"]
    assert_equal custom_ref01_resdata_up0[custom_ref01_markdef_up0_name], custom_ref01_markdef_up0_value

    # LOAD
    custom_ref01_match_dt0 = {
      "id" => custom_ref01_data["id"],
    }
    custom_ref01_data_dt0_loaded = custom_ref01_ent.load(custom_ref01_match_dt0, nil)
    custom_ref01_data_dt0_load_result = Helpers.to_map(custom_ref01_data_dt0_loaded.respond_to?(:data_get) ? custom_ref01_data_dt0_loaded.data_get : custom_ref01_data_dt0_loaded)
    assert !custom_ref01_data_dt0_load_result.nil?
    assert_equal custom_ref01_data_dt0_load_result["id"], custom_ref01_data["id"]

  end
end

def custom_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "custom", "CustomTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CodatplatformSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["custom01", "custom02", "custom03", "integration01", "integration02", "integration03", "company01", "company02", "company03", "connection01", "connection02", "connection03", "platform_key01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CODATPLATFORM_TEST_CUSTOM_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CODATPLATFORM_TEST_CUSTOM_ENTID" => idmap,
    "CODATPLATFORM_TEST_LIVE" => "FALSE",
    "CODATPLATFORM_TEST_EXPLAIN" => "FALSE",
    "CODATPLATFORM_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CODATPLATFORM_TEST_CUSTOM_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["platform_key"].nil?
    idmap_resolved["platform_key"] = idmap_resolved["platform_key01"]
  end

  if env["CODATPLATFORM_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CODATPLATFORM_APIKEY"],
      },
      extra || {},
    ])
    client = CodatplatformSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CODATPLATFORM_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CODATPLATFORM_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
