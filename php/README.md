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
    // load() returns the ENTITY — call data_get() for the Branding record (throws on error).
    $branding = $client->Branding()->load(["platform_key" => "example_platform_key"]);
    print_r($branding->data_get());
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
    "entity" => ["connection" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$connection = $client->Connection()->list();
print_r(array_map(fn($item) => $item->data_get(), $connection));
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

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
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
| `button` | Button branding references. |
| `logo` | Logo branding references. |
| `sourceId` | A source-specific ID used to distinguish between different sources originating from the same data connection. |

Operations: Load.

API path: `/integrations/{platformKey}/branding`

#### Company

| Field | Description |
| --- | --- |
| `created` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | Name of user that created the company in Codat. |
| `dataConnections` |  |
| `description` | Additional information about the company. |
| `id` | Unique identifier for your SMB in Codat. |
| `lastSync` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` |  |
| `name` | The name of the company |
| `pageNumber` | Current page number. |
| `pageSize` | Number of items to return in results array. |
| `products` | An array of products that are currently enabled for the company. |
| `redirect` | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | A list of subsidiary companies owned or controlled by this entity. |
| `results` |  |
| `tags` | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `totalResults` | Total number of items. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/companies/{companyId}/products/{productIdentifier}/refresh`

#### CompanyAccessToken

| Field | Description |
| --- | --- |
| `accessToken` | The access token for the company. |
| `expiresIn` | The number of seconds until the access token expires. |
| `id` |  |
| `tokenType` | The type of token. |

Operations: Load.

API path: `/companies/{companyId}/accessToken`

#### Connection

| Field | Description |
| --- | --- |
| `connectionInfo` |  |
| `created` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` |  |
| `id` | Unique identifier for a company's data connection. |
| `integrationId` | A Codat ID representing the integration. |
| `integrationKey` | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | The link URL your customers can use to authorize access to their business application. |
| `links` |  |
| `pageNumber` | Current page number. |
| `pageSize` | Number of items to return in results array. |
| `platformKey` | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | Name of integration connected to company. |
| `results` |  |
| `sourceId` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | The type of platform of the connection. |
| `status` | The current authorization status of the data connection. |
| `totalResults` | Total number of items. |

Operations: Create, List, Load, Remove, Update.

API path: `/companies/{companyId}/connections`

#### ConnectionManagementAccessToken

| Field | Description |
| --- | --- |
| `accessToken` | Access token that allows SMBs to manage connections that have access to their data. |

Operations: Load.

API path: `/companies/{companyId}/connectionManagement/accessToken`

#### ConnectionManagementAllowedOrigin

| Field | Description |
| --- | --- |
| `allowedOrigins` | An array of allowed origins (i.e. |

Operations: Create, List.

API path: `/connectionManagement/corsSettings`

#### Custom

| Field | Description |
| --- | --- |
| `dataSource` | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `id` |  |
| `keyBy` | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | Current page number. |
| `pageSize` | Number of items to return in results array. |
| `requiredData` | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` |  |
| `sourceModifiedDate` | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | Total number of items. |

Operations: Load, Update.

API path: `/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}`

#### DataStatus

| Field | Description |
| --- | --- |
| `accountTransactions` | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | Describes the state of data in the Codat cache for a company and data type |
| `bills` | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | Describes the state of data in the Codat cache for a company and data type |
| `company` | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | Describes the state of data in the Codat cache for a company and data type |
| `customers` | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | Describes the state of data in the Codat cache for a company and data type |
| `items` | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | Describes the state of data in the Codat cache for a company and data type |
| `journals` | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | Describes the state of data in the Codat cache for a company and data type |
| `payments` | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | Describes the state of data in the Codat cache for a company and data type |

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
| `dataProvidedBy` | The name of the data provider. |
| `datatypeFeatures` |  |
| `enabled` | Whether this integration is enabled for your customers to use. |
| `id` |  |
| `integrationId` | A Codat ID representing the integration. |
| `isBeta` | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | A unique 4-letter key to represent a platform in each integration. |
| `links` |  |
| `logoUrl` | Static url for integration's logo. |
| `name` | Name of integration. |
| `pageNumber` | Current page number. |
| `pageSize` | Number of items to return in results array. |
| `results` |  |
| `sourceId` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | The type of platform of the connection. |
| `totalResults` | Total number of items. |

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
| `apiKey` | The API key for this Codat instance. |
| `confirmCompanyName` | `True` if the company name has been confirmed. |
| `iconUrl` | Static url to your organization's icon. |
| `logoUrl` | Static url to your organization's logo. |
| `name` | The name given to the instance. |
| `redirectUrl` | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | A list of urls that are allowed to communicate with Codat. |

Operations: List, Update.

API path: `/profile`

#### PullOperation

| Field | Description |
| --- | --- |
| `companyId` | Unique identifier of the company associated to this pull operation. |
| `completed` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `connectionId` | Unique identifier of the connection associated to this pull operation. |
| `dataType` | The data type you are requesting in a pull operation. |
| `errorMessage` | A message about a transient or persistent error returned by Codat or the source platform. |
| `id` | Unique identifier of the pull operation. |
| `isCompleted` | `True` if the pull operation is completed successfully. |
| `isErrored` | `True` if the pull operation entered an error state. |
| `links` |  |
| `pageNumber` | Current page number. |
| `pageSize` | Number of items to return in results array. |
| `progress` | An integer signifying the progress of the pull operation. |
| `requested` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` |  |
| `status` | The current status of the dataset. |
| `statusDescription` | Additional information about the dataset status. |
| `totalResults` | Total number of items. |

Operations: Create, List, Load.

API path: `/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}`

#### Push

| Field | Description |
| --- | --- |
| `changes` | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | Unique identifier for a company's data connection. |
| `dataType` | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | A message about the error. |
| `id` |  |
| `links` |  |
| `pageNumber` | Current page number. |
| `pageSize` | Number of items to return in results array. |
| `pushOperationKey` | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | The datetime when the push was requested. |
| `results` |  |
| `status` | The current status of the push operation. |
| `statusCode` | Push status code. |
| `timeoutInMinutes` | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | Total number of items. |
| `validation` | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

Operations: List, Load.

API path: `/companies/{companyId}/push`

#### PushOption

| Field | Description |
| --- | --- |
| `description` | A description of the property. |
| `displayName` | The property's display name. |
| `id` |  |
| `options` |  |
| `properties` |  |
| `required` | The property is required if `True`. |
| `type` | The option type. |
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
| `apiKey` | The API key value used to make authenticated http requests. |
| `createdDate` | The date the entity was created. |
| `id` | Unique identifier for the API key. |
| `name` | A meaningful name assigned to the API key. |

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
| `dataSource` | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | The additional properties that are required when pulling records. |
| `pushData` | The additional properties that are required to create and/or update records. |

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
| `dataType` | Available data types |
| `fetchOnFirstLink` | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | Date from which data should be fetched. |
| `syncFromWindow` | Number of months of data to be fetched. |
| `syncOrder` | The sync in which data types are queued for a sync. |
| `syncSchedule` | Number of hours after which this data type should be refreshed. |

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
| `companyTags` | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | An array of event types the webhook consumer subscribes to. |
| `id` | Unique identifier for the webhook consumer. |
| `url` | The URL that will consume webhook events dispatched by Codat. |

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
| `button` | `array` | Button branding references. |
| `logo` | `array` | Logo branding references. |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Branding record (throws on error).
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
| `created` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `string` | Name of user that created the company in Codat. |
| `dataConnections` | `array` |  |
| `description` | `string` | Additional information about the company. |
| `id` | `string` | Unique identifier for your SMB in Codat. |
| `lastSync` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `array` |  |
| `name` | `string` | The name of the company |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `products` | `array` | An array of products that are currently enabled for the company. |
| `redirect` | `string` | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `array` | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `array` | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `array` |  |
| `tags` | `array` | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `totalResults` | `int` | Total number of items. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Company record (throws on error).
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
    "id" => null, // string
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
| `accessToken` | `string` | The access token for the company. |
| `expiresIn` | `int` | The number of seconds until the access token expires. |
| `id` | `string` |  |
| `tokenType` | `string` | The type of token. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CompanyAccessToken record (throws on error).
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
| `created` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `array` |  |
| `id` | `string` | Unique identifier for a company's data connection. |
| `integrationId` | `string` | A Codat ID representing the integration. |
| `integrationKey` | `string` | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `string` | The link URL your customers can use to authorize access to their business application. |
| `links` | `array` |  |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `platformKey` | `string` | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `string` | Name of integration connected to company. |
| `results` | `array` |  |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | The type of platform of the connection. |
| `status` | `string` | The current authorization status of the data connection. |
| `totalResults` | `int` | Total number of items. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Connection record (throws on error).
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
| `accessToken` | `string` | Access token that allows SMBs to manage connections that have access to their data. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ConnectionManagementAccessToken record (throws on error).
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
| `allowedOrigins` | `array` | An array of allowed origins (i.e. |

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
| `dataSource` | `string` | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `id` | `string` |  |
| `keyBy` | `array` | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `requiredData` | `array` | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `array` |  |
| `sourceModifiedDate` | `array` | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `int` | Total number of items. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Custom record (throws on error).
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
| `accountTransactions` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `company` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `items` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `array` | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `array` | Describes the state of data in the Codat cache for a company and data type |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DataStatus record (throws on error).
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
| `dataProvidedBy` | `string` | The name of the data provider. |
| `datatypeFeatures` | `array` |  |
| `enabled` | `bool` | Whether this integration is enabled for your customers to use. |
| `id` | `string` |  |
| `integrationId` | `string` | A Codat ID representing the integration. |
| `isBeta` | `bool` | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `bool` | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `string` | A unique 4-letter key to represent a platform in each integration. |
| `links` | `array` |  |
| `logoUrl` | `string` | Static url for integration's logo. |
| `name` | `string` | Name of integration. |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `results` | `array` |  |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | The type of platform of the connection. |
| `totalResults` | `int` | Total number of items. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Integration record (throws on error).
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
| `apiKey` | `string` | The API key for this Codat instance. |
| `confirmCompanyName` | `bool` | `True` if the company name has been confirmed. |
| `iconUrl` | `string` | Static url to your organization's icon. |
| `logoUrl` | `string` | Static url to your organization's logo. |
| `name` | `string` | The name given to the instance. |
| `redirectUrl` | `string` | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | `array` | A list of urls that are allowed to communicate with Codat. |

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
| `companyId` | `string` | Unique identifier of the company associated to this pull operation. |
| `completed` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `connectionId` | `string` | Unique identifier of the connection associated to this pull operation. |
| `dataType` | `string` | The data type you are requesting in a pull operation. |
| `errorMessage` | `string` | A message about a transient or persistent error returned by Codat or the source platform. |
| `id` | `string` | Unique identifier of the pull operation. |
| `isCompleted` | `bool` | `True` if the pull operation is completed successfully. |
| `isErrored` | `bool` | `True` if the pull operation entered an error state. |
| `links` | `array` |  |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `progress` | `int` | An integer signifying the progress of the pull operation. |
| `requested` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `array` |  |
| `status` | `string` | The current status of the dataset. |
| `statusDescription` | `string` | Additional information about the dataset status. |
| `totalResults` | `int` | Total number of items. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PullOperation record (throws on error).
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
| `changes` | `array` | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `string` | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `string` | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `string` | Unique identifier for a company's data connection. |
| `dataType` | `string` | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `string` | A message about the error. |
| `id` | `string` |  |
| `links` | `array` |  |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `pushOperationKey` | `string` | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `string` | The datetime when the push was requested. |
| `results` | `array` |  |
| `status` | `string` | The current status of the push operation. |
| `statusCode` | `int` | Push status code. |
| `timeoutInMinutes` | `int` | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `int` | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `int` | Total number of items. |
| `validation` | `array` | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Push record (throws on error).
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
| `description` | `string` | A description of the property. |
| `displayName` | `string` | The property's display name. |
| `id` | `string` |  |
| `options` | `array` |  |
| `properties` | `array` |  |
| `required` | `bool` | The property is required if `True`. |
| `type` | `string` | The option type. |
| `validation` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PushOption record (throws on error).
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
| `apiKey` | `string` | The API key value used to make authenticated http requests. |
| `createdDate` | `string` | The date the entity was created. |
| `id` | `string` | Unique identifier for the API key. |
| `name` | `string` | A meaningful name assigned to the API key. |

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
| `dataSource` | `string` | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `array` | The additional properties that are required when pulling records. |
| `pushData` | `array` | The additional properties that are required to create and/or update records. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SupplementalDataConfig record (throws on error).
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
| `dataType` | `string` | Available data types |
| `fetchOnFirstLink` | `bool` | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `bool` | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | `int` | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | `string` | Date from which data should be fetched. |
| `syncFromWindow` | `int` | Number of months of data to be fetched. |
| `syncOrder` | `int` | The sync in which data types are queued for a sync. |
| `syncSchedule` | `int` | Number of hours after which this data type should be refreshed. |

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
| `companyTags` | `array` | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `bool` | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `array` | An array of event types the webhook consumer subscribes to. |
| `id` | `string` | Unique identifier for the webhook consumer. |
| `url` | `string` | The URL that will consume webhook events dispatched by Codat. |

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

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

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
