-- Typed models for the Codatplatform SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class AccessToken

---@class All

---@class ApiKey

---@class Branding
---@field button? table
---@field logo? table
---@field sourceId? string

---@class BrandingLoadMatch
---@field platform_key string

---@class Company
---@field created? string
---@field createdByUserName? string
---@field dataConnections? table
---@field description? string
---@field id string
---@field lastSync? string
---@field links table
---@field name string
---@field pageNumber number
---@field pageSize number
---@field products? table
---@field redirect string
---@field referenceParentCompany? table
---@field referenceSubsidiaryCompanies? table
---@field results? table
---@field tags? table
---@field totalResults number

---@class CompanyLoadMatch
---@field id string

---@class CompanyListMatch
---@field created? string
---@field createdByUserName? string
---@field dataConnections? table
---@field description? string
---@field id? string
---@field lastSync? string
---@field links? table
---@field name? string
---@field pageNumber? number
---@field pageSize? number
---@field products? table
---@field redirect? string
---@field referenceParentCompany? table
---@field referenceSubsidiaryCompanies? table
---@field results? table
---@field tags? table
---@field totalResults? number

---@class CompanyCreateData
---@field created? string
---@field createdByUserName? string
---@field dataConnections? table
---@field description? string
---@field id string
---@field lastSync? string
---@field links table
---@field name string
---@field pageNumber number
---@field pageSize number
---@field products? table
---@field redirect string
---@field referenceParentCompany? table
---@field referenceSubsidiaryCompanies? table
---@field results? table
---@field tags? table
---@field totalResults number

---@class CompanyUpdateData
---@field id string
---@field product_identifier? string
---@field created? string
---@field createdByUserName? string
---@field dataConnections? table
---@field description? string
---@field lastSync? string
---@field links? table
---@field name? string
---@field pageNumber? number
---@field pageSize? number
---@field products? table
---@field redirect? string
---@field referenceParentCompany? table
---@field referenceSubsidiaryCompanies? table
---@field results? table
---@field tags? table
---@field totalResults? number

---@class CompanyRemoveMatch
---@field id string
---@field product_identifier? string

---@class CompanyAccessToken
---@field accessToken string
---@field expiresIn number
---@field id? string
---@field tokenType string

---@class CompanyAccessTokenLoadMatch
---@field id string

---@class Connection
---@field connectionInfo? table
---@field created string
---@field dataConnectionErrors? table
---@field id string
---@field integrationId string
---@field integrationKey string
---@field lastSync? string
---@field linkUrl string
---@field links table
---@field pageNumber number
---@field pageSize number
---@field platformKey? string
---@field platformName string
---@field results? table
---@field sourceId string
---@field sourceType string
---@field status string
---@field totalResults number

---@class ConnectionLoadMatch
---@field company_id string
---@field id string

---@class ConnectionListMatch
---@field company_id string

---@class ConnectionCreateData
---@field company_id string
---@field connectionInfo? table
---@field created string
---@field dataConnectionErrors? table
---@field id string
---@field integrationId string
---@field integrationKey string
---@field lastSync? string
---@field linkUrl string
---@field links table
---@field pageNumber number
---@field pageSize number
---@field platformKey? string
---@field platformName string
---@field results? table
---@field sourceId string
---@field sourceType string
---@field status string
---@field totalResults number

---@class ConnectionUpdateData
---@field company_id string
---@field id string
---@field connectionInfo? table
---@field created? string
---@field dataConnectionErrors? table
---@field integrationId? string
---@field integrationKey? string
---@field lastSync? string
---@field linkUrl? string
---@field links? table
---@field pageNumber? number
---@field pageSize? number
---@field platformKey? string
---@field platformName? string
---@field results? table
---@field sourceId? string
---@field sourceType? string
---@field status? string
---@field totalResults? number

---@class ConnectionRemoveMatch
---@field company_id string
---@field id string

---@class ConnectionManagementAccessToken
---@field accessToken? string

---@class ConnectionManagementAccessTokenLoadMatch
---@field company_id string

---@class ConnectionManagementAllowedOrigin
---@field allowedOrigins? table

---@class ConnectionManagementAllowedOriginListMatch
---@field allowedOrigins? table

---@class ConnectionManagementAllowedOriginCreateData
---@field allowedOrigins? table

---@class Custom
---@field dataSource? string
---@field id? string
---@field keyBy? table
---@field pageNumber? number
---@field pageSize? number
---@field requiredData? table
---@field results? table
---@field sourceModifiedDate? table
---@field totalResults? number

---@class CustomLoadMatch
---@field company_id? string
---@field connection_id? string
---@field id string
---@field platform_key? string

---@class CustomUpdateData
---@field id string
---@field platform_key string
---@field dataSource? string
---@field keyBy? table
---@field pageNumber? number
---@field pageSize? number
---@field requiredData? table
---@field results? table
---@field sourceModifiedDate? table
---@field totalResults? number

---@class DataStatus
---@field accountTransactions table
---@field balanceSheet table
---@field bankAccounts table
---@field bankTransactions table
---@field bankingaccountBalances table
---@field bankingaccounts table
---@field bankingtransactionCategories table
---@field bankingtransactions table
---@field billCreditNotes table
---@field billPayments table
---@field bills table
---@field cashFlowStatement table
---@field chartOfAccounts table
---@field commercecompanyInfo table
---@field commercecustomers table
---@field commercedisputes table
---@field commercelocations table
---@field commerceorders table
---@field commercepaymentMethods table
---@field commercepayments table
---@field commerceproductCategories table
---@field commerceproducts table
---@field commercetaxComponents table
---@field commercetransactions table
---@field company table
---@field creditNotes table
---@field customers table
---@field directCosts table
---@field directIncomes table
---@field invoices table
---@field itemReceipts table
---@field items table
---@field journalEntries table
---@field journals table
---@field paymentMethods table
---@field payments table
---@field profitAndLoss table
---@field purchaseOrders table
---@field salesOrders table
---@field suppliers table
---@field taxRates table
---@field trackingCategories table
---@field transfers table

---@class DataStatusLoadMatch
---@field company_id string

---@class DataType

---@class History

---@class Integration
---@field dataProvidedBy? string
---@field datatypeFeatures? table
---@field enabled boolean
---@field id? string
---@field integrationId? string
---@field isBeta? boolean
---@field isOfflineConnector? boolean
---@field key string
---@field links table
---@field logoUrl string
---@field name string
---@field pageNumber number
---@field pageSize number
---@field results? table
---@field sourceId? string
---@field sourceType? string
---@field totalResults number

---@class IntegrationLoadMatch
---@field id string

---@class IntegrationListMatch
---@field dataProvidedBy? string
---@field datatypeFeatures? table
---@field enabled? boolean
---@field id? string
---@field integrationId? string
---@field isBeta? boolean
---@field isOfflineConnector? boolean
---@field key? string
---@field links? table
---@field logoUrl? string
---@field name? string
---@field pageNumber? number
---@field pageSize? number
---@field results? table
---@field sourceId? string
---@field sourceType? string
---@field totalResults? number

---@class Option

---@class Product

---@class Profile
---@field apiKey? string
---@field confirmCompanyName? boolean
---@field iconUrl? string
---@field logoUrl? string
---@field name string
---@field redirectUrl string
---@field whiteListUrls? table

---@class ProfileListMatch
---@field apiKey? string
---@field confirmCompanyName? boolean
---@field iconUrl? string
---@field logoUrl? string
---@field name? string
---@field redirectUrl? string
---@field whiteListUrls? table

---@class ProfileUpdateData
---@field apiKey? string
---@field confirmCompanyName? boolean
---@field iconUrl? string
---@field logoUrl? string
---@field name? string
---@field redirectUrl? string
---@field whiteListUrls? table

---@class PullOperation
---@field companyId string
---@field completed? string
---@field connectionId string
---@field dataType string
---@field errorMessage? string
---@field id string
---@field isCompleted boolean
---@field isErrored boolean
---@field links table
---@field pageNumber number
---@field pageSize number
---@field progress number
---@field requested string
---@field results? table
---@field status string
---@field statusDescription? string
---@field totalResults number

---@class PullOperationLoadMatch
---@field company_id string
---@field dataset_id string

---@class PullOperationListMatch
---@field company_id string

---@class PullOperationCreateData
---@field company_id string
---@field connection_id? string
---@field custom_data_identifier? string
---@field data_type? string
---@field companyId string
---@field completed? string
---@field connectionId string
---@field dataType string
---@field errorMessage? string
---@field id string
---@field isCompleted boolean
---@field isErrored boolean
---@field links table
---@field pageNumber number
---@field pageSize number
---@field progress number
---@field requested string
---@field results? table
---@field status string
---@field statusDescription? string
---@field totalResults number

---@class Push
---@field changes? table
---@field companyId string
---@field completedOnUtc? string
---@field dataConnectionKey string
---@field dataType? string
---@field errorMessage? string
---@field id? string
---@field links table
---@field pageNumber number
---@field pageSize number
---@field pushOperationKey string
---@field requestedOnUtc string
---@field results? table
---@field status string
---@field statusCode number
---@field timeoutInMinutes? number
---@field timeoutInSeconds? number
---@field totalResults number
---@field validation? table

---@class PushLoadMatch
---@field company_id string
---@field id string

---@class PushListMatch
---@field company_id string

---@class PushOption
---@field description? string
---@field displayName string
---@field id? string
---@field options? table
---@field properties? table
---@field required boolean
---@field type string
---@field validation? table

---@class PushOptionLoadMatch
---@field company_id string
---@field connection_id string
---@field id string

---@class Queue

---@class RefreshData

---@class RefreshDataCreateData
---@field company_id string

---@class Setting
---@field apiKey? string
---@field createdDate? string
---@field id? string
---@field name? string

---@class SettingListMatch
---@field apiKey? string
---@field createdDate? string
---@field id? string
---@field name? string

---@class SettingCreateData
---@field apiKey? string
---@field createdDate? string
---@field id? string
---@field name? string

---@class SettingRemoveMatch
---@field api_key_id string

---@class SupplementalData
---@field supplementalDataConfig? table

---@class SupplementalDataUpdateData
---@field data_type_id string
---@field platform_key string
---@field supplementalDataConfig? table

---@class SupplementalDataConfig
---@field dataSource? string
---@field pullData? table
---@field pushData? table

---@class SupplementalDataConfigLoadMatch
---@field data_type_id string
---@field platform_key string

---@class Sync

---@class SyncSetting
---@field dataType string
---@field fetchOnFirstLink boolean
---@field isLocked? boolean
---@field monthsToSync? number
---@field syncFromUtc? string
---@field syncFromWindow? number
---@field syncOrder number
---@field syncSchedule number

---@class SyncSettingListMatch
---@field dataType? string
---@field fetchOnFirstLink? boolean
---@field isLocked? boolean
---@field monthsToSync? number
---@field syncFromUtc? string
---@field syncFromWindow? number
---@field syncOrder? number
---@field syncSchedule? number

---@class Validation
---@field errors? table
---@field warnings? table

---@class ValidationListMatch
---@field company_id string
---@field sync_id string

---@class Webhook
---@field companyTags? table
---@field disabled? boolean
---@field eventTypes? table
---@field id? string
---@field url? string

---@class WebhookListMatch
---@field companyTags? table
---@field disabled? boolean
---@field eventTypes? table
---@field id? string
---@field url? string

---@class WebhookCreateData
---@field companyTags? table
---@field disabled? boolean
---@field eventTypes? table
---@field id? string
---@field url? string

---@class WebhookRemoveMatch
---@field id string

---@class WebhookZapierKey
---@field key? string

---@class WebhookZapierKeyCreateData
---@field key? string

local M = {}

return M
