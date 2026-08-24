# Codatplatform Lua SDK Reference

Complete API reference for the Codatplatform Lua SDK.


## CodatplatformSDK

### Constructor

```lua
local sdk = require("codatplatform_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `AccessToken(data)`

Create a new `AccessToken` entity instance. Pass `nil` for no initial data.

#### `All(data)`

Create a new `All` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data)`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `Branding(data)`

Create a new `Branding` entity instance. Pass `nil` for no initial data.

#### `Company(data)`

Create a new `Company` entity instance. Pass `nil` for no initial data.

#### `CompanyAccessToken(data)`

Create a new `CompanyAccessToken` entity instance. Pass `nil` for no initial data.

#### `Connection(data)`

Create a new `Connection` entity instance. Pass `nil` for no initial data.

#### `ConnectionManagementAccessToken(data)`

Create a new `ConnectionManagementAccessToken` entity instance. Pass `nil` for no initial data.

#### `ConnectionManagementAllowedOrigin(data)`

Create a new `ConnectionManagementAllowedOrigin` entity instance. Pass `nil` for no initial data.

#### `Custom(data)`

Create a new `Custom` entity instance. Pass `nil` for no initial data.

#### `DataStatus(data)`

Create a new `DataStatus` entity instance. Pass `nil` for no initial data.

#### `DataType(data)`

Create a new `DataType` entity instance. Pass `nil` for no initial data.

#### `History(data)`

Create a new `History` entity instance. Pass `nil` for no initial data.

#### `Integration(data)`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `Option(data)`

Create a new `Option` entity instance. Pass `nil` for no initial data.

#### `Product(data)`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `Profile(data)`

Create a new `Profile` entity instance. Pass `nil` for no initial data.

#### `PullOperation(data)`

Create a new `PullOperation` entity instance. Pass `nil` for no initial data.

#### `Push(data)`

Create a new `Push` entity instance. Pass `nil` for no initial data.

#### `PushOption(data)`

Create a new `PushOption` entity instance. Pass `nil` for no initial data.

#### `Queue(data)`

Create a new `Queue` entity instance. Pass `nil` for no initial data.

#### `RefreshData(data)`

Create a new `RefreshData` entity instance. Pass `nil` for no initial data.

#### `Setting(data)`

Create a new `Setting` entity instance. Pass `nil` for no initial data.

#### `SupplementalData(data)`

Create a new `SupplementalData` entity instance. Pass `nil` for no initial data.

#### `SupplementalDataConfig(data)`

Create a new `SupplementalDataConfig` entity instance. Pass `nil` for no initial data.

#### `Sync(data)`

Create a new `Sync` entity instance. Pass `nil` for no initial data.

#### `SyncSetting(data)`

Create a new `SyncSetting` entity instance. Pass `nil` for no initial data.

#### `Validation(data)`

Create a new `Validation` entity instance. Pass `nil` for no initial data.

#### `Webhook(data)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `WebhookZapierKey(data)`

Create a new `WebhookZapierKey` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AccessTokenEntity

```lua
local access_token = client:AccessToken(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccessTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AllEntity

```lua
local all = client:All(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AllEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiKeyEntity

```lua
local api_key = client:ApiKey(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BrandingEntity

```lua
local branding = client:Branding(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `button` | `table` | No | Button branding references. |
| `logo` | `table` | No | Logo branding references. |
| `sourceId` | `string` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Branding():load({ platform_key = "platform_key" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrandingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CompanyEntity

```lua
local company = client:Company(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `string` | No | Name of user that created the company in Codat. |
| `dataConnections` | `table` | No |  |
| `description` | `string` | No | Additional information about the company. |
| `id` | `string` | Yes | Unique identifier for your SMB in Codat. |
| `lastSync` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `table` | Yes |  |
| `name` | `string` | Yes | The name of the company |
| `pageNumber` | `number` | Yes | Current page number. |
| `pageSize` | `number` | Yes | Number of items to return in results array. |
| `products` | `table` | No | An array of products that are currently enabled for the company. |
| `redirect` | `string` | Yes | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `table` | No | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `table` | No | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `table` | No |  |
| `tags` | `table` | No | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `totalResults` | `number` | Yes | Total number of items. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Company():create({
  id = --[[ string ]],
  links = --[[ table ]],
  name = --[[ string ]],
  pageNumber = --[[ number ]],
  pageSize = --[[ number ]],
  redirect = --[[ string ]],
  totalResults = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Company():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Company():load({ id = "company_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Company():remove({ id = "company_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Company():update({
  id = "company_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CompanyAccessTokenEntity

```lua
local company_access_token = client:CompanyAccessToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `string` | Yes | The access token for the company. |
| `expiresIn` | `number` | Yes | The number of seconds until the access token expires. |
| `tokenType` | `string` | Yes | The type of token. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CompanyAccessToken():load({ id = "company_access_token_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyAccessTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectionEntity

```lua
local connection = client:Connection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectionInfo` | `table` | No |  |
| `created` | `string` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `table` | No |  |
| `id` | `string` | Yes | Unique identifier for a company's data connection. |
| `integrationId` | `string` | Yes | A Codat ID representing the integration. |
| `integrationKey` | `string` | Yes | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `string` | Yes | The link URL your customers can use to authorize access to their business application. |
| `links` | `table` | Yes |  |
| `pageNumber` | `number` | Yes | Current page number. |
| `pageSize` | `number` | Yes | Number of items to return in results array. |
| `platformKey` | `string` | No | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `string` | Yes | Name of integration connected to company. |
| `results` | `table` | No |  |
| `sourceId` | `string` | Yes | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | Yes | The type of platform of the connection. |
| `status` | `string` | Yes | The current authorization status of the data connection. |
| `totalResults` | `number` | Yes | Total number of items. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Connection():create({
  company_id = --[[ string ]],
  created = --[[ string ]],
  id = --[[ string ]],
  integrationId = --[[ string ]],
  integrationKey = --[[ string ]],
  linkUrl = --[[ string ]],
  links = --[[ table ]],
  pageNumber = --[[ number ]],
  pageSize = --[[ number ]],
  platformName = --[[ string ]],
  sourceId = --[[ string ]],
  sourceType = --[[ string ]],
  status = --[[ string ]],
  totalResults = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Connection():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Connection():load({ id = "connection_id", company_id = "company_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Connection():remove({ id = "connection_id", company_id = "company_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Connection():update({
  id = "connection_id",
  company_id = "company_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectionManagementAccessTokenEntity

```lua
local connection_management_access_token = client:ConnectionManagementAccessToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `string` | No | Access token that allows SMBs to manage connections that have access to their data. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConnectionManagementAccessToken():load({ company_id = "company_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionManagementAccessTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectionManagementAllowedOriginEntity

```lua
local connection_management_allowed_origin = client:ConnectionManagementAllowedOrigin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedOrigins` | `table` | No | An array of allowed origins (i.e. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConnectionManagementAllowedOrigin():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConnectionManagementAllowedOrigin():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionManagementAllowedOriginEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomEntity

```lua
local custom = client:Custom(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `string` | No | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `keyBy` | `table` | No | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `number` | No | Current page number. |
| `pageSize` | `number` | No | Number of items to return in results array. |
| `requiredData` | `table` | No | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `table` | No |  |
| `sourceModifiedDate` | `table` | No | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `number` | No | Total number of items. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Custom():load({ id = "custom_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Custom():update({
  id = "custom_id",
  platform_key = "platform_key",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataStatusEntity

```lua
local data_status = client:DataStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountTransactions` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `company` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `items` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `table` | Yes | Describes the state of data in the Codat cache for a company and data type |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DataStatus():load({ company_id = "company_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataTypeEntity

```lua
local data_type = client:DataType(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HistoryEntity

```lua
local history = client:History(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IntegrationEntity

```lua
local integration = client:Integration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataProvidedBy` | `string` | No | The name of the data provider. |
| `datatypeFeatures` | `table` | No |  |
| `enabled` | `boolean` | Yes | Whether this integration is enabled for your customers to use. |
| `integrationId` | `string` | No | A Codat ID representing the integration. |
| `isBeta` | `boolean` | No | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `boolean` | No | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `string` | Yes | A unique 4-letter key to represent a platform in each integration. |
| `links` | `table` | Yes |  |
| `logoUrl` | `string` | Yes | Static url for integration's logo. |
| `name` | `string` | Yes | Name of integration. |
| `pageNumber` | `number` | Yes | Current page number. |
| `pageSize` | `number` | Yes | Number of items to return in results array. |
| `results` | `table` | No |  |
| `sourceId` | `string` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | No | The type of platform of the connection. |
| `totalResults` | `number` | Yes | Total number of items. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Integration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Integration():load({ id = "integration_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OptionEntity

```lua
local option = client:Option(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductEntity

```lua
local product = client:Product(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProfileEntity

```lua
local profile = client:Profile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | The API key for this Codat instance. |
| `confirmCompanyName` | `boolean` | No | `True` if the company name has been confirmed. |
| `iconUrl` | `string` | No | Static url to your organization's icon. |
| `logoUrl` | `string` | No | Static url to your organization's logo. |
| `name` | `string` | Yes | The name given to the instance. |
| `redirectUrl` | `string` | Yes | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | `table` | No | A list of urls that are allowed to communicate with Codat. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Profile():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Profile():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProfileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PullOperationEntity

```lua
local pull_operation = client:PullOperation(nil)
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
| `isCompleted` | `boolean` | Yes | `True` if the pull operation is completed successfully. |
| `isErrored` | `boolean` | Yes | `True` if the pull operation entered an error state. |
| `links` | `table` | Yes |  |
| `pageNumber` | `number` | Yes | Current page number. |
| `pageSize` | `number` | Yes | Number of items to return in results array. |
| `progress` | `number` | Yes | An integer signifying the progress of the pull operation. |
| `requested` | `string` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `table` | No |  |
| `status` | `string` | Yes | The current status of the dataset. |
| `statusDescription` | `string` | No | Additional information about the dataset status. |
| `totalResults` | `number` | Yes | Total number of items. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PullOperation():create({
  company_id = --[[ string ]],
  companyId = --[[ string ]],
  connectionId = --[[ string ]],
  dataType = --[[ string ]],
  id = --[[ string ]],
  isCompleted = --[[ boolean ]],
  isErrored = --[[ boolean ]],
  links = --[[ table ]],
  pageNumber = --[[ number ]],
  pageSize = --[[ number ]],
  progress = --[[ number ]],
  requested = --[[ string ]],
  status = --[[ string ]],
  totalResults = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PullOperation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PullOperation():load({ company_id = "company_id", dataset_id = "dataset_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PullOperationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PushEntity

```lua
local push = client:Push(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changes` | `table` | No | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `string` | Yes | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `string` | No | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `string` | Yes | Unique identifier for a company's data connection. |
| `dataType` | `string` | No | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `string` | No | A message about the error. |
| `links` | `table` | Yes |  |
| `pageNumber` | `number` | Yes | Current page number. |
| `pageSize` | `number` | Yes | Number of items to return in results array. |
| `pushOperationKey` | `string` | Yes | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `string` | Yes | The datetime when the push was requested. |
| `results` | `table` | No |  |
| `status` | `string` | Yes | The current status of the push operation. |
| `statusCode` | `number` | Yes | Push status code. |
| `timeoutInMinutes` | `number` | No | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `number` | No | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `number` | Yes | Total number of items. |
| `validation` | `table` | No | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Push():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Push():load({ id = "push_id", company_id = "company_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PushEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PushOptionEntity

```lua
local push_option = client:PushOption(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A description of the property. |
| `displayName` | `string` | Yes | The property's display name. |
| `options` | `table` | No |  |
| `properties` | `table` | No |  |
| `required` | `boolean` | Yes | The property is required if `True`. |
| `type` | `string` | Yes | The option type. |
| `validation` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PushOption():load({ id = "push_option_id", company_id = "company_id", connection_id = "connection_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PushOptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## QueueEntity

```lua
local queue = client:Queue(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QueueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RefreshDataEntity

```lua
local refresh_data = client:RefreshData(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RefreshData():create({
  company_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RefreshDataEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SettingEntity

```lua
local setting = client:Setting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | The API key value used to make authenticated http requests. |
| `createdDate` | `string` | No | The date the entity was created. |
| `id` | `string` | No | Unique identifier for the API key. |
| `name` | `string` | No | A meaningful name assigned to the API key. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Setting():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Setting():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Setting():remove({ api_key_id = "api_key_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SupplementalDataEntity

```lua
local supplemental_data = client:SupplementalData(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `supplementalDataConfig` | `table` | No |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SupplementalData():update({
  data_type_id = "data_type_id",
  platform_key = "platform_key",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupplementalDataEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SupplementalDataConfigEntity

```lua
local supplemental_data_config = client:SupplementalDataConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `string` | No | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `table` | No | The additional properties that are required when pulling records. |
| `pushData` | `table` | No | The additional properties that are required to create and/or update records. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SupplementalDataConfig():load({ data_type_id = "data_type_id", platform_key = "platform_key" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupplementalDataConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SyncEntity

```lua
local sync = client:Sync(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SyncEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SyncSettingEntity

```lua
local sync_setting = client:SyncSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataType` | `string` | Yes | Available data types |
| `fetchOnFirstLink` | `boolean` | Yes | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `boolean` | No | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | `number` | No | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | `string` | No | Date from which data should be fetched. |
| `syncFromWindow` | `number` | No | Number of months of data to be fetched. |
| `syncOrder` | `number` | Yes | The sync in which data types are queued for a sync. |
| `syncSchedule` | `number` | Yes | Number of hours after which this data type should be refreshed. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SyncSetting():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SyncSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ValidationEntity

```lua
local validation = client:Validation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | No |  |
| `warnings` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Validation():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ValidationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEntity

```lua
local webhook = client:Webhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyTags` | `table` | No | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `boolean` | No | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `table` | No | An array of event types the webhook consumer subscribes to. |
| `id` | `string` | No | Unique identifier for the webhook consumer. |
| `url` | `string` | No | The URL that will consume webhook events dispatched by Codat. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Webhook():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Webhook():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Webhook():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookZapierKeyEntity

```lua
local webhook_zapier_key = client:WebhookZapierKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WebhookZapierKey():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookZapierKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

