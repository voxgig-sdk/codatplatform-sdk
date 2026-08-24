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

func TestConnectionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Connection(nil)
		if ent == nil {
			t.Fatal("expected non-nil ConnectionEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"connection": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Connection(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Connection(nil).Stream("list", nil, nil) {
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
		setup := connectionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "connection." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_CONNECTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		connectionRef01Ent := client.Connection(nil)
		connectionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "connection"}, setup.data), "connection_ref01"))
		connectionRef01Data["company_id"] = setup.idmap["company01"]

		connectionRef01DataResult, err := connectionRef01Ent.Create(connectionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		connectionRef01Data = core.ToMapAny(entityData(connectionRef01DataResult))
		if connectionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if connectionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		connectionRef01Match := map[string]any{
			"company_id": setup.idmap["company01"],
		}

		connectionRef01ListResult, err := connectionRef01Ent.List(connectionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		connectionRef01List, connectionRef01ListOk := connectionRef01ListResult.([]any)
		if !connectionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", connectionRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(connectionRef01List), map[string]any{"id": connectionRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		connectionRef01DataUp0Up := map[string]any{
			"id": connectionRef01Data["id"],
			"company_id": setup.idmap["company_id"],
		}

		connectionRef01MarkdefUp0Name := "created"
		connectionRef01MarkdefUp0Value := fmt.Sprintf("Mark01-connection_ref01_%d", setup.now)
		connectionRef01DataUp0Up[connectionRef01MarkdefUp0Name] = connectionRef01MarkdefUp0Value

		connectionRef01ResdataUp0Result, err := connectionRef01Ent.Update(connectionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		connectionRef01ResdataUp0 := core.ToMapAny(entityData(connectionRef01ResdataUp0Result))
		if connectionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if connectionRef01ResdataUp0["id"] != connectionRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if connectionRef01ResdataUp0[connectionRef01MarkdefUp0Name] != connectionRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", connectionRef01MarkdefUp0Name, connectionRef01ResdataUp0[connectionRef01MarkdefUp0Name])
		}

		// LOAD
		connectionRef01MatchDt0 := map[string]any{
			"id": connectionRef01Data["id"],
		}
		connectionRef01DataDt0Loaded, err := connectionRef01Ent.Load(connectionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		connectionRef01DataDt0LoadResult := core.ToMapAny(entityData(connectionRef01DataDt0Loaded))
		if connectionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if connectionRef01DataDt0LoadResult["id"] != connectionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		connectionRef01MatchRm0 := map[string]any{
			"id": connectionRef01Data["id"],
		}
		_, err = connectionRef01Ent.Remove(connectionRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		connectionRef01MatchRt0 := map[string]any{
			"company_id": setup.idmap["company01"],
		}

		connectionRef01ListRt0Result, err := connectionRef01Ent.List(connectionRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		connectionRef01ListRt0, connectionRef01ListRt0Ok := connectionRef01ListRt0Result.([]any)
		if !connectionRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", connectionRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(connectionRef01ListRt0), map[string]any{"id": connectionRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func connectionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "connection", "ConnectionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read connection test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse connection test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"connection01", "connection02", "connection03", "company01", "company02", "company03"},
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
	entidEnvRaw := os.Getenv("CODATPLATFORM_TEST_CONNECTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CODATPLATFORM_TEST_CONNECTION_ENTID": idmap,
		"CODATPLATFORM_TEST_LIVE":      "FALSE",
		"CODATPLATFORM_TEST_EXPLAIN":   "FALSE",
		"CODATPLATFORM_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CODATPLATFORM_TEST_CONNECTION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add company_id alias for update test.
	if idmapResolved["company_id"] == nil {
		idmapResolved["company_id"] = idmapResolved["company01"]
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
