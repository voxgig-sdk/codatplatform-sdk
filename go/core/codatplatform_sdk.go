package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/codatplatform-sdk/go/utility/struct"
)

type CodatplatformSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCodatplatformSDK(options map[string]any) *CodatplatformSDK {
	sdk := &CodatplatformSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CodatplatformSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CodatplatformSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CodatplatformSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CodatplatformSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CodatplatformSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CodatplatformSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CodatplatformSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CodatplatformSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CodatplatformSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *CodatplatformSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath([]any{"data", "errors"}, res).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CodatplatformSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// AccessToken returns a AccessToken entity bound to this client.
// Idiomatic usage: client.AccessToken(nil).List(nil, nil) or
// client.AccessToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) AccessToken(data map[string]any) CodatplatformEntity {
	return NewAccessTokenEntityFunc(sdk, data)
}


// All returns a All entity bound to this client.
// Idiomatic usage: client.All(nil).List(nil, nil) or
// client.All(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) All(data map[string]any) CodatplatformEntity {
	return NewAllEntityFunc(sdk, data)
}


// ApiKey returns a ApiKey entity bound to this client.
// Idiomatic usage: client.ApiKey(nil).List(nil, nil) or
// client.ApiKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) ApiKey(data map[string]any) CodatplatformEntity {
	return NewApiKeyEntityFunc(sdk, data)
}


// Branding returns a Branding entity bound to this client.
// Idiomatic usage: client.Branding(nil).List(nil, nil) or
// client.Branding(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Branding(data map[string]any) CodatplatformEntity {
	return NewBrandingEntityFunc(sdk, data)
}


// Company returns a Company entity bound to this client.
// Idiomatic usage: client.Company(nil).List(nil, nil) or
// client.Company(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Company(data map[string]any) CodatplatformEntity {
	return NewCompanyEntityFunc(sdk, data)
}


// CompanyAccessToken returns a CompanyAccessToken entity bound to this client.
// Idiomatic usage: client.CompanyAccessToken(nil).List(nil, nil) or
// client.CompanyAccessToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) CompanyAccessToken(data map[string]any) CodatplatformEntity {
	return NewCompanyAccessTokenEntityFunc(sdk, data)
}


// Connection returns a Connection entity bound to this client.
// Idiomatic usage: client.Connection(nil).List(nil, nil) or
// client.Connection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Connection(data map[string]any) CodatplatformEntity {
	return NewConnectionEntityFunc(sdk, data)
}


// ConnectionManagementAccessToken returns a ConnectionManagementAccessToken entity bound to this client.
// Idiomatic usage: client.ConnectionManagementAccessToken(nil).List(nil, nil) or
// client.ConnectionManagementAccessToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) ConnectionManagementAccessToken(data map[string]any) CodatplatformEntity {
	return NewConnectionManagementAccessTokenEntityFunc(sdk, data)
}


// ConnectionManagementAllowedOrigin returns a ConnectionManagementAllowedOrigin entity bound to this client.
// Idiomatic usage: client.ConnectionManagementAllowedOrigin(nil).List(nil, nil) or
// client.ConnectionManagementAllowedOrigin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) ConnectionManagementAllowedOrigin(data map[string]any) CodatplatformEntity {
	return NewConnectionManagementAllowedOriginEntityFunc(sdk, data)
}


// Custom returns a Custom entity bound to this client.
// Idiomatic usage: client.Custom(nil).List(nil, nil) or
// client.Custom(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Custom(data map[string]any) CodatplatformEntity {
	return NewCustomEntityFunc(sdk, data)
}


// DataStatus returns a DataStatus entity bound to this client.
// Idiomatic usage: client.DataStatus(nil).List(nil, nil) or
// client.DataStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) DataStatus(data map[string]any) CodatplatformEntity {
	return NewDataStatusEntityFunc(sdk, data)
}


// DataType returns a DataType entity bound to this client.
// Idiomatic usage: client.DataType(nil).List(nil, nil) or
// client.DataType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) DataType(data map[string]any) CodatplatformEntity {
	return NewDataTypeEntityFunc(sdk, data)
}


// History returns a History entity bound to this client.
// Idiomatic usage: client.History(nil).List(nil, nil) or
// client.History(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) History(data map[string]any) CodatplatformEntity {
	return NewHistoryEntityFunc(sdk, data)
}


// Integration returns a Integration entity bound to this client.
// Idiomatic usage: client.Integration(nil).List(nil, nil) or
// client.Integration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Integration(data map[string]any) CodatplatformEntity {
	return NewIntegrationEntityFunc(sdk, data)
}


// Option returns a Option entity bound to this client.
// Idiomatic usage: client.Option(nil).List(nil, nil) or
// client.Option(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Option(data map[string]any) CodatplatformEntity {
	return NewOptionEntityFunc(sdk, data)
}


// Product returns a Product entity bound to this client.
// Idiomatic usage: client.Product(nil).List(nil, nil) or
// client.Product(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Product(data map[string]any) CodatplatformEntity {
	return NewProductEntityFunc(sdk, data)
}


// Profile returns a Profile entity bound to this client.
// Idiomatic usage: client.Profile(nil).List(nil, nil) or
// client.Profile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Profile(data map[string]any) CodatplatformEntity {
	return NewProfileEntityFunc(sdk, data)
}


// PullOperation returns a PullOperation entity bound to this client.
// Idiomatic usage: client.PullOperation(nil).List(nil, nil) or
// client.PullOperation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) PullOperation(data map[string]any) CodatplatformEntity {
	return NewPullOperationEntityFunc(sdk, data)
}


// Push returns a Push entity bound to this client.
// Idiomatic usage: client.Push(nil).List(nil, nil) or
// client.Push(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Push(data map[string]any) CodatplatformEntity {
	return NewPushEntityFunc(sdk, data)
}


// PushOption returns a PushOption entity bound to this client.
// Idiomatic usage: client.PushOption(nil).List(nil, nil) or
// client.PushOption(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) PushOption(data map[string]any) CodatplatformEntity {
	return NewPushOptionEntityFunc(sdk, data)
}


// Queue returns a Queue entity bound to this client.
// Idiomatic usage: client.Queue(nil).List(nil, nil) or
// client.Queue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Queue(data map[string]any) CodatplatformEntity {
	return NewQueueEntityFunc(sdk, data)
}


// RefreshData returns a RefreshData entity bound to this client.
// Idiomatic usage: client.RefreshData(nil).List(nil, nil) or
// client.RefreshData(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) RefreshData(data map[string]any) CodatplatformEntity {
	return NewRefreshDataEntityFunc(sdk, data)
}


// Setting returns a Setting entity bound to this client.
// Idiomatic usage: client.Setting(nil).List(nil, nil) or
// client.Setting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Setting(data map[string]any) CodatplatformEntity {
	return NewSettingEntityFunc(sdk, data)
}


// SupplementalData returns a SupplementalData entity bound to this client.
// Idiomatic usage: client.SupplementalData(nil).List(nil, nil) or
// client.SupplementalData(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) SupplementalData(data map[string]any) CodatplatformEntity {
	return NewSupplementalDataEntityFunc(sdk, data)
}


// SupplementalDataConfig returns a SupplementalDataConfig entity bound to this client.
// Idiomatic usage: client.SupplementalDataConfig(nil).List(nil, nil) or
// client.SupplementalDataConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) SupplementalDataConfig(data map[string]any) CodatplatformEntity {
	return NewSupplementalDataConfigEntityFunc(sdk, data)
}


// Sync returns a Sync entity bound to this client.
// Idiomatic usage: client.Sync(nil).List(nil, nil) or
// client.Sync(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Sync(data map[string]any) CodatplatformEntity {
	return NewSyncEntityFunc(sdk, data)
}


// SyncSetting returns a SyncSetting entity bound to this client.
// Idiomatic usage: client.SyncSetting(nil).List(nil, nil) or
// client.SyncSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) SyncSetting(data map[string]any) CodatplatformEntity {
	return NewSyncSettingEntityFunc(sdk, data)
}


// Validation returns a Validation entity bound to this client.
// Idiomatic usage: client.Validation(nil).List(nil, nil) or
// client.Validation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Validation(data map[string]any) CodatplatformEntity {
	return NewValidationEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) Webhook(data map[string]any) CodatplatformEntity {
	return NewWebhookEntityFunc(sdk, data)
}


// WebhookZapierKey returns a WebhookZapierKey entity bound to this client.
// Idiomatic usage: client.WebhookZapierKey(nil).List(nil, nil) or
// client.WebhookZapierKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CodatplatformSDK) WebhookZapierKey(data map[string]any) CodatplatformEntity {
	return NewWebhookZapierKeyEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CodatplatformSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCodatplatformSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
