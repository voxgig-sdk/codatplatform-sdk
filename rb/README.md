# Codatplatform Ruby SDK



The Ruby SDK for the Codatplatform API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AccessToken` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/codatplatform-sdk/releases](https://github.com/voxgig-sdk/codatplatform-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "Codatplatform_sdk"

client = CodatplatformSDK.new({
  "apikey" => ENV["CODATPLATFORM_APIKEY"],
})
```

### 3. Load a branding

Branding is nested under platform_key, so provide the `platform_key`.

```ruby
begin
  # load returns the bare Branding record (raises on error).
  branding = client.Branding.load({ "platform_key" => "example_platform_key" })
  puts branding
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  pushoption = client.PushOption.load({ "company_id" => "example", "connection_id" => "example", "id" => "example_id" })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = CodatplatformSDK.test({
  "entity" => { "pushoption" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the bare mock record (raises on error).
pushoption = client.PushOption.load({ "id" => "test01", "company_id" => "example", "connection_id" => "example" })
puts pushoption
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CodatplatformSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CodatplatformSDK

```ruby
require_relative "Codatplatform_sdk"
client = CodatplatformSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CodatplatformSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CodatplatformSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CodatplatformError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `access_token = client.AccessToken`


### All

Create an instance: `all = client.All`


### ApiKey

Create an instance: `api_key = client.ApiKey`


### Branding

Create an instance: `branding = client.Branding`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `button` | `Hash` |  |
| `logo` | `Hash` |  |
| `sourceId` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Branding record (raises on error).
branding = client.Branding.load({ "platform_key" => "platform_key" })
```


### Company

Create an instance: `company = client.Company`

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
| `created` | `String` |  |
| `createdByUserName` | `String` |  |
| `dataConnections` | `Array` |  |
| `description` | `String` |  |
| `id` | `String` |  |
| `lastSync` | `String` |  |
| `links` | `Hash` |  |
| `name` | `String` |  |
| `pageNumber` | `Integer` |  |
| `pageSize` | `Integer` |  |
| `products` | `Array` |  |
| `redirect` | `String` |  |
| `referenceParentCompany` | `Hash` |  |
| `referenceSubsidiaryCompanies` | `Array` |  |
| `results` | `Array` |  |
| `tags` | `Hash` |  |
| `totalResults` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare Company record (raises on error).
company = client.Company.load({ "id" => "company_id" })
```

#### Example: List

```ruby
# list returns an Array of Company records (raises on error).
companys = client.Company.list
```

#### Example: Create

```ruby
company = client.Company.create({
  "links" => {}, # Hash
  "name" => "example_name", # String
  "pageNumber" => 1, # Integer
  "pageSize" => 1, # Integer
  "redirect" => "example_redirect", # String
  "totalResults" => 1, # Integer
})
```


### CompanyAccessToken

Create an instance: `company_access_token = client.CompanyAccessToken`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessToken` | `String` |  |
| `expiresIn` | `Integer` |  |
| `tokenType` | `String` |  |

#### Example: Load

```ruby
# load returns the bare CompanyAccessToken record (raises on error).
company_access_token = client.CompanyAccessToken.load({ "id" => "company_access_token_id" })
```


### Connection

Create an instance: `connection = client.Connection`

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
| `connectionInfo` | `Hash` |  |
| `created` | `String` |  |
| `dataConnectionErrors` | `Array` |  |
| `id` | `String` |  |
| `integrationId` | `String` |  |
| `integrationKey` | `String` |  |
| `lastSync` | `String` |  |
| `linkUrl` | `String` |  |
| `links` | `Hash` |  |
| `pageNumber` | `Integer` |  |
| `pageSize` | `Integer` |  |
| `platformKey` | `String` |  |
| `platformName` | `String` |  |
| `results` | `Array` |  |
| `sourceId` | `String` |  |
| `sourceType` | `String` |  |
| `status` | `String` |  |
| `totalResults` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare Connection record (raises on error).
connection = client.Connection.load({ "id" => "connection_id", "company_id" => "company_id" })
```

#### Example: List

```ruby
# list returns an Array of Connection records (raises on error).
connections = client.Connection.list
```

#### Example: Create

```ruby
connection = client.Connection.create({
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


### ConnectionManagementAccessToken

Create an instance: `connection_management_access_token = client.ConnectionManagementAccessToken`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessToken` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ConnectionManagementAccessToken record (raises on error).
connection_management_access_token = client.ConnectionManagementAccessToken.load({ "company_id" => "company_id" })
```


### ConnectionManagementAllowedOrigin

Create an instance: `connection_management_allowed_origin = client.ConnectionManagementAllowedOrigin`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowedOrigins` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ConnectionManagementAllowedOrigin records (raises on error).
connection_management_allowed_origins = client.ConnectionManagementAllowedOrigin.list
```

#### Example: Create

```ruby
connection_management_allowed_origin = client.ConnectionManagementAllowedOrigin.create({
})
```


### Custom

Create an instance: `custom = client.Custom`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `String` |  |
| `keyBy` | `Array` |  |
| `pageNumber` | `Integer` |  |
| `pageSize` | `Integer` |  |
| `requiredData` | `Hash` |  |
| `results` | `Array` |  |
| `sourceModifiedDate` | `Array` |  |
| `totalResults` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare Custom record (raises on error).
custom = client.Custom.load({ "id" => "custom_id" })
```


### DataStatus

Create an instance: `data_status = client.DataStatus`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountTransactions` | `Hash` |  |
| `balanceSheet` | `Hash` |  |
| `bankAccounts` | `Hash` |  |
| `bankTransactions` | `Hash` |  |
| `bankingaccountBalances` | `Hash` |  |
| `bankingaccounts` | `Hash` |  |
| `bankingtransactionCategories` | `Hash` |  |
| `bankingtransactions` | `Hash` |  |
| `billCreditNotes` | `Hash` |  |
| `billPayments` | `Hash` |  |
| `bills` | `Hash` |  |
| `cashFlowStatement` | `Hash` |  |
| `chartOfAccounts` | `Hash` |  |
| `commercecompanyInfo` | `Hash` |  |
| `commercecustomers` | `Hash` |  |
| `commercedisputes` | `Hash` |  |
| `commercelocations` | `Hash` |  |
| `commerceorders` | `Hash` |  |
| `commercepaymentMethods` | `Hash` |  |
| `commercepayments` | `Hash` |  |
| `commerceproductCategories` | `Hash` |  |
| `commerceproducts` | `Hash` |  |
| `commercetaxComponents` | `Hash` |  |
| `commercetransactions` | `Hash` |  |
| `company` | `Hash` |  |
| `creditNotes` | `Hash` |  |
| `customers` | `Hash` |  |
| `directCosts` | `Hash` |  |
| `directIncomes` | `Hash` |  |
| `invoices` | `Hash` |  |
| `itemReceipts` | `Hash` |  |
| `items` | `Hash` |  |
| `journalEntries` | `Hash` |  |
| `journals` | `Hash` |  |
| `paymentMethods` | `Hash` |  |
| `payments` | `Hash` |  |
| `profitAndLoss` | `Hash` |  |
| `purchaseOrders` | `Hash` |  |
| `salesOrders` | `Hash` |  |
| `suppliers` | `Hash` |  |
| `taxRates` | `Hash` |  |
| `trackingCategories` | `Hash` |  |
| `transfers` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare DataStatus record (raises on error).
data_status = client.DataStatus.load({ "company_id" => "company_id" })
```


### DataType

Create an instance: `data_type = client.DataType`


### History

Create an instance: `history = client.History`


### Integration

Create an instance: `integration = client.Integration`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataProvidedBy` | `String` |  |
| `datatypeFeatures` | `Array` |  |
| `enabled` | `Boolean` |  |
| `integrationId` | `String` |  |
| `isBeta` | `Boolean` |  |
| `isOfflineConnector` | `Boolean` |  |
| `key` | `String` |  |
| `links` | `Hash` |  |
| `logoUrl` | `String` |  |
| `name` | `String` |  |
| `pageNumber` | `Integer` |  |
| `pageSize` | `Integer` |  |
| `results` | `Array` |  |
| `sourceId` | `String` |  |
| `sourceType` | `String` |  |
| `totalResults` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare Integration record (raises on error).
integration = client.Integration.load({ "id" => "integration_id" })
```

#### Example: List

```ruby
# list returns an Array of Integration records (raises on error).
integrations = client.Integration.list
```


### Option

Create an instance: `option = client.Option`


### Product

Create an instance: `product = client.Product`


### Profile

Create an instance: `profile = client.Profile`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `String` |  |
| `confirmCompanyName` | `Boolean` |  |
| `iconUrl` | `String` |  |
| `logoUrl` | `String` |  |
| `name` | `String` |  |
| `redirectUrl` | `String` |  |
| `whiteListUrls` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of Profile records (raises on error).
profiles = client.Profile.list
```


### PullOperation

Create an instance: `pull_operation = client.PullOperation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyId` | `String` |  |
| `completed` | `String` |  |
| `connectionId` | `String` |  |
| `dataType` | `String` |  |
| `errorMessage` | `String` |  |
| `id` | `String` |  |
| `isCompleted` | `Boolean` |  |
| `isErrored` | `Boolean` |  |
| `links` | `Hash` |  |
| `pageNumber` | `Integer` |  |
| `pageSize` | `Integer` |  |
| `progress` | `Integer` |  |
| `requested` | `String` |  |
| `results` | `Array` |  |
| `status` | `String` |  |
| `statusDescription` | `String` |  |
| `totalResults` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare PullOperation record (raises on error).
pull_operation = client.PullOperation.load({ "company_id" => "company_id", "dataset_id" => "dataset_id" })
```

#### Example: List

```ruby
# list returns an Array of PullOperation records (raises on error).
pull_operations = client.PullOperation.list
```

#### Example: Create

```ruby
pull_operation = client.PullOperation.create({
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


### Push

Create an instance: `push = client.Push`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `changes` | `Array` |  |
| `companyId` | `String` |  |
| `completedOnUtc` | `String` |  |
| `dataConnectionKey` | `String` |  |
| `dataType` | `String` |  |
| `errorMessage` | `String` |  |
| `links` | `Hash` |  |
| `pageNumber` | `Integer` |  |
| `pageSize` | `Integer` |  |
| `pushOperationKey` | `String` |  |
| `requestedOnUtc` | `String` |  |
| `results` | `Array` |  |
| `status` | `String` |  |
| `statusCode` | `Integer` |  |
| `timeoutInMinutes` | `Integer` |  |
| `timeoutInSeconds` | `Integer` |  |
| `totalResults` | `Integer` |  |
| `validation` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare Push record (raises on error).
push = client.Push.load({ "id" => "push_id", "company_id" => "company_id" })
```

#### Example: List

```ruby
# list returns an Array of Push records (raises on error).
pushs = client.Push.list
```


### PushOption

Create an instance: `push_option = client.PushOption`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` |  |
| `displayName` | `String` |  |
| `options` | `Array` |  |
| `properties` | `Hash` |  |
| `required` | `Boolean` |  |
| `type` | `String` |  |
| `validation` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare PushOption record (raises on error).
push_option = client.PushOption.load({ "id" => "push_option_id", "company_id" => "company_id", "connection_id" => "connection_id" })
```


### Queue

Create an instance: `queue = client.Queue`


### RefreshData

Create an instance: `refresh_data = client.RefreshData`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
refresh_data = client.RefreshData.create({
  "company_id" => "example_company_id", # String
})
```


### Setting

Create an instance: `setting = client.Setting`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `String` |  |
| `createdDate` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Setting records (raises on error).
settings = client.Setting.list
```

#### Example: Create

```ruby
setting = client.Setting.create({
})
```


### SupplementalData

Create an instance: `supplemental_data = client.SupplementalData`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `supplementalDataConfig` | `Hash` |  |


### SupplementalDataConfig

Create an instance: `supplemental_data_config = client.SupplementalDataConfig`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `String` |  |
| `pullData` | `Hash` |  |
| `pushData` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare SupplementalDataConfig record (raises on error).
supplemental_data_config = client.SupplementalDataConfig.load({ "data_type_id" => "data_type_id", "platform_key" => "platform_key" })
```


### Sync

Create an instance: `sync = client.Sync`


### SyncSetting

Create an instance: `sync_setting = client.SyncSetting`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataType` | `String` |  |
| `fetchOnFirstLink` | `Boolean` |  |
| `isLocked` | `Boolean` |  |
| `monthsToSync` | `Integer` |  |
| `syncFromUtc` | `String` |  |
| `syncFromWindow` | `Integer` |  |
| `syncOrder` | `Integer` |  |
| `syncSchedule` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of SyncSetting records (raises on error).
sync_settings = client.SyncSetting.list
```


### Validation

Create an instance: `validation = client.Validation`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `warnings` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of Validation records (raises on error).
validations = client.Validation.list
```


### Webhook

Create an instance: `webhook = client.Webhook`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyTags` | `Array` |  |
| `disabled` | `Boolean` |  |
| `eventTypes` | `Array` |  |
| `id` | `String` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Webhook records (raises on error).
webhooks = client.Webhook.list
```

#### Example: Create

```ruby
webhook = client.Webhook.create({
})
```


### WebhookZapierKey

Create an instance: `webhook_zapier_key = client.WebhookZapierKey`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `String` |  |

#### Example: Create

```ruby
webhook_zapier_key = client.WebhookZapierKey.create({
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── Codatplatform_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`Codatplatform_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
pushoption = client.PushOption
pushoption.load({ "company_id" => "example", "connection_id" => "example", "id" => "example_id" })

# pushoption.data_get now returns the pushoption data from the last load
# pushoption.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
