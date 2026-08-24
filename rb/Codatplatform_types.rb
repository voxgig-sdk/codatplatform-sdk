# frozen_string_literal: true

# Typed models for the Codatplatform SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# AccessToken entity data model.
class AccessToken
end

# All entity data model.
class All
end

# ApiKey entity data model.
class ApiKey
end

# Branding entity data model.
#
# @!attribute [rw] button
#   @return [Hash, nil]
#
# @!attribute [rw] logo
#   @return [Hash, nil]
#
# @!attribute [rw] sourceId
#   @return [String, nil]
Branding = Struct.new(
  :button,
  :logo,
  :sourceId,
  keyword_init: true
)

# Request payload for Branding#load.
#
# @!attribute [rw] platform_key
#   @return [String]
BrandingLoadMatch = Struct.new(
  :platform_key,
  keyword_init: true
)

# Company entity data model.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] createdByUserName
#   @return [String, nil]
#
# @!attribute [rw] dataConnections
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lastSync
#   @return [String, nil]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pageNumber
#   @return [Integer]
#
# @!attribute [rw] pageSize
#   @return [Integer]
#
# @!attribute [rw] products
#   @return [Array, nil]
#
# @!attribute [rw] redirect
#   @return [String]
#
# @!attribute [rw] referenceParentCompany
#   @return [Hash, nil]
#
# @!attribute [rw] referenceSubsidiaryCompanies
#   @return [Array, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Hash, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer]
Company = Struct.new(
  :created,
  :createdByUserName,
  :dataConnections,
  :description,
  :id,
  :lastSync,
  :links,
  :name,
  :pageNumber,
  :pageSize,
  :products,
  :redirect,
  :referenceParentCompany,
  :referenceSubsidiaryCompanies,
  :results,
  :tags,
  :totalResults,
  keyword_init: true
)

# Request payload for Company#load.
#
# @!attribute [rw] id
#   @return [String]
CompanyLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Company#list.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] createdByUserName
#   @return [String, nil]
#
# @!attribute [rw] dataConnections
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] lastSync
#   @return [String, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pageNumber
#   @return [Integer, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] products
#   @return [Array, nil]
#
# @!attribute [rw] redirect
#   @return [String, nil]
#
# @!attribute [rw] referenceParentCompany
#   @return [Hash, nil]
#
# @!attribute [rw] referenceSubsidiaryCompanies
#   @return [Array, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Hash, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer, nil]
CompanyListMatch = Struct.new(
  :created,
  :createdByUserName,
  :dataConnections,
  :description,
  :id,
  :lastSync,
  :links,
  :name,
  :pageNumber,
  :pageSize,
  :products,
  :redirect,
  :referenceParentCompany,
  :referenceSubsidiaryCompanies,
  :results,
  :tags,
  :totalResults,
  keyword_init: true
)

# Request payload for Company#create.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] createdByUserName
#   @return [String, nil]
#
# @!attribute [rw] dataConnections
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lastSync
#   @return [String, nil]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pageNumber
#   @return [Integer]
#
# @!attribute [rw] pageSize
#   @return [Integer]
#
# @!attribute [rw] products
#   @return [Array, nil]
#
# @!attribute [rw] redirect
#   @return [String]
#
# @!attribute [rw] referenceParentCompany
#   @return [Hash, nil]
#
# @!attribute [rw] referenceSubsidiaryCompanies
#   @return [Array, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Hash, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer]
CompanyCreateData = Struct.new(
  :created,
  :createdByUserName,
  :dataConnections,
  :description,
  :id,
  :lastSync,
  :links,
  :name,
  :pageNumber,
  :pageSize,
  :products,
  :redirect,
  :referenceParentCompany,
  :referenceSubsidiaryCompanies,
  :results,
  :tags,
  :totalResults,
  keyword_init: true
)

# Request payload for Company#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] product_identifier
#   @return [String, nil]
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] createdByUserName
#   @return [String, nil]
#
# @!attribute [rw] dataConnections
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] lastSync
#   @return [String, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pageNumber
#   @return [Integer, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] products
#   @return [Array, nil]
#
# @!attribute [rw] redirect
#   @return [String, nil]
#
# @!attribute [rw] referenceParentCompany
#   @return [Hash, nil]
#
# @!attribute [rw] referenceSubsidiaryCompanies
#   @return [Array, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Hash, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer, nil]
CompanyUpdateData = Struct.new(
  :id,
  :product_identifier,
  :created,
  :createdByUserName,
  :dataConnections,
  :description,
  :lastSync,
  :links,
  :name,
  :pageNumber,
  :pageSize,
  :products,
  :redirect,
  :referenceParentCompany,
  :referenceSubsidiaryCompanies,
  :results,
  :tags,
  :totalResults,
  keyword_init: true
)

# Request payload for Company#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] product_identifier
#   @return [String, nil]
CompanyRemoveMatch = Struct.new(
  :id,
  :product_identifier,
  keyword_init: true
)

# CompanyAccessToken entity data model.
#
# @!attribute [rw] accessToken
#   @return [String]
#
# @!attribute [rw] expiresIn
#   @return [Integer]
#
# @!attribute [rw] tokenType
#   @return [String]
CompanyAccessToken = Struct.new(
  :accessToken,
  :expiresIn,
  :tokenType,
  keyword_init: true
)

# Request payload for CompanyAccessToken#load.
#
# @!attribute [rw] id
#   @return [String]
CompanyAccessTokenLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Connection entity data model.
#
# @!attribute [rw] connectionInfo
#   @return [Hash, nil]
#
# @!attribute [rw] created
#   @return [String]
#
# @!attribute [rw] dataConnectionErrors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integrationId
#   @return [String]
#
# @!attribute [rw] integrationKey
#   @return [String]
#
# @!attribute [rw] lastSync
#   @return [String, nil]
#
# @!attribute [rw] linkUrl
#   @return [String]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] pageNumber
#   @return [Integer]
#
# @!attribute [rw] pageSize
#   @return [Integer]
#
# @!attribute [rw] platformKey
#   @return [String, nil]
#
# @!attribute [rw] platformName
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] sourceId
#   @return [String]
#
# @!attribute [rw] sourceType
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] totalResults
#   @return [Integer]
Connection = Struct.new(
  :connectionInfo,
  :created,
  :dataConnectionErrors,
  :id,
  :integrationId,
  :integrationKey,
  :lastSync,
  :linkUrl,
  :links,
  :pageNumber,
  :pageSize,
  :platformKey,
  :platformName,
  :results,
  :sourceId,
  :sourceType,
  :status,
  :totalResults,
  keyword_init: true
)

# Request payload for Connection#load.
#
# @!attribute [rw] company_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ConnectionLoadMatch = Struct.new(
  :company_id,
  :id,
  keyword_init: true
)

# Request payload for Connection#list.
#
# @!attribute [rw] company_id
#   @return [String]
ConnectionListMatch = Struct.new(
  :company_id,
  keyword_init: true
)

# Request payload for Connection#create.
#
# @!attribute [rw] company_id
#   @return [String]
#
# @!attribute [rw] connectionInfo
#   @return [Hash, nil]
#
# @!attribute [rw] created
#   @return [String]
#
# @!attribute [rw] dataConnectionErrors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integrationId
#   @return [String]
#
# @!attribute [rw] integrationKey
#   @return [String]
#
# @!attribute [rw] lastSync
#   @return [String, nil]
#
# @!attribute [rw] linkUrl
#   @return [String]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] pageNumber
#   @return [Integer]
#
# @!attribute [rw] pageSize
#   @return [Integer]
#
# @!attribute [rw] platformKey
#   @return [String, nil]
#
# @!attribute [rw] platformName
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] sourceId
#   @return [String]
#
# @!attribute [rw] sourceType
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] totalResults
#   @return [Integer]
ConnectionCreateData = Struct.new(
  :company_id,
  :connectionInfo,
  :created,
  :dataConnectionErrors,
  :id,
  :integrationId,
  :integrationKey,
  :lastSync,
  :linkUrl,
  :links,
  :pageNumber,
  :pageSize,
  :platformKey,
  :platformName,
  :results,
  :sourceId,
  :sourceType,
  :status,
  :totalResults,
  keyword_init: true
)

# Request payload for Connection#update.
#
# @!attribute [rw] company_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] connectionInfo
#   @return [Hash, nil]
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] dataConnectionErrors
#   @return [Array, nil]
#
# @!attribute [rw] integrationId
#   @return [String, nil]
#
# @!attribute [rw] integrationKey
#   @return [String, nil]
#
# @!attribute [rw] lastSync
#   @return [String, nil]
#
# @!attribute [rw] linkUrl
#   @return [String, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] pageNumber
#   @return [Integer, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] platformKey
#   @return [String, nil]
#
# @!attribute [rw] platformName
#   @return [String, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] sourceId
#   @return [String, nil]
#
# @!attribute [rw] sourceType
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer, nil]
ConnectionUpdateData = Struct.new(
  :company_id,
  :id,
  :connectionInfo,
  :created,
  :dataConnectionErrors,
  :integrationId,
  :integrationKey,
  :lastSync,
  :linkUrl,
  :links,
  :pageNumber,
  :pageSize,
  :platformKey,
  :platformName,
  :results,
  :sourceId,
  :sourceType,
  :status,
  :totalResults,
  keyword_init: true
)

# Request payload for Connection#remove.
#
# @!attribute [rw] company_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ConnectionRemoveMatch = Struct.new(
  :company_id,
  :id,
  keyword_init: true
)

# ConnectionManagementAccessToken entity data model.
#
# @!attribute [rw] accessToken
#   @return [String, nil]
ConnectionManagementAccessToken = Struct.new(
  :accessToken,
  keyword_init: true
)

# Request payload for ConnectionManagementAccessToken#load.
#
# @!attribute [rw] company_id
#   @return [String]
ConnectionManagementAccessTokenLoadMatch = Struct.new(
  :company_id,
  keyword_init: true
)

# ConnectionManagementAllowedOrigin entity data model.
#
# @!attribute [rw] allowedOrigins
#   @return [Array, nil]
ConnectionManagementAllowedOrigin = Struct.new(
  :allowedOrigins,
  keyword_init: true
)

# Request payload for ConnectionManagementAllowedOrigin#list.
#
# @!attribute [rw] allowedOrigins
#   @return [Array, nil]
ConnectionManagementAllowedOriginListMatch = Struct.new(
  :allowedOrigins,
  keyword_init: true
)

# Request payload for ConnectionManagementAllowedOrigin#create.
#
# @!attribute [rw] allowedOrigins
#   @return [Array, nil]
ConnectionManagementAllowedOriginCreateData = Struct.new(
  :allowedOrigins,
  keyword_init: true
)

# Custom entity data model.
#
# @!attribute [rw] dataSource
#   @return [String, nil]
#
# @!attribute [rw] keyBy
#   @return [Array, nil]
#
# @!attribute [rw] pageNumber
#   @return [Integer, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] requiredData
#   @return [Hash, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] sourceModifiedDate
#   @return [Array, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer, nil]
Custom = Struct.new(
  :dataSource,
  :keyBy,
  :pageNumber,
  :pageSize,
  :requiredData,
  :results,
  :sourceModifiedDate,
  :totalResults,
  keyword_init: true
)

# Request payload for Custom#load.
#
# @!attribute [rw] company_id
#   @return [String, nil]
#
# @!attribute [rw] connection_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] platform_key
#   @return [String, nil]
CustomLoadMatch = Struct.new(
  :company_id,
  :connection_id,
  :id,
  :platform_key,
  keyword_init: true
)

# Request payload for Custom#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] platform_key
#   @return [String]
#
# @!attribute [rw] dataSource
#   @return [String, nil]
#
# @!attribute [rw] keyBy
#   @return [Array, nil]
#
# @!attribute [rw] pageNumber
#   @return [Integer, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] requiredData
#   @return [Hash, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] sourceModifiedDate
#   @return [Array, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer, nil]
CustomUpdateData = Struct.new(
  :id,
  :platform_key,
  :dataSource,
  :keyBy,
  :pageNumber,
  :pageSize,
  :requiredData,
  :results,
  :sourceModifiedDate,
  :totalResults,
  keyword_init: true
)

# DataStatus entity data model.
#
# @!attribute [rw] accountTransactions
#   @return [Hash]
#
# @!attribute [rw] balanceSheet
#   @return [Hash]
#
# @!attribute [rw] bankAccounts
#   @return [Hash]
#
# @!attribute [rw] bankTransactions
#   @return [Hash]
#
# @!attribute [rw] bankingaccountBalances
#   @return [Hash]
#
# @!attribute [rw] bankingaccounts
#   @return [Hash]
#
# @!attribute [rw] bankingtransactionCategories
#   @return [Hash]
#
# @!attribute [rw] bankingtransactions
#   @return [Hash]
#
# @!attribute [rw] billCreditNotes
#   @return [Hash]
#
# @!attribute [rw] billPayments
#   @return [Hash]
#
# @!attribute [rw] bills
#   @return [Hash]
#
# @!attribute [rw] cashFlowStatement
#   @return [Hash]
#
# @!attribute [rw] chartOfAccounts
#   @return [Hash]
#
# @!attribute [rw] commercecompanyInfo
#   @return [Hash]
#
# @!attribute [rw] commercecustomers
#   @return [Hash]
#
# @!attribute [rw] commercedisputes
#   @return [Hash]
#
# @!attribute [rw] commercelocations
#   @return [Hash]
#
# @!attribute [rw] commerceorders
#   @return [Hash]
#
# @!attribute [rw] commercepaymentMethods
#   @return [Hash]
#
# @!attribute [rw] commercepayments
#   @return [Hash]
#
# @!attribute [rw] commerceproductCategories
#   @return [Hash]
#
# @!attribute [rw] commerceproducts
#   @return [Hash]
#
# @!attribute [rw] commercetaxComponents
#   @return [Hash]
#
# @!attribute [rw] commercetransactions
#   @return [Hash]
#
# @!attribute [rw] company
#   @return [Hash]
#
# @!attribute [rw] creditNotes
#   @return [Hash]
#
# @!attribute [rw] customers
#   @return [Hash]
#
# @!attribute [rw] directCosts
#   @return [Hash]
#
# @!attribute [rw] directIncomes
#   @return [Hash]
#
# @!attribute [rw] invoices
#   @return [Hash]
#
# @!attribute [rw] itemReceipts
#   @return [Hash]
#
# @!attribute [rw] items
#   @return [Hash]
#
# @!attribute [rw] journalEntries
#   @return [Hash]
#
# @!attribute [rw] journals
#   @return [Hash]
#
# @!attribute [rw] paymentMethods
#   @return [Hash]
#
# @!attribute [rw] payments
#   @return [Hash]
#
# @!attribute [rw] profitAndLoss
#   @return [Hash]
#
# @!attribute [rw] purchaseOrders
#   @return [Hash]
#
# @!attribute [rw] salesOrders
#   @return [Hash]
#
# @!attribute [rw] suppliers
#   @return [Hash]
#
# @!attribute [rw] taxRates
#   @return [Hash]
#
# @!attribute [rw] trackingCategories
#   @return [Hash]
#
# @!attribute [rw] transfers
#   @return [Hash]
DataStatus = Struct.new(
  :accountTransactions,
  :balanceSheet,
  :bankAccounts,
  :bankTransactions,
  :bankingaccountBalances,
  :bankingaccounts,
  :bankingtransactionCategories,
  :bankingtransactions,
  :billCreditNotes,
  :billPayments,
  :bills,
  :cashFlowStatement,
  :chartOfAccounts,
  :commercecompanyInfo,
  :commercecustomers,
  :commercedisputes,
  :commercelocations,
  :commerceorders,
  :commercepaymentMethods,
  :commercepayments,
  :commerceproductCategories,
  :commerceproducts,
  :commercetaxComponents,
  :commercetransactions,
  :company,
  :creditNotes,
  :customers,
  :directCosts,
  :directIncomes,
  :invoices,
  :itemReceipts,
  :items,
  :journalEntries,
  :journals,
  :paymentMethods,
  :payments,
  :profitAndLoss,
  :purchaseOrders,
  :salesOrders,
  :suppliers,
  :taxRates,
  :trackingCategories,
  :transfers,
  keyword_init: true
)

# Request payload for DataStatus#load.
#
# @!attribute [rw] company_id
#   @return [String]
DataStatusLoadMatch = Struct.new(
  :company_id,
  keyword_init: true
)

# DataType entity data model.
class DataType
end

# History entity data model.
class History
end

# Integration entity data model.
#
# @!attribute [rw] dataProvidedBy
#   @return [String, nil]
#
# @!attribute [rw] datatypeFeatures
#   @return [Array, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] integrationId
#   @return [String, nil]
#
# @!attribute [rw] isBeta
#   @return [Boolean, nil]
#
# @!attribute [rw] isOfflineConnector
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] logoUrl
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pageNumber
#   @return [Integer]
#
# @!attribute [rw] pageSize
#   @return [Integer]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] sourceId
#   @return [String, nil]
#
# @!attribute [rw] sourceType
#   @return [String, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer]
Integration = Struct.new(
  :dataProvidedBy,
  :datatypeFeatures,
  :enabled,
  :integrationId,
  :isBeta,
  :isOfflineConnector,
  :key,
  :links,
  :logoUrl,
  :name,
  :pageNumber,
  :pageSize,
  :results,
  :sourceId,
  :sourceType,
  :totalResults,
  keyword_init: true
)

# Request payload for Integration#load.
#
# @!attribute [rw] id
#   @return [String]
IntegrationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Integration#list.
#
# @!attribute [rw] dataProvidedBy
#   @return [String, nil]
#
# @!attribute [rw] datatypeFeatures
#   @return [Array, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] integrationId
#   @return [String, nil]
#
# @!attribute [rw] isBeta
#   @return [Boolean, nil]
#
# @!attribute [rw] isOfflineConnector
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] logoUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pageNumber
#   @return [Integer, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] sourceId
#   @return [String, nil]
#
# @!attribute [rw] sourceType
#   @return [String, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer, nil]
IntegrationListMatch = Struct.new(
  :dataProvidedBy,
  :datatypeFeatures,
  :enabled,
  :integrationId,
  :isBeta,
  :isOfflineConnector,
  :key,
  :links,
  :logoUrl,
  :name,
  :pageNumber,
  :pageSize,
  :results,
  :sourceId,
  :sourceType,
  :totalResults,
  keyword_init: true
)

# Option entity data model.
class Option
end

# Product entity data model.
class Product
end

# Profile entity data model.
#
# @!attribute [rw] apiKey
#   @return [String, nil]
#
# @!attribute [rw] confirmCompanyName
#   @return [Boolean, nil]
#
# @!attribute [rw] iconUrl
#   @return [String, nil]
#
# @!attribute [rw] logoUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] redirectUrl
#   @return [String]
#
# @!attribute [rw] whiteListUrls
#   @return [Array, nil]
Profile = Struct.new(
  :apiKey,
  :confirmCompanyName,
  :iconUrl,
  :logoUrl,
  :name,
  :redirectUrl,
  :whiteListUrls,
  keyword_init: true
)

# Request payload for Profile#list.
#
# @!attribute [rw] apiKey
#   @return [String, nil]
#
# @!attribute [rw] confirmCompanyName
#   @return [Boolean, nil]
#
# @!attribute [rw] iconUrl
#   @return [String, nil]
#
# @!attribute [rw] logoUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] redirectUrl
#   @return [String, nil]
#
# @!attribute [rw] whiteListUrls
#   @return [Array, nil]
ProfileListMatch = Struct.new(
  :apiKey,
  :confirmCompanyName,
  :iconUrl,
  :logoUrl,
  :name,
  :redirectUrl,
  :whiteListUrls,
  keyword_init: true
)

# Request payload for Profile#update.
#
# @!attribute [rw] apiKey
#   @return [String, nil]
#
# @!attribute [rw] confirmCompanyName
#   @return [Boolean, nil]
#
# @!attribute [rw] iconUrl
#   @return [String, nil]
#
# @!attribute [rw] logoUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] redirectUrl
#   @return [String, nil]
#
# @!attribute [rw] whiteListUrls
#   @return [Array, nil]
ProfileUpdateData = Struct.new(
  :apiKey,
  :confirmCompanyName,
  :iconUrl,
  :logoUrl,
  :name,
  :redirectUrl,
  :whiteListUrls,
  keyword_init: true
)

# PullOperation entity data model.
#
# @!attribute [rw] companyId
#   @return [String]
#
# @!attribute [rw] completed
#   @return [String, nil]
#
# @!attribute [rw] connectionId
#   @return [String]
#
# @!attribute [rw] dataType
#   @return [String]
#
# @!attribute [rw] errorMessage
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isCompleted
#   @return [Boolean]
#
# @!attribute [rw] isErrored
#   @return [Boolean]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] pageNumber
#   @return [Integer]
#
# @!attribute [rw] pageSize
#   @return [Integer]
#
# @!attribute [rw] progress
#   @return [Integer]
#
# @!attribute [rw] requested
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] statusDescription
#   @return [String, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer]
PullOperation = Struct.new(
  :companyId,
  :completed,
  :connectionId,
  :dataType,
  :errorMessage,
  :id,
  :isCompleted,
  :isErrored,
  :links,
  :pageNumber,
  :pageSize,
  :progress,
  :requested,
  :results,
  :status,
  :statusDescription,
  :totalResults,
  keyword_init: true
)

# Request payload for PullOperation#load.
#
# @!attribute [rw] company_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String]
PullOperationLoadMatch = Struct.new(
  :company_id,
  :dataset_id,
  keyword_init: true
)

# Request payload for PullOperation#list.
#
# @!attribute [rw] company_id
#   @return [String]
PullOperationListMatch = Struct.new(
  :company_id,
  keyword_init: true
)

# Request payload for PullOperation#create.
#
# @!attribute [rw] company_id
#   @return [String]
#
# @!attribute [rw] connection_id
#   @return [String, nil]
#
# @!attribute [rw] custom_data_identifier
#   @return [String, nil]
#
# @!attribute [rw] data_type
#   @return [String, nil]
#
# @!attribute [rw] companyId
#   @return [String]
#
# @!attribute [rw] completed
#   @return [String, nil]
#
# @!attribute [rw] connectionId
#   @return [String]
#
# @!attribute [rw] dataType
#   @return [String]
#
# @!attribute [rw] errorMessage
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isCompleted
#   @return [Boolean]
#
# @!attribute [rw] isErrored
#   @return [Boolean]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] pageNumber
#   @return [Integer]
#
# @!attribute [rw] pageSize
#   @return [Integer]
#
# @!attribute [rw] progress
#   @return [Integer]
#
# @!attribute [rw] requested
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] statusDescription
#   @return [String, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer]
PullOperationCreateData = Struct.new(
  :company_id,
  :connection_id,
  :custom_data_identifier,
  :data_type,
  :companyId,
  :completed,
  :connectionId,
  :dataType,
  :errorMessage,
  :id,
  :isCompleted,
  :isErrored,
  :links,
  :pageNumber,
  :pageSize,
  :progress,
  :requested,
  :results,
  :status,
  :statusDescription,
  :totalResults,
  keyword_init: true
)

# Push entity data model.
#
# @!attribute [rw] changes
#   @return [Array, nil]
#
# @!attribute [rw] companyId
#   @return [String]
#
# @!attribute [rw] completedOnUtc
#   @return [String, nil]
#
# @!attribute [rw] dataConnectionKey
#   @return [String]
#
# @!attribute [rw] dataType
#   @return [String, nil]
#
# @!attribute [rw] errorMessage
#   @return [String, nil]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] pageNumber
#   @return [Integer]
#
# @!attribute [rw] pageSize
#   @return [Integer]
#
# @!attribute [rw] pushOperationKey
#   @return [String]
#
# @!attribute [rw] requestedOnUtc
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] statusCode
#   @return [Integer]
#
# @!attribute [rw] timeoutInMinutes
#   @return [Integer, nil]
#
# @!attribute [rw] timeoutInSeconds
#   @return [Integer, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer]
#
# @!attribute [rw] validation
#   @return [Hash, nil]
Push = Struct.new(
  :changes,
  :companyId,
  :completedOnUtc,
  :dataConnectionKey,
  :dataType,
  :errorMessage,
  :links,
  :pageNumber,
  :pageSize,
  :pushOperationKey,
  :requestedOnUtc,
  :results,
  :status,
  :statusCode,
  :timeoutInMinutes,
  :timeoutInSeconds,
  :totalResults,
  :validation,
  keyword_init: true
)

# Request payload for Push#load.
#
# @!attribute [rw] company_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PushLoadMatch = Struct.new(
  :company_id,
  :id,
  keyword_init: true
)

# Request payload for Push#list.
#
# @!attribute [rw] company_id
#   @return [String]
PushListMatch = Struct.new(
  :company_id,
  keyword_init: true
)

# PushOption entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] options
#   @return [Array, nil]
#
# @!attribute [rw] properties
#   @return [Hash, nil]
#
# @!attribute [rw] required
#   @return [Boolean]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] validation
#   @return [Hash, nil]
PushOption = Struct.new(
  :description,
  :displayName,
  :options,
  :properties,
  :required,
  :type,
  :validation,
  keyword_init: true
)

# Request payload for PushOption#load.
#
# @!attribute [rw] company_id
#   @return [String]
#
# @!attribute [rw] connection_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PushOptionLoadMatch = Struct.new(
  :company_id,
  :connection_id,
  :id,
  keyword_init: true
)

# Queue entity data model.
class QueueType
end

# RefreshData entity data model.
class RefreshData
end

# Request payload for RefreshData#create.
#
# @!attribute [rw] company_id
#   @return [String]
RefreshDataCreateData = Struct.new(
  :company_id,
  keyword_init: true
)

# Setting entity data model.
#
# @!attribute [rw] apiKey
#   @return [String, nil]
#
# @!attribute [rw] createdDate
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Setting = Struct.new(
  :apiKey,
  :createdDate,
  :id,
  :name,
  keyword_init: true
)

# Request payload for Setting#list.
#
# @!attribute [rw] apiKey
#   @return [String, nil]
#
# @!attribute [rw] createdDate
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
SettingListMatch = Struct.new(
  :apiKey,
  :createdDate,
  :id,
  :name,
  keyword_init: true
)

# Request payload for Setting#create.
#
# @!attribute [rw] apiKey
#   @return [String, nil]
#
# @!attribute [rw] createdDate
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
SettingCreateData = Struct.new(
  :apiKey,
  :createdDate,
  :id,
  :name,
  keyword_init: true
)

# Request payload for Setting#remove.
#
# @!attribute [rw] api_key_id
#   @return [String]
SettingRemoveMatch = Struct.new(
  :api_key_id,
  keyword_init: true
)

# SupplementalData entity data model.
#
# @!attribute [rw] supplementalDataConfig
#   @return [Hash, nil]
SupplementalData = Struct.new(
  :supplementalDataConfig,
  keyword_init: true
)

# Request payload for SupplementalData#update.
#
# @!attribute [rw] data_type_id
#   @return [String]
#
# @!attribute [rw] platform_key
#   @return [String]
#
# @!attribute [rw] supplementalDataConfig
#   @return [Hash, nil]
SupplementalDataUpdateData = Struct.new(
  :data_type_id,
  :platform_key,
  :supplementalDataConfig,
  keyword_init: true
)

# SupplementalDataConfig entity data model.
#
# @!attribute [rw] dataSource
#   @return [String, nil]
#
# @!attribute [rw] pullData
#   @return [Hash, nil]
#
# @!attribute [rw] pushData
#   @return [Hash, nil]
SupplementalDataConfig = Struct.new(
  :dataSource,
  :pullData,
  :pushData,
  keyword_init: true
)

# Request payload for SupplementalDataConfig#load.
#
# @!attribute [rw] data_type_id
#   @return [String]
#
# @!attribute [rw] platform_key
#   @return [String]
SupplementalDataConfigLoadMatch = Struct.new(
  :data_type_id,
  :platform_key,
  keyword_init: true
)

# Sync entity data model.
class Sync
end

# SyncSetting entity data model.
#
# @!attribute [rw] dataType
#   @return [String]
#
# @!attribute [rw] fetchOnFirstLink
#   @return [Boolean]
#
# @!attribute [rw] isLocked
#   @return [Boolean, nil]
#
# @!attribute [rw] monthsToSync
#   @return [Integer, nil]
#
# @!attribute [rw] syncFromUtc
#   @return [String, nil]
#
# @!attribute [rw] syncFromWindow
#   @return [Integer, nil]
#
# @!attribute [rw] syncOrder
#   @return [Integer]
#
# @!attribute [rw] syncSchedule
#   @return [Integer]
SyncSetting = Struct.new(
  :dataType,
  :fetchOnFirstLink,
  :isLocked,
  :monthsToSync,
  :syncFromUtc,
  :syncFromWindow,
  :syncOrder,
  :syncSchedule,
  keyword_init: true
)

# Request payload for SyncSetting#list.
#
# @!attribute [rw] dataType
#   @return [String, nil]
#
# @!attribute [rw] fetchOnFirstLink
#   @return [Boolean, nil]
#
# @!attribute [rw] isLocked
#   @return [Boolean, nil]
#
# @!attribute [rw] monthsToSync
#   @return [Integer, nil]
#
# @!attribute [rw] syncFromUtc
#   @return [String, nil]
#
# @!attribute [rw] syncFromWindow
#   @return [Integer, nil]
#
# @!attribute [rw] syncOrder
#   @return [Integer, nil]
#
# @!attribute [rw] syncSchedule
#   @return [Integer, nil]
SyncSettingListMatch = Struct.new(
  :dataType,
  :fetchOnFirstLink,
  :isLocked,
  :monthsToSync,
  :syncFromUtc,
  :syncFromWindow,
  :syncOrder,
  :syncSchedule,
  keyword_init: true
)

# Validation entity data model.
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] warnings
#   @return [Array, nil]
Validation = Struct.new(
  :errors,
  :warnings,
  keyword_init: true
)

# Request payload for Validation#list.
#
# @!attribute [rw] company_id
#   @return [String]
#
# @!attribute [rw] sync_id
#   @return [String]
ValidationListMatch = Struct.new(
  :company_id,
  :sync_id,
  keyword_init: true
)

# Webhook entity data model.
#
# @!attribute [rw] companyTags
#   @return [Array, nil]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] eventTypes
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Webhook = Struct.new(
  :companyTags,
  :disabled,
  :eventTypes,
  :id,
  :url,
  keyword_init: true
)

# Request payload for Webhook#list.
#
# @!attribute [rw] companyTags
#   @return [Array, nil]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] eventTypes
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
WebhookListMatch = Struct.new(
  :companyTags,
  :disabled,
  :eventTypes,
  :id,
  :url,
  keyword_init: true
)

# Request payload for Webhook#create.
#
# @!attribute [rw] companyTags
#   @return [Array, nil]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] eventTypes
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
WebhookCreateData = Struct.new(
  :companyTags,
  :disabled,
  :eventTypes,
  :id,
  :url,
  keyword_init: true
)

# Request payload for Webhook#remove.
#
# @!attribute [rw] id
#   @return [String]
WebhookRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# WebhookZapierKey entity data model.
#
# @!attribute [rw] key
#   @return [String, nil]
WebhookZapierKey = Struct.new(
  :key,
  keyword_init: true
)

# Request payload for WebhookZapierKey#create.
#
# @!attribute [rw] key
#   @return [String, nil]
WebhookZapierKeyCreateData = Struct.new(
  :key,
  keyword_init: true
)

