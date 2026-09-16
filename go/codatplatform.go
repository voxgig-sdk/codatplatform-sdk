package voxgigcodatplatformsdk

import (
	"github.com/voxgig-sdk/codatplatform-sdk/go/core"
	"github.com/voxgig-sdk/codatplatform-sdk/go/entity"
	"github.com/voxgig-sdk/codatplatform-sdk/go/feature"
	_ "github.com/voxgig-sdk/codatplatform-sdk/go/utility"
)

// Type aliases preserve external API.
type CodatplatformSDK = core.CodatplatformSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CodatplatformEntity = core.CodatplatformEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CodatplatformError = core.CodatplatformError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAccessTokenEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewAccessTokenEntity(client, entopts)
	}
	core.NewAllEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewAllEntity(client, entopts)
	}
	core.NewApiKeyEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewApiKeyEntity(client, entopts)
	}
	core.NewBrandingEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewBrandingEntity(client, entopts)
	}
	core.NewCompanyEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewCompanyEntity(client, entopts)
	}
	core.NewCompanyAccessTokenEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewCompanyAccessTokenEntity(client, entopts)
	}
	core.NewConnectionEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewConnectionEntity(client, entopts)
	}
	core.NewConnectionManagementAccessTokenEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewConnectionManagementAccessTokenEntity(client, entopts)
	}
	core.NewConnectionManagementAllowedOriginEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewConnectionManagementAllowedOriginEntity(client, entopts)
	}
	core.NewCustomEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewCustomEntity(client, entopts)
	}
	core.NewDataStatusEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewDataStatusEntity(client, entopts)
	}
	core.NewDataTypeEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewDataTypeEntity(client, entopts)
	}
	core.NewHistoryEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewHistoryEntity(client, entopts)
	}
	core.NewIntegrationEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewIntegrationEntity(client, entopts)
	}
	core.NewOptionEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewOptionEntity(client, entopts)
	}
	core.NewProductEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewProductEntity(client, entopts)
	}
	core.NewProfileEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewProfileEntity(client, entopts)
	}
	core.NewPullOperationEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewPullOperationEntity(client, entopts)
	}
	core.NewPushEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewPushEntity(client, entopts)
	}
	core.NewPushOptionEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewPushOptionEntity(client, entopts)
	}
	core.NewQueueEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewQueueEntity(client, entopts)
	}
	core.NewRefreshDataEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewRefreshDataEntity(client, entopts)
	}
	core.NewSettingEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewSettingEntity(client, entopts)
	}
	core.NewSupplementalDataEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewSupplementalDataEntity(client, entopts)
	}
	core.NewSupplementalDataConfigEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewSupplementalDataConfigEntity(client, entopts)
	}
	core.NewSyncEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewSyncEntity(client, entopts)
	}
	core.NewSyncSettingEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewSyncSettingEntity(client, entopts)
	}
	core.NewValidationEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewValidationEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
	core.NewWebhookZapierKeyEntityFunc = func(client *core.CodatplatformSDK, entopts map[string]any) core.CodatplatformEntity {
		return entity.NewWebhookZapierKeyEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCodatplatformSDK = core.NewCodatplatformSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCodatplatformSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CodatplatformSDK  { return NewCodatplatformSDK(nil) }
func Test() *CodatplatformSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
