package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestCustomEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Custom(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := customBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_CUSTOM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		customRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.custom", setup.data)))
		var customRef01Data map[string]any
		if len(customRef01DataRaw) > 0 {
			customRef01Data = core.ToMapAny(customRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = customRef01Data

		// UPDATE
		customRef01Ent := client.Custom(nil)
		customRef01DataUp0Up := map[string]any{
			"id": customRef01Data["id"],
			"platform_key": setup.idmap["platform_key"],
		}

		customRef01MarkdefUp0Name := "dataSource"
		customRef01MarkdefUp0Value := fmt.Sprintf("Mark01-custom_ref01_%d", setup.now)
		customRef01DataUp0Up[customRef01MarkdefUp0Name] = customRef01MarkdefUp0Value

		customRef01ResdataUp0Result, err := customRef01Ent.Update(customRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customRef01ResdataUp0 := core.ToMapAny(entityData(customRef01ResdataUp0Result))
		if customRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customRef01ResdataUp0["id"] != customRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if customRef01ResdataUp0[customRef01MarkdefUp0Name] != customRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customRef01MarkdefUp0Name, customRef01ResdataUp0[customRef01MarkdefUp0Name])
		}

		// LOAD
		customRef01MatchDt0 := map[string]any{
			"id": customRef01Data["id"],
		}
		customRef01DataDt0Loaded, err := customRef01Ent.Load(customRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		customRef01DataDt0LoadResult := core.ToMapAny(entityData(customRef01DataDt0Loaded))
		if customRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if customRef01DataDt0LoadResult["id"] != customRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func customBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom", "CustomTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"custom01", "custom02", "custom03", "integration01", "integration02", "integration03", "company01", "company02", "company03", "connection01", "connection02", "connection03", "platform_key01"},
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
	entidEnvRaw := os.Getenv("CODATPLATFORM_TEST_CUSTOM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CODATPLATFORM_TEST_CUSTOM_ENTID": idmap,
		"CODATPLATFORM_TEST_LIVE":      "FALSE",
		"CODATPLATFORM_TEST_EXPLAIN":   "FALSE",
		"CODATPLATFORM_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CODATPLATFORM_TEST_CUSTOM_ENTID"])
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
