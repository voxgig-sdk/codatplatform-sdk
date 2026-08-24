# Codatplatform PHP SDK Reference

Complete API reference for the Codatplatform PHP SDK.


## CodatplatformSDK

### Constructor

```php
require_once __DIR__ . '/codatplatform_sdk.php';

$client = new CodatplatformSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CodatplatformSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CodatplatformSDK::test();
```


### Instance Methods

#### `AccessToken($data = null)`

Create a new `AccessTokenEntity` instance. Pass `null` for no initial data.

#### `All($data = null)`

Create a new `AllEntity` instance. Pass `null` for no initial data.

#### `ApiKey($data = null)`

Create a new `ApiKeyEntity` instance. Pass `null` for no initial data.

#### `Branding($data = null)`

Create a new `BrandingEntity` instance. Pass `null` for no initial data.

#### `Company($data = null)`

Create a new `CompanyEntity` instance. Pass `null` for no initial data.

#### `CompanyAccessToken($data = null)`

Create a new `CompanyAccessTokenEntity` instance. Pass `null` for no initial data.

#### `Connection($data = null)`

Create a new `ConnectionEntity` instance. Pass `null` for no initial data.

#### `ConnectionManagementAccessToken($data = null)`

Create a new `ConnectionManagementAccessTokenEntity` instance. Pass `null` for no initial data.

#### `ConnectionManagementAllowedOrigin($data = null)`

Create a new `ConnectionManagementAllowedOriginEntity` instance. Pass `null` for no initial data.

#### `Custom($data = null)`

Create a new `CustomEntity` instance. Pass `null` for no initial data.

#### `DataStatus($data = null)`

Create a new `DataStatusEntity` instance. Pass `null` for no initial data.

#### `DataType($data = null)`

Create a new `DataTypeEntity` instance. Pass `null` for no initial data.

#### `History($data = null)`

Create a new `HistoryEntity` instance. Pass `null` for no initial data.

#### `Integration($data = null)`

Create a new `IntegrationEntity` instance. Pass `null` for no initial data.

#### `Option($data = null)`

Create a new `OptionEntity` instance. Pass `null` for no initial data.

#### `Product($data = null)`

Create a new `ProductEntity` instance. Pass `null` for no initial data.

#### `Profile($data = null)`

Create a new `ProfileEntity` instance. Pass `null` for no initial data.

#### `PullOperation($data = null)`

Create a new `PullOperationEntity` instance. Pass `null` for no initial data.

#### `Push($data = null)`

Create a new `PushEntity` instance. Pass `null` for no initial data.

#### `PushOption($data = null)`

Create a new `PushOptionEntity` instance. Pass `null` for no initial data.

#### `Queue($data = null)`

Create a new `QueueEntity` instance. Pass `null` for no initial data.

#### `RefreshData($data = null)`

Create a new `RefreshDataEntity` instance. Pass `null` for no initial data.

#### `Setting($data = null)`

Create a new `SettingEntity` instance. Pass `null` for no initial data.

#### `SupplementalData($data = null)`

Create a new `SupplementalDataEntity` instance. Pass `null` for no initial data.

#### `SupplementalDataConfig($data = null)`

Create a new `SupplementalDataConfigEntity` instance. Pass `null` for no initial data.

#### `Sync($data = null)`

Create a new `SyncEntity` instance. Pass `null` for no initial data.

#### `SyncSetting($data = null)`

Create a new `SyncSettingEntity` instance. Pass `null` for no initial data.

#### `Validation($data = null)`

Create a new `ValidationEntity` instance. Pass `null` for no initial data.

#### `Webhook($data = null)`

Create a new `WebhookEntity` instance. Pass `null` for no initial data.

#### `WebhookZapierKey($data = null)`

Create a new `WebhookZapierKeyEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CodatplatformUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AccessTokenEntity

```php
$access_token = $client->AccessToken();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccessTokenEntity`

Create a new `AccessTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AllEntity

```php
$all = $client->All();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AllEntity`

Create a new `AllEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiKeyEntity

```php
$api_key = $client->ApiKey();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiKeyEntity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BrandingEntity

```php
$branding = $client->Branding();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `button` | `array` | No | Button branding references. |
| `logo` | `array` | No | Logo branding references. |
| `sourceId` | `string` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Branding()->load(["platform_key" => "platform_key"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BrandingEntity`

Create a new `BrandingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompanyEntity

```php
$company = $client->Company();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `string` | No | Name of user that created the company in Codat. |
| `dataConnections` | `array` | No |  |
| `description` | `string` | No | Additional information about the company. |
| `id` | `string` | Yes | Unique identifier for your SMB in Codat. |
| `lastSync` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `array` | Yes |  |
| `name` | `string` | Yes | The name of the company |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `products` | `array` | No | An array of products that are currently enabled for the company. |
| `redirect` | `string` | Yes | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `array` | No | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `array` | No | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `array` | No |  |
| `tags` | `array` | No | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `totalResults` | `int` | Yes | Total number of items. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created` | - | - | - | - | - |
| `createdByUserName` | - | - | - | - | - |
| `dataConnections` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `lastSync` | - | - | - | - | - |
| `links` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `pageNumber` | - | - | - | - | - |
| `pageSize` | - | - | - | - | - |
| `products` | - | - | - | - | - |
| `redirect` | - | - | - | - | - |
| `referenceParentCompany` | - | - | - | - | - |
| `referenceSubsidiaryCompanies` | - | - | - | - | - |
| `results` | - | - | - | - | - |
| `tags` | - | - | - | - | - |
| `totalResults` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Company()->create([
  "id" => null, // string
  "links" => null, // array
  "name" => null, // string
  "pageNumber" => null, // int
  "pageSize" => null, // int
  "redirect" => null, // string
  "totalResults" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Company()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Company()->load(["id" => "company_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Company()->remove(["id" => "company_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Company()->update([
  "id" => "company_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompanyEntity`

Create a new `CompanyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompanyAccessTokenEntity

```php
$company_access_token = $client->CompanyAccessToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `string` | Yes | The access token for the company. |
| `expiresIn` | `int` | Yes | The number of seconds until the access token expires. |
| `tokenType` | `string` | Yes | The type of token. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CompanyAccessToken()->load(["id" => "company_access_token_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompanyAccessTokenEntity`

Create a new `CompanyAccessTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectionEntity

```php
$connection = $client->Connection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectionInfo` | `array` | No |  |
| `created` | `string` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `array` | No |  |
| `id` | `string` | Yes | Unique identifier for a company's data connection. |
| `integrationId` | `string` | Yes | A Codat ID representing the integration. |
| `integrationKey` | `string` | Yes | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `string` | Yes | The link URL your customers can use to authorize access to their business application. |
| `links` | `array` | Yes |  |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `platformKey` | `string` | No | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `string` | Yes | Name of integration connected to company. |
| `results` | `array` | No |  |
| `sourceId` | `string` | Yes | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | Yes | The type of platform of the connection. |
| `status` | `string` | Yes | The current authorization status of the data connection. |
| `totalResults` | `int` | Yes | Total number of items. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `connectionInfo` | - | - | - | - | - |
| `created` | - | - | - | - | - |
| `dataConnectionErrors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `integrationId` | - | - | - | - | - |
| `integrationKey` | - | - | - | - | - |
| `lastSync` | - | - | - | - | - |
| `linkUrl` | - | - | - | - | - |
| `links` | - | - | - | - | - |
| `pageNumber` | - | - | - | - | - |
| `pageSize` | - | - | - | - | - |
| `platformKey` | - | - | - | - | - |
| `platformName` | - | - | - | - | - |
| `results` | - | - | - | - | - |
| `sourceId` | - | - | - | - | - |
| `sourceType` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `totalResults` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Connection()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Connection()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Connection()->load(["id" => "connection_id", "company_id" => "company_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Connection()->remove(["id" => "connection_id", "company_id" => "company_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Connection()->update([
  "id" => "connection_id",
  "company_id" => "company_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectionEntity`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectionManagementAccessTokenEntity

```php
$connection_management_access_token = $client->ConnectionManagementAccessToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `string` | No | Access token that allows SMBs to manage connections that have access to their data. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConnectionManagementAccessToken()->load(["company_id" => "company_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectionManagementAccessTokenEntity`

Create a new `ConnectionManagementAccessTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectionManagementAllowedOriginEntity

```php
$connection_management_allowed_origin = $client->ConnectionManagementAllowedOrigin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedOrigins` | `array` | No | An array of allowed origins (i.e. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConnectionManagementAllowedOrigin()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConnectionManagementAllowedOrigin()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectionManagementAllowedOriginEntity`

Create a new `ConnectionManagementAllowedOriginEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomEntity

```php
$custom = $client->Custom();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `string` | No | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `keyBy` | `array` | No | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `int` | No | Current page number. |
| `pageSize` | `int` | No | Number of items to return in results array. |
| `requiredData` | `array` | No | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `array` | No |  |
| `sourceModifiedDate` | `array` | No | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `int` | No | Total number of items. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Custom()->load(["id" => "custom_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Custom()->update([
  "id" => "custom_id",
  "platform_key" => "platform_key",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomEntity`

Create a new `CustomEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DataStatusEntity

```php
$data_status = $client->DataStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountTransactions` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `company` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `items` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `array` | Yes | Describes the state of data in the Codat cache for a company and data type |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DataStatus()->load(["company_id" => "company_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DataStatusEntity`

Create a new `DataStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DataTypeEntity

```php
$data_type = $client->DataType();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DataTypeEntity`

Create a new `DataTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HistoryEntity

```php
$history = $client->History();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HistoryEntity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IntegrationEntity

```php
$integration = $client->Integration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataProvidedBy` | `string` | No | The name of the data provider. |
| `datatypeFeatures` | `array` | No |  |
| `enabled` | `bool` | Yes | Whether this integration is enabled for your customers to use. |
| `integrationId` | `string` | No | A Codat ID representing the integration. |
| `isBeta` | `bool` | No | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `bool` | No | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `string` | Yes | A unique 4-letter key to represent a platform in each integration. |
| `links` | `array` | Yes |  |
| `logoUrl` | `string` | Yes | Static url for integration's logo. |
| `name` | `string` | Yes | Name of integration. |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `results` | `array` | No |  |
| `sourceId` | `string` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | No | The type of platform of the connection. |
| `totalResults` | `int` | Yes | Total number of items. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Integration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Integration()->load(["id" => "integration_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IntegrationEntity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OptionEntity

```php
$option = $client->Option();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OptionEntity`

Create a new `OptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductEntity

```php
$product = $client->Product();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductEntity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProfileEntity

```php
$profile = $client->Profile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | The API key for this Codat instance. |
| `confirmCompanyName` | `bool` | No | `True` if the company name has been confirmed. |
| `iconUrl` | `string` | No | Static url to your organization's icon. |
| `logoUrl` | `string` | No | Static url to your organization's logo. |
| `name` | `string` | Yes | The name given to the instance. |
| `redirectUrl` | `string` | Yes | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | `array` | No | A list of urls that are allowed to communicate with Codat. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Profile()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Profile()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProfileEntity`

Create a new `ProfileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PullOperationEntity

```php
$pull_operation = $client->PullOperation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyId` | `string` | Yes | Unique identifier of the company associated to this pull operation. |
| `completed` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `connectionId` | `string` | Yes | Unique identifier of the connection associated to this pull operation. |
| `dataType` | `string` | Yes | The data type you are requesting in a pull operation. |
| `errorMessage` | `string` | No | A message about a transient or persistent error returned by Codat or the source platform. |
| `id` | `string` | Yes | Unique identifier of the pull operation. |
| `isCompleted` | `bool` | Yes | `True` if the pull operation is completed successfully. |
| `isErrored` | `bool` | Yes | `True` if the pull operation entered an error state. |
| `links` | `array` | Yes |  |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `progress` | `int` | Yes | An integer signifying the progress of the pull operation. |
| `requested` | `string` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `array` | No |  |
| `status` | `string` | Yes | The current status of the dataset. |
| `statusDescription` | `string` | No | Additional information about the dataset status. |
| `totalResults` | `int` | Yes | Total number of items. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PullOperation()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PullOperation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PullOperation()->load(["company_id" => "company_id", "dataset_id" => "dataset_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PullOperationEntity`

Create a new `PullOperationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PushEntity

```php
$push = $client->Push();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changes` | `array` | No | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `string` | Yes | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `string` | No | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `string` | Yes | Unique identifier for a company's data connection. |
| `dataType` | `string` | No | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `string` | No | A message about the error. |
| `links` | `array` | Yes |  |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `pushOperationKey` | `string` | Yes | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `string` | Yes | The datetime when the push was requested. |
| `results` | `array` | No |  |
| `status` | `string` | Yes | The current status of the push operation. |
| `statusCode` | `int` | Yes | Push status code. |
| `timeoutInMinutes` | `int` | No | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `int` | No | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `int` | Yes | Total number of items. |
| `validation` | `array` | No | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Push()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Push()->load(["id" => "push_id", "company_id" => "company_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PushEntity`

Create a new `PushEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PushOptionEntity

```php
$push_option = $client->PushOption();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A description of the property. |
| `displayName` | `string` | Yes | The property's display name. |
| `options` | `array` | No |  |
| `properties` | `array` | No |  |
| `required` | `bool` | Yes | The property is required if `True`. |
| `type` | `string` | Yes | The option type. |
| `validation` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PushOption()->load(["id" => "push_option_id", "company_id" => "company_id", "connection_id" => "connection_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PushOptionEntity`

Create a new `PushOptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## QueueEntity

```php
$queue = $client->Queue();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): QueueEntity`

Create a new `QueueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RefreshDataEntity

```php
$refresh_data = $client->RefreshData();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RefreshData()->create([
  "company_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RefreshDataEntity`

Create a new `RefreshDataEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SettingEntity

```php
$setting = $client->Setting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | The API key value used to make authenticated http requests. |
| `createdDate` | `string` | No | The date the entity was created. |
| `id` | `string` | No | Unique identifier for the API key. |
| `name` | `string` | No | A meaningful name assigned to the API key. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Setting()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Setting()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Setting()->remove(["api_key_id" => "api_key_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SettingEntity`

Create a new `SettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SupplementalDataEntity

```php
$supplemental_data = $client->SupplementalData();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `supplementalDataConfig` | `array` | No |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SupplementalData()->update([
  "data_type_id" => "data_type_id",
  "platform_key" => "platform_key",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SupplementalDataEntity`

Create a new `SupplementalDataEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SupplementalDataConfigEntity

```php
$supplemental_data_config = $client->SupplementalDataConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `string` | No | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `array` | No | The additional properties that are required when pulling records. |
| `pushData` | `array` | No | The additional properties that are required to create and/or update records. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SupplementalDataConfig()->load(["data_type_id" => "data_type_id", "platform_key" => "platform_key"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SupplementalDataConfigEntity`

Create a new `SupplementalDataConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SyncEntity

```php
$sync = $client->Sync();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SyncEntity`

Create a new `SyncEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SyncSettingEntity

```php
$sync_setting = $client->SyncSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataType` | `string` | Yes | Available data types |
| `fetchOnFirstLink` | `bool` | Yes | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `bool` | No | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | `int` | No | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | `string` | No | Date from which data should be fetched. |
| `syncFromWindow` | `int` | No | Number of months of data to be fetched. |
| `syncOrder` | `int` | Yes | The sync in which data types are queued for a sync. |
| `syncSchedule` | `int` | Yes | Number of hours after which this data type should be refreshed. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SyncSetting()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SyncSettingEntity`

Create a new `SyncSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ValidationEntity

```php
$validation = $client->Validation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | No |  |
| `warnings` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Validation()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ValidationEntity`

Create a new `ValidationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEntity

```php
$webhook = $client->Webhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyTags` | `array` | No | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `bool` | No | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `array` | No | An array of event types the webhook consumer subscribes to. |
| `id` | `string` | No | Unique identifier for the webhook consumer. |
| `url` | `string` | No | The URL that will consume webhook events dispatched by Codat. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Webhook()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Webhook()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEntity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookZapierKeyEntity

```php
$webhook_zapier_key = $client->WebhookZapierKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WebhookZapierKey()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookZapierKeyEntity`

Create a new `WebhookZapierKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new CodatplatformSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

