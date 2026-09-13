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
  # load returns the ENTITY — call data_get for the Branding record (raises on error).
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

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
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
| `button` | `Hash` | Button branding references. |
| `logo` | `Hash` | Logo branding references. |
| `sourceId` | `String` | A source-specific ID used to distinguish between different sources originating from the same data connection. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Branding record (raises on error).
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
| `created` | `String` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `String` | Name of user that created the company in Codat. |
| `dataConnections` | `Array` |  |
| `description` | `String` | Additional information about the company. |
| `id` | `String` | Unique identifier for your SMB in Codat. |
| `lastSync` | `String` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `Hash` |  |
| `name` | `String` | The name of the company |
| `pageNumber` | `Integer` | Current page number. |
| `pageSize` | `Integer` | Number of items to return in results array. |
| `products` | `Array` | An array of products that are currently enabled for the company. |
| `redirect` | `String` | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `Hash` | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `Array` | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `Array` |  |
| `tags` | `Hash` | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `totalResults` | `Integer` | Total number of items. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Company record (raises on error).
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
  "id" => "example_id", # String
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
| `accessToken` | `String` | The access token for the company. |
| `expiresIn` | `Integer` | The number of seconds until the access token expires. |
| `id` | `String` |  |
| `tokenType` | `String` | The type of token. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CompanyAccessToken record (raises on error).
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
| `created` | `String` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `Array` |  |
| `id` | `String` | Unique identifier for a company's data connection. |
| `integrationId` | `String` | A Codat ID representing the integration. |
| `integrationKey` | `String` | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `String` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `String` | The link URL your customers can use to authorize access to their business application. |
| `links` | `Hash` |  |
| `pageNumber` | `Integer` | Current page number. |
| `pageSize` | `Integer` | Number of items to return in results array. |
| `platformKey` | `String` | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `String` | Name of integration connected to company. |
| `results` | `Array` |  |
| `sourceId` | `String` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `String` | The type of platform of the connection. |
| `status` | `String` | The current authorization status of the data connection. |
| `totalResults` | `Integer` | Total number of items. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Connection record (raises on error).
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
| `accessToken` | `String` | Access token that allows SMBs to manage connections that have access to their data. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ConnectionManagementAccessToken record (raises on error).
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
| `allowedOrigins` | `Array` | An array of allowed origins (i.e. |

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
| `dataSource` | `String` | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `id` | `String` |  |
| `keyBy` | `Array` | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `Integer` | Current page number. |
| `pageSize` | `Integer` | Number of items to return in results array. |
| `requiredData` | `Hash` | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `Array` |  |
| `sourceModifiedDate` | `Array` | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `Integer` | Total number of items. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Custom record (raises on error).
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
| `accountTransactions` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `company` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `items` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `Hash` | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `Hash` | Describes the state of data in the Codat cache for a company and data type |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DataStatus record (raises on error).
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
| `dataProvidedBy` | `String` | The name of the data provider. |
| `datatypeFeatures` | `Array` |  |
| `enabled` | `Boolean` | Whether this integration is enabled for your customers to use. |
| `id` | `String` |  |
| `integrationId` | `String` | A Codat ID representing the integration. |
| `isBeta` | `Boolean` | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `Boolean` | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `String` | A unique 4-letter key to represent a platform in each integration. |
| `links` | `Hash` |  |
| `logoUrl` | `String` | Static url for integration's logo. |
| `name` | `String` | Name of integration. |
| `pageNumber` | `Integer` | Current page number. |
| `pageSize` | `Integer` | Number of items to return in results array. |
| `results` | `Array` |  |
| `sourceId` | `String` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `String` | The type of platform of the connection. |
| `totalResults` | `Integer` | Total number of items. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Integration record (raises on error).
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
| `apiKey` | `String` | The API key for this Codat instance. |
| `confirmCompanyName` | `Boolean` | `True` if the company name has been confirmed. |
| `iconUrl` | `String` | Static url to your organization's icon. |
| `logoUrl` | `String` | Static url to your organization's logo. |
| `name` | `String` | The name given to the instance. |
| `redirectUrl` | `String` | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | `Array` | A list of urls that are allowed to communicate with Codat. |

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
| `companyId` | `String` | Unique identifier of the company associated to this pull operation. |
| `completed` | `String` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `connectionId` | `String` | Unique identifier of the connection associated to this pull operation. |
| `dataType` | `String` | The data type you are requesting in a pull operation. |
| `errorMessage` | `String` | A message about a transient or persistent error returned by Codat or the source platform. |
| `id` | `String` | Unique identifier of the pull operation. |
| `isCompleted` | `Boolean` | `True` if the pull operation is completed successfully. |
| `isErrored` | `Boolean` | `True` if the pull operation entered an error state. |
| `links` | `Hash` |  |
| `pageNumber` | `Integer` | Current page number. |
| `pageSize` | `Integer` | Number of items to return in results array. |
| `progress` | `Integer` | An integer signifying the progress of the pull operation. |
| `requested` | `String` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `Array` |  |
| `status` | `String` | The current status of the dataset. |
| `statusDescription` | `String` | Additional information about the dataset status. |
| `totalResults` | `Integer` | Total number of items. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PullOperation record (raises on error).
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
| `changes` | `Array` | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `String` | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `String` | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `String` | Unique identifier for a company's data connection. |
| `dataType` | `String` | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `String` | A message about the error. |
| `id` | `String` |  |
| `links` | `Hash` |  |
| `pageNumber` | `Integer` | Current page number. |
| `pageSize` | `Integer` | Number of items to return in results array. |
| `pushOperationKey` | `String` | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `String` | The datetime when the push was requested. |
| `results` | `Array` |  |
| `status` | `String` | The current status of the push operation. |
| `statusCode` | `Integer` | Push status code. |
| `timeoutInMinutes` | `Integer` | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `Integer` | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `Integer` | Total number of items. |
| `validation` | `Hash` | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Push record (raises on error).
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
| `description` | `String` | A description of the property. |
| `displayName` | `String` | The property's display name. |
| `id` | `String` |  |
| `options` | `Array` |  |
| `properties` | `Hash` |  |
| `required` | `Boolean` | The property is required if `True`. |
| `type` | `String` | The option type. |
| `validation` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PushOption record (raises on error).
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
| `apiKey` | `String` | The API key value used to make authenticated http requests. |
| `createdDate` | `String` | The date the entity was created. |
| `id` | `String` | Unique identifier for the API key. |
| `name` | `String` | A meaningful name assigned to the API key. |

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
| `dataSource` | `String` | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `Hash` | The additional properties that are required when pulling records. |
| `pushData` | `Hash` | The additional properties that are required to create and/or update records. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SupplementalDataConfig record (raises on error).
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
| `dataType` | `String` | Available data types |
| `fetchOnFirstLink` | `Boolean` | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `Boolean` | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | `Integer` | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | `String` | Date from which data should be fetched. |
| `syncFromWindow` | `Integer` | Number of months of data to be fetched. |
| `syncOrder` | `Integer` | The sync in which data types are queued for a sync. |
| `syncSchedule` | `Integer` | Number of hours after which this data type should be refreshed. |

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
| `companyTags` | `Array` | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `Boolean` | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `Array` | An array of event types the webhook consumer subscribes to. |
| `id` | `String` | Unique identifier for the webhook consumer. |
| `url` | `String` | The URL that will consume webhook events dispatched by Codat. |

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

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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
