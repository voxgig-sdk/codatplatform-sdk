# Codatplatform PHP SDK



The PHP SDK for the Codatplatform API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->AccessToken()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/codatplatform-sdk/releases](https://github.com/voxgig-sdk/codatplatform-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'codatplatform_sdk.php';

$client = new CodatplatformSDK([
    "apikey" => getenv("CODATPLATFORM_APIKEY"),
]);
```

### 3. Load a branding

Branding is nested under platform_key, so provide the `platform_key`.

```php
try {
    // load() returns the bare Branding record (throws on error).
    $branding = $client->Branding()->load(["platform_key" => "example_platform_key"]);
    print_r($branding);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $pushoption = $client->PushOption()->load(["company_id" => "example", "connection_id" => "example", "id" => "example_id"]);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CodatplatformSDK::test([
    "entity" => ["pushoption" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the bare mock record (throws on error).
$pushoption = $client->PushOption()->load(["id" => "test01", "company_id" => "example", "connection_id" => "example"]);
print_r($pushoption);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CodatplatformSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CODATPLATFORM_TEST_LIVE=TRUE
CODATPLATFORM_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CodatplatformSDK

```php
require_once 'codatplatform_sdk.php';
$client = new CodatplatformSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CodatplatformSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CodatplatformSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `AccessToken` | `($data): AccessTokenEntity` | Create an AccessToken entity instance. |
| `All` | `($data): AllEntity` | Create an All entity instance. |
| `ApiKey` | `($data): ApiKeyEntity` | Create an ApiKey entity instance. |
| `Branding` | `($data): BrandingEntity` | Create a Branding entity instance. |
| `Company` | `($data): CompanyEntity` | Create a Company entity instance. |
| `CompanyAccessToken` | `($data): CompanyAccessTokenEntity` | Create a CompanyAccessToken entity instance. |
| `Connection` | `($data): ConnectionEntity` | Create a Connection entity instance. |
| `ConnectionManagementAccessToken` | `($data): ConnectionManagementAccessTokenEntity` | Create a ConnectionManagementAccessToken entity instance. |
| `ConnectionManagementAllowedOrigin` | `($data): ConnectionManagementAllowedOriginEntity` | Create a ConnectionManagementAllowedOrigin entity instance. |
| `Custom` | `($data): CustomEntity` | Create a Custom entity instance. |
| `DataStatus` | `($data): DataStatusEntity` | Create a DataStatus entity instance. |
| `DataType` | `($data): DataTypeEntity` | Create a DataType entity instance. |
| `History` | `($data): HistoryEntity` | Create a History entity instance. |
| `Integration` | `($data): IntegrationEntity` | Create an Integration entity instance. |
| `Option` | `($data): OptionEntity` | Create an Option entity instance. |
| `Product` | `($data): ProductEntity` | Create a Product entity instance. |
| `Profile` | `($data): ProfileEntity` | Create a Profile entity instance. |
| `PullOperation` | `($data): PullOperationEntity` | Create a PullOperation entity instance. |
| `Push` | `($data): PushEntity` | Create a Push entity instance. |
| `PushOption` | `($data): PushOptionEntity` | Create a PushOption entity instance. |
| `Queue` | `($data): QueueEntity` | Create a Queue entity instance. |
| `RefreshData` | `($data): RefreshDataEntity` | Create a RefreshData entity instance. |
| `Setting` | `($data): SettingEntity` | Create a Setting entity instance. |
| `SupplementalData` | `($data): SupplementalDataEntity` | Create a SupplementalData entity instance. |
| `SupplementalDataConfig` | `($data): SupplementalDataConfigEntity` | Create a SupplementalDataConfig entity instance. |
| `Sync` | `($data): SyncEntity` | Create a Sync entity instance. |
| `SyncSetting` | `($data): SyncSettingEntity` | Create a SyncSetting entity instance. |
| `Validation` | `($data): ValidationEntity` | Create a Validation entity instance. |
| `Webhook` | `($data): WebhookEntity` | Create a Webhook entity instance. |
| `WebhookZapierKey` | `($data): WebhookZapierKeyEntity` | Create a WebhookZapierKey entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### AccessToken

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### All

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ApiKey

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Branding

| Field | Description |
| --- | --- |
| `button` |  |
| `logo` |  |
| `sourceId` |  |

Operations: Load.

API path: `/integrations/{platformKey}/branding`

#### Company

| Field | Description |
| --- | --- |
| `created` |  |
| `createdByUserName` |  |
| `dataConnections` |  |
| `description` |  |
| `id` |  |
| `lastSync` |  |
| `links` |  |
| `name` |  |
| `pageNumber` |  |
| `pageSize` |  |
| `products` |  |
| `redirect` |  |
| `referenceParentCompany` |  |
| `referenceSubsidiaryCompanies` |  |
| `results` |  |
| `tags` |  |
| `totalResults` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/companies/{companyId}/products/{productIdentifier}/refresh`

#### CompanyAccessToken

| Field | Description |
| --- | --- |
| `accessToken` |  |
| `expiresIn` |  |
| `tokenType` |  |

Operations: Load.

API path: `/companies/{companyId}/accessToken`

#### Connection

| Field | Description |
| --- | --- |
| `connectionInfo` |  |
| `created` |  |
| `dataConnectionErrors` |  |
| `id` |  |
| `integrationId` |  |
| `integrationKey` |  |
| `lastSync` |  |
| `linkUrl` |  |
| `links` |  |
| `pageNumber` |  |
| `pageSize` |  |
| `platformKey` |  |
| `platformName` |  |
| `results` |  |
| `sourceId` |  |
| `sourceType` |  |
| `status` |  |
| `totalResults` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/companies/{companyId}/connections`

#### ConnectionManagementAccessToken

| Field | Description |
| --- | --- |
| `accessToken` |  |

Operations: Load.

API path: `/companies/{companyId}/connectionManagement/accessToken`

#### ConnectionManagementAllowedOrigin

| Field | Description |
| --- | --- |
| `allowedOrigins` |  |

Operations: Create, List.

API path: `/connectionManagement/corsSettings`

#### Custom

| Field | Description |
| --- | --- |
| `dataSource` |  |
| `keyBy` |  |
| `pageNumber` |  |
| `pageSize` |  |
| `requiredData` |  |
| `results` |  |
| `sourceModifiedDate` |  |
| `totalResults` |  |

Operations: Load, Update.

API path: `/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}`

#### DataStatus

| Field | Description |
| --- | --- |
| `accountTransactions` |  |
| `balanceSheet` |  |
| `bankAccounts` |  |
| `bankTransactions` |  |
| `bankingaccountBalances` |  |
| `bankingaccounts` |  |
| `bankingtransactionCategories` |  |
| `bankingtransactions` |  |
| `billCreditNotes` |  |
| `billPayments` |  |
| `bills` |  |
| `cashFlowStatement` |  |
| `chartOfAccounts` |  |
| `commercecompanyInfo` |  |
| `commercecustomers` |  |
| `commercedisputes` |  |
| `commercelocations` |  |
| `commerceorders` |  |
| `commercepaymentMethods` |  |
| `commercepayments` |  |
| `commerceproductCategories` |  |
| `commerceproducts` |  |
| `commercetaxComponents` |  |
| `commercetransactions` |  |
| `company` |  |
| `creditNotes` |  |
| `customers` |  |
| `directCosts` |  |
| `directIncomes` |  |
| `invoices` |  |
| `itemReceipts` |  |
| `items` |  |
| `journalEntries` |  |
| `journals` |  |
| `paymentMethods` |  |
| `payments` |  |
| `profitAndLoss` |  |
| `purchaseOrders` |  |
| `salesOrders` |  |
| `suppliers` |  |
| `taxRates` |  |
| `trackingCategories` |  |
| `transfers` |  |

Operations: Load.

API path: `/companies/{companyId}/dataStatus`

#### DataType

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### History

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Integration

| Field | Description |
| --- | --- |
| `dataProvidedBy` |  |
| `datatypeFeatures` |  |
| `enabled` |  |
| `integrationId` |  |
| `isBeta` |  |
| `isOfflineConnector` |  |
| `key` |  |
| `links` |  |
| `logoUrl` |  |
| `name` |  |
| `pageNumber` |  |
| `pageSize` |  |
| `results` |  |
| `sourceId` |  |
| `sourceType` |  |
| `totalResults` |  |

Operations: List, Load.

API path: `/integrations`

#### Option

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Product

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Profile

| Field | Description |
| --- | --- |
| `apiKey` |  |
| `confirmCompanyName` |  |
| `iconUrl` |  |
| `logoUrl` |  |
| `name` |  |
| `redirectUrl` |  |
| `whiteListUrls` |  |

Operations: List, Update.

API path: `/profile`

#### PullOperation

| Field | Description |
| --- | --- |
| `companyId` |  |
| `completed` |  |
| `connectionId` |  |
| `dataType` |  |
| `errorMessage` |  |
| `id` |  |
| `isCompleted` |  |
| `isErrored` |  |
| `links` |  |
| `pageNumber` |  |
| `pageSize` |  |
| `progress` |  |
| `requested` |  |
| `results` |  |
| `status` |  |
| `statusDescription` |  |
| `totalResults` |  |

Operations: Create, List, Load.

API path: `/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}`

#### Push

| Field | Description |
| --- | --- |
| `changes` |  |
| `companyId` |  |
| `completedOnUtc` |  |
| `dataConnectionKey` |  |
| `dataType` |  |
| `errorMessage` |  |
| `links` |  |
| `pageNumber` |  |
| `pageSize` |  |
| `pushOperationKey` |  |
| `requestedOnUtc` |  |
| `results` |  |
| `status` |  |
| `statusCode` |  |
| `timeoutInMinutes` |  |
| `timeoutInSeconds` |  |
| `totalResults` |  |
| `validation` |  |

Operations: List, Load.

API path: `/companies/{companyId}/push`

#### PushOption

| Field | Description |
| --- | --- |
| `description` |  |
| `displayName` |  |
| `options` |  |
| `properties` |  |
| `required` |  |
| `type` |  |
| `validation` |  |

Operations: Load.

API path: `/companies/{companyId}/connections/{connectionId}/options/{dataType}`

#### Queue

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### RefreshData

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/companies/{companyId}/data/all`

#### Setting

| Field | Description |
| --- | --- |
| `apiKey` |  |
| `createdDate` |  |
| `id` |  |
| `name` |  |

Operations: Create, List, Remove.

API path: `/apiKeys`

#### SupplementalData

| Field | Description |
| --- | --- |
| `supplementalDataConfig` |  |

Operations: Update.

API path: `/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig`

#### SupplementalDataConfig

| Field | Description |
| --- | --- |
| `dataSource` |  |
| `pullData` |  |
| `pushData` |  |

Operations: Load.

API path: `/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig`

#### Sync

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### SyncSetting

| Field | Description |
| --- | --- |
| `dataType` |  |
| `fetchOnFirstLink` |  |
| `isLocked` |  |
| `monthsToSync` |  |
| `syncFromUtc` |  |
| `syncFromWindow` |  |
| `syncOrder` |  |
| `syncSchedule` |  |

Operations: List.

API path: `/profile/syncSettings`

#### Validation

| Field | Description |
| --- | --- |
| `errors` |  |
| `warnings` |  |

Operations: List.

API path: `/companies/{companyId}/sync/{datasetId}/validation`

#### Webhook

| Field | Description |
| --- | --- |
| `companyTags` |  |
| `disabled` |  |
| `eventTypes` |  |
| `id` |  |
| `url` |  |

Operations: Create, List, Remove.

API path: `/webhooks`

#### WebhookZapierKey

| Field | Description |
| --- | --- |
| `key` |  |

Operations: Create.

API path: `/webhooks/integrationKeys/zapier`



## Entities


### AccessToken

Create an instance: `$access_token = $client->AccessToken();`


### All

Create an instance: `$all = $client->All();`


### ApiKey

Create an instance: `$api_key = $client->ApiKey();`


### Branding

Create an instance: `$branding = $client->Branding();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `button` | `array` |  |
| `logo` | `array` |  |
| `sourceId` | `string` |  |

#### Example: Load

```php
// load() returns the bare Branding record (throws on error).
$branding = $client->Branding()->load(["platform_key" => "platform_key"]);
```


### Company

Create an instance: `$company = $client->Company();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `createdByUserName` | `string` |  |
| `dataConnections` | `array` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `lastSync` | `string` |  |
| `links` | `array` |  |
| `name` | `string` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `products` | `array` |  |
| `redirect` | `string` |  |
| `referenceParentCompany` | `array` |  |
| `referenceSubsidiaryCompanies` | `array` |  |
| `results` | `array` |  |
| `tags` | `array` |  |
| `totalResults` | `int` |  |

#### Example: Load

```php
// load() returns the bare Company record (throws on error).
$company = $client->Company()->load(["id" => "company_id"]);
```

#### Example: List

```php
// list() returns an array of Company records (throws on error).
$companys = $client->Company()->list();
```

#### Example: Create

```php
$company = $client->Company()->create([
    "links" => null, // array
    "name" => null, // string
    "pageNumber" => null, // int
    "pageSize" => null, // int
    "redirect" => null, // string
    "totalResults" => null, // int
]);
```


### CompanyAccessToken

Create an instance: `$company_access_token = $client->CompanyAccessToken();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessToken` | `string` |  |
| `expiresIn` | `int` |  |
| `tokenType` | `string` |  |

#### Example: Load

```php
// load() returns the bare CompanyAccessToken record (throws on error).
$company_access_token = $client->CompanyAccessToken()->load(["id" => "company_access_token_id"]);
```


### Connection

Create an instance: `$connection = $client->Connection();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectionInfo` | `array` |  |
| `created` | `string` |  |
| `dataConnectionErrors` | `array` |  |
| `id` | `string` |  |
| `integrationId` | `string` |  |
| `integrationKey` | `string` |  |
| `lastSync` | `string` |  |
| `linkUrl` | `string` |  |
| `links` | `array` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `platformKey` | `string` |  |
| `platformName` | `string` |  |
| `results` | `array` |  |
| `sourceId` | `string` |  |
| `sourceType` | `string` |  |
| `status` | `string` |  |
| `totalResults` | `int` |  |

#### Example: Load

```php
// load() returns the bare Connection record (throws on error).
$connection = $client->Connection()->load(["id" => "connection_id", "company_id" => "company_id"]);
```

#### Example: List

```php
// list() returns an array of Connection records (throws on error).
$connections = $client->Connection()->list();
```

#### Example: Create

```php
$connection = $client->Connection()->create([
    "company_id" => null, // string
    "created" => null, // string
    "id" => null, // string
    "integrationId" => null, // string
    "integrationKey" => null, // string
    "linkUrl" => null, // string
    "links" => null, // array
    "pageNumber" => null, // int
    "pageSize" => null, // int
    "platformName" => null, // string
    "sourceId" => null, // string
    "sourceType" => null, // string
    "status" => null, // string
    "totalResults" => null, // int
]);
```


### ConnectionManagementAccessToken

Create an instance: `$connection_management_access_token = $client->ConnectionManagementAccessToken();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessToken` | `string` |  |

#### Example: Load

```php
// load() returns the bare ConnectionManagementAccessToken record (throws on error).
$connection_management_access_token = $client->ConnectionManagementAccessToken()->load(["company_id" => "company_id"]);
```


### ConnectionManagementAllowedOrigin

Create an instance: `$connection_management_allowed_origin = $client->ConnectionManagementAllowedOrigin();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowedOrigins` | `array` |  |

#### Example: List

```php
// list() returns an array of ConnectionManagementAllowedOrigin records (throws on error).
$connection_management_allowed_origins = $client->ConnectionManagementAllowedOrigin()->list();
```

#### Example: Create

```php
$connection_management_allowed_origin = $client->ConnectionManagementAllowedOrigin()->create([
]);
```


### Custom

Create an instance: `$custom = $client->Custom();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `string` |  |
| `keyBy` | `array` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `requiredData` | `array` |  |
| `results` | `array` |  |
| `sourceModifiedDate` | `array` |  |
| `totalResults` | `int` |  |

#### Example: Load

```php
// load() returns the bare Custom record (throws on error).
$custom = $client->Custom()->load(["id" => "custom_id"]);
```


### DataStatus

Create an instance: `$data_status = $client->DataStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountTransactions` | `array` |  |
| `balanceSheet` | `array` |  |
| `bankAccounts` | `array` |  |
| `bankTransactions` | `array` |  |
| `bankingaccountBalances` | `array` |  |
| `bankingaccounts` | `array` |  |
| `bankingtransactionCategories` | `array` |  |
| `bankingtransactions` | `array` |  |
| `billCreditNotes` | `array` |  |
| `billPayments` | `array` |  |
| `bills` | `array` |  |
| `cashFlowStatement` | `array` |  |
| `chartOfAccounts` | `array` |  |
| `commercecompanyInfo` | `array` |  |
| `commercecustomers` | `array` |  |
| `commercedisputes` | `array` |  |
| `commercelocations` | `array` |  |
| `commerceorders` | `array` |  |
| `commercepaymentMethods` | `array` |  |
| `commercepayments` | `array` |  |
| `commerceproductCategories` | `array` |  |
| `commerceproducts` | `array` |  |
| `commercetaxComponents` | `array` |  |
| `commercetransactions` | `array` |  |
| `company` | `array` |  |
| `creditNotes` | `array` |  |
| `customers` | `array` |  |
| `directCosts` | `array` |  |
| `directIncomes` | `array` |  |
| `invoices` | `array` |  |
| `itemReceipts` | `array` |  |
| `items` | `array` |  |
| `journalEntries` | `array` |  |
| `journals` | `array` |  |
| `paymentMethods` | `array` |  |
| `payments` | `array` |  |
| `profitAndLoss` | `array` |  |
| `purchaseOrders` | `array` |  |
| `salesOrders` | `array` |  |
| `suppliers` | `array` |  |
| `taxRates` | `array` |  |
| `trackingCategories` | `array` |  |
| `transfers` | `array` |  |

#### Example: Load

```php
// load() returns the bare DataStatus record (throws on error).
$data_status = $client->DataStatus()->load(["company_id" => "company_id"]);
```


### DataType

Create an instance: `$data_type = $client->DataType();`


### History

Create an instance: `$history = $client->History();`


### Integration

Create an instance: `$integration = $client->Integration();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataProvidedBy` | `string` |  |
| `datatypeFeatures` | `array` |  |
| `enabled` | `bool` |  |
| `integrationId` | `string` |  |
| `isBeta` | `bool` |  |
| `isOfflineConnector` | `bool` |  |
| `key` | `string` |  |
| `links` | `array` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `results` | `array` |  |
| `sourceId` | `string` |  |
| `sourceType` | `string` |  |
| `totalResults` | `int` |  |

#### Example: Load

```php
// load() returns the bare Integration record (throws on error).
$integration = $client->Integration()->load(["id" => "integration_id"]);
```

#### Example: List

```php
// list() returns an array of Integration records (throws on error).
$integrations = $client->Integration()->list();
```


### Option

Create an instance: `$option = $client->Option();`


### Product

Create an instance: `$product = $client->Product();`


### Profile

Create an instance: `$profile = $client->Profile();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` |  |
| `confirmCompanyName` | `bool` |  |
| `iconUrl` | `string` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `redirectUrl` | `string` |  |
| `whiteListUrls` | `array` |  |

#### Example: List

```php
// list() returns an array of Profile records (throws on error).
$profiles = $client->Profile()->list();
```


### PullOperation

Create an instance: `$pull_operation = $client->PullOperation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyId` | `string` |  |
| `completed` | `string` |  |
| `connectionId` | `string` |  |
| `dataType` | `string` |  |
| `errorMessage` | `string` |  |
| `id` | `string` |  |
| `isCompleted` | `bool` |  |
| `isErrored` | `bool` |  |
| `links` | `array` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `progress` | `int` |  |
| `requested` | `string` |  |
| `results` | `array` |  |
| `status` | `string` |  |
| `statusDescription` | `string` |  |
| `totalResults` | `int` |  |

#### Example: Load

```php
// load() returns the bare PullOperation record (throws on error).
$pull_operation = $client->PullOperation()->load(["company_id" => "company_id", "dataset_id" => "dataset_id"]);
```

#### Example: List

```php
// list() returns an array of PullOperation records (throws on error).
$pull_operations = $client->PullOperation()->list();
```

#### Example: Create

```php
$pull_operation = $client->PullOperation()->create([
    "company_id" => null, // string
    "companyId" => null, // string
    "connectionId" => null, // string
    "dataType" => null, // string
    "id" => null, // string
    "isCompleted" => null, // bool
    "isErrored" => null, // bool
    "links" => null, // array
    "pageNumber" => null, // int
    "pageSize" => null, // int
    "progress" => null, // int
    "requested" => null, // string
    "status" => null, // string
    "totalResults" => null, // int
]);
```


### Push

Create an instance: `$push = $client->Push();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `changes` | `array` |  |
| `companyId` | `string` |  |
| `completedOnUtc` | `string` |  |
| `dataConnectionKey` | `string` |  |
| `dataType` | `string` |  |
| `errorMessage` | `string` |  |
| `links` | `array` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `pushOperationKey` | `string` |  |
| `requestedOnUtc` | `string` |  |
| `results` | `array` |  |
| `status` | `string` |  |
| `statusCode` | `int` |  |
| `timeoutInMinutes` | `int` |  |
| `timeoutInSeconds` | `int` |  |
| `totalResults` | `int` |  |
| `validation` | `array` |  |

#### Example: Load

```php
// load() returns the bare Push record (throws on error).
$push = $client->Push()->load(["id" => "push_id", "company_id" => "company_id"]);
```

#### Example: List

```php
// list() returns an array of Push records (throws on error).
$pushs = $client->Push()->list();
```


### PushOption

Create an instance: `$push_option = $client->PushOption();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `displayName` | `string` |  |
| `options` | `array` |  |
| `properties` | `array` |  |
| `required` | `bool` |  |
| `type` | `string` |  |
| `validation` | `array` |  |

#### Example: Load

```php
// load() returns the bare PushOption record (throws on error).
$push_option = $client->PushOption()->load(["id" => "push_option_id", "company_id" => "company_id", "connection_id" => "connection_id"]);
```


### Queue

Create an instance: `$queue = $client->Queue();`


### RefreshData

Create an instance: `$refresh_data = $client->RefreshData();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$refresh_data = $client->RefreshData()->create([
    "company_id" => null, // string
]);
```


### Setting

Create an instance: `$setting = $client->Setting();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` |  |
| `createdDate` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |

#### Example: List

```php
// list() returns an array of Setting records (throws on error).
$settings = $client->Setting()->list();
```

#### Example: Create

```php
$setting = $client->Setting()->create([
]);
```


### SupplementalData

Create an instance: `$supplemental_data = $client->SupplementalData();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `supplementalDataConfig` | `array` |  |


### SupplementalDataConfig

Create an instance: `$supplemental_data_config = $client->SupplementalDataConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `string` |  |
| `pullData` | `array` |  |
| `pushData` | `array` |  |

#### Example: Load

```php
// load() returns the bare SupplementalDataConfig record (throws on error).
$supplemental_data_config = $client->SupplementalDataConfig()->load(["data_type_id" => "data_type_id", "platform_key" => "platform_key"]);
```


### Sync

Create an instance: `$sync = $client->Sync();`


### SyncSetting

Create an instance: `$sync_setting = $client->SyncSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataType` | `string` |  |
| `fetchOnFirstLink` | `bool` |  |
| `isLocked` | `bool` |  |
| `monthsToSync` | `int` |  |
| `syncFromUtc` | `string` |  |
| `syncFromWindow` | `int` |  |
| `syncOrder` | `int` |  |
| `syncSchedule` | `int` |  |

#### Example: List

```php
// list() returns an array of SyncSetting records (throws on error).
$sync_settings = $client->SyncSetting()->list();
```


### Validation

Create an instance: `$validation = $client->Validation();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `warnings` | `array` |  |

#### Example: List

```php
// list() returns an array of Validation records (throws on error).
$validations = $client->Validation()->list();
```


### Webhook

Create an instance: `$webhook = $client->Webhook();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyTags` | `array` |  |
| `disabled` | `bool` |  |
| `eventTypes` | `array` |  |
| `id` | `string` |  |
| `url` | `string` |  |

#### Example: List

```php
// list() returns an array of Webhook records (throws on error).
$webhooks = $client->Webhook()->list();
```

#### Example: Create

```php
$webhook = $client->Webhook()->create([
]);
```


### WebhookZapierKey

Create an instance: `$webhook_zapier_key = $client->WebhookZapierKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |

#### Example: Create

```php
$webhook_zapier_key = $client->WebhookZapierKey()->create([
]);
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── codatplatform_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`codatplatform_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$pushoption = $client->PushOption();
$pushoption->load(["company_id" => "example", "connection_id" => "example", "id" => "example_id"]);

// $pushoption->data_get() now returns the pushoption data from the last load
// $pushoption->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
