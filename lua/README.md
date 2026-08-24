# Codatplatform Lua SDK



The Lua SDK for the Codatplatform API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:AccessToken()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/codatplatform-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("codatplatform_sdk")

local client = sdk.new({
  apikey = os.getenv("CODATPLATFORM_APIKEY"),
})
```

### 3. Load a branding

Branding is nested under platform_key, so provide the `platform_key`.

```lua
local branding, err = client:Branding():load({ platform_key = "example_platform_key" })
if err then error(err) end
print(branding)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local pushoption, err = client:PushOption():load({ company_id = "example", connection_id = "example", id = "example_id" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:PushOption():load({ id = "test01", company_id = "example", connection_id = "example" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CODATPLATFORM_TEST_LIVE=TRUE
CODATPLATFORM_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### CodatplatformSDK

```lua
local sdk = require("codatplatform_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CodatplatformSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `AccessToken` | `(data) -> AccessTokenEntity` | Create an AccessToken entity instance. |
| `All` | `(data) -> AllEntity` | Create an All entity instance. |
| `ApiKey` | `(data) -> ApiKeyEntity` | Create an ApiKey entity instance. |
| `Branding` | `(data) -> BrandingEntity` | Create a Branding entity instance. |
| `Company` | `(data) -> CompanyEntity` | Create a Company entity instance. |
| `CompanyAccessToken` | `(data) -> CompanyAccessTokenEntity` | Create a CompanyAccessToken entity instance. |
| `Connection` | `(data) -> ConnectionEntity` | Create a Connection entity instance. |
| `ConnectionManagementAccessToken` | `(data) -> ConnectionManagementAccessTokenEntity` | Create a ConnectionManagementAccessToken entity instance. |
| `ConnectionManagementAllowedOrigin` | `(data) -> ConnectionManagementAllowedOriginEntity` | Create a ConnectionManagementAllowedOrigin entity instance. |
| `Custom` | `(data) -> CustomEntity` | Create a Custom entity instance. |
| `DataStatus` | `(data) -> DataStatusEntity` | Create a DataStatus entity instance. |
| `DataType` | `(data) -> DataTypeEntity` | Create a DataType entity instance. |
| `History` | `(data) -> HistoryEntity` | Create a History entity instance. |
| `Integration` | `(data) -> IntegrationEntity` | Create an Integration entity instance. |
| `Option` | `(data) -> OptionEntity` | Create an Option entity instance. |
| `Product` | `(data) -> ProductEntity` | Create a Product entity instance. |
| `Profile` | `(data) -> ProfileEntity` | Create a Profile entity instance. |
| `PullOperation` | `(data) -> PullOperationEntity` | Create a PullOperation entity instance. |
| `Push` | `(data) -> PushEntity` | Create a Push entity instance. |
| `PushOption` | `(data) -> PushOptionEntity` | Create a PushOption entity instance. |
| `Queue` | `(data) -> QueueEntity` | Create a Queue entity instance. |
| `RefreshData` | `(data) -> RefreshDataEntity` | Create a RefreshData entity instance. |
| `Setting` | `(data) -> SettingEntity` | Create a Setting entity instance. |
| `SupplementalData` | `(data) -> SupplementalDataEntity` | Create a SupplementalData entity instance. |
| `SupplementalDataConfig` | `(data) -> SupplementalDataConfigEntity` | Create a SupplementalDataConfig entity instance. |
| `Sync` | `(data) -> SyncEntity` | Create a Sync entity instance. |
| `SyncSetting` | `(data) -> SyncSettingEntity` | Create a SyncSetting entity instance. |
| `Validation` | `(data) -> ValidationEntity` | Create a Validation entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |
| `WebhookZapierKey` | `(data) -> WebhookZapierKeyEntity` | Create a WebhookZapierKey entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local access_token, err = client:AccessToken():load()
    if err then error(err) end
    -- access_token is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local access_token = client:AccessToken(nil)`


### All

Create an instance: `local all = client:All(nil)`


### ApiKey

Create an instance: `local api_key = client:ApiKey(nil)`


### Branding

Create an instance: `local branding = client:Branding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `button` | `table` |  |
| `logo` | `table` |  |
| `sourceId` | `string` |  |

#### Example: Load

```lua
local branding, err = client:Branding():load({ platform_key = "platform_key" })
```


### Company

Create an instance: `local company = client:Company(nil)`

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
| `dataConnections` | `table` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `lastSync` | `string` |  |
| `links` | `table` |  |
| `name` | `string` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `products` | `table` |  |
| `redirect` | `string` |  |
| `referenceParentCompany` | `table` |  |
| `referenceSubsidiaryCompanies` | `table` |  |
| `results` | `table` |  |
| `tags` | `table` |  |
| `totalResults` | `number` |  |

#### Example: Load

```lua
local company, err = client:Company():load({ id = "company_id" })
```

#### Example: List

```lua
local companys, err = client:Company():list()
```

#### Example: Create

```lua
local company, err = client:Company():create({
  links = {}, -- table
  name = "example_name", -- string
  pageNumber = 1, -- number
  pageSize = 1, -- number
  redirect = "example_redirect", -- string
  totalResults = 1, -- number
})
```


### CompanyAccessToken

Create an instance: `local company_access_token = client:CompanyAccessToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessToken` | `string` |  |
| `expiresIn` | `number` |  |
| `tokenType` | `string` |  |

#### Example: Load

```lua
local company_access_token, err = client:CompanyAccessToken():load({ id = "company_access_token_id" })
```


### Connection

Create an instance: `local connection = client:Connection(nil)`

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
| `connectionInfo` | `table` |  |
| `created` | `string` |  |
| `dataConnectionErrors` | `table` |  |
| `id` | `string` |  |
| `integrationId` | `string` |  |
| `integrationKey` | `string` |  |
| `lastSync` | `string` |  |
| `linkUrl` | `string` |  |
| `links` | `table` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `platformKey` | `string` |  |
| `platformName` | `string` |  |
| `results` | `table` |  |
| `sourceId` | `string` |  |
| `sourceType` | `string` |  |
| `status` | `string` |  |
| `totalResults` | `number` |  |

#### Example: Load

```lua
local connection, err = client:Connection():load({ id = "connection_id", company_id = "company_id" })
```

#### Example: List

```lua
local connections, err = client:Connection():list()
```

#### Example: Create

```lua
local connection, err = client:Connection():create({
  company_id = "example_company_id", -- string
  created = "example_created", -- string
  id = "example_id", -- string
  integrationId = "example_integrationId", -- string
  integrationKey = "example_integrationKey", -- string
  linkUrl = "example_linkUrl", -- string
  links = {}, -- table
  pageNumber = 1, -- number
  pageSize = 1, -- number
  platformName = "example_platformName", -- string
  sourceId = "example_sourceId", -- string
  sourceType = "example_sourceType", -- string
  status = "example_status", -- string
  totalResults = 1, -- number
})
```


### ConnectionManagementAccessToken

Create an instance: `local connection_management_access_token = client:ConnectionManagementAccessToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessToken` | `string` |  |

#### Example: Load

```lua
local connection_management_access_token, err = client:ConnectionManagementAccessToken():load({ company_id = "company_id" })
```


### ConnectionManagementAllowedOrigin

Create an instance: `local connection_management_allowed_origin = client:ConnectionManagementAllowedOrigin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowedOrigins` | `table` |  |

#### Example: List

```lua
local connection_management_allowed_origins, err = client:ConnectionManagementAllowedOrigin():list()
```

#### Example: Create

```lua
local connection_management_allowed_origin, err = client:ConnectionManagementAllowedOrigin():create({
})
```


### Custom

Create an instance: `local custom = client:Custom(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `string` |  |
| `keyBy` | `table` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `requiredData` | `table` |  |
| `results` | `table` |  |
| `sourceModifiedDate` | `table` |  |
| `totalResults` | `number` |  |

#### Example: Load

```lua
local custom, err = client:Custom():load({ id = "custom_id" })
```


### DataStatus

Create an instance: `local data_status = client:DataStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountTransactions` | `table` |  |
| `balanceSheet` | `table` |  |
| `bankAccounts` | `table` |  |
| `bankTransactions` | `table` |  |
| `bankingaccountBalances` | `table` |  |
| `bankingaccounts` | `table` |  |
| `bankingtransactionCategories` | `table` |  |
| `bankingtransactions` | `table` |  |
| `billCreditNotes` | `table` |  |
| `billPayments` | `table` |  |
| `bills` | `table` |  |
| `cashFlowStatement` | `table` |  |
| `chartOfAccounts` | `table` |  |
| `commercecompanyInfo` | `table` |  |
| `commercecustomers` | `table` |  |
| `commercedisputes` | `table` |  |
| `commercelocations` | `table` |  |
| `commerceorders` | `table` |  |
| `commercepaymentMethods` | `table` |  |
| `commercepayments` | `table` |  |
| `commerceproductCategories` | `table` |  |
| `commerceproducts` | `table` |  |
| `commercetaxComponents` | `table` |  |
| `commercetransactions` | `table` |  |
| `company` | `table` |  |
| `creditNotes` | `table` |  |
| `customers` | `table` |  |
| `directCosts` | `table` |  |
| `directIncomes` | `table` |  |
| `invoices` | `table` |  |
| `itemReceipts` | `table` |  |
| `items` | `table` |  |
| `journalEntries` | `table` |  |
| `journals` | `table` |  |
| `paymentMethods` | `table` |  |
| `payments` | `table` |  |
| `profitAndLoss` | `table` |  |
| `purchaseOrders` | `table` |  |
| `salesOrders` | `table` |  |
| `suppliers` | `table` |  |
| `taxRates` | `table` |  |
| `trackingCategories` | `table` |  |
| `transfers` | `table` |  |

#### Example: Load

```lua
local data_status, err = client:DataStatus():load({ company_id = "company_id" })
```


### DataType

Create an instance: `local data_type = client:DataType(nil)`


### History

Create an instance: `local history = client:History(nil)`


### Integration

Create an instance: `local integration = client:Integration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataProvidedBy` | `string` |  |
| `datatypeFeatures` | `table` |  |
| `enabled` | `boolean` |  |
| `integrationId` | `string` |  |
| `isBeta` | `boolean` |  |
| `isOfflineConnector` | `boolean` |  |
| `key` | `string` |  |
| `links` | `table` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `results` | `table` |  |
| `sourceId` | `string` |  |
| `sourceType` | `string` |  |
| `totalResults` | `number` |  |

#### Example: Load

```lua
local integration, err = client:Integration():load({ id = "integration_id" })
```

#### Example: List

```lua
local integrations, err = client:Integration():list()
```


### Option

Create an instance: `local option = client:Option(nil)`


### Product

Create an instance: `local product = client:Product(nil)`


### Profile

Create an instance: `local profile = client:Profile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` |  |
| `confirmCompanyName` | `boolean` |  |
| `iconUrl` | `string` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `redirectUrl` | `string` |  |
| `whiteListUrls` | `table` |  |

#### Example: List

```lua
local profiles, err = client:Profile():list()
```


### PullOperation

Create an instance: `local pull_operation = client:PullOperation(nil)`

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
| `isCompleted` | `boolean` |  |
| `isErrored` | `boolean` |  |
| `links` | `table` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `progress` | `number` |  |
| `requested` | `string` |  |
| `results` | `table` |  |
| `status` | `string` |  |
| `statusDescription` | `string` |  |
| `totalResults` | `number` |  |

#### Example: Load

```lua
local pull_operation, err = client:PullOperation():load({ company_id = "company_id", dataset_id = "dataset_id" })
```

#### Example: List

```lua
local pull_operations, err = client:PullOperation():list()
```

#### Example: Create

```lua
local pull_operation, err = client:PullOperation():create({
  company_id = "example_company_id", -- string
  companyId = "example_companyId", -- string
  connectionId = "example_connectionId", -- string
  dataType = "example_dataType", -- string
  id = "example_id", -- string
  isCompleted = true, -- boolean
  isErrored = true, -- boolean
  links = {}, -- table
  pageNumber = 1, -- number
  pageSize = 1, -- number
  progress = 1, -- number
  requested = "example_requested", -- string
  status = "example_status", -- string
  totalResults = 1, -- number
})
```


### Push

Create an instance: `local push = client:Push(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `changes` | `table` |  |
| `companyId` | `string` |  |
| `completedOnUtc` | `string` |  |
| `dataConnectionKey` | `string` |  |
| `dataType` | `string` |  |
| `errorMessage` | `string` |  |
| `links` | `table` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `pushOperationKey` | `string` |  |
| `requestedOnUtc` | `string` |  |
| `results` | `table` |  |
| `status` | `string` |  |
| `statusCode` | `number` |  |
| `timeoutInMinutes` | `number` |  |
| `timeoutInSeconds` | `number` |  |
| `totalResults` | `number` |  |
| `validation` | `table` |  |

#### Example: Load

```lua
local push, err = client:Push():load({ id = "push_id", company_id = "company_id" })
```

#### Example: List

```lua
local pushs, err = client:Push():list()
```


### PushOption

Create an instance: `local push_option = client:PushOption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `displayName` | `string` |  |
| `options` | `table` |  |
| `properties` | `table` |  |
| `required` | `boolean` |  |
| `type` | `string` |  |
| `validation` | `table` |  |

#### Example: Load

```lua
local push_option, err = client:PushOption():load({ id = "push_option_id", company_id = "company_id", connection_id = "connection_id" })
```


### Queue

Create an instance: `local queue = client:Queue(nil)`


### RefreshData

Create an instance: `local refresh_data = client:RefreshData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local refresh_data, err = client:RefreshData():create({
  company_id = "example_company_id", -- string
})
```


### Setting

Create an instance: `local setting = client:Setting(nil)`

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

```lua
local settings, err = client:Setting():list()
```

#### Example: Create

```lua
local setting, err = client:Setting():create({
})
```


### SupplementalData

Create an instance: `local supplemental_data = client:SupplementalData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `supplementalDataConfig` | `table` |  |


### SupplementalDataConfig

Create an instance: `local supplemental_data_config = client:SupplementalDataConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `string` |  |
| `pullData` | `table` |  |
| `pushData` | `table` |  |

#### Example: Load

```lua
local supplemental_data_config, err = client:SupplementalDataConfig():load({ data_type_id = "data_type_id", platform_key = "platform_key" })
```


### Sync

Create an instance: `local sync = client:Sync(nil)`


### SyncSetting

Create an instance: `local sync_setting = client:SyncSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataType` | `string` |  |
| `fetchOnFirstLink` | `boolean` |  |
| `isLocked` | `boolean` |  |
| `monthsToSync` | `number` |  |
| `syncFromUtc` | `string` |  |
| `syncFromWindow` | `number` |  |
| `syncOrder` | `number` |  |
| `syncSchedule` | `number` |  |

#### Example: List

```lua
local sync_settings, err = client:SyncSetting():list()
```


### Validation

Create an instance: `local validation = client:Validation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `warnings` | `table` |  |

#### Example: List

```lua
local validations, err = client:Validation():list()
```


### Webhook

Create an instance: `local webhook = client:Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyTags` | `table` |  |
| `disabled` | `boolean` |  |
| `eventTypes` | `table` |  |
| `id` | `string` |  |
| `url` | `string` |  |

#### Example: List

```lua
local webhooks, err = client:Webhook():list()
```

#### Example: Create

```lua
local webhook, err = client:Webhook():create({
})
```


### WebhookZapierKey

Create an instance: `local webhook_zapier_key = client:WebhookZapierKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |

#### Example: Create

```lua
local webhook_zapier_key, err = client:WebhookZapierKey():create({
})
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── codatplatform_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`codatplatform_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local pushoption = client:PushOption()
pushoption:load({ company_id = "example", connection_id = "example", id = "example_id" })

-- pushoption:data_get() now returns the pushoption data from the last load
-- pushoption:match_get() returns the last match criteria
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
