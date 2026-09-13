// Typed models for the Codatplatform SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} AccessToken
 */

/**
 * @typedef {Object} All
 */

/**
 * @typedef {Object} ApiKey
 */

/**
 * @typedef {Object} Branding
 * @property {Object} [button]
 * @property {Object} [logo]
 * @property {string} [sourceId]
 */

/**
 * @typedef {Object} BrandingLoadMatch
 * @property {string} platform_key
 */

/**
 * @typedef {Object} Company
 * @property {string} [created]
 * @property {string} [createdByUserName]
 * @property {Array} [dataConnections]
 * @property {string} [description]
 * @property {string} id
 * @property {string} [lastSync]
 * @property {Object} links
 * @property {string} name
 * @property {number} pageNumber
 * @property {number} pageSize
 * @property {Array} [products]
 * @property {string} redirect
 * @property {Object} [referenceParentCompany]
 * @property {Array} [referenceSubsidiaryCompanies]
 * @property {Array} [results]
 * @property {Object} [tags]
 * @property {number} totalResults
 */

/**
 * @typedef {Object} CompanyLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CompanyListMatch
 * @property {string} [order_by]
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [query]
 * @property {string} [tag]
 */

/**
 * @typedef {Object} CompanyCreateData
 * @property {string} [created]
 * @property {string} [createdByUserName]
 * @property {Array} [dataConnections]
 * @property {string} [description]
 * @property {string} id
 * @property {string} [lastSync]
 * @property {Object} links
 * @property {string} name
 * @property {number} pageNumber
 * @property {number} pageSize
 * @property {Array} [products]
 * @property {string} redirect
 * @property {Object} [referenceParentCompany]
 * @property {Array} [referenceSubsidiaryCompanies]
 * @property {Array} [results]
 * @property {Object} [tags]
 * @property {number} totalResults
 */

/**
 * @typedef {Object} CompanyUpdateData
 * @property {string} id
 * @property {string} [product_identifier]
 * @property {string} [created]
 * @property {string} [createdByUserName]
 * @property {Array} [dataConnections]
 * @property {string} [description]
 * @property {string} [lastSync]
 * @property {Object} [links]
 * @property {string} [name]
 * @property {number} [pageNumber]
 * @property {number} [pageSize]
 * @property {Array} [products]
 * @property {string} [redirect]
 * @property {Object} [referenceParentCompany]
 * @property {Array} [referenceSubsidiaryCompanies]
 * @property {Array} [results]
 * @property {Object} [tags]
 * @property {number} [totalResults]
 */

/**
 * @typedef {Object} CompanyRemoveMatch
 * @property {string} id
 * @property {string} [product_identifier]
 */

/**
 * @typedef {Object} CompanyAccessToken
 * @property {string} accessToken
 * @property {number} expiresIn
 * @property {string} [id]
 * @property {string} tokenType
 */

/**
 * @typedef {Object} CompanyAccessTokenLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Connection
 * @property {Object} [connectionInfo]
 * @property {string} created
 * @property {Array} [dataConnectionErrors]
 * @property {string} id
 * @property {string} integrationId
 * @property {string} integrationKey
 * @property {string} [lastSync]
 * @property {string} linkUrl
 * @property {Object} links
 * @property {number} pageNumber
 * @property {number} pageSize
 * @property {string} [platformKey]
 * @property {string} platformName
 * @property {Array} [results]
 * @property {string} sourceId
 * @property {string} sourceType
 * @property {string} status
 * @property {number} totalResults
 */

/**
 * @typedef {Object} ConnectionLoadMatch
 * @property {string} company_id
 * @property {string} id
 */

/**
 * @typedef {Object} ConnectionListMatch
 * @property {string} company_id
 * @property {string} [order_by]
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [query]
 */

/**
 * @typedef {Object} ConnectionCreateData
 * @property {string} company_id
 * @property {Object} [connectionInfo]
 * @property {string} created
 * @property {Array} [dataConnectionErrors]
 * @property {string} id
 * @property {string} integrationId
 * @property {string} integrationKey
 * @property {string} [lastSync]
 * @property {string} linkUrl
 * @property {Object} links
 * @property {number} pageNumber
 * @property {number} pageSize
 * @property {string} [platformKey]
 * @property {string} platformName
 * @property {Array} [results]
 * @property {string} sourceId
 * @property {string} sourceType
 * @property {string} status
 * @property {number} totalResults
 */

/**
 * @typedef {Object} ConnectionUpdateData
 * @property {string} company_id
 * @property {string} id
 * @property {Object} [connectionInfo]
 * @property {string} [created]
 * @property {Array} [dataConnectionErrors]
 * @property {string} [integrationId]
 * @property {string} [integrationKey]
 * @property {string} [lastSync]
 * @property {string} [linkUrl]
 * @property {Object} [links]
 * @property {number} [pageNumber]
 * @property {number} [pageSize]
 * @property {string} [platformKey]
 * @property {string} [platformName]
 * @property {Array} [results]
 * @property {string} [sourceId]
 * @property {string} [sourceType]
 * @property {string} [status]
 * @property {number} [totalResults]
 */

/**
 * @typedef {Object} ConnectionRemoveMatch
 * @property {string} company_id
 * @property {string} id
 */

/**
 * @typedef {Object} ConnectionManagementAccessToken
 * @property {string} [accessToken]
 */

/**
 * @typedef {Object} ConnectionManagementAccessTokenLoadMatch
 * @property {string} company_id
 */

/**
 * @typedef {Object} ConnectionManagementAllowedOrigin
 * @property {Array} [allowedOrigins]
 */

/**
 * @typedef {Object} ConnectionManagementAllowedOriginListMatch
 * @property {Array} [allowedOrigins]
 */

/**
 * @typedef {Object} ConnectionManagementAllowedOriginCreateData
 * @property {Array} [allowedOrigins]
 */

/**
 * @typedef {Object} Custom
 * @property {string} [dataSource]
 * @property {string} [id]
 * @property {Array} [keyBy]
 * @property {number} [pageNumber]
 * @property {number} [pageSize]
 * @property {Object} [requiredData]
 * @property {Array} [results]
 * @property {Array} [sourceModifiedDate]
 * @property {number} [totalResults]
 */

/**
 * @typedef {Object} CustomLoadMatch
 * @property {string} [company_id]
 * @property {string} [connection_id]
 * @property {string} id
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [platform_key]
 */

/**
 * @typedef {Object} CustomUpdateData
 * @property {string} id
 * @property {string} platform_key
 * @property {string} [dataSource]
 * @property {Array} [keyBy]
 * @property {number} [pageNumber]
 * @property {number} [pageSize]
 * @property {Object} [requiredData]
 * @property {Array} [results]
 * @property {Array} [sourceModifiedDate]
 * @property {number} [totalResults]
 */

/**
 * @typedef {Object} DataStatus
 * @property {Object} accountTransactions
 * @property {Object} balanceSheet
 * @property {Object} bankAccounts
 * @property {Object} bankTransactions
 * @property {Object} bankingaccountBalances
 * @property {Object} bankingaccounts
 * @property {Object} bankingtransactionCategories
 * @property {Object} bankingtransactions
 * @property {Object} billCreditNotes
 * @property {Object} billPayments
 * @property {Object} bills
 * @property {Object} cashFlowStatement
 * @property {Object} chartOfAccounts
 * @property {Object} commercecompanyInfo
 * @property {Object} commercecustomers
 * @property {Object} commercedisputes
 * @property {Object} commercelocations
 * @property {Object} commerceorders
 * @property {Object} commercepaymentMethods
 * @property {Object} commercepayments
 * @property {Object} commerceproductCategories
 * @property {Object} commerceproducts
 * @property {Object} commercetaxComponents
 * @property {Object} commercetransactions
 * @property {Object} company
 * @property {Object} creditNotes
 * @property {Object} customers
 * @property {Object} directCosts
 * @property {Object} directIncomes
 * @property {Object} invoices
 * @property {Object} itemReceipts
 * @property {Object} items
 * @property {Object} journalEntries
 * @property {Object} journals
 * @property {Object} paymentMethods
 * @property {Object} payments
 * @property {Object} profitAndLoss
 * @property {Object} purchaseOrders
 * @property {Object} salesOrders
 * @property {Object} suppliers
 * @property {Object} taxRates
 * @property {Object} trackingCategories
 * @property {Object} transfers
 */

/**
 * @typedef {Object} DataStatusLoadMatch
 * @property {string} company_id
 */

/**
 * @typedef {Object} DataType
 */

/**
 * @typedef {Object} History
 */

/**
 * @typedef {Object} Integration
 * @property {string} [dataProvidedBy]
 * @property {Array} [datatypeFeatures]
 * @property {boolean} enabled
 * @property {string} [id]
 * @property {string} [integrationId]
 * @property {boolean} [isBeta]
 * @property {boolean} [isOfflineConnector]
 * @property {string} key
 * @property {Object} links
 * @property {string} logoUrl
 * @property {string} name
 * @property {number} pageNumber
 * @property {number} pageSize
 * @property {Array} [results]
 * @property {string} [sourceId]
 * @property {string} [sourceType]
 * @property {number} totalResults
 */

/**
 * @typedef {Object} IntegrationLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IntegrationListMatch
 * @property {string} [order_by]
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [query]
 */

/**
 * @typedef {Object} Option
 */

/**
 * @typedef {Object} Product
 */

/**
 * @typedef {Object} Profile
 * @property {string} [apiKey]
 * @property {boolean} [confirmCompanyName]
 * @property {string} [iconUrl]
 * @property {string} [logoUrl]
 * @property {string} name
 * @property {string} redirectUrl
 * @property {Array} [whiteListUrls]
 */

/**
 * @typedef {Object} ProfileListMatch
 * @property {string} [apiKey]
 * @property {boolean} [confirmCompanyName]
 * @property {string} [iconUrl]
 * @property {string} [logoUrl]
 * @property {string} [name]
 * @property {string} [redirectUrl]
 * @property {Array} [whiteListUrls]
 */

/**
 * @typedef {Object} ProfileUpdateData
 * @property {string} [apiKey]
 * @property {boolean} [confirmCompanyName]
 * @property {string} [iconUrl]
 * @property {string} [logoUrl]
 * @property {string} [name]
 * @property {string} [redirectUrl]
 * @property {Array} [whiteListUrls]
 */

/**
 * @typedef {Object} PullOperation
 * @property {string} companyId
 * @property {string} [completed]
 * @property {string} connectionId
 * @property {string} dataType
 * @property {string} [errorMessage]
 * @property {string} id
 * @property {boolean} isCompleted
 * @property {boolean} isErrored
 * @property {Object} links
 * @property {number} pageNumber
 * @property {number} pageSize
 * @property {number} progress
 * @property {string} requested
 * @property {Array} [results]
 * @property {string} status
 * @property {string} [statusDescription]
 * @property {number} totalResults
 */

/**
 * @typedef {Object} PullOperationLoadMatch
 * @property {string} company_id
 * @property {string} dataset_id
 */

/**
 * @typedef {Object} PullOperationListMatch
 * @property {string} company_id
 * @property {string} [order_by]
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [query]
 */

/**
 * @typedef {Object} PullOperationCreateData
 * @property {string} company_id
 * @property {string} [connection_id]
 * @property {string} [custom_data_identifier]
 * @property {string} [data_type]
 * @property {string} companyId
 * @property {string} [completed]
 * @property {string} connectionId
 * @property {string} dataType
 * @property {string} [errorMessage]
 * @property {string} id
 * @property {boolean} isCompleted
 * @property {boolean} isErrored
 * @property {Object} links
 * @property {number} pageNumber
 * @property {number} pageSize
 * @property {number} progress
 * @property {string} requested
 * @property {Array} [results]
 * @property {string} status
 * @property {string} [statusDescription]
 * @property {number} totalResults
 */

/**
 * @typedef {Object} Push
 * @property {Array} [changes]
 * @property {string} companyId
 * @property {string} [completedOnUtc]
 * @property {string} dataConnectionKey
 * @property {string} [dataType]
 * @property {string} [errorMessage]
 * @property {string} [id]
 * @property {Object} links
 * @property {number} pageNumber
 * @property {number} pageSize
 * @property {string} pushOperationKey
 * @property {string} requestedOnUtc
 * @property {Array} [results]
 * @property {string} status
 * @property {number} statusCode
 * @property {number} [timeoutInMinutes]
 * @property {number} [timeoutInSeconds]
 * @property {number} totalResults
 * @property {Object} [validation]
 */

/**
 * @typedef {Object} PushLoadMatch
 * @property {string} company_id
 * @property {string} id
 */

/**
 * @typedef {Object} PushListMatch
 * @property {string} company_id
 * @property {string} [order_by]
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [query]
 */

/**
 * @typedef {Object} PushOption
 * @property {string} [description]
 * @property {string} displayName
 * @property {string} [id]
 * @property {Array} [options]
 * @property {Object} [properties]
 * @property {boolean} required
 * @property {string} type
 * @property {Object} [validation]
 */

/**
 * @typedef {Object} PushOptionLoadMatch
 * @property {string} company_id
 * @property {string} connection_id
 * @property {string} id
 */

/**
 * @typedef {Object} Queue
 */

/**
 * @typedef {Object} RefreshData
 */

/**
 * @typedef {Object} RefreshDataCreateData
 * @property {string} company_id
 */

/**
 * @typedef {Object} Setting
 * @property {string} [apiKey]
 * @property {string} [createdDate]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef {Object} SettingListMatch
 * @property {string} [apiKey]
 * @property {string} [createdDate]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef {Object} SettingCreateData
 * @property {string} [apiKey]
 * @property {string} [createdDate]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef {Object} SettingRemoveMatch
 * @property {string} api_key_id
 */

/**
 * @typedef {Object} SupplementalData
 * @property {Object} [supplementalDataConfig]
 */

/**
 * @typedef {Object} SupplementalDataUpdateData
 * @property {string} data_type_id
 * @property {string} platform_key
 * @property {Object} [supplementalDataConfig]
 */

/**
 * @typedef {Object} SupplementalDataConfig
 * @property {string} [dataSource]
 * @property {Object} [pullData]
 * @property {Object} [pushData]
 */

/**
 * @typedef {Object} SupplementalDataConfigLoadMatch
 * @property {string} data_type_id
 * @property {string} platform_key
 */

/**
 * @typedef {Object} Sync
 */

/**
 * @typedef {Object} SyncSetting
 * @property {string} dataType
 * @property {boolean} fetchOnFirstLink
 * @property {boolean} [isLocked]
 * @property {number} [monthsToSync]
 * @property {string} [syncFromUtc]
 * @property {number} [syncFromWindow]
 * @property {number} syncOrder
 * @property {number} syncSchedule
 */

/**
 * @typedef {Object} SyncSettingListMatch
 * @property {string} [dataType]
 * @property {boolean} [fetchOnFirstLink]
 * @property {boolean} [isLocked]
 * @property {number} [monthsToSync]
 * @property {string} [syncFromUtc]
 * @property {number} [syncFromWindow]
 * @property {number} [syncOrder]
 * @property {number} [syncSchedule]
 */

/**
 * @typedef {Object} Validation
 * @property {Array} [errors]
 * @property {Array} [warnings]
 */

/**
 * @typedef {Object} ValidationListMatch
 * @property {string} company_id
 * @property {string} sync_id
 */

/**
 * @typedef {Object} Webhook
 * @property {Array} [companyTags]
 * @property {boolean} [disabled]
 * @property {Array} [eventTypes]
 * @property {string} [id]
 * @property {string} [url]
 */

/**
 * @typedef {Object} WebhookListMatch
 * @property {Array} [companyTags]
 * @property {boolean} [disabled]
 * @property {Array} [eventTypes]
 * @property {string} [id]
 * @property {string} [url]
 */

/**
 * @typedef {Object} WebhookCreateData
 * @property {Array} [companyTags]
 * @property {boolean} [disabled]
 * @property {Array} [eventTypes]
 * @property {string} [id]
 * @property {string} [url]
 */

/**
 * @typedef {Object} WebhookRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} WebhookZapierKey
 * @property {string} [key]
 */

/**
 * @typedef {Object} WebhookZapierKeyCreateData
 * @property {string} [key]
 */

