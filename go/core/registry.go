package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAccessTokenEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewAllEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewApiKeyEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewBrandingEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewCompanyEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewCompanyAccessTokenEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewConnectionEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewConnectionManagementAccessTokenEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewConnectionManagementAllowedOriginEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewCustomEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewDataStatusEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewDataTypeEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewHistoryEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewIntegrationEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewOptionEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewProductEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewProfileEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewPullOperationEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewPushEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewPushOptionEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewQueueEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewRefreshDataEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewSettingEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewSupplementalDataEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewSupplementalDataConfigEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewSyncEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewSyncSettingEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewValidationEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewWebhookEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

var NewWebhookZapierKeyEntityFunc func(client *CodatplatformSDK, entopts map[string]any) CodatplatformEntity

