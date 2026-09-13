# Company entity test

require "minitest/autorun"
require "json"
require_relative "../Codatplatform_sdk"
require_relative "runner"

class CompanyEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CodatplatformSDK.test(nil, nil)
    ent = testsdk.Company(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "company" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CodatplatformSDK.test(seed, nil)
    seen = base.Company(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CodatplatformConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CodatplatformSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Company(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = company_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "company." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_COMPANY_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    company_ref01_ent = client.Company(nil)
    company_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.company"), "company_ref01"))

    company_ref01_data_result = company_ref01_ent.create(company_ref01_data, nil)
    company_ref01_data = Helpers.to_map(company_ref01_data_result.respond_to?(:data_get) ? company_ref01_data_result.data_get : company_ref01_data_result)
    assert !company_ref01_data.nil?
    assert !company_ref01_data["id"].nil?

    # LIST
    company_ref01_match = {}

    company_ref01_list_result = company_ref01_ent.list(company_ref01_match, nil)
    assert company_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(company_ref01_list_result),
      { "id" => company_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    company_ref01_data_up0_up = {
      "id" => company_ref01_data["id"],
    }

    company_ref01_markdef_up0_name = "created"
    company_ref01_markdef_up0_value = "Mark01-company_ref01_#{setup[:now]}"
    company_ref01_data_up0_up[company_ref01_markdef_up0_name] = company_ref01_markdef_up0_value

    company_ref01_resdata_up0_result = company_ref01_ent.update(company_ref01_data_up0_up, nil)
    company_ref01_resdata_up0 = Helpers.to_map(company_ref01_resdata_up0_result.respond_to?(:data_get) ? company_ref01_resdata_up0_result.data_get : company_ref01_resdata_up0_result)
    assert !company_ref01_resdata_up0.nil?
    assert_equal company_ref01_resdata_up0["id"], company_ref01_data_up0_up["id"]
    assert_equal company_ref01_resdata_up0[company_ref01_markdef_up0_name], company_ref01_markdef_up0_value

    # LOAD
    company_ref01_match_dt0 = {
      "id" => company_ref01_data["id"],
    }
    company_ref01_data_dt0_loaded = company_ref01_ent.load(company_ref01_match_dt0, nil)
    company_ref01_data_dt0_load_result = Helpers.to_map(company_ref01_data_dt0_loaded.respond_to?(:data_get) ? company_ref01_data_dt0_loaded.data_get : company_ref01_data_dt0_loaded)
    assert !company_ref01_data_dt0_load_result.nil?
    assert_equal company_ref01_data_dt0_load_result["id"], company_ref01_data["id"]

    # REMOVE
    company_ref01_match_rm0 = {
      "id" => company_ref01_data["id"],
    }
    company_ref01_ent.remove(company_ref01_match_rm0, nil)

    # LIST
    company_ref01_match_rt0 = {}

    company_ref01_list_rt0_result = company_ref01_ent.list(company_ref01_match_rt0, nil)
    assert company_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(company_ref01_list_rt0_result),
      { "id" => company_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def company_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "company", "CompanyTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CodatplatformSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["company01", "company02", "company03", "product01", "product02", "product03"],
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
  entid_env_raw = ENV["CODATPLATFORM_TEST_COMPANY_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CODATPLATFORM_TEST_COMPANY_ENTID" => idmap,
    "CODATPLATFORM_TEST_LIVE" => "FALSE",
    "CODATPLATFORM_TEST_EXPLAIN" => "FALSE",
    "CODATPLATFORM_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CODATPLATFORM_TEST_COMPANY_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
