# Codatplatform Ruby SDK Reference

Complete API reference for the Codatplatform Ruby SDK.


## CodatplatformSDK

### Constructor

```ruby
require_relative 'Codatplatform_sdk'

client = CodatplatformSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CodatplatformSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CodatplatformSDK.test
```


### Instance Methods

#### `AccessToken(data = nil)`

Create a new `AccessToken` entity instance. Pass `nil` for no initial data.

#### `All(data = nil)`

Create a new `All` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data = nil)`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `Branding(data = nil)`

Create a new `Branding` entity instance. Pass `nil` for no initial data.

#### `Company(data = nil)`

Create a new `Company` entity instance. Pass `nil` for no initial data.

#### `CompanyAccessToken(data = nil)`

Create a new `CompanyAccessToken` entity instance. Pass `nil` for no initial data.

#### `Connection(data = nil)`

Create a new `Connection` entity instance. Pass `nil` for no initial data.

#### `ConnectionManagementAccessToken(data = nil)`

Create a new `ConnectionManagementAccessToken` entity instance. Pass `nil` for no initial data.

#### `ConnectionManagementAllowedOrigin(data = nil)`

Create a new `ConnectionManagementAllowedOrigin` entity instance. Pass `nil` for no initial data.

#### `Custom(data = nil)`

Create a new `Custom` entity instance. Pass `nil` for no initial data.

#### `DataStatus(data = nil)`

Create a new `DataStatus` entity instance. Pass `nil` for no initial data.

#### `DataType(data = nil)`

Create a new `DataType` entity instance. Pass `nil` for no initial data.

#### `History(data = nil)`

Create a new `History` entity instance. Pass `nil` for no initial data.

#### `Integration(data = nil)`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `Option(data = nil)`

Create a new `Option` entity instance. Pass `nil` for no initial data.

#### `Product(data = nil)`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `Profile(data = nil)`

Create a new `Profile` entity instance. Pass `nil` for no initial data.

#### `PullOperation(data = nil)`

Create a new `PullOperation` entity instance. Pass `nil` for no initial data.

#### `Push(data = nil)`

Create a new `Push` entity instance. Pass `nil` for no initial data.

#### `PushOption(data = nil)`

Create a new `PushOption` entity instance. Pass `nil` for no initial data.

#### `Queue(data = nil)`

Create a new `Queue` entity instance. Pass `nil` for no initial data.

#### `RefreshData(data = nil)`

Create a new `RefreshData` entity instance. Pass `nil` for no initial data.

#### `Setting(data = nil)`

Create a new `Setting` entity instance. Pass `nil` for no initial data.

#### `SupplementalData(data = nil)`

Create a new `SupplementalData` entity instance. Pass `nil` for no initial data.

#### `SupplementalDataConfig(data = nil)`

Create a new `SupplementalDataConfig` entity instance. Pass `nil` for no initial data.

#### `Sync(data = nil)`

Create a new `Sync` entity instance. Pass `nil` for no initial data.

#### `SyncSetting(data = nil)`

Create a new `SyncSetting` entity instance. Pass `nil` for no initial data.

#### `Validation(data = nil)`

Create a new `Validation` entity instance. Pass `nil` for no initial data.

#### `Webhook(data = nil)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `WebhookZapierKey(data = nil)`

Create a new `WebhookZapierKey` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AccessTokenEntity

```ruby
access_token = client.AccessToken
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccessTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AllEntity

```ruby
all = client.All
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AllEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiKeyEntity

```ruby
api_key = client.ApiKey
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BrandingEntity

```ruby
branding = client.Branding
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `button` | `Hash` | No |  |
| `logo` | `Hash` | No |  |
| `sourceId` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Branding.load({ "platform_key" => "platform_key" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BrandingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CompanyEntity

```ruby
company = client.Company
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `String` | No |  |
| `createdByUserName` | `String` | No |  |
| `dataConnections` | `Array` | No |  |
| `description` | `String` | No |  |
| `id` | `String` | Yes |  |
| `lastSync` | `String` | No |  |
| `links` | `Hash` | Yes |  |
| `name` | `String` | Yes |  |
| `pageNumber` | `Integer` | Yes |  |
| `pageSize` | `Integer` | Yes |  |
| `products` | `Array` | No |  |
| `redirect` | `String` | Yes |  |
| `referenceParentCompany` | `Hash` | No |  |
| `referenceSubsidiaryCompanies` | `Array` | No |  |
| `results` | `Array` | No |  |
| `tags` | `Hash` | No |  |
| `totalResults` | `Integer` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Company.create({
  "links" => {}, # Hash
  "name" => "example_name", # String
  "pageNumber" => 1, # Integer
  "pageSize" => 1, # Integer
  "redirect" => "example_redirect", # String
  "totalResults" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Company.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Company.load({ "id" => "company_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Company.remove({ "id" => "company_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Company.update({
  "id" => "company_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CompanyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CompanyAccessTokenEntity

```ruby
company_access_token = client.CompanyAccessToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `String` | Yes |  |
| `expiresIn` | `Integer` | Yes |  |
| `tokenType` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CompanyAccessToken.load({ "id" => "company_access_token_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CompanyAccessTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConnectionEntity

```ruby
connection = client.Connection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectionInfo` | `Hash` | No |  |
| `created` | `String` | Yes |  |
| `dataConnectionErrors` | `Array` | No |  |
| `id` | `String` | Yes |  |
| `integrationId` | `String` | Yes |  |
| `integrationKey` | `String` | Yes |  |
| `lastSync` | `String` | No |  |
| `linkUrl` | `String` | Yes |  |
| `links` | `Hash` | Yes |  |
| `pageNumber` | `Integer` | Yes |  |
| `pageSize` | `Integer` | Yes |  |
| `platformKey` | `String` | No |  |
| `platformName` | `String` | Yes |  |
| `results` | `Array` | No |  |
| `sourceId` | `String` | Yes |  |
| `sourceType` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `totalResults` | `Integer` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Connection.create({
  "company_id" => "example_company_id", # String
  "created" => "example_created", # String
  "id" => "example_id", # String
  "integrationId" => "example_integrationId", # String
  "integrationKey" => "example_integrationKey", # String
  "linkUrl" => "example_linkUrl", # String
  "links" => {}, # Hash
  "pageNumber" => 1, # Integer
  "pageSize" => 1, # Integer
  "platformName" => "example_platformName", # String
  "sourceId" => "example_sourceId", # String
  "sourceType" => "example_sourceType", # String
  "status" => "example_status", # String
  "totalResults" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Connection.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Connection.load({ "id" => "connection_id", "company_id" => "company_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Connection.remove({ "id" => "connection_id", "company_id" => "company_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Connection.update({
  "id" => "connection_id",
  "company_id" => "company_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConnectionManagementAccessTokenEntity

```ruby
connection_management_access_token = client.ConnectionManagementAccessToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ConnectionManagementAccessToken.load({ "company_id" => "company_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConnectionManagementAccessTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConnectionManagementAllowedOriginEntity

```ruby
connection_management_allowed_origin = client.ConnectionManagementAllowedOrigin
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedOrigins` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ConnectionManagementAllowedOrigin.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ConnectionManagementAllowedOrigin.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConnectionManagementAllowedOriginEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomEntity

```ruby
custom = client.Custom
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `String` | No |  |
| `keyBy` | `Array` | No |  |
| `pageNumber` | `Integer` | No |  |
| `pageSize` | `Integer` | No |  |
| `requiredData` | `Hash` | No |  |
| `results` | `Array` | No |  |
| `sourceModifiedDate` | `Array` | No |  |
| `totalResults` | `Integer` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Custom.load({ "id" => "custom_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Custom.update({
  "id" => "custom_id",
  "platform_key" => "platform_key",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DataStatusEntity

```ruby
data_status = client.DataStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountTransactions` | `Hash` | Yes |  |
| `balanceSheet` | `Hash` | Yes |  |
| `bankAccounts` | `Hash` | Yes |  |
| `bankTransactions` | `Hash` | Yes |  |
| `bankingaccountBalances` | `Hash` | Yes |  |
| `bankingaccounts` | `Hash` | Yes |  |
| `bankingtransactionCategories` | `Hash` | Yes |  |
| `bankingtransactions` | `Hash` | Yes |  |
| `billCreditNotes` | `Hash` | Yes |  |
| `billPayments` | `Hash` | Yes |  |
| `bills` | `Hash` | Yes |  |
| `cashFlowStatement` | `Hash` | Yes |  |
| `chartOfAccounts` | `Hash` | Yes |  |
| `commercecompanyInfo` | `Hash` | Yes |  |
| `commercecustomers` | `Hash` | Yes |  |
| `commercedisputes` | `Hash` | Yes |  |
| `commercelocations` | `Hash` | Yes |  |
| `commerceorders` | `Hash` | Yes |  |
| `commercepaymentMethods` | `Hash` | Yes |  |
| `commercepayments` | `Hash` | Yes |  |
| `commerceproductCategories` | `Hash` | Yes |  |
| `commerceproducts` | `Hash` | Yes |  |
| `commercetaxComponents` | `Hash` | Yes |  |
| `commercetransactions` | `Hash` | Yes |  |
| `company` | `Hash` | Yes |  |
| `creditNotes` | `Hash` | Yes |  |
| `customers` | `Hash` | Yes |  |
| `directCosts` | `Hash` | Yes |  |
| `directIncomes` | `Hash` | Yes |  |
| `invoices` | `Hash` | Yes |  |
| `itemReceipts` | `Hash` | Yes |  |
| `items` | `Hash` | Yes |  |
| `journalEntries` | `Hash` | Yes |  |
| `journals` | `Hash` | Yes |  |
| `paymentMethods` | `Hash` | Yes |  |
| `payments` | `Hash` | Yes |  |
| `profitAndLoss` | `Hash` | Yes |  |
| `purchaseOrders` | `Hash` | Yes |  |
| `salesOrders` | `Hash` | Yes |  |
| `suppliers` | `Hash` | Yes |  |
| `taxRates` | `Hash` | Yes |  |
| `trackingCategories` | `Hash` | Yes |  |
| `transfers` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DataStatus.load({ "company_id" => "company_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DataStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DataTypeEntity

```ruby
data_type = client.DataType
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DataTypeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HistoryEntity

```ruby
history = client.History
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IntegrationEntity

```ruby
integration = client.Integration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataProvidedBy` | `String` | No |  |
| `datatypeFeatures` | `Array` | No |  |
| `enabled` | `Boolean` | Yes |  |
| `integrationId` | `String` | No |  |
| `isBeta` | `Boolean` | No |  |
| `isOfflineConnector` | `Boolean` | No |  |
| `key` | `String` | Yes |  |
| `links` | `Hash` | Yes |  |
| `logoUrl` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `pageNumber` | `Integer` | Yes |  |
| `pageSize` | `Integer` | Yes |  |
| `results` | `Array` | No |  |
| `sourceId` | `String` | No |  |
| `sourceType` | `String` | No |  |
| `totalResults` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Integration.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Integration.load({ "id" => "integration_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OptionEntity

```ruby
option = client.Option
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProductEntity

```ruby
product = client.Product
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProfileEntity

```ruby
profile = client.Profile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `String` | No |  |
| `confirmCompanyName` | `Boolean` | No |  |
| `iconUrl` | `String` | No |  |
| `logoUrl` | `String` | No |  |
| `name` | `String` | Yes |  |
| `redirectUrl` | `String` | Yes |  |
| `whiteListUrls` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Profile.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Profile.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProfileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PullOperationEntity

```ruby
pull_operation = client.PullOperation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyId` | `String` | Yes |  |
| `completed` | `String` | No |  |
| `connectionId` | `String` | Yes |  |
| `dataType` | `String` | Yes |  |
| `errorMessage` | `String` | No |  |
| `id` | `String` | Yes |  |
| `isCompleted` | `Boolean` | Yes |  |
| `isErrored` | `Boolean` | Yes |  |
| `links` | `Hash` | Yes |  |
| `pageNumber` | `Integer` | Yes |  |
| `pageSize` | `Integer` | Yes |  |
| `progress` | `Integer` | Yes |  |
| `requested` | `String` | Yes |  |
| `results` | `Array` | No |  |
| `status` | `String` | Yes |  |
| `statusDescription` | `String` | No |  |
| `totalResults` | `Integer` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PullOperation.create({
  "company_id" => "example_company_id", # String
  "companyId" => "example_companyId", # String
  "connectionId" => "example_connectionId", # String
  "dataType" => "example_dataType", # String
  "id" => "example_id", # String
  "isCompleted" => true, # Boolean
  "isErrored" => true, # Boolean
  "links" => {}, # Hash
  "pageNumber" => 1, # Integer
  "pageSize" => 1, # Integer
  "progress" => 1, # Integer
  "requested" => "example_requested", # String
  "status" => "example_status", # String
  "totalResults" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PullOperation.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PullOperation.load({ "company_id" => "company_id", "dataset_id" => "dataset_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PullOperationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PushEntity

```ruby
push = client.Push
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changes` | `Array` | No |  |
| `companyId` | `String` | Yes |  |
| `completedOnUtc` | `String` | No |  |
| `dataConnectionKey` | `String` | Yes |  |
| `dataType` | `String` | No |  |
| `errorMessage` | `String` | No |  |
| `links` | `Hash` | Yes |  |
| `pageNumber` | `Integer` | Yes |  |
| `pageSize` | `Integer` | Yes |  |
| `pushOperationKey` | `String` | Yes |  |
| `requestedOnUtc` | `String` | Yes |  |
| `results` | `Array` | No |  |
| `status` | `String` | Yes |  |
| `statusCode` | `Integer` | Yes |  |
| `timeoutInMinutes` | `Integer` | No |  |
| `timeoutInSeconds` | `Integer` | No |  |
| `totalResults` | `Integer` | Yes |  |
| `validation` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Push.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Push.load({ "id" => "push_id", "company_id" => "company_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PushEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PushOptionEntity

```ruby
push_option = client.PushOption
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `displayName` | `String` | Yes |  |
| `options` | `Array` | No |  |
| `properties` | `Hash` | No |  |
| `required` | `Boolean` | Yes |  |
| `type` | `String` | Yes |  |
| `validation` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PushOption.load({ "id" => "push_option_id", "company_id" => "company_id", "connection_id" => "connection_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PushOptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## QueueEntity

```ruby
queue = client.Queue
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `QueueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RefreshDataEntity

```ruby
refresh_data = client.RefreshData
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RefreshData.create({
  "company_id" => "example_company_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RefreshDataEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SettingEntity

```ruby
setting = client.Setting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `String` | No |  |
| `createdDate` | `String` | No |  |
| `id` | `String` | No |  |
| `name` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Setting.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Setting.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Setting.remove({ "api_key_id" => "api_key_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SupplementalDataEntity

```ruby
supplemental_data = client.SupplementalData
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `supplementalDataConfig` | `Hash` | No |  |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SupplementalData.update({
  "data_type_id" => "data_type_id",
  "platform_key" => "platform_key",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SupplementalDataEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SupplementalDataConfigEntity

```ruby
supplemental_data_config = client.SupplementalDataConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `String` | No |  |
| `pullData` | `Hash` | No |  |
| `pushData` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SupplementalDataConfig.load({ "data_type_id" => "data_type_id", "platform_key" => "platform_key" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SupplementalDataConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SyncEntity

```ruby
sync = client.Sync
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SyncEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SyncSettingEntity

```ruby
sync_setting = client.SyncSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataType` | `String` | Yes |  |
| `fetchOnFirstLink` | `Boolean` | Yes |  |
| `isLocked` | `Boolean` | No |  |
| `monthsToSync` | `Integer` | No |  |
| `syncFromUtc` | `String` | No |  |
| `syncFromWindow` | `Integer` | No |  |
| `syncOrder` | `Integer` | Yes |  |
| `syncSchedule` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SyncSetting.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SyncSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ValidationEntity

```ruby
validation = client.Validation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | No |  |
| `warnings` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Validation.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ValidationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebhookEntity

```ruby
webhook = client.Webhook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyTags` | `Array` | No |  |
| `disabled` | `Boolean` | No |  |
| `eventTypes` | `Array` | No |  |
| `id` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Webhook.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Webhook.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Webhook.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebhookZapierKeyEntity

```ruby
webhook_zapier_key = client.WebhookZapierKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WebhookZapierKey.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebhookZapierKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = CodatplatformSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

