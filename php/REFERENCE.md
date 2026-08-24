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
| `button` | `array` | No |  |
| `logo` | `array` | No |  |
| `sourceId` | `string` | No |  |

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
| `created` | `string` | No |  |
| `createdByUserName` | `string` | No |  |
| `dataConnections` | `array` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `lastSync` | `string` | No |  |
| `links` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `products` | `array` | No |  |
| `redirect` | `string` | Yes |  |
| `referenceParentCompany` | `array` | No |  |
| `referenceSubsidiaryCompanies` | `array` | No |  |
| `results` | `array` | No |  |
| `tags` | `array` | No |  |
| `totalResults` | `int` | Yes |  |

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
| `accessToken` | `string` | Yes |  |
| `expiresIn` | `int` | Yes |  |
| `tokenType` | `string` | Yes |  |

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
| `created` | `string` | Yes |  |
| `dataConnectionErrors` | `array` | No |  |
| `id` | `string` | Yes |  |
| `integrationId` | `string` | Yes |  |
| `integrationKey` | `string` | Yes |  |
| `lastSync` | `string` | No |  |
| `linkUrl` | `string` | Yes |  |
| `links` | `array` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `platformKey` | `string` | No |  |
| `platformName` | `string` | Yes |  |
| `results` | `array` | No |  |
| `sourceId` | `string` | Yes |  |
| `sourceType` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `totalResults` | `int` | Yes |  |

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
| `accessToken` | `string` | No |  |

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
| `allowedOrigins` | `array` | No |  |

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
| `dataSource` | `string` | No |  |
| `keyBy` | `array` | No |  |
| `pageNumber` | `int` | No |  |
| `pageSize` | `int` | No |  |
| `requiredData` | `array` | No |  |
| `results` | `array` | No |  |
| `sourceModifiedDate` | `array` | No |  |
| `totalResults` | `int` | No |  |

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
| `accountTransactions` | `array` | Yes |  |
| `balanceSheet` | `array` | Yes |  |
| `bankAccounts` | `array` | Yes |  |
| `bankTransactions` | `array` | Yes |  |
| `bankingaccountBalances` | `array` | Yes |  |
| `bankingaccounts` | `array` | Yes |  |
| `bankingtransactionCategories` | `array` | Yes |  |
| `bankingtransactions` | `array` | Yes |  |
| `billCreditNotes` | `array` | Yes |  |
| `billPayments` | `array` | Yes |  |
| `bills` | `array` | Yes |  |
| `cashFlowStatement` | `array` | Yes |  |
| `chartOfAccounts` | `array` | Yes |  |
| `commercecompanyInfo` | `array` | Yes |  |
| `commercecustomers` | `array` | Yes |  |
| `commercedisputes` | `array` | Yes |  |
| `commercelocations` | `array` | Yes |  |
| `commerceorders` | `array` | Yes |  |
| `commercepaymentMethods` | `array` | Yes |  |
| `commercepayments` | `array` | Yes |  |
| `commerceproductCategories` | `array` | Yes |  |
| `commerceproducts` | `array` | Yes |  |
| `commercetaxComponents` | `array` | Yes |  |
| `commercetransactions` | `array` | Yes |  |
| `company` | `array` | Yes |  |
| `creditNotes` | `array` | Yes |  |
| `customers` | `array` | Yes |  |
| `directCosts` | `array` | Yes |  |
| `directIncomes` | `array` | Yes |  |
| `invoices` | `array` | Yes |  |
| `itemReceipts` | `array` | Yes |  |
| `items` | `array` | Yes |  |
| `journalEntries` | `array` | Yes |  |
| `journals` | `array` | Yes |  |
| `paymentMethods` | `array` | Yes |  |
| `payments` | `array` | Yes |  |
| `profitAndLoss` | `array` | Yes |  |
| `purchaseOrders` | `array` | Yes |  |
| `salesOrders` | `array` | Yes |  |
| `suppliers` | `array` | Yes |  |
| `taxRates` | `array` | Yes |  |
| `trackingCategories` | `array` | Yes |  |
| `transfers` | `array` | Yes |  |

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
| `dataProvidedBy` | `string` | No |  |
| `datatypeFeatures` | `array` | No |  |
| `enabled` | `bool` | Yes |  |
| `integrationId` | `string` | No |  |
| `isBeta` | `bool` | No |  |
| `isOfflineConnector` | `bool` | No |  |
| `key` | `string` | Yes |  |
| `links` | `array` | Yes |  |
| `logoUrl` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `results` | `array` | No |  |
| `sourceId` | `string` | No |  |
| `sourceType` | `string` | No |  |
| `totalResults` | `int` | Yes |  |

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
| `apiKey` | `string` | No |  |
| `confirmCompanyName` | `bool` | No |  |
| `iconUrl` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `whiteListUrls` | `array` | No |  |

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
| `companyId` | `string` | Yes |  |
| `completed` | `string` | No |  |
| `connectionId` | `string` | Yes |  |
| `dataType` | `string` | Yes |  |
| `errorMessage` | `string` | No |  |
| `id` | `string` | Yes |  |
| `isCompleted` | `bool` | Yes |  |
| `isErrored` | `bool` | Yes |  |
| `links` | `array` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `progress` | `int` | Yes |  |
| `requested` | `string` | Yes |  |
| `results` | `array` | No |  |
| `status` | `string` | Yes |  |
| `statusDescription` | `string` | No |  |
| `totalResults` | `int` | Yes |  |

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
| `changes` | `array` | No |  |
| `companyId` | `string` | Yes |  |
| `completedOnUtc` | `string` | No |  |
| `dataConnectionKey` | `string` | Yes |  |
| `dataType` | `string` | No |  |
| `errorMessage` | `string` | No |  |
| `links` | `array` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `pushOperationKey` | `string` | Yes |  |
| `requestedOnUtc` | `string` | Yes |  |
| `results` | `array` | No |  |
| `status` | `string` | Yes |  |
| `statusCode` | `int` | Yes |  |
| `timeoutInMinutes` | `int` | No |  |
| `timeoutInSeconds` | `int` | No |  |
| `totalResults` | `int` | Yes |  |
| `validation` | `array` | No |  |

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
| `description` | `string` | No |  |
| `displayName` | `string` | Yes |  |
| `options` | `array` | No |  |
| `properties` | `array` | No |  |
| `required` | `bool` | Yes |  |
| `type` | `string` | Yes |  |
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
| `apiKey` | `string` | No |  |
| `createdDate` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No |  |

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
| `dataSource` | `string` | No |  |
| `pullData` | `array` | No |  |
| `pushData` | `array` | No |  |

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
| `dataType` | `string` | Yes |  |
| `fetchOnFirstLink` | `bool` | Yes |  |
| `isLocked` | `bool` | No |  |
| `monthsToSync` | `int` | No |  |
| `syncFromUtc` | `string` | No |  |
| `syncFromWindow` | `int` | No |  |
| `syncOrder` | `int` | Yes |  |
| `syncSchedule` | `int` | Yes |  |

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
| `companyTags` | `array` | No |  |
| `disabled` | `bool` | No |  |
| `eventTypes` | `array` | No |  |
| `id` | `string` | No |  |
| `url` | `string` | No |  |

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

