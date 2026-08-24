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

func TestPullOperationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PullOperation(nil)
		if ent == nil {
			t.Fatal("expected non-nil PullOperationEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"pull_operation": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.PullOperation(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.PullOperation(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := pull_operationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "pull_operation." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_PULL_OPERATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		pullOperationRef01Ent := client.PullOperation(nil)
		pullOperationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "pull_operation"}, setup.data), "pull_operation_ref01"))
		pullOperationRef01Data["company_id"] = setup.idmap["company01"]
		pullOperationRef01Data["data_type"] = setup.idmap["data_type01"]

		pullOperationRef01DataResult, err := pullOperationRef01Ent.Create(pullOperationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		pullOperationRef01Data = core.ToMapAny(entityData(pullOperationRef01DataResult))
		if pullOperationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if pullOperationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		pullOperationRef01Match := map[string]any{
			"company_id": setup.idmap["company01"],
		}

		pullOperationRef01ListResult, err := pullOperationRef01Ent.List(pullOperationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		pullOperationRef01List, pullOperationRef01ListOk := pullOperationRef01ListResult.([]any)
		if !pullOperationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", pullOperationRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(pullOperationRef01List), map[string]any{"id": pullOperationRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		pullOperationRef01MatchDt0 := map[string]any{
			"id": pullOperationRef01Data["id"],
		}
		pullOperationRef01DataDt0Loaded, err := pullOperationRef01Ent.Load(pullOperationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		pullOperationRef01DataDt0LoadResult := core.ToMapAny(entityData(pullOperationRef01DataDt0Loaded))
		if pullOperationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if pullOperationRef01DataDt0LoadResult["id"] != pullOperationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func pull_operationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "pull_operation", "PullOperationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read pull_operation test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse pull_operation test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"pull_operation01", "pull_operation02", "pull_operation03", "company01", "company02", "company03", "history01", "history02", "history03", "queue01", "queue02", "queue03", "connection01", "connection02", "connection03", "custom01", "custom02", "custom03", "data_type01"},
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
	entidEnvRaw := os.Getenv("CODATPLATFORM_TEST_PULL_OPERATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CODATPLATFORM_TEST_PULL_OPERATION_ENTID": idmap,
		"CODATPLATFORM_TEST_LIVE":      "FALSE",
		"CODATPLATFORM_TEST_EXPLAIN":   "FALSE",
		"CODATPLATFORM_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CODATPLATFORM_TEST_PULL_OPERATION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
