# CompanyAccessToken entity test

require "minitest/autorun"
require "json"
require_relative "../Codatplatform_sdk"
require_relative "runner"

class CompanyAccessTokenEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CodatplatformSDK.test(nil, nil)
    ent = testsdk.CompanyAccessToken(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = company_access_token_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "company_access_token." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_COMPANY_ACCESS_TOKEN_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    company_access_token_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.company_access_token")))
    company_access_token_ref01_data = nil
    if company_access_token_ref01_data_raw.length > 0
      company_access_token_ref01_data = Helpers.to_map(company_access_token_ref01_data_raw[0][1])
    end

    # LOAD
    company_access_token_ref01_ent = client.CompanyAccessToken(nil)
    company_access_token_ref01_match_dt0 = {
      "id" => company_access_token_ref01_data["id"],
    }
    company_access_token_ref01_data_dt0_loaded = company_access_token_ref01_ent.load(company_access_token_ref01_match_dt0, nil)
    company_access_token_ref01_data_dt0_load_result = Helpers.to_map(company_access_token_ref01_data_dt0_loaded.respond_to?(:data_get) ? company_access_token_ref01_data_dt0_loaded.data_get : company_access_token_ref01_data_dt0_loaded)
    assert !company_access_token_ref01_data_dt0_load_result.nil?
    assert_equal company_access_token_ref01_data_dt0_load_result["id"], company_access_token_ref01_data["id"]

  end
end

def company_access_token_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "company_access_token", "CompanyAccessTokenTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CodatplatformSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["company_access_token01", "company_access_token02", "company_access_token03"],
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
  entid_env_raw = ENV["CODATPLATFORM_TEST_COMPANY_ACCESS_TOKEN_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CODATPLATFORM_TEST_COMPANY_ACCESS_TOKEN_ENTID" => idmap,
    "CODATPLATFORM_TEST_LIVE" => "FALSE",
    "CODATPLATFORM_TEST_EXPLAIN" => "FALSE",
    "CODATPLATFORM_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CODATPLATFORM_TEST_COMPANY_ACCESS_TOKEN_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["CODATPLATFORM_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
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
