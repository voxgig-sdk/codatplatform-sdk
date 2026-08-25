<?php
declare(strict_types=1);

// Typed models for the Codatplatform SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AccessToken entity data model. */
class AccessToken
{
}

/** All entity data model. */
class All
{
}

/** ApiKey entity data model. */
class ApiKey
{
}

/** Branding entity data model. */
class Branding
{
    public ?array $button = null;
    public ?array $logo = null;
    public ?string $sourceId = null;
}

/** Request payload for Branding#load. */
class BrandingLoadMatch
{
    public string $platform_key;
}

/** Company entity data model. */
class Company
{
    public ?string $created = null;
    public ?string $createdByUserName = null;
    public ?array $dataConnections = null;
    public ?string $description = null;
    public string $id;
    public ?string $lastSync = null;
    public array $links;
    public string $name;
    public int $pageNumber;
    public int $pageSize;
    public ?array $products = null;
    public string $redirect;
    public ?array $referenceParentCompany = null;
    public ?array $referenceSubsidiaryCompanies = null;
    public ?array $results = null;
    public ?array $tags = null;
    public int $totalResults;
}

/** Request payload for Company#load. */
class CompanyLoadMatch
{
    public string $id;
}

/** Request payload for Company#list. */
class CompanyListMatch
{
    public ?string $created = null;
    public ?string $createdByUserName = null;
    public ?array $dataConnections = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $lastSync = null;
    public ?array $links = null;
    public ?string $name = null;
    public ?int $pageNumber = null;
    public ?int $pageSize = null;
    public ?array $products = null;
    public ?string $redirect = null;
    public ?array $referenceParentCompany = null;
    public ?array $referenceSubsidiaryCompanies = null;
    public ?array $results = null;
    public ?array $tags = null;
    public ?int $totalResults = null;
}

/** Request payload for Company#create. */
class CompanyCreateData
{
    public ?string $created = null;
    public ?string $createdByUserName = null;
    public ?array $dataConnections = null;
    public ?string $description = null;
    public string $id;
    public ?string $lastSync = null;
    public array $links;
    public string $name;
    public int $pageNumber;
    public int $pageSize;
    public ?array $products = null;
    public string $redirect;
    public ?array $referenceParentCompany = null;
    public ?array $referenceSubsidiaryCompanies = null;
    public ?array $results = null;
    public ?array $tags = null;
    public int $totalResults;
}

/** Request payload for Company#update. */
class CompanyUpdateData
{
    public string $id;
    public ?string $product_identifier = null;
    public ?string $created = null;
    public ?string $createdByUserName = null;
    public ?array $dataConnections = null;
    public ?string $description = null;
    public ?string $lastSync = null;
    public ?array $links = null;
    public ?string $name = null;
    public ?int $pageNumber = null;
    public ?int $pageSize = null;
    public ?array $products = null;
    public ?string $redirect = null;
    public ?array $referenceParentCompany = null;
    public ?array $referenceSubsidiaryCompanies = null;
    public ?array $results = null;
    public ?array $tags = null;
    public ?int $totalResults = null;
}

/** Request payload for Company#remove. */
class CompanyRemoveMatch
{
    public string $id;
    public ?string $product_identifier = null;
}

/** CompanyAccessToken entity data model. */
class CompanyAccessToken
{
    public string $accessToken;
    public int $expiresIn;
    public ?string $id = null;
    public string $tokenType;
}

/** Request payload for CompanyAccessToken#load. */
class CompanyAccessTokenLoadMatch
{
    public string $id;
}

/** Connection entity data model. */
class Connection
{
    public ?array $connectionInfo = null;
    public string $created;
    public ?array $dataConnectionErrors = null;
    public string $id;
    public string $integrationId;
    public string $integrationKey;
    public ?string $lastSync = null;
    public string $linkUrl;
    public array $links;
    public int $pageNumber;
    public int $pageSize;
    public ?string $platformKey = null;
    public string $platformName;
    public ?array $results = null;
    public string $sourceId;
    public string $sourceType;
    public string $status;
    public int $totalResults;
}

/** Request payload for Connection#load. */
class ConnectionLoadMatch
{
    public string $company_id;
    public string $id;
}

/** Request payload for Connection#list. */
class ConnectionListMatch
{
    public string $company_id;
}

/** Request payload for Connection#create. */
class ConnectionCreateData
{
    public string $company_id;
    public ?array $connectionInfo = null;
    public string $created;
    public ?array $dataConnectionErrors = null;
    public string $id;
    public string $integrationId;
    public string $integrationKey;
    public ?string $lastSync = null;
    public string $linkUrl;
    public array $links;
    public int $pageNumber;
    public int $pageSize;
    public ?string $platformKey = null;
    public string $platformName;
    public ?array $results = null;
    public string $sourceId;
    public string $sourceType;
    public string $status;
    public int $totalResults;
}

/** Request payload for Connection#update. */
class ConnectionUpdateData
{
    public string $company_id;
    public string $id;
    public ?array $connectionInfo = null;
    public ?string $created = null;
    public ?array $dataConnectionErrors = null;
    public ?string $integrationId = null;
    public ?string $integrationKey = null;
    public ?string $lastSync = null;
    public ?string $linkUrl = null;
    public ?array $links = null;
    public ?int $pageNumber = null;
    public ?int $pageSize = null;
    public ?string $platformKey = null;
    public ?string $platformName = null;
    public ?array $results = null;
    public ?string $sourceId = null;
    public ?string $sourceType = null;
    public ?string $status = null;
    public ?int $totalResults = null;
}

/** Request payload for Connection#remove. */
class ConnectionRemoveMatch
{
    public string $company_id;
    public string $id;
}

/** ConnectionManagementAccessToken entity data model. */
class ConnectionManagementAccessToken
{
    public ?string $accessToken = null;
}

/** Request payload for ConnectionManagementAccessToken#load. */
class ConnectionManagementAccessTokenLoadMatch
{
    public string $company_id;
}

/** ConnectionManagementAllowedOrigin entity data model. */
class ConnectionManagementAllowedOrigin
{
    public ?array $allowedOrigins = null;
}

/** Request payload for ConnectionManagementAllowedOrigin#list. */
class ConnectionManagementAllowedOriginListMatch
{
    public ?array $allowedOrigins = null;
}

/** Request payload for ConnectionManagementAllowedOrigin#create. */
class ConnectionManagementAllowedOriginCreateData
{
    public ?array $allowedOrigins = null;
}

/** Custom entity data model. */
class Custom
{
    public ?string $dataSource = null;
    public ?string $id = null;
    public ?array $keyBy = null;
    public ?int $pageNumber = null;
    public ?int $pageSize = null;
    public ?array $requiredData = null;
    public ?array $results = null;
    public ?array $sourceModifiedDate = null;
    public ?int $totalResults = null;
}

/** Request payload for Custom#load. */
class CustomLoadMatch
{
    public ?string $company_id = null;
    public ?string $connection_id = null;
    public string $id;
    public ?string $platform_key = null;
}

/** Request payload for Custom#update. */
class CustomUpdateData
{
    public string $id;
    public string $platform_key;
    public ?string $dataSource = null;
    public ?array $keyBy = null;
    public ?int $pageNumber = null;
    public ?int $pageSize = null;
    public ?array $requiredData = null;
    public ?array $results = null;
    public ?array $sourceModifiedDate = null;
    public ?int $totalResults = null;
}

/** DataStatus entity data model. */
class DataStatus
{
    public array $accountTransactions;
    public array $balanceSheet;
    public array $bankAccounts;
    public array $bankTransactions;
    public array $bankingaccountBalances;
    public array $bankingaccounts;
    public array $bankingtransactionCategories;
    public array $bankingtransactions;
    public array $billCreditNotes;
    public array $billPayments;
    public array $bills;
    public array $cashFlowStatement;
    public array $chartOfAccounts;
    public array $commercecompanyInfo;
    public array $commercecustomers;
    public array $commercedisputes;
    public array $commercelocations;
    public array $commerceorders;
    public array $commercepaymentMethods;
    public array $commercepayments;
    public array $commerceproductCategories;
    public array $commerceproducts;
    public array $commercetaxComponents;
    public array $commercetransactions;
    public array $company;
    public array $creditNotes;
    public array $customers;
    public array $directCosts;
    public array $directIncomes;
    public array $invoices;
    public array $itemReceipts;
    public array $items;
    public array $journalEntries;
    public array $journals;
    public array $paymentMethods;
    public array $payments;
    public array $profitAndLoss;
    public array $purchaseOrders;
    public array $salesOrders;
    public array $suppliers;
    public array $taxRates;
    public array $trackingCategories;
    public array $transfers;
}

/** Request payload for DataStatus#load. */
class DataStatusLoadMatch
{
    public string $company_id;
}

/** DataType entity data model. */
class DataType
{
}

/** History entity data model. */
class History
{
}

/** Integration entity data model. */
class Integration
{
    public ?string $dataProvidedBy = null;
    public ?array $datatypeFeatures = null;
    public bool $enabled;
    public ?string $id = null;
    public ?string $integrationId = null;
    public ?bool $isBeta = null;
    public ?bool $isOfflineConnector = null;
    public string $key;
    public array $links;
    public string $logoUrl;
    public string $name;
    public int $pageNumber;
    public int $pageSize;
    public ?array $results = null;
    public ?string $sourceId = null;
    public ?string $sourceType = null;
    public int $totalResults;
}

/** Request payload for Integration#load. */
class IntegrationLoadMatch
{
    public string $id;
}

/** Request payload for Integration#list. */
class IntegrationListMatch
{
    public ?string $dataProvidedBy = null;
    public ?array $datatypeFeatures = null;
    public ?bool $enabled = null;
    public ?string $id = null;
    public ?string $integrationId = null;
    public ?bool $isBeta = null;
    public ?bool $isOfflineConnector = null;
    public ?string $key = null;
    public ?array $links = null;
    public ?string $logoUrl = null;
    public ?string $name = null;
    public ?int $pageNumber = null;
    public ?int $pageSize = null;
    public ?array $results = null;
    public ?string $sourceId = null;
    public ?string $sourceType = null;
    public ?int $totalResults = null;
}

/** Option entity data model. */
class Option
{
}

/** Product entity data model. */
class Product
{
}

/** Profile entity data model. */
class Profile
{
    public ?string $apiKey = null;
    public ?bool $confirmCompanyName = null;
    public ?string $iconUrl = null;
    public ?string $logoUrl = null;
    public string $name;
    public string $redirectUrl;
    public ?array $whiteListUrls = null;
}

/** Request payload for Profile#list. */
class ProfileListMatch
{
    public ?string $apiKey = null;
    public ?bool $confirmCompanyName = null;
    public ?string $iconUrl = null;
    public ?string $logoUrl = null;
    public ?string $name = null;
    public ?string $redirectUrl = null;
    public ?array $whiteListUrls = null;
}

/** Request payload for Profile#update. */
class ProfileUpdateData
{
    public ?string $apiKey = null;
    public ?bool $confirmCompanyName = null;
    public ?string $iconUrl = null;
    public ?string $logoUrl = null;
    public ?string $name = null;
    public ?string $redirectUrl = null;
    public ?array $whiteListUrls = null;
}

/** PullOperation entity data model. */
class PullOperation
{
    public string $companyId;
    public ?string $completed = null;
    public string $connectionId;
    public string $dataType;
    public ?string $errorMessage = null;
    public string $id;
    public bool $isCompleted;
    public bool $isErrored;
    public array $links;
    public int $pageNumber;
    public int $pageSize;
    public int $progress;
    public string $requested;
    public ?array $results = null;
    public string $status;
    public ?string $statusDescription = null;
    public int $totalResults;
}

/** Request payload for PullOperation#load. */
class PullOperationLoadMatch
{
    public string $company_id;
    public string $dataset_id;
}

/** Request payload for PullOperation#list. */
class PullOperationListMatch
{
    public string $company_id;
}

/** Request payload for PullOperation#create. */
class PullOperationCreateData
{
    public string $company_id;
    public ?string $connection_id = null;
    public ?string $custom_data_identifier = null;
    public ?string $data_type = null;
    public string $companyId;
    public ?string $completed = null;
    public string $connectionId;
    public string $dataType;
    public ?string $errorMessage = null;
    public string $id;
    public bool $isCompleted;
    public bool $isErrored;
    public array $links;
    public int $pageNumber;
    public int $pageSize;
    public int $progress;
    public string $requested;
    public ?array $results = null;
    public string $status;
    public ?string $statusDescription = null;
    public int $totalResults;
}

/** Push entity data model. */
class Push
{
    public ?array $changes = null;
    public string $companyId;
    public ?string $completedOnUtc = null;
    public string $dataConnectionKey;
    public ?string $dataType = null;
    public ?string $errorMessage = null;
    public ?string $id = null;
    public array $links;
    public int $pageNumber;
    public int $pageSize;
    public string $pushOperationKey;
    public string $requestedOnUtc;
    public ?array $results = null;
    public string $status;
    public int $statusCode;
    public ?int $timeoutInMinutes = null;
    public ?int $timeoutInSeconds = null;
    public int $totalResults;
    public ?array $validation = null;
}

/** Request payload for Push#load. */
class PushLoadMatch
{
    public string $company_id;
    public string $id;
}

/** Request payload for Push#list. */
class PushListMatch
{
    public string $company_id;
}

/** PushOption entity data model. */
class PushOption
{
    public ?string $description = null;
    public string $displayName;
    public ?string $id = null;
    public ?array $options = null;
    public ?array $properties = null;
    public bool $required;
    public string $type;
    public ?array $validation = null;
}

/** Request payload for PushOption#load. */
class PushOptionLoadMatch
{
    public string $company_id;
    public string $connection_id;
    public string $id;
}

/** Queue entity data model. */
class Queue
{
}

/** RefreshData entity data model. */
class RefreshData
{
}

/** Request payload for RefreshData#create. */
class RefreshDataCreateData
{
    public string $company_id;
}

/** Setting entity data model. */
class Setting
{
    public ?string $apiKey = null;
    public ?string $createdDate = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** Request payload for Setting#list. */
class SettingListMatch
{
    public ?string $apiKey = null;
    public ?string $createdDate = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** Request payload for Setting#create. */
class SettingCreateData
{
    public ?string $apiKey = null;
    public ?string $createdDate = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** Request payload for Setting#remove. */
class SettingRemoveMatch
{
    public string $api_key_id;
}

/** SupplementalData entity data model. */
class SupplementalData
{
    public ?array $supplementalDataConfig = null;
}

/** Request payload for SupplementalData#update. */
class SupplementalDataUpdateData
{
    public string $data_type_id;
    public string $platform_key;
    public ?array $supplementalDataConfig = null;
}

/** SupplementalDataConfig entity data model. */
class SupplementalDataConfig
{
    public ?string $dataSource = null;
    public ?array $pullData = null;
    public ?array $pushData = null;
}

/** Request payload for SupplementalDataConfig#load. */
class SupplementalDataConfigLoadMatch
{
    public string $data_type_id;
    public string $platform_key;
}

/** Sync entity data model. */
class Sync
{
}

/** SyncSetting entity data model. */
class SyncSetting
{
    public string $dataType;
    public bool $fetchOnFirstLink;
    public ?bool $isLocked = null;
    public ?int $monthsToSync = null;
    public ?string $syncFromUtc = null;
    public ?int $syncFromWindow = null;
    public int $syncOrder;
    public int $syncSchedule;
}

/** Request payload for SyncSetting#list. */
class SyncSettingListMatch
{
    public ?string $dataType = null;
    public ?bool $fetchOnFirstLink = null;
    public ?bool $isLocked = null;
    public ?int $monthsToSync = null;
    public ?string $syncFromUtc = null;
    public ?int $syncFromWindow = null;
    public ?int $syncOrder = null;
    public ?int $syncSchedule = null;
}

/** Validation entity data model. */
class Validation
{
    public ?array $errors = null;
    public ?array $warnings = null;
}

/** Request payload for Validation#list. */
class ValidationListMatch
{
    public string $company_id;
    public string $sync_id;
}

/** Webhook entity data model. */
class Webhook
{
    public ?array $companyTags = null;
    public ?bool $disabled = null;
    public ?array $eventTypes = null;
    public ?string $id = null;
    public ?string $url = null;
}

/** Request payload for Webhook#list. */
class WebhookListMatch
{
    public ?array $companyTags = null;
    public ?bool $disabled = null;
    public ?array $eventTypes = null;
    public ?string $id = null;
    public ?string $url = null;
}

/** Request payload for Webhook#create. */
class WebhookCreateData
{
    public ?array $companyTags = null;
    public ?bool $disabled = null;
    public ?array $eventTypes = null;
    public ?string $id = null;
    public ?string $url = null;
}

/** Request payload for Webhook#remove. */
class WebhookRemoveMatch
{
    public string $id;
}

/** WebhookZapierKey entity data model. */
class WebhookZapierKey
{
    public ?string $key = null;
}

/** Request payload for WebhookZapierKey#create. */
class WebhookZapierKeyCreateData
{
    public ?string $key = null;
}

