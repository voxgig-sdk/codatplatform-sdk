export interface AccessToken {
}
export interface All {
}
export interface ApiKey {
}
export interface Branding {
    button?: Record<string, any>;
    logo?: Record<string, any>;
    sourceId?: string;
}
export interface BrandingLoadMatch {
    platform_key: string;
}
export interface Company {
    created?: string;
    createdByUserName?: string;
    dataConnections?: any[];
    description?: string;
    id: string;
    lastSync?: string;
    links: Record<string, any>;
    name: string;
    pageNumber: number;
    pageSize: number;
    products?: any[];
    redirect: string;
    referenceParentCompany?: Record<string, any>;
    referenceSubsidiaryCompanies?: any[];
    results?: any[];
    tags?: Record<string, any>;
    totalResults: number;
}
export interface CompanyLoadMatch {
    id: string;
}
export interface CompanyListMatch {
    order_by?: string;
    page?: number;
    page_size?: number;
    query?: string;
    tag?: string;
}
export interface CompanyCreateData {
    created?: string;
    createdByUserName?: string;
    dataConnections?: any[];
    description?: string;
    id: string;
    lastSync?: string;
    links: Record<string, any>;
    name: string;
    pageNumber: number;
    pageSize: number;
    products?: any[];
    redirect: string;
    referenceParentCompany?: Record<string, any>;
    referenceSubsidiaryCompanies?: any[];
    results?: any[];
    tags?: Record<string, any>;
    totalResults: number;
    $action?: string;
    [action: string]: any;
}
export interface CompanyUpdateData {
    id: string;
    product_identifier?: string;
    created?: string;
    createdByUserName?: string;
    dataConnections?: any[];
    description?: string;
    lastSync?: string;
    links?: Record<string, any>;
    name?: string;
    pageNumber?: number;
    pageSize?: number;
    products?: any[];
    redirect?: string;
    referenceParentCompany?: Record<string, any>;
    referenceSubsidiaryCompanies?: any[];
    results?: any[];
    tags?: Record<string, any>;
    totalResults?: number;
}
export interface CompanyRemoveMatch {
    id: string;
    product_identifier?: string;
}
export interface CompanyAccessToken {
    accessToken: string;
    expiresIn: number;
    id?: string;
    tokenType: string;
}
export interface CompanyAccessTokenLoadMatch {
    id: string;
}
export interface Connection {
    connectionInfo?: Record<string, any>;
    created: string;
    dataConnectionErrors?: any[];
    id: string;
    integrationId: string;
    integrationKey: string;
    lastSync?: string;
    linkUrl: string;
    links: Record<string, any>;
    pageNumber: number;
    pageSize: number;
    platformKey?: string;
    platformName: string;
    results?: any[];
    sourceId: string;
    sourceType: string;
    status: string;
    totalResults: number;
}
export interface ConnectionLoadMatch {
    company_id: string;
    id: string;
}
export interface ConnectionListMatch {
    company_id: string;
    order_by?: string;
    page?: number;
    page_size?: number;
    query?: string;
}
export interface ConnectionCreateData {
    company_id: string;
    connectionInfo?: Record<string, any>;
    created: string;
    dataConnectionErrors?: any[];
    id: string;
    integrationId: string;
    integrationKey: string;
    lastSync?: string;
    linkUrl: string;
    links: Record<string, any>;
    pageNumber: number;
    pageSize: number;
    platformKey?: string;
    platformName: string;
    results?: any[];
    sourceId: string;
    sourceType: string;
    status: string;
    totalResults: number;
}
export interface ConnectionUpdateData {
    company_id: string;
    id: string;
    connectionInfo?: Record<string, any>;
    created?: string;
    dataConnectionErrors?: any[];
    integrationId?: string;
    integrationKey?: string;
    lastSync?: string;
    linkUrl?: string;
    links?: Record<string, any>;
    pageNumber?: number;
    pageSize?: number;
    platformKey?: string;
    platformName?: string;
    results?: any[];
    sourceId?: string;
    sourceType?: string;
    status?: string;
    totalResults?: number;
    $action?: string;
    [action: string]: any;
}
export interface ConnectionRemoveMatch {
    company_id: string;
    id: string;
}
export interface ConnectionManagementAccessToken {
    accessToken?: string;
}
export interface ConnectionManagementAccessTokenLoadMatch {
    company_id: string;
}
export interface ConnectionManagementAllowedOrigin {
    allowedOrigins?: any[];
}
export interface ConnectionManagementAllowedOriginListMatch {
    allowedOrigins?: any[];
}
export interface ConnectionManagementAllowedOriginCreateData {
    allowedOrigins?: any[];
}
export interface Custom {
    dataSource?: string;
    id?: string;
    keyBy?: any[];
    pageNumber?: number;
    pageSize?: number;
    requiredData?: Record<string, any>;
    results?: any[];
    sourceModifiedDate?: any[];
    totalResults?: number;
}
export interface CustomLoadMatch {
    company_id?: string;
    connection_id?: string;
    id: string;
    page?: number;
    page_size?: number;
    platform_key?: string;
}
export interface CustomUpdateData {
    id: string;
    platform_key: string;
    dataSource?: string;
    keyBy?: any[];
    pageNumber?: number;
    pageSize?: number;
    requiredData?: Record<string, any>;
    results?: any[];
    sourceModifiedDate?: any[];
    totalResults?: number;
}
export interface DataStatus {
    accountTransactions: Record<string, any>;
    balanceSheet: Record<string, any>;
    bankAccounts: Record<string, any>;
    bankTransactions: Record<string, any>;
    bankingaccountBalances: Record<string, any>;
    bankingaccounts: Record<string, any>;
    bankingtransactionCategories: Record<string, any>;
    bankingtransactions: Record<string, any>;
    billCreditNotes: Record<string, any>;
    billPayments: Record<string, any>;
    bills: Record<string, any>;
    cashFlowStatement: Record<string, any>;
    chartOfAccounts: Record<string, any>;
    commercecompanyInfo: Record<string, any>;
    commercecustomers: Record<string, any>;
    commercedisputes: Record<string, any>;
    commercelocations: Record<string, any>;
    commerceorders: Record<string, any>;
    commercepaymentMethods: Record<string, any>;
    commercepayments: Record<string, any>;
    commerceproductCategories: Record<string, any>;
    commerceproducts: Record<string, any>;
    commercetaxComponents: Record<string, any>;
    commercetransactions: Record<string, any>;
    company: Record<string, any>;
    creditNotes: Record<string, any>;
    customers: Record<string, any>;
    directCosts: Record<string, any>;
    directIncomes: Record<string, any>;
    invoices: Record<string, any>;
    itemReceipts: Record<string, any>;
    items: Record<string, any>;
    journalEntries: Record<string, any>;
    journals: Record<string, any>;
    paymentMethods: Record<string, any>;
    payments: Record<string, any>;
    profitAndLoss: Record<string, any>;
    purchaseOrders: Record<string, any>;
    salesOrders: Record<string, any>;
    suppliers: Record<string, any>;
    taxRates: Record<string, any>;
    trackingCategories: Record<string, any>;
    transfers: Record<string, any>;
}
export interface DataStatusLoadMatch {
    company_id: string;
}
export interface DataType {
}
export interface History {
}
export interface Integration {
    dataProvidedBy?: string;
    datatypeFeatures?: any[];
    enabled: boolean;
    id?: string;
    integrationId?: string;
    isBeta?: boolean;
    isOfflineConnector?: boolean;
    key: string;
    links: Record<string, any>;
    logoUrl: string;
    name: string;
    pageNumber: number;
    pageSize: number;
    results?: any[];
    sourceId?: string;
    sourceType?: string;
    totalResults: number;
}
export interface IntegrationLoadMatch {
    id: string;
}
export interface IntegrationListMatch {
    order_by?: string;
    page?: number;
    page_size?: number;
    query?: string;
}
export interface Option {
}
export interface Product {
}
export interface Profile {
    apiKey?: string;
    confirmCompanyName?: boolean;
    iconUrl?: string;
    logoUrl?: string;
    name: string;
    redirectUrl: string;
    whiteListUrls?: any[];
}
export interface ProfileListMatch {
    apiKey?: string;
    confirmCompanyName?: boolean;
    iconUrl?: string;
    logoUrl?: string;
    name?: string;
    redirectUrl?: string;
    whiteListUrls?: any[];
}
export interface ProfileUpdateData {
    apiKey?: string;
    confirmCompanyName?: boolean;
    iconUrl?: string;
    logoUrl?: string;
    name?: string;
    redirectUrl?: string;
    whiteListUrls?: any[];
}
export interface PullOperation {
    companyId: string;
    completed?: string;
    connectionId: string;
    dataType: string;
    errorMessage?: string;
    id: string;
    isCompleted: boolean;
    isErrored: boolean;
    links: Record<string, any>;
    pageNumber: number;
    pageSize: number;
    progress: number;
    requested: string;
    results?: any[];
    status: string;
    statusDescription?: string;
    totalResults: number;
}
export interface PullOperationLoadMatch {
    company_id: string;
    dataset_id: string;
}
export interface PullOperationListMatch {
    company_id: string;
    order_by?: string;
    page?: number;
    page_size?: number;
    query?: string;
}
export interface PullOperationCreateData {
    company_id: string;
    connection_id?: string;
    custom_data_identifier?: string;
    data_type?: string;
    companyId: string;
    completed?: string;
    connectionId: string;
    dataType: string;
    errorMessage?: string;
    id: string;
    isCompleted: boolean;
    isErrored: boolean;
    links: Record<string, any>;
    pageNumber: number;
    pageSize: number;
    progress: number;
    requested: string;
    results?: any[];
    status: string;
    statusDescription?: string;
    totalResults: number;
}
export interface Push {
    changes?: any[];
    companyId: string;
    completedOnUtc?: string;
    dataConnectionKey: string;
    dataType?: string;
    errorMessage?: string;
    id?: string;
    links: Record<string, any>;
    pageNumber: number;
    pageSize: number;
    pushOperationKey: string;
    requestedOnUtc: string;
    results?: any[];
    status: string;
    statusCode: number;
    timeoutInMinutes?: number;
    timeoutInSeconds?: number;
    totalResults: number;
    validation?: Record<string, any>;
}
export interface PushLoadMatch {
    company_id: string;
    id: string;
}
export interface PushListMatch {
    company_id: string;
    order_by?: string;
    page?: number;
    page_size?: number;
    query?: string;
}
export interface PushOption {
    description?: string;
    displayName: string;
    id?: string;
    options?: any[];
    properties?: Record<string, any>;
    required: boolean;
    type: string;
    validation?: Record<string, any>;
}
export interface PushOptionLoadMatch {
    company_id: string;
    connection_id: string;
    id: string;
}
export interface Queue {
}
export interface RefreshData {
}
export interface RefreshDataCreateData {
    company_id: string;
}
export interface Setting {
    apiKey?: string;
    createdDate?: string;
    id?: string;
    name?: string;
}
export interface SettingListMatch {
    apiKey?: string;
    createdDate?: string;
    id?: string;
    name?: string;
}
export interface SettingCreateData {
    apiKey?: string;
    createdDate?: string;
    id?: string;
    name?: string;
}
export interface SettingRemoveMatch {
    api_key_id: string;
}
export interface SupplementalData {
    supplementalDataConfig?: Record<string, any>;
}
export interface SupplementalDataUpdateData {
    data_type_id: string;
    platform_key: string;
    supplementalDataConfig?: Record<string, any>;
}
export interface SupplementalDataConfig {
    dataSource?: string;
    pullData?: Record<string, any>;
    pushData?: Record<string, any>;
}
export interface SupplementalDataConfigLoadMatch {
    data_type_id: string;
    platform_key: string;
}
export interface Sync {
}
export interface SyncSetting {
    dataType: string;
    fetchOnFirstLink: boolean;
    isLocked?: boolean;
    monthsToSync?: number;
    syncFromUtc?: string;
    syncFromWindow?: number;
    syncOrder: number;
    syncSchedule: number;
}
export interface SyncSettingListMatch {
    dataType?: string;
    fetchOnFirstLink?: boolean;
    isLocked?: boolean;
    monthsToSync?: number;
    syncFromUtc?: string;
    syncFromWindow?: number;
    syncOrder?: number;
    syncSchedule?: number;
}
export interface Validation {
    errors?: any[];
    warnings?: any[];
}
export interface ValidationListMatch {
    company_id: string;
    sync_id: string;
}
export interface Webhook {
    companyTags?: any[];
    disabled?: boolean;
    eventTypes?: any[];
    id?: string;
    url?: string;
}
export interface WebhookListMatch {
    companyTags?: any[];
    disabled?: boolean;
    eventTypes?: any[];
    id?: string;
    url?: string;
}
export interface WebhookCreateData {
    companyTags?: any[];
    disabled?: boolean;
    eventTypes?: any[];
    id?: string;
    url?: string;
}
export interface WebhookRemoveMatch {
    id: string;
}
export interface WebhookZapierKey {
    key?: string;
}
export interface WebhookZapierKeyCreateData {
    key?: string;
}
