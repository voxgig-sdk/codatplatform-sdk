package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/codatplatform-sdk/go"
	"github.com/voxgig-sdk/codatplatform-sdk/go/core"

	vs "github.com/voxgig-sdk/codatplatform-sdk/go/utility/struct"
)

func TestSupplementalDataEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SupplementalData(nil)
		if ent == nil {
			t.Fatal("expected non-nil SupplementalDataEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := supplemental_dataBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "supplemental_data." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_SUPPLEMENTAL_DATA_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		supplementalDataRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.supplemental_data", setup.data)))
		var supplementalDataRef01Data map[string]any
		if len(supplementalDataRef01DataRaw) > 0 {
			supplementalDataRef01Data = core.ToMapAny(supplementalDataRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = supplementalDataRef01Data

		// UPDATE
		supplementalDataRef01Ent := client.SupplementalData(nil)
		supplementalDataRef01DataUp0Up := map[string]any{
			"platform_key": setup.idmap["platform_key"],
		}

		supplementalDataRef01ResdataUp0Result, err := supplementalDataRef01Ent.Update(supplementalDataRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		supplementalDataRef01ResdataUp0 := core.ToMapAny(supplementalDataRef01ResdataUp0Result)
		if supplementalDataRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

	})
}

func supplemental_dataBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "supplemental_data", "SupplementalDataTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read supplemental_data test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse supplemental_data test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"supplemental_data01", "supplemental_data02", "supplemental_data03", "integration01", "integration02", "integration03", "data_type01", "data_type02", "data_type03", "platform_key01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CODATPLATFORM_TEST_SUPPLEMENTAL_DATA_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CODATPLATFORM_TEST_SUPPLEMENTAL_DATA_ENTID": idmap,
		"CODATPLATFORM_TEST_LIVE":      "FALSE",
		"CODATPLATFORM_TEST_EXPLAIN":   "FALSE",
		"CODATPLATFORM_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CODATPLATFORM_TEST_SUPPLEMENTAL_DATA_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add platform_key alias for update test.
	if idmapResolved["platform_key"] == nil {
		idmapResolved["platform_key"] = idmapResolved["platform_key01"]
	}

	if env["CODATPLATFORM_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["CODATPLATFORM_APIKEY"],
			},
			extra,
		})
		client = sdk.NewCodatplatformSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CODATPLATFORM_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CODATPLATFORM_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
