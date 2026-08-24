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
| `button` | `table` | No |  |
| `logo` | `table` | No |  |
| `sourceId` | `string` | No |  |

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
| `created` | `string` | No |  |
| `createdByUserName` | `string` | No |  |
| `dataConnections` | `table` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `lastSync` | `string` | No |  |
| `links` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `pageNumber` | `number` | Yes |  |
| `pageSize` | `number` | Yes |  |
| `products` | `table` | No |  |
| `redirect` | `string` | Yes |  |
| `referenceParentCompany` | `table` | No |  |
| `referenceSubsidiaryCompanies` | `table` | No |  |
| `results` | `table` | No |  |
| `tags` | `table` | No |  |
| `totalResults` | `number` | Yes |  |

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
| `accessToken` | `string` | Yes |  |
| `expiresIn` | `number` | Yes |  |
| `tokenType` | `string` | Yes |  |

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
| `created` | `string` | Yes |  |
| `dataConnectionErrors` | `table` | No |  |
| `id` | `string` | Yes |  |
| `integrationId` | `string` | Yes |  |
| `integrationKey` | `string` | Yes |  |
| `lastSync` | `string` | No |  |
| `linkUrl` | `string` | Yes |  |
| `links` | `table` | Yes |  |
| `pageNumber` | `number` | Yes |  |
| `pageSize` | `number` | Yes |  |
| `platformKey` | `string` | No |  |
| `platformName` | `string` | Yes |  |
| `results` | `table` | No |  |
| `sourceId` | `string` | Yes |  |
| `sourceType` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `totalResults` | `number` | Yes |  |

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
| `accessToken` | `string` | No |  |

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
| `allowedOrigins` | `table` | No |  |

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
| `dataSource` | `string` | No |  |
| `keyBy` | `table` | No |  |
| `pageNumber` | `number` | No |  |
| `pageSize` | `number` | No |  |
| `requiredData` | `table` | No |  |
| `results` | `table` | No |  |
| `sourceModifiedDate` | `table` | No |  |
| `totalResults` | `number` | No |  |

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
| `accountTransactions` | `table` | Yes |  |
| `balanceSheet` | `table` | Yes |  |
| `bankAccounts` | `table` | Yes |  |
| `bankTransactions` | `table` | Yes |  |
| `bankingaccountBalances` | `table` | Yes |  |
| `bankingaccounts` | `table` | Yes |  |
| `bankingtransactionCategories` | `table` | Yes |  |
| `bankingtransactions` | `table` | Yes |  |
| `billCreditNotes` | `table` | Yes |  |
| `billPayments` | `table` | Yes |  |
| `bills` | `table` | Yes |  |
| `cashFlowStatement` | `table` | Yes |  |
| `chartOfAccounts` | `table` | Yes |  |
| `commercecompanyInfo` | `table` | Yes |  |
| `commercecustomers` | `table` | Yes |  |
| `commercedisputes` | `table` | Yes |  |
| `commercelocations` | `table` | Yes |  |
| `commerceorders` | `table` | Yes |  |
| `commercepaymentMethods` | `table` | Yes |  |
| `commercepayments` | `table` | Yes |  |
| `commerceproductCategories` | `table` | Yes |  |
| `commerceproducts` | `table` | Yes |  |
| `commercetaxComponents` | `table` | Yes |  |
| `commercetransactions` | `table` | Yes |  |
| `company` | `table` | Yes |  |
| `creditNotes` | `table` | Yes |  |
| `customers` | `table` | Yes |  |
| `directCosts` | `table` | Yes |  |
| `directIncomes` | `table` | Yes |  |
| `invoices` | `table` | Yes |  |
| `itemReceipts` | `table` | Yes |  |
| `items` | `table` | Yes |  |
| `journalEntries` | `table` | Yes |  |
| `journals` | `table` | Yes |  |
| `paymentMethods` | `table` | Yes |  |
| `payments` | `table` | Yes |  |
| `profitAndLoss` | `table` | Yes |  |
| `purchaseOrders` | `table` | Yes |  |
| `salesOrders` | `table` | Yes |  |
| `suppliers` | `table` | Yes |  |
| `taxRates` | `table` | Yes |  |
| `trackingCategories` | `table` | Yes |  |
| `transfers` | `table` | Yes |  |

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
| `dataProvidedBy` | `string` | No |  |
| `datatypeFeatures` | `table` | No |  |
| `enabled` | `boolean` | Yes |  |
| `integrationId` | `string` | No |  |
| `isBeta` | `boolean` | No |  |
| `isOfflineConnector` | `boolean` | No |  |
| `key` | `string` | Yes |  |
| `links` | `table` | Yes |  |
| `logoUrl` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `pageNumber` | `number` | Yes |  |
| `pageSize` | `number` | Yes |  |
| `results` | `table` | No |  |
| `sourceId` | `string` | No |  |
| `sourceType` | `string` | No |  |
| `totalResults` | `number` | Yes |  |

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
| `apiKey` | `string` | No |  |
| `confirmCompanyName` | `boolean` | No |  |
| `iconUrl` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `whiteListUrls` | `table` | No |  |

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
| `companyId` | `string` | Yes |  |
| `completed` | `string` | No |  |
| `connectionId` | `string` | Yes |  |
| `dataType` | `string` | Yes |  |
| `errorMessage` | `string` | No |  |
| `id` | `string` | Yes |  |
| `isCompleted` | `boolean` | Yes |  |
| `isErrored` | `boolean` | Yes |  |
| `links` | `table` | Yes |  |
| `pageNumber` | `number` | Yes |  |
| `pageSize` | `number` | Yes |  |
| `progress` | `number` | Yes |  |
| `requested` | `string` | Yes |  |
| `results` | `table` | No |  |
| `status` | `string` | Yes |  |
| `statusDescription` | `string` | No |  |
| `totalResults` | `number` | Yes |  |

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
| `changes` | `table` | No |  |
| `companyId` | `string` | Yes |  |
| `completedOnUtc` | `string` | No |  |
| `dataConnectionKey` | `string` | Yes |  |
| `dataType` | `string` | No |  |
| `errorMessage` | `string` | No |  |
| `links` | `table` | Yes |  |
| `pageNumber` | `number` | Yes |  |
| `pageSize` | `number` | Yes |  |
| `pushOperationKey` | `string` | Yes |  |
| `requestedOnUtc` | `string` | Yes |  |
| `results` | `table` | No |  |
| `status` | `string` | Yes |  |
| `statusCode` | `number` | Yes |  |
| `timeoutInMinutes` | `number` | No |  |
| `timeoutInSeconds` | `number` | No |  |
| `totalResults` | `number` | Yes |  |
| `validation` | `table` | No |  |

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
| `description` | `string` | No |  |
| `displayName` | `string` | Yes |  |
| `options` | `table` | No |  |
| `properties` | `table` | No |  |
| `required` | `boolean` | Yes |  |
| `type` | `string` | Yes |  |
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
| `apiKey` | `string` | No |  |
| `createdDate` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No |  |

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
| `dataSource` | `string` | No |  |
| `pullData` | `table` | No |  |
| `pushData` | `table` | No |  |

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
| `dataType` | `string` | Yes |  |
| `fetchOnFirstLink` | `boolean` | Yes |  |
| `isLocked` | `boolean` | No |  |
| `monthsToSync` | `number` | No |  |
| `syncFromUtc` | `string` | No |  |
| `syncFromWindow` | `number` | No |  |
| `syncOrder` | `number` | Yes |  |
| `syncSchedule` | `number` | Yes |  |

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
| `companyTags` | `table` | No |  |
| `disabled` | `boolean` | No |  |
| `eventTypes` | `table` | No |  |
| `id` | `string` | No |  |
| `url` | `string` | No |  |

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

