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

func TestCompanyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Company(nil)
		if ent == nil {
			t.Fatal("expected non-nil CompanyEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"company": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Company(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Company(nil).Stream("list", nil, nil) {
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
		setup := companyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "company." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_COMPANY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		companyRef01Ent := client.Company(nil)
		companyRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "company"}, setup.data), "company_ref01"))

		companyRef01DataResult, err := companyRef01Ent.Create(companyRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		companyRef01Data = core.ToMapAny(entityData(companyRef01DataResult))
		if companyRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if companyRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		companyRef01Match := map[string]any{}

		companyRef01ListResult, err := companyRef01Ent.List(companyRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		companyRef01List, companyRef01ListOk := companyRef01ListResult.([]any)
		if !companyRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", companyRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(companyRef01List), map[string]any{"id": companyRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		companyRef01DataUp0Up := map[string]any{
			"id": companyRef01Data["id"],
		}

		companyRef01MarkdefUp0Name := "created"
		companyRef01MarkdefUp0Value := fmt.Sprintf("Mark01-company_ref01_%d", setup.now)
		companyRef01DataUp0Up[companyRef01MarkdefUp0Name] = companyRef01MarkdefUp0Value

		companyRef01ResdataUp0Result, err := companyRef01Ent.Update(companyRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		companyRef01ResdataUp0 := core.ToMapAny(entityData(companyRef01ResdataUp0Result))
		if companyRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if companyRef01ResdataUp0["id"] != companyRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if companyRef01ResdataUp0[companyRef01MarkdefUp0Name] != companyRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", companyRef01MarkdefUp0Name, companyRef01ResdataUp0[companyRef01MarkdefUp0Name])
		}

		// LOAD
		companyRef01MatchDt0 := map[string]any{
			"id": companyRef01Data["id"],
		}
		companyRef01DataDt0Loaded, err := companyRef01Ent.Load(companyRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		companyRef01DataDt0LoadResult := core.ToMapAny(entityData(companyRef01DataDt0Loaded))
		if companyRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if companyRef01DataDt0LoadResult["id"] != companyRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		companyRef01MatchRm0 := map[string]any{
			"id": companyRef01Data["id"],
		}
		_, err = companyRef01Ent.Remove(companyRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		companyRef01MatchRt0 := map[string]any{}

		companyRef01ListRt0Result, err := companyRef01Ent.List(companyRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		companyRef01ListRt0, companyRef01ListRt0Ok := companyRef01ListRt0Result.([]any)
		if !companyRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", companyRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(companyRef01ListRt0), map[string]any{"id": companyRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func companyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "company", "CompanyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read company test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse company test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"company01", "company02", "company03", "product01", "product02", "product03"},
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
	entidEnvRaw := os.Getenv("CODATPLATFORM_TEST_COMPANY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CODATPLATFORM_TEST_COMPANY_ENTID": idmap,
		"CODATPLATFORM_TEST_LIVE":      "FALSE",
		"CODATPLATFORM_TEST_EXPLAIN":   "FALSE",
		"CODATPLATFORM_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CODATPLATFORM_TEST_COMPANY_ENTID"])
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
