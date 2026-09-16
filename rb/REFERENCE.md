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
| `button` | `Hash` | No | Button branding references. |
| `logo` | `Hash` | No | Logo branding references. |
| `sourceId` | `String` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |

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
| `created` | `String` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `String` | No | Name of user that created the company in Codat. |
| `dataConnections` | `Array` | No |  |
| `description` | `String` | No | Additional information about the company. |
| `id` | `String` | Yes | Unique identifier for your SMB in Codat. |
| `lastSync` | `String` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `Hash` | Yes |  |
| `name` | `String` | Yes | The name of the company |
| `pageNumber` | `Integer` | Yes | Current page number. |
| `pageSize` | `Integer` | Yes | Number of items to return in results array. |
| `products` | `Array` | No | An array of products that are currently enabled for the company. |
| `redirect` | `String` | Yes | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `Hash` | No | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `Array` | No | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `Array` | No |  |
| `tags` | `Hash` | No | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `totalResults` | `Integer` | Yes | Total number of items. |

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
  "id" => "example_id", # String
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
| `accessToken` | `String` | Yes | The access token for the company. |
| `expiresIn` | `Integer` | Yes | The number of seconds until the access token expires. |
| `id` | `String` | No |  |
| `tokenType` | `String` | Yes | The type of token. |

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
| `created` | `String` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `Array` | No |  |
| `id` | `String` | Yes | Unique identifier for a company's data connection. |
| `integrationId` | `String` | Yes | A Codat ID representing the integration. |
| `integrationKey` | `String` | Yes | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `String` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `String` | Yes | The link URL your customers can use to authorize access to their business application. |
| `links` | `Hash` | Yes |  |
| `pageNumber` | `Integer` | Yes | Current page number. |
| `pageSize` | `Integer` | Yes | Number of items to return in results array. |
| `platformKey` | `String` | No | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `String` | Yes | Name of integration connected to company. |
| `results` | `Array` | No |  |
| `sourceId` | `String` | Yes | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `String` | Yes | The type of platform of the connection. |
| `status` | `String` | Yes | The current authorization status of the data connection. |
| `totalResults` | `Integer` | Yes | Total number of items. |

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
| `status` | - | - | - | Yes | - |
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
| `accessToken` | `String` | No | Access token that allows SMBs to manage connections that have access to their data. |

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
| `allowedOrigins` | `Array` | No | An array of allowed origins (i.e. |

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
| `dataSource` | `String` | No | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `id` | `String` | No |  |
| `keyBy` | `Array` | No | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `Integer` | No | Current page number. |
| `pageSize` | `Integer` | No | Number of items to return in results array. |
| `requiredData` | `Hash` | No | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `Array` | No |  |
| `sourceModifiedDate` | `Array` | No | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `Integer` | No | Total number of items. |

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
| `accountTransactions` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `company` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `items` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `Hash` | Yes | Describes the state of data in the Codat cache for a company and data type |

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
| `dataProvidedBy` | `String` | No | The name of the data provider. |
| `datatypeFeatures` | `Array` | No |  |
| `enabled` | `Boolean` | Yes | Whether this integration is enabled for your customers to use. |
| `id` | `String` | No |  |
| `integrationId` | `String` | No | A Codat ID representing the integration. |
| `isBeta` | `Boolean` | No | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `Boolean` | No | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `String` | Yes | A unique 4-letter key to represent a platform in each integration. |
| `links` | `Hash` | Yes |  |
| `logoUrl` | `String` | Yes | Static url for integration's logo. |
| `name` | `String` | Yes | Name of integration. |
| `pageNumber` | `Integer` | Yes | Current page number. |
| `pageSize` | `Integer` | Yes | Number of items to return in results array. |
| `results` | `Array` | No |  |
| `sourceId` | `String` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `String` | No | The type of platform of the connection. |
| `totalResults` | `Integer` | Yes | Total number of items. |

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
| `apiKey` | `String` | No | The API key for this Codat instance. |
| `confirmCompanyName` | `Boolean` | No | `True` if the company name has been confirmed. |
| `iconUrl` | `String` | No | Static url to your organization's icon. |
| `logoUrl` | `String` | No | Static url to your organization's logo. |
| `name` | `String` | Yes | The name given to the instance. |
| `redirectUrl` | `String` | Yes | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | `Array` | No | A list of urls that are allowed to communicate with Codat. |

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
| `companyId` | `String` | Yes | Unique identifier of the company associated to this pull operation. |
| `completed` | `String` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `connectionId` | `String` | Yes | Unique identifier of the connection associated to this pull operation. |
| `dataType` | `String` | Yes | The data type you are requesting in a pull operation. |
| `errorMessage` | `String` | No | A message about a transient or persistent error returned by Codat or the source platform. |
| `id` | `String` | Yes | Unique identifier of the pull operation. |
| `isCompleted` | `Boolean` | Yes | `True` if the pull operation is completed successfully. |
| `isErrored` | `Boolean` | Yes | `True` if the pull operation entered an error state. |
| `links` | `Hash` | Yes |  |
| `pageNumber` | `Integer` | Yes | Current page number. |
| `pageSize` | `Integer` | Yes | Number of items to return in results array. |
| `progress` | `Integer` | Yes | An integer signifying the progress of the pull operation. |
| `requested` | `String` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `Array` | No |  |
| `status` | `String` | Yes | The current status of the dataset. |
| `statusDescription` | `String` | No | Additional information about the dataset status. |
| `totalResults` | `Integer` | Yes | Total number of items. |

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
| `changes` | `Array` | No | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `String` | Yes | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `String` | No | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `String` | Yes | Unique identifier for a company's data connection. |
| `dataType` | `String` | No | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `String` | No | A message about the error. |
| `id` | `String` | No |  |
| `links` | `Hash` | Yes |  |
| `pageNumber` | `Integer` | Yes | Current page number. |
| `pageSize` | `Integer` | Yes | Number of items to return in results array. |
| `pushOperationKey` | `String` | Yes | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `String` | Yes | The datetime when the push was requested. |
| `results` | `Array` | No |  |
| `status` | `String` | Yes | The current status of the push operation. |
| `statusCode` | `Integer` | Yes | Push status code. |
| `timeoutInMinutes` | `Integer` | No | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `Integer` | No | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `Integer` | Yes | Total number of items. |
| `validation` | `Hash` | No | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

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
| `description` | `String` | No | A description of the property. |
| `displayName` | `String` | Yes | The property's display name. |
| `id` | `String` | No |  |
| `options` | `Array` | No |  |
| `properties` | `Hash` | No |  |
| `required` | `Boolean` | Yes | The property is required if `True`. |
| `type` | `String` | Yes | The option type. |
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
| `apiKey` | `String` | No | The API key value used to make authenticated http requests. |
| `createdDate` | `String` | No | The date the entity was created. |
| `id` | `String` | No | Unique identifier for the API key. |
| `name` | `String` | No | A meaningful name assigned to the API key. |

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
| `dataSource` | `String` | No | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `Hash` | No | The additional properties that are required when pulling records. |
| `pushData` | `Hash` | No | The additional properties that are required to create and/or update records. |

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
| `dataType` | `String` | Yes | Available data types |
| `fetchOnFirstLink` | `Boolean` | Yes | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `Boolean` | No | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | `Integer` | No | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | `String` | No | Date from which data should be fetched. |
| `syncFromWindow` | `Integer` | No | Number of months of data to be fetched. |
| `syncOrder` | `Integer` | Yes | The sync in which data types are queued for a sync. |
| `syncSchedule` | `Integer` | Yes | Number of hours after which this data type should be refreshed. |

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
| `companyTags` | `Array` | No | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `Boolean` | No | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `Array` | No | An array of event types the webhook consumer subscribes to. |
| `id` | `String` | No | Unique identifier for the webhook consumer. |
| `url` | `String` | No | The URL that will consume webhook events dispatched by Codat. |

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
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```ruby
client = CodatplatformSDK.new({
  "feature" => {
    "debug" => { "active" => true },
    "idempotency" => { "active" => true },
    "metrics" => { "active" => true },
    "paging" => { "active" => true },
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

