# Push entity test

require "minitest/autorun"
require "json"
require_relative "../Codatplatform_sdk"
require_relative "runner"

class PushEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CodatplatformSDK.test(nil, nil)
    ent = testsdk.Push(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "push" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CodatplatformSDK.test(seed, nil)
    seen = base.Push(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CodatplatformConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CodatplatformSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Push(nil).stream("list", nil, nil).each do |item|
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
    setup = push_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "push." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_PUSH_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    push_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.push")))
    push_ref01_data = nil
    if push_ref01_data_raw.length > 0
      push_ref01_data = Helpers.to_map(push_ref01_data_raw[0][1])
    end

    # LIST
    push_ref01_ent = client.Push(nil)
    push_ref01_match = {
      "company_id" => setup[:idmap]["company01"],
    }

    push_ref01_list_result = push_ref01_ent.list(push_ref01_match, nil)
    assert push_ref01_list_result.is_a?(Array)

    # LOAD
    push_ref01_match_dt0 = {
      "id" => push_ref01_data["id"],
    }
    push_ref01_data_dt0_loaded = push_ref01_ent.load(push_ref01_match_dt0, nil)
    push_ref01_data_dt0_load_result = Helpers.to_map(push_ref01_data_dt0_loaded.respond_to?(:data_get) ? push_ref01_data_dt0_loaded.data_get : push_ref01_data_dt0_loaded)
    assert !push_ref01_data_dt0_load_result.nil?
    assert_equal push_ref01_data_dt0_load_result["id"], push_ref01_data["id"]

  end
end

def push_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "push", "PushTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CodatplatformSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["push01", "push02", "push03", "company01", "company02", "company03"],
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
  entid_env_raw = ENV["CODATPLATFORM_TEST_PUSH_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CODATPLATFORM_TEST_PUSH_ENTID" => idmap,
    "CODATPLATFORM_TEST_LIVE" => "FALSE",
    "CODATPLATFORM_TEST_EXPLAIN" => "FALSE",
    "CODATPLATFORM_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CODATPLATFORM_TEST_PUSH_ENTID"])
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
