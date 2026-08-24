# Typed models for the Codatplatform SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AccessToken(TypedDict):
    pass


class All(TypedDict):
    pass


class ApiKey(TypedDict):
    pass


class Branding(TypedDict, total=False):
    button: dict
    logo: dict
    sourceId: str


class BrandingLoadMatch(TypedDict):
    platform_key: str


class CompanyRequired(TypedDict):
    id: str
    links: dict
    name: str
    pageNumber: int
    pageSize: int
    redirect: str
    totalResults: int


class Company(CompanyRequired, total=False):
    created: str
    createdByUserName: str
    dataConnections: list
    description: str
    lastSync: str
    products: list
    referenceParentCompany: dict
    referenceSubsidiaryCompanies: list
    results: list
    tags: dict


class CompanyLoadMatch(TypedDict):
    id: str


class CompanyListMatch(TypedDict, total=False):
    created: str
    createdByUserName: str
    dataConnections: list
    description: str
    id: str
    lastSync: str
    links: dict
    name: str
    pageNumber: int
    pageSize: int
    products: list
    redirect: str
    referenceParentCompany: dict
    referenceSubsidiaryCompanies: list
    results: list
    tags: dict
    totalResults: int


class CompanyCreateDataRequired(TypedDict):
    links: dict
    name: str
    pageNumber: int
    pageSize: int
    redirect: str
    totalResults: int


class CompanyCreateData(CompanyCreateDataRequired, total=False):
    id: str
    product_identifier: str
    created: str
    createdByUserName: str
    dataConnections: list
    description: str
    lastSync: str
    products: list
    referenceParentCompany: dict
    referenceSubsidiaryCompanies: list
    results: list
    tags: dict


class CompanyUpdateDataRequired(TypedDict):
    id: str


class CompanyUpdateData(CompanyUpdateDataRequired, total=False):
    product_identifier: str
    created: str
    createdByUserName: str
    dataConnections: list
    description: str
    lastSync: str
    links: dict
    name: str
    pageNumber: int
    pageSize: int
    products: list
    redirect: str
    referenceParentCompany: dict
    referenceSubsidiaryCompanies: list
    results: list
    tags: dict
    totalResults: int


class CompanyRemoveMatchRequired(TypedDict):
    id: str


class CompanyRemoveMatch(CompanyRemoveMatchRequired, total=False):
    product_identifier: str


class CompanyAccessToken(TypedDict):
    accessToken: str
    expiresIn: int
    tokenType: str


class CompanyAccessTokenLoadMatch(TypedDict):
    id: str


class ConnectionRequired(TypedDict):
    created: str
    id: str
    integrationId: str
    integrationKey: str
    linkUrl: str
    links: dict
    pageNumber: int
    pageSize: int
    platformName: str
    sourceId: str
    sourceType: str
    status: str
    totalResults: int


class Connection(ConnectionRequired, total=False):
    connectionInfo: dict
    dataConnectionErrors: list
    lastSync: str
    platformKey: str
    results: list


class ConnectionLoadMatch(TypedDict):
    company_id: str
    id: str


class ConnectionListMatch(TypedDict):
    company_id: str


class ConnectionCreateDataRequired(TypedDict):
    company_id: str
    created: str
    id: str
    integrationId: str
    integrationKey: str
    linkUrl: str
    links: dict
    pageNumber: int
    pageSize: int
    platformName: str
    sourceId: str
    sourceType: str
    status: str
    totalResults: int


class ConnectionCreateData(ConnectionCreateDataRequired, total=False):
    connectionInfo: dict
    dataConnectionErrors: list
    lastSync: str
    platformKey: str
    results: list


class ConnectionUpdateDataRequired(TypedDict):
    company_id: str
    id: str


class ConnectionUpdateData(ConnectionUpdateDataRequired, total=False):
    connectionInfo: dict
    created: str
    dataConnectionErrors: list
    integrationId: str
    integrationKey: str
    lastSync: str
    linkUrl: str
    links: dict
    pageNumber: int
    pageSize: int
    platformKey: str
    platformName: str
    results: list
    sourceId: str
    sourceType: str
    status: str
    totalResults: int


class ConnectionRemoveMatch(TypedDict):
    company_id: str
    id: str


class ConnectionManagementAccessToken(TypedDict, total=False):
    accessToken: str


class ConnectionManagementAccessTokenLoadMatch(TypedDict):
    company_id: str


class ConnectionManagementAllowedOrigin(TypedDict, total=False):
    allowedOrigins: list


class ConnectionManagementAllowedOriginListMatch(TypedDict, total=False):
    allowedOrigins: list


class ConnectionManagementAllowedOriginCreateData(TypedDict, total=False):
    allowedOrigins: list


class Custom(TypedDict, total=False):
    dataSource: str
    keyBy: list
    pageNumber: int
    pageSize: int
    requiredData: dict
    results: list
    sourceModifiedDate: list
    totalResults: int


class CustomLoadMatchRequired(TypedDict):
    id: str


class CustomLoadMatch(CustomLoadMatchRequired, total=False):
    company_id: str
    connection_id: str
    platform_key: str


class CustomUpdateDataRequired(TypedDict):
    id: str
    platform_key: str


class CustomUpdateData(CustomUpdateDataRequired, total=False):
    dataSource: str
    keyBy: list
    pageNumber: int
    pageSize: int
    requiredData: dict
    results: list
    sourceModifiedDate: list
    totalResults: int


class DataStatus(TypedDict):
    accountTransactions: dict
    balanceSheet: dict
    bankAccounts: dict
    bankTransactions: dict
    bankingaccountBalances: dict
    bankingaccounts: dict
    bankingtransactionCategories: dict
    bankingtransactions: dict
    billCreditNotes: dict
    billPayments: dict
    bills: dict
    cashFlowStatement: dict
    chartOfAccounts: dict
    commercecompanyInfo: dict
    commercecustomers: dict
    commercedisputes: dict
    commercelocations: dict
    commerceorders: dict
    commercepaymentMethods: dict
    commercepayments: dict
    commerceproductCategories: dict
    commerceproducts: dict
    commercetaxComponents: dict
    commercetransactions: dict
    company: dict
    creditNotes: dict
    customers: dict
    directCosts: dict
    directIncomes: dict
    invoices: dict
    itemReceipts: dict
    items: dict
    journalEntries: dict
    journals: dict
    paymentMethods: dict
    payments: dict
    profitAndLoss: dict
    purchaseOrders: dict
    salesOrders: dict
    suppliers: dict
    taxRates: dict
    trackingCategories: dict
    transfers: dict


class DataStatusLoadMatch(TypedDict):
    company_id: str


class DataType(TypedDict):
    pass


class History(TypedDict):
    pass


class IntegrationRequired(TypedDict):
    enabled: bool
    key: str
    links: dict
    logoUrl: str
    name: str
    pageNumber: int
    pageSize: int
    totalResults: int


class Integration(IntegrationRequired, total=False):
    dataProvidedBy: str
    datatypeFeatures: list
    integrationId: str
    isBeta: bool
    isOfflineConnector: bool
    results: list
    sourceId: str
    sourceType: str


class IntegrationLoadMatch(TypedDict):
    id: str


class IntegrationListMatch(TypedDict, total=False):
    dataProvidedBy: str
    datatypeFeatures: list
    enabled: bool
    integrationId: str
    isBeta: bool
    isOfflineConnector: bool
    key: str
    links: dict
    logoUrl: str
    name: str
    pageNumber: int
    pageSize: int
    results: list
    sourceId: str
    sourceType: str
    totalResults: int


class Option(TypedDict):
    pass


class Product(TypedDict):
    pass


class ProfileRequired(TypedDict):
    name: str
    redirectUrl: str


class Profile(ProfileRequired, total=False):
    apiKey: str
    confirmCompanyName: bool
    iconUrl: str
    logoUrl: str
    whiteListUrls: list


class ProfileListMatch(TypedDict, total=False):
    apiKey: str
    confirmCompanyName: bool
    iconUrl: str
    logoUrl: str
    name: str
    redirectUrl: str
    whiteListUrls: list


class ProfileUpdateData(TypedDict, total=False):
    apiKey: str
    confirmCompanyName: bool
    iconUrl: str
    logoUrl: str
    name: str
    redirectUrl: str
    whiteListUrls: list


class PullOperationRequired(TypedDict):
    companyId: str
    connectionId: str
    dataType: str
    id: str
    isCompleted: bool
    isErrored: bool
    links: dict
    pageNumber: int
    pageSize: int
    progress: int
    requested: str
    status: str
    totalResults: int


class PullOperation(PullOperationRequired, total=False):
    completed: str
    errorMessage: str
    results: list
    statusDescription: str


class PullOperationLoadMatch(TypedDict):
    company_id: str
    dataset_id: str


class PullOperationListMatch(TypedDict):
    company_id: str


class PullOperationCreateDataRequired(TypedDict):
    company_id: str
    companyId: str
    connectionId: str
    dataType: str
    id: str
    isCompleted: bool
    isErrored: bool
    links: dict
    pageNumber: int
    pageSize: int
    progress: int
    requested: str
    status: str
    totalResults: int


class PullOperationCreateData(PullOperationCreateDataRequired, total=False):
    connection_id: str
    custom_data_identifier: str
    data_type: str
    completed: str
    errorMessage: str
    results: list
    statusDescription: str


class PushRequired(TypedDict):
    companyId: str
    dataConnectionKey: str
    links: dict
    pageNumber: int
    pageSize: int
    pushOperationKey: str
    requestedOnUtc: str
    status: str
    statusCode: int
    totalResults: int


class Push(PushRequired, total=False):
    changes: list
    completedOnUtc: str
    dataType: str
    errorMessage: str
    results: list
    timeoutInMinutes: int
    timeoutInSeconds: int
    validation: dict


class PushLoadMatch(TypedDict):
    company_id: str
    id: str


class PushListMatch(TypedDict):
    company_id: str


class PushOptionRequired(TypedDict):
    displayName: str
    required: bool
    type: str


class PushOption(PushOptionRequired, total=False):
    description: str
    options: list
    properties: dict
    validation: dict


class PushOptionLoadMatch(TypedDict):
    company_id: str
    connection_id: str
    id: str


class Queue(TypedDict):
    pass


class RefreshData(TypedDict):
    pass


class RefreshDataCreateData(TypedDict):
    company_id: str


class Setting(TypedDict, total=False):
    apiKey: str
    createdDate: str
    id: str
    name: str


class SettingListMatch(TypedDict, total=False):
    apiKey: str
    createdDate: str
    id: str
    name: str


class SettingCreateData(TypedDict, total=False):
    apiKey: str
    createdDate: str
    id: str
    name: str


class SettingRemoveMatch(TypedDict):
    api_key_id: str


class SupplementalData(TypedDict, total=False):
    supplementalDataConfig: dict


class SupplementalDataUpdateDataRequired(TypedDict):
    data_type_id: str
    platform_key: str


class SupplementalDataUpdateData(SupplementalDataUpdateDataRequired, total=False):
    supplementalDataConfig: dict


class SupplementalDataConfig(TypedDict, total=False):
    dataSource: str
    pullData: dict
    pushData: dict


class SupplementalDataConfigLoadMatch(TypedDict):
    data_type_id: str
    platform_key: str


class Sync(TypedDict):
    pass


class SyncSettingRequired(TypedDict):
    dataType: str
    fetchOnFirstLink: bool
    syncOrder: int
    syncSchedule: int


class SyncSetting(SyncSettingRequired, total=False):
    isLocked: bool
    monthsToSync: int
    syncFromUtc: str
    syncFromWindow: int


class SyncSettingListMatch(TypedDict, total=False):
    dataType: str
    fetchOnFirstLink: bool
    isLocked: bool
    monthsToSync: int
    syncFromUtc: str
    syncFromWindow: int
    syncOrder: int
    syncSchedule: int


class Validation(TypedDict, total=False):
    errors: list
    warnings: list


class ValidationListMatch(TypedDict):
    company_id: str
    sync_id: str


class Webhook(TypedDict, total=False):
    companyTags: list
    disabled: bool
    eventTypes: list
    id: str
    url: str


class WebhookListMatch(TypedDict, total=False):
    companyTags: list
    disabled: bool
    eventTypes: list
    id: str
    url: str


class WebhookCreateData(TypedDict, total=False):
    companyTags: list
    disabled: bool
    eventTypes: list
    id: str
    url: str


class WebhookRemoveMatch(TypedDict):
    id: str


class WebhookZapierKey(TypedDict, total=False):
    key: str


class WebhookZapierKeyCreateData(TypedDict, total=False):
    key: str
