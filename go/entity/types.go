// Typed models for the Codatplatform SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/codatplatform-sdk/go/core"
)

// AccessToken is the typed data model for the access_token entity.
type AccessToken struct {
}

// All is the typed data model for the all entity.
type All struct {
}

// ApiKey is the typed data model for the api_key entity.
type ApiKey struct {
}

// Branding is the typed data model for the branding entity.
type Branding struct {
	Button *map[string]any `json:"button,omitempty"`
	Logo *map[string]any `json:"logo,omitempty"`
	SourceId *string `json:"sourceId,omitempty"`
}

// BrandingLoadMatch is the typed request payload for Branding.LoadTyped.
type BrandingLoadMatch struct {
	PlatformKey string `json:"platform_key"`
}

// Company is the typed data model for the company entity.
type Company struct {
	Created *string `json:"created,omitempty"`
	CreatedByUserName *string `json:"createdByUserName,omitempty"`
	DataConnections *[]any `json:"dataConnections,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	LastSync *string `json:"lastSync,omitempty"`
	Links map[string]any `json:"links"`
	Name string `json:"name"`
	PageNumber int `json:"pageNumber"`
	PageSize int `json:"pageSize"`
	Products *[]any `json:"products,omitempty"`
	Redirect string `json:"redirect"`
	ReferenceParentCompany *map[string]any `json:"referenceParentCompany,omitempty"`
	ReferenceSubsidiaryCompanies *[]any `json:"referenceSubsidiaryCompanies,omitempty"`
	Results *[]any `json:"results,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	TotalResults int `json:"totalResults"`
}

// CompanyLoadMatch is the typed request payload for Company.LoadTyped.
type CompanyLoadMatch struct {
	Id string `json:"id"`
}

// CompanyListMatch is the typed request payload for Company.ListTyped.
type CompanyListMatch struct {
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Query *string `json:"query,omitempty"`
	Tag *string `json:"tag,omitempty"`
}

// CompanyCreateData is the typed request payload for Company.CreateTyped.
type CompanyCreateData struct {
	Created *string `json:"created,omitempty"`
	CreatedByUserName *string `json:"createdByUserName,omitempty"`
	DataConnections *[]any `json:"dataConnections,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	LastSync *string `json:"lastSync,omitempty"`
	Links map[string]any `json:"links"`
	Name string `json:"name"`
	PageNumber int `json:"pageNumber"`
	PageSize int `json:"pageSize"`
	Products *[]any `json:"products,omitempty"`
	Redirect string `json:"redirect"`
	ReferenceParentCompany *map[string]any `json:"referenceParentCompany,omitempty"`
	ReferenceSubsidiaryCompanies *[]any `json:"referenceSubsidiaryCompanies,omitempty"`
	Results *[]any `json:"results,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	TotalResults int `json:"totalResults"`
}

// CompanyUpdateData is the typed request payload for Company.UpdateTyped.
type CompanyUpdateData struct {
	Id string `json:"id"`
	ProductIdentifier *string `json:"product_identifier,omitempty"`
	Created *string `json:"created,omitempty"`
	CreatedByUserName *string `json:"createdByUserName,omitempty"`
	DataConnections *[]any `json:"dataConnections,omitempty"`
	Description *string `json:"description,omitempty"`
	LastSync *string `json:"lastSync,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	Name *string `json:"name,omitempty"`
	PageNumber *int `json:"pageNumber,omitempty"`
	PageSize *int `json:"pageSize,omitempty"`
	Products *[]any `json:"products,omitempty"`
	Redirect *string `json:"redirect,omitempty"`
	ReferenceParentCompany *map[string]any `json:"referenceParentCompany,omitempty"`
	ReferenceSubsidiaryCompanies *[]any `json:"referenceSubsidiaryCompanies,omitempty"`
	Results *[]any `json:"results,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	TotalResults *int `json:"totalResults,omitempty"`
}

// CompanyRemoveMatch is the typed request payload for Company.RemoveTyped.
type CompanyRemoveMatch struct {
	Id string `json:"id"`
	ProductIdentifier *string `json:"product_identifier,omitempty"`
}

// CompanyAccessToken is the typed data model for the company_access_token entity.
type CompanyAccessToken struct {
	AccessToken string `json:"accessToken"`
	ExpiresIn int `json:"expiresIn"`
	Id *string `json:"id,omitempty"`
	TokenType string `json:"tokenType"`
}

// CompanyAccessTokenLoadMatch is the typed request payload for CompanyAccessToken.LoadTyped.
type CompanyAccessTokenLoadMatch struct {
	Id string `json:"id"`
}

// Connection is the typed data model for the connection entity.
type Connection struct {
	ConnectionInfo *map[string]any `json:"connectionInfo,omitempty"`
	Created string `json:"created"`
	DataConnectionErrors *[]any `json:"dataConnectionErrors,omitempty"`
	Id string `json:"id"`
	IntegrationId string `json:"integrationId"`
	IntegrationKey string `json:"integrationKey"`
	LastSync *string `json:"lastSync,omitempty"`
	LinkUrl string `json:"linkUrl"`
	Links map[string]any `json:"links"`
	PageNumber int `json:"pageNumber"`
	PageSize int `json:"pageSize"`
	PlatformKey *string `json:"platformKey,omitempty"`
	PlatformName string `json:"platformName"`
	Results *[]any `json:"results,omitempty"`
	SourceId string `json:"sourceId"`
	SourceType string `json:"sourceType"`
	Status string `json:"status"`
	TotalResults int `json:"totalResults"`
}

// ConnectionLoadMatch is the typed request payload for Connection.LoadTyped.
type ConnectionLoadMatch struct {
	CompanyId string `json:"company_id"`
	Id string `json:"id"`
}

// ConnectionListMatch is the typed request payload for Connection.ListTyped.
type ConnectionListMatch struct {
	CompanyId string `json:"company_id"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Query *string `json:"query,omitempty"`
}

// ConnectionCreateData is the typed request payload for Connection.CreateTyped.
type ConnectionCreateData struct {
	CompanyId string `json:"company_id"`
	ConnectionInfo *map[string]any `json:"connectionInfo,omitempty"`
	Created string `json:"created"`
	DataConnectionErrors *[]any `json:"dataConnectionErrors,omitempty"`
	Id string `json:"id"`
	IntegrationId string `json:"integrationId"`
	IntegrationKey string `json:"integrationKey"`
	LastSync *string `json:"lastSync,omitempty"`
	LinkUrl string `json:"linkUrl"`
	Links map[string]any `json:"links"`
	PageNumber int `json:"pageNumber"`
	PageSize int `json:"pageSize"`
	PlatformKey *string `json:"platformKey,omitempty"`
	PlatformName string `json:"platformName"`
	Results *[]any `json:"results,omitempty"`
	SourceId string `json:"sourceId"`
	SourceType string `json:"sourceType"`
	Status string `json:"status"`
	TotalResults int `json:"totalResults"`
}

// ConnectionUpdateData is the typed request payload for Connection.UpdateTyped.
type ConnectionUpdateData struct {
	CompanyId string `json:"company_id"`
	Id string `json:"id"`
	ConnectionInfo *map[string]any `json:"connectionInfo,omitempty"`
	Created *string `json:"created,omitempty"`
	DataConnectionErrors *[]any `json:"dataConnectionErrors,omitempty"`
	IntegrationId *string `json:"integrationId,omitempty"`
	IntegrationKey *string `json:"integrationKey,omitempty"`
	LastSync *string `json:"lastSync,omitempty"`
	LinkUrl *string `json:"linkUrl,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	PageNumber *int `json:"pageNumber,omitempty"`
	PageSize *int `json:"pageSize,omitempty"`
	PlatformKey *string `json:"platformKey,omitempty"`
	PlatformName *string `json:"platformName,omitempty"`
	Results *[]any `json:"results,omitempty"`
	SourceId *string `json:"sourceId,omitempty"`
	SourceType *string `json:"sourceType,omitempty"`
	Status *string `json:"status,omitempty"`
	TotalResults *int `json:"totalResults,omitempty"`
}

// ConnectionRemoveMatch is the typed request payload for Connection.RemoveTyped.
type ConnectionRemoveMatch struct {
	CompanyId string `json:"company_id"`
	Id string `json:"id"`
}

// ConnectionManagementAccessToken is the typed data model for the connection_management_access_token entity.
type ConnectionManagementAccessToken struct {
	AccessToken *string `json:"accessToken,omitempty"`
}

// ConnectionManagementAccessTokenLoadMatch is the typed request payload for ConnectionManagementAccessToken.LoadTyped.
type ConnectionManagementAccessTokenLoadMatch struct {
	CompanyId string `json:"company_id"`
}

// ConnectionManagementAllowedOrigin is the typed data model for the connection_management_allowed_origin entity.
type ConnectionManagementAllowedOrigin struct {
	AllowedOrigins *[]any `json:"allowedOrigins,omitempty"`
}

// ConnectionManagementAllowedOriginListMatch is the typed request payload for ConnectionManagementAllowedOrigin.ListTyped.
type ConnectionManagementAllowedOriginListMatch struct {
	AllowedOrigins *[]any `json:"allowedOrigins,omitempty"`
}

// ConnectionManagementAllowedOriginCreateData is the typed request payload for ConnectionManagementAllowedOrigin.CreateTyped.
type ConnectionManagementAllowedOriginCreateData struct {
	AllowedOrigins *[]any `json:"allowedOrigins,omitempty"`
}

// Custom is the typed data model for the custom entity.
type Custom struct {
	DataSource *string `json:"dataSource,omitempty"`
	Id *string `json:"id,omitempty"`
	KeyBy *[]any `json:"keyBy,omitempty"`
	PageNumber *int `json:"pageNumber,omitempty"`
	PageSize *int `json:"pageSize,omitempty"`
	RequiredData *map[string]any `json:"requiredData,omitempty"`
	Results *[]any `json:"results,omitempty"`
	SourceModifiedDate *[]any `json:"sourceModifiedDate,omitempty"`
	TotalResults *int `json:"totalResults,omitempty"`
}

// CustomLoadMatch is the typed request payload for Custom.LoadTyped.
type CustomLoadMatch struct {
	CompanyId *string `json:"company_id,omitempty"`
	ConnectionId *string `json:"connection_id,omitempty"`
	Id string `json:"id"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	PlatformKey *string `json:"platform_key,omitempty"`
}

// CustomUpdateData is the typed request payload for Custom.UpdateTyped.
type CustomUpdateData struct {
	Id string `json:"id"`
	PlatformKey string `json:"platform_key"`
	DataSource *string `json:"dataSource,omitempty"`
	KeyBy *[]any `json:"keyBy,omitempty"`
	PageNumber *int `json:"pageNumber,omitempty"`
	PageSize *int `json:"pageSize,omitempty"`
	RequiredData *map[string]any `json:"requiredData,omitempty"`
	Results *[]any `json:"results,omitempty"`
	SourceModifiedDate *[]any `json:"sourceModifiedDate,omitempty"`
	TotalResults *int `json:"totalResults,omitempty"`
}

// DataStatus is the typed data model for the data_status entity.
type DataStatus struct {
	AccountTransactions map[string]any `json:"accountTransactions"`
	BalanceSheet map[string]any `json:"balanceSheet"`
	BankAccounts map[string]any `json:"bankAccounts"`
	BankTransactions map[string]any `json:"bankTransactions"`
	BankingaccountBalances map[string]any `json:"bankingaccountBalances"`
	Bankingaccounts map[string]any `json:"bankingaccounts"`
	BankingtransactionCategories map[string]any `json:"bankingtransactionCategories"`
	Bankingtransactions map[string]any `json:"bankingtransactions"`
	BillCreditNotes map[string]any `json:"billCreditNotes"`
	BillPayments map[string]any `json:"billPayments"`
	Bills map[string]any `json:"bills"`
	CashFlowStatement map[string]any `json:"cashFlowStatement"`
	ChartOfAccounts map[string]any `json:"chartOfAccounts"`
	CommercecompanyInfo map[string]any `json:"commercecompanyInfo"`
	Commercecustomers map[string]any `json:"commercecustomers"`
	Commercedisputes map[string]any `json:"commercedisputes"`
	Commercelocations map[string]any `json:"commercelocations"`
	Commerceorders map[string]any `json:"commerceorders"`
	CommercepaymentMethods map[string]any `json:"commercepaymentMethods"`
	Commercepayments map[string]any `json:"commercepayments"`
	CommerceproductCategories map[string]any `json:"commerceproductCategories"`
	Commerceproducts map[string]any `json:"commerceproducts"`
	CommercetaxComponents map[string]any `json:"commercetaxComponents"`
	Commercetransactions map[string]any `json:"commercetransactions"`
	Company map[string]any `json:"company"`
	CreditNotes map[string]any `json:"creditNotes"`
	Customers map[string]any `json:"customers"`
	DirectCosts map[string]any `json:"directCosts"`
	DirectIncomes map[string]any `json:"directIncomes"`
	Invoices map[string]any `json:"invoices"`
	ItemReceipts map[string]any `json:"itemReceipts"`
	Items map[string]any `json:"items"`
	JournalEntries map[string]any `json:"journalEntries"`
	Journals map[string]any `json:"journals"`
	PaymentMethods map[string]any `json:"paymentMethods"`
	Payments map[string]any `json:"payments"`
	ProfitAndLoss map[string]any `json:"profitAndLoss"`
	PurchaseOrders map[string]any `json:"purchaseOrders"`
	SalesOrders map[string]any `json:"salesOrders"`
	Suppliers map[string]any `json:"suppliers"`
	TaxRates map[string]any `json:"taxRates"`
	TrackingCategories map[string]any `json:"trackingCategories"`
	Transfers map[string]any `json:"transfers"`
}

// DataStatusLoadMatch is the typed request payload for DataStatus.LoadTyped.
type DataStatusLoadMatch struct {
	CompanyId string `json:"company_id"`
}

// DataType is the typed data model for the data_type entity.
type DataType struct {
}

// History is the typed data model for the history entity.
type History struct {
}

// Integration is the typed data model for the integration entity.
type Integration struct {
	DataProvidedBy *string `json:"dataProvidedBy,omitempty"`
	DatatypeFeatures *[]any `json:"datatypeFeatures,omitempty"`
	Enabled bool `json:"enabled"`
	Id *string `json:"id,omitempty"`
	IntegrationId *string `json:"integrationId,omitempty"`
	IsBeta *bool `json:"isBeta,omitempty"`
	IsOfflineConnector *bool `json:"isOfflineConnector,omitempty"`
	Key string `json:"key"`
	Links map[string]any `json:"links"`
	LogoUrl string `json:"logoUrl"`
	Name string `json:"name"`
	PageNumber int `json:"pageNumber"`
	PageSize int `json:"pageSize"`
	Results *[]any `json:"results,omitempty"`
	SourceId *string `json:"sourceId,omitempty"`
	SourceType *string `json:"sourceType,omitempty"`
	TotalResults int `json:"totalResults"`
}

// IntegrationLoadMatch is the typed request payload for Integration.LoadTyped.
type IntegrationLoadMatch struct {
	Id string `json:"id"`
}

// IntegrationListMatch is the typed request payload for Integration.ListTyped.
type IntegrationListMatch struct {
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Query *string `json:"query,omitempty"`
}

// Option is the typed data model for the option entity.
type Option struct {
}

// Product is the typed data model for the product entity.
type Product struct {
}

// Profile is the typed data model for the profile entity.
type Profile struct {
	ApiKey *string `json:"apiKey,omitempty"`
	ConfirmCompanyName *bool `json:"confirmCompanyName,omitempty"`
	IconUrl *string `json:"iconUrl,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	Name string `json:"name"`
	RedirectUrl string `json:"redirectUrl"`
	WhiteListUrls *[]any `json:"whiteListUrls,omitempty"`
}

// ProfileListMatch is the typed request payload for Profile.ListTyped.
type ProfileListMatch struct {
	ApiKey *string `json:"apiKey,omitempty"`
	ConfirmCompanyName *bool `json:"confirmCompanyName,omitempty"`
	IconUrl *string `json:"iconUrl,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	RedirectUrl *string `json:"redirectUrl,omitempty"`
	WhiteListUrls *[]any `json:"whiteListUrls,omitempty"`
}

// ProfileUpdateData is the typed request payload for Profile.UpdateTyped.
type ProfileUpdateData struct {
	ApiKey *string `json:"apiKey,omitempty"`
	ConfirmCompanyName *bool `json:"confirmCompanyName,omitempty"`
	IconUrl *string `json:"iconUrl,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	RedirectUrl *string `json:"redirectUrl,omitempty"`
	WhiteListUrls *[]any `json:"whiteListUrls,omitempty"`
}

// PullOperation is the typed data model for the pull_operation entity.
type PullOperation struct {
	CompanyId string `json:"companyId"`
	Completed *string `json:"completed,omitempty"`
	ConnectionId string `json:"connectionId"`
	DataType string `json:"dataType"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	Id string `json:"id"`
	IsCompleted bool `json:"isCompleted"`
	IsErrored bool `json:"isErrored"`
	Links map[string]any `json:"links"`
	PageNumber int `json:"pageNumber"`
	PageSize int `json:"pageSize"`
	Progress int `json:"progress"`
	Requested string `json:"requested"`
	Results *[]any `json:"results,omitempty"`
	Status string `json:"status"`
	StatusDescription *string `json:"statusDescription,omitempty"`
	TotalResults int `json:"totalResults"`
}

// PullOperationLoadMatch is the typed request payload for PullOperation.LoadTyped.
type PullOperationLoadMatch struct {
	CompanyId string `json:"company_id"`
	DatasetId string `json:"dataset_id"`
}

// PullOperationListMatch is the typed request payload for PullOperation.ListTyped.
type PullOperationListMatch struct {
	CompanyId string `json:"company_id"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Query *string `json:"query,omitempty"`
}

// PullOperationCreateData is the typed request payload for PullOperation.CreateTyped.
type PullOperationCreateData struct {
	CompanyId string `json:"company_id"`
	ConnectionId *string `json:"connection_id,omitempty"`
	CustomDataIdentifier *string `json:"custom_data_identifier,omitempty"`
	DataType *string `json:"data_type,omitempty"`
	CompanyId2 string `json:"companyId"`
	Completed *string `json:"completed,omitempty"`
	ConnectionId2 string `json:"connectionId"`
	DataType2 string `json:"dataType"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	Id string `json:"id"`
	IsCompleted bool `json:"isCompleted"`
	IsErrored bool `json:"isErrored"`
	Links map[string]any `json:"links"`
	PageNumber int `json:"pageNumber"`
	PageSize int `json:"pageSize"`
	Progress int `json:"progress"`
	Requested string `json:"requested"`
	Results *[]any `json:"results,omitempty"`
	Status string `json:"status"`
	StatusDescription *string `json:"statusDescription,omitempty"`
	TotalResults int `json:"totalResults"`
}

// Push is the typed data model for the push entity.
type Push struct {
	Changes *[]any `json:"changes,omitempty"`
	CompanyId string `json:"companyId"`
	CompletedOnUtc *string `json:"completedOnUtc,omitempty"`
	DataConnectionKey string `json:"dataConnectionKey"`
	DataType *string `json:"dataType,omitempty"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	Id *string `json:"id,omitempty"`
	Links map[string]any `json:"links"`
	PageNumber int `json:"pageNumber"`
	PageSize int `json:"pageSize"`
	PushOperationKey string `json:"pushOperationKey"`
	RequestedOnUtc string `json:"requestedOnUtc"`
	Results *[]any `json:"results,omitempty"`
	Status string `json:"status"`
	StatusCode int `json:"statusCode"`
	TimeoutInMinutes *int `json:"timeoutInMinutes,omitempty"`
	TimeoutInSeconds *int `json:"timeoutInSeconds,omitempty"`
	TotalResults int `json:"totalResults"`
	Validation *map[string]any `json:"validation,omitempty"`
}

// PushLoadMatch is the typed request payload for Push.LoadTyped.
type PushLoadMatch struct {
	CompanyId string `json:"company_id"`
	Id string `json:"id"`
}

// PushListMatch is the typed request payload for Push.ListTyped.
type PushListMatch struct {
	CompanyId string `json:"company_id"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Query *string `json:"query,omitempty"`
}

// PushOption is the typed data model for the push_option entity.
type PushOption struct {
	Description *string `json:"description,omitempty"`
	DisplayName string `json:"displayName"`
	Id *string `json:"id,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Properties *map[string]any `json:"properties,omitempty"`
	Required bool `json:"required"`
	Type string `json:"type"`
	Validation *map[string]any `json:"validation,omitempty"`
}

// PushOptionLoadMatch is the typed request payload for PushOption.LoadTyped.
type PushOptionLoadMatch struct {
	CompanyId string `json:"company_id"`
	ConnectionId string `json:"connection_id"`
	Id string `json:"id"`
}

// Queue is the typed data model for the queue entity.
type Queue struct {
}

// RefreshData is the typed data model for the refresh_data entity.
type RefreshData struct {
}

// RefreshDataCreateData is the typed request payload for RefreshData.CreateTyped.
type RefreshDataCreateData struct {
	CompanyId string `json:"company_id"`
}

// Setting is the typed data model for the setting entity.
type Setting struct {
	ApiKey *string `json:"apiKey,omitempty"`
	CreatedDate *string `json:"createdDate,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// SettingListMatch is the typed request payload for Setting.ListTyped.
type SettingListMatch struct {
	ApiKey *string `json:"apiKey,omitempty"`
	CreatedDate *string `json:"createdDate,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// SettingCreateData is the typed request payload for Setting.CreateTyped.
type SettingCreateData struct {
	ApiKey *string `json:"apiKey,omitempty"`
	CreatedDate *string `json:"createdDate,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// SettingRemoveMatch is the typed request payload for Setting.RemoveTyped.
type SettingRemoveMatch struct {
	ApiKeyId string `json:"api_key_id"`
}

// SupplementalData is the typed data model for the supplemental_data entity.
type SupplementalData struct {
	SupplementalDataConfig *map[string]any `json:"supplementalDataConfig,omitempty"`
}

// SupplementalDataUpdateData is the typed request payload for SupplementalData.UpdateTyped.
type SupplementalDataUpdateData struct {
	DataTypeId string `json:"data_type_id"`
	PlatformKey string `json:"platform_key"`
	SupplementalDataConfig *map[string]any `json:"supplementalDataConfig,omitempty"`
}

// SupplementalDataConfig is the typed data model for the supplemental_data_config entity.
type SupplementalDataConfig struct {
	DataSource *string `json:"dataSource,omitempty"`
	PullData *map[string]any `json:"pullData,omitempty"`
	PushData *map[string]any `json:"pushData,omitempty"`
}

// SupplementalDataConfigLoadMatch is the typed request payload for SupplementalDataConfig.LoadTyped.
type SupplementalDataConfigLoadMatch struct {
	DataTypeId string `json:"data_type_id"`
	PlatformKey string `json:"platform_key"`
}

// Sync is the typed data model for the sync entity.
type Sync struct {
}

// SyncSetting is the typed data model for the sync_setting entity.
type SyncSetting struct {
	DataType string `json:"dataType"`
	FetchOnFirstLink bool `json:"fetchOnFirstLink"`
	IsLocked *bool `json:"isLocked,omitempty"`
	MonthsToSync *int `json:"monthsToSync,omitempty"`
	SyncFromUtc *string `json:"syncFromUtc,omitempty"`
	SyncFromWindow *int `json:"syncFromWindow,omitempty"`
	SyncOrder int `json:"syncOrder"`
	SyncSchedule int `json:"syncSchedule"`
}

// SyncSettingListMatch is the typed request payload for SyncSetting.ListTyped.
type SyncSettingListMatch struct {
	DataType *string `json:"dataType,omitempty"`
	FetchOnFirstLink *bool `json:"fetchOnFirstLink,omitempty"`
	IsLocked *bool `json:"isLocked,omitempty"`
	MonthsToSync *int `json:"monthsToSync,omitempty"`
	SyncFromUtc *string `json:"syncFromUtc,omitempty"`
	SyncFromWindow *int `json:"syncFromWindow,omitempty"`
	SyncOrder *int `json:"syncOrder,omitempty"`
	SyncSchedule *int `json:"syncSchedule,omitempty"`
}

// Validation is the typed data model for the validation entity.
type Validation struct {
	Errors *[]any `json:"errors,omitempty"`
	Warnings *[]any `json:"warnings,omitempty"`
}

// ValidationListMatch is the typed request payload for Validation.ListTyped.
type ValidationListMatch struct {
	CompanyId string `json:"company_id"`
	SyncId string `json:"sync_id"`
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
	CompanyTags *[]any `json:"companyTags,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EventTypes *[]any `json:"eventTypes,omitempty"`
	Id *string `json:"id,omitempty"`
	Url *string `json:"url,omitempty"`
}

// WebhookListMatch is the typed request payload for Webhook.ListTyped.
type WebhookListMatch struct {
	CompanyTags *[]any `json:"companyTags,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EventTypes *[]any `json:"eventTypes,omitempty"`
	Id *string `json:"id,omitempty"`
	Url *string `json:"url,omitempty"`
}

// WebhookCreateData is the typed request payload for Webhook.CreateTyped.
type WebhookCreateData struct {
	CompanyTags *[]any `json:"companyTags,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EventTypes *[]any `json:"eventTypes,omitempty"`
	Id *string `json:"id,omitempty"`
	Url *string `json:"url,omitempty"`
}

// WebhookRemoveMatch is the typed request payload for Webhook.RemoveTyped.
type WebhookRemoveMatch struct {
	Id string `json:"id"`
}

// WebhookZapierKey is the typed data model for the webhook_zapier_key entity.
type WebhookZapierKey struct {
	Key *string `json:"key,omitempty"`
}

// WebhookZapierKeyCreateData is the typed request payload for WebhookZapierKey.CreateTyped.
type WebhookZapierKeyCreateData struct {
	Key *string `json:"key,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
