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

    local branding, err = client:Branding():load()
    if err then error(err) end
    -- branding is the loaded record

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
| `button` | `table` | Button branding references. |
| `logo` | `table` | Logo branding references. |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |

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
| `created` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `string` | Name of user that created the company in Codat. |
| `dataConnections` | `table` |  |
| `description` | `string` | Additional information about the company. |
| `id` | `string` | Unique identifier for your SMB in Codat. |
| `lastSync` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `table` |  |
| `name` | `string` | The name of the company |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `products` | `table` | An array of products that are currently enabled for the company. |
| `redirect` | `string` | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `table` | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `table` | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `table` |  |
| `tags` | `table` | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `totalResults` | `number` | Total number of items. |

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
  id = "example_id", -- string
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
| `accessToken` | `string` | The access token for the company. |
| `expiresIn` | `number` | The number of seconds until the access token expires. |
| `id` | `string` |  |
| `tokenType` | `string` | The type of token. |

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
| `created` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `table` |  |
| `id` | `string` | Unique identifier for a company's data connection. |
| `integrationId` | `string` | A Codat ID representing the integration. |
| `integrationKey` | `string` | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `string` | The link URL your customers can use to authorize access to their business application. |
| `links` | `table` |  |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `platformKey` | `string` | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `string` | Name of integration connected to company. |
| `results` | `table` |  |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | The type of platform of the connection. |
| `status` | `string` | The current authorization status of the data connection. |
| `totalResults` | `number` | Total number of items. |

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
| `accessToken` | `string` | Access token that allows SMBs to manage connections that have access to their data. |

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
| `allowedOrigins` | `table` | An array of allowed origins (i.e. |

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
| `dataSource` | `string` | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `id` | `string` |  |
| `keyBy` | `table` | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `requiredData` | `table` | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `table` |  |
| `sourceModifiedDate` | `table` | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `number` | Total number of items. |

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
| `accountTransactions` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `company` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `items` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `table` | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `table` | Describes the state of data in the Codat cache for a company and data type |

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
| `dataProvidedBy` | `string` | The name of the data provider. |
| `datatypeFeatures` | `table` |  |
| `enabled` | `boolean` | Whether this integration is enabled for your customers to use. |
| `id` | `string` |  |
| `integrationId` | `string` | A Codat ID representing the integration. |
| `isBeta` | `boolean` | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `boolean` | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `string` | A unique 4-letter key to represent a platform in each integration. |
| `links` | `table` |  |
| `logoUrl` | `string` | Static url for integration's logo. |
| `name` | `string` | Name of integration. |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `results` | `table` |  |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | The type of platform of the connection. |
| `totalResults` | `number` | Total number of items. |

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
| `apiKey` | `string` | The API key for this Codat instance. |
| `confirmCompanyName` | `boolean` | `True` if the company name has been confirmed. |
| `iconUrl` | `string` | Static url to your organization's icon. |
| `logoUrl` | `string` | Static url to your organization's logo. |
| `name` | `string` | The name given to the instance. |
| `redirectUrl` | `string` | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | `table` | A list of urls that are allowed to communicate with Codat. |

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
| `companyId` | `string` | Unique identifier of the company associated to this pull operation. |
| `completed` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `connectionId` | `string` | Unique identifier of the connection associated to this pull operation. |
| `dataType` | `string` | The data type you are requesting in a pull operation. |
| `errorMessage` | `string` | A message about a transient or persistent error returned by Codat or the source platform. |
| `id` | `string` | Unique identifier of the pull operation. |
| `isCompleted` | `boolean` | `True` if the pull operation is completed successfully. |
| `isErrored` | `boolean` | `True` if the pull operation entered an error state. |
| `links` | `table` |  |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `progress` | `number` | An integer signifying the progress of the pull operation. |
| `requested` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `table` |  |
| `status` | `string` | The current status of the dataset. |
| `statusDescription` | `string` | Additional information about the dataset status. |
| `totalResults` | `number` | Total number of items. |

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
| `changes` | `table` | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `string` | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `string` | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `string` | Unique identifier for a company's data connection. |
| `dataType` | `string` | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `string` | A message about the error. |
| `id` | `string` |  |
| `links` | `table` |  |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `pushOperationKey` | `string` | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `string` | The datetime when the push was requested. |
| `results` | `table` |  |
| `status` | `string` | The current status of the push operation. |
| `statusCode` | `number` | Push status code. |
| `timeoutInMinutes` | `number` | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `number` | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `number` | Total number of items. |
| `validation` | `table` | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

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
| `description` | `string` | A description of the property. |
| `displayName` | `string` | The property's display name. |
| `id` | `string` |  |
| `options` | `table` |  |
| `properties` | `table` |  |
| `required` | `boolean` | The property is required if `True`. |
| `type` | `string` | The option type. |
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
| `apiKey` | `string` | The API key value used to make authenticated http requests. |
| `createdDate` | `string` | The date the entity was created. |
| `id` | `string` | Unique identifier for the API key. |
| `name` | `string` | A meaningful name assigned to the API key. |

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
| `dataSource` | `string` | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `table` | The additional properties that are required when pulling records. |
| `pushData` | `table` | The additional properties that are required to create and/or update records. |

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
| `dataType` | `string` | Available data types |
| `fetchOnFirstLink` | `boolean` | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `boolean` | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | `number` | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | `string` | Date from which data should be fetched. |
| `syncFromWindow` | `number` | Number of months of data to be fetched. |
| `syncOrder` | `number` | The sync in which data types are queued for a sync. |
| `syncSchedule` | `number` | Number of hours after which this data type should be refreshed. |

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
| `companyTags` | `table` | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `boolean` | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `table` | An array of event types the webhook consumer subscribes to. |
| `id` | `string` | Unique identifier for the webhook consumer. |
| `url` | `string` | The URL that will consume webhook events dispatched by Codat. |

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

Features are the extension mechanism. A feature is a Lua table
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
