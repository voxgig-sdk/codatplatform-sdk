# Branding entity test

import json
import os
import time

import pytest

from codatplatform_sdk.utility.voxgig_struct import voxgig_struct as vs
from codatplatform_sdk import CodatplatformSDK
from codatplatform_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestBrandingEntity:

    def test_should_create_instance(self):
        testsdk = CodatplatformSDK.test(None, None)
        ent = testsdk.Branding(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _branding_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "branding." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CODATPLATFORM_TEST_BRANDING_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        branding_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.branding")))
        branding_ref01_data = None
        if len(branding_ref01_data_raw) > 0:
            branding_ref01_data = helpers.to_map(branding_ref01_data_raw[0][1])

        # LOAD
        branding_ref01_ent = client.Branding(None)
        branding_ref01_match_dt0 = {}
        branding_ref01_data_dt0_loaded = branding_ref01_ent.load(branding_ref01_match_dt0, None)
        assert branding_ref01_data_dt0_loaded is not None



def _branding_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/branding/BrandingTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CodatplatformSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["branding01", "branding02", "branding03", "integration01", "integration02", "integration03"],
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
        "CODATPLATFORM_TEST_BRANDING_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CODATPLATFORM_TEST_BRANDING_ENTID": idmap,
        "CODATPLATFORM_TEST_LIVE": "FALSE",
        "CODATPLATFORM_TEST_EXPLAIN": "FALSE",
        "CODATPLATFORM_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("CODATPLATFORM_TEST_BRANDING_ENTID"))
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
