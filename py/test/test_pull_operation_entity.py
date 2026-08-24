# PullOperation entity test

import json
import os
import time

import pytest

from codatplatform_sdk.utility.voxgig_struct import voxgig_struct as vs
from codatplatform_sdk import CodatplatformSDK
from codatplatform_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestPullOperationEntity:

    def test_should_create_instance(self):
        testsdk = CodatplatformSDK.test(None, None)
        ent = testsdk.PullOperation(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "pull_operation": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = CodatplatformSDK.test(seed, None)
        seen = list(base.PullOperation(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from codatplatform_sdk.config import make_config
        cfg = make_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = CodatplatformSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.PullOperation(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _pull_operation_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "pull_operation." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CODATPLATFORM_TEST_PULL_OPERATION_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        pull_operation_ref01_ent = client.PullOperation(None)
        pull_operation_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.pull_operation"), "pull_operation_ref01"))
        pull_operation_ref01_data["company_id"] = setup["idmap"]["company01"]
        pull_operation_ref01_data["data_type"] = setup["idmap"]["data_type01"]

        pull_operation_ref01_data = helpers.to_map(pull_operation_ref01_ent.create(pull_operation_ref01_data, None))
        assert pull_operation_ref01_data is not None
        assert pull_operation_ref01_data["id"] is not None

        # LIST
        pull_operation_ref01_match = {
            "company_id": setup["idmap"]["company01"],
        }

        pull_operation_ref01_list_result = pull_operation_ref01_ent.list(pull_operation_ref01_match, None)
        assert isinstance(pull_operation_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(pull_operation_ref01_list_result),
            {"id": pull_operation_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # LOAD
        pull_operation_ref01_match_dt0 = {
            "id": pull_operation_ref01_data["id"],
        }
        pull_operation_ref01_data_dt0_loaded = pull_operation_ref01_ent.load(pull_operation_ref01_match_dt0, None)
        pull_operation_ref01_data_dt0_load_result = helpers.to_map(pull_operation_ref01_data_dt0_loaded)
        assert pull_operation_ref01_data_dt0_load_result is not None
        assert pull_operation_ref01_data_dt0_load_result["id"] == pull_operation_ref01_data["id"]



def _pull_operation_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/pull_operation/PullOperationTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CodatplatformSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["pull_operation01", "pull_operation02", "pull_operation03", "company01", "company02", "company03", "history01", "history02", "history03", "queue01", "queue02", "queue03", "connection01", "connection02", "connection03", "custom01", "custom02", "custom03", "data_type01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CODATPLATFORM_TEST_PULL_OPERATION_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CODATPLATFORM_TEST_PULL_OPERATION_ENTID": idmap,
        "CODATPLATFORM_TEST_LIVE": "FALSE",
        "CODATPLATFORM_TEST_EXPLAIN": "FALSE",
        "CODATPLATFORM_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("CODATPLATFORM_TEST_PULL_OPERATION_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("CODATPLATFORM_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
                "apikey": env.get("CODATPLATFORM_APIKEY"),
            },
            extra or {},
        ])
        client = CodatplatformSDK(helpers.to_map(merged_opts))

    _live = env.get("CODATPLATFORM_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CODATPLATFORM_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
