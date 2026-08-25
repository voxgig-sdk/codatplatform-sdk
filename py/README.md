# Codatplatform Python SDK



The Python SDK for the Codatplatform API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AccessToken()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/codatplatform-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from codatplatform_sdk import CodatplatformSDK

client = CodatplatformSDK({
    "apikey": os.environ.get("CODATPLATFORM_APIKEY"),
})
```

### 3. Load a branding

Branding is nested under platform_key, so provide the `platform_key`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    branding = client.Branding().load({"platform_key": "example_platform_key"})
    print(branding)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    pushoption = client.PushOption().load({"company_id": "example", "connection_id": "example", "id": "example_id"})
    print(pushoption)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CodatplatformSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
pushoption = client.PushOption().load({"id": "test01", "company_id": "example", "connection_id": "example"})
# pushoption contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CodatplatformSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### CodatplatformSDK

```python
from codatplatform_sdk import CodatplatformSDK

client = CodatplatformSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CodatplatformSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CodatplatformSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Operations: Create, List, Load, Patch, Remove, Update.

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

Create an instance: `access_token = client.AccessToken()`


### All

Create an instance: `all = client.All()`


### ApiKey

Create an instance: `api_key = client.ApiKey()`


### Branding

Create an instance: `branding = client.Branding()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `button` | `dict` | Button branding references. |
| `logo` | `dict` | Logo branding references. |
| `sourceId` | `str` | A source-specific ID used to distinguish between different sources originating from the same data connection. |

#### Example: Load

```python
branding = client.Branding().load({"platform_key": "platform_key"})
```


### Company

Create an instance: `company = client.Company()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `str` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `str` | Name of user that created the company in Codat. |
| `dataConnections` | `list` |  |
| `description` | `str` | Additional information about the company. |
| `id` | `str` | Unique identifier for your SMB in Codat. |
| `lastSync` | `str` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `dict` |  |
| `name` | `str` | The name of the company |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `products` | `list` | An array of products that are currently enabled for the company. |
| `redirect` | `str` | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `dict` | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `list` | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `list` |  |
| `tags` | `dict` | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `totalResults` | `int` | Total number of items. |

#### Example: Load

```python
company = client.Company().load({"id": "company_id"})
```

#### Example: List

```python
companys = client.Company().list()
```

#### Example: Create

```python
company = client.Company().create({
    "id": "example_id",  # str
    "links": {},  # dict
    "name": "example_name",  # str
    "pageNumber": 1,  # int
    "pageSize": 1,  # int
    "redirect": "example_redirect",  # str
    "totalResults": 1,  # int
})
```


### CompanyAccessToken

Create an instance: `company_access_token = client.CompanyAccessToken()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessToken` | `str` | The access token for the company. |
| `expiresIn` | `int` | The number of seconds until the access token expires. |
| `id` | `str` |  |
| `tokenType` | `str` | The type of token. |

#### Example: Load

```python
company_access_token = client.CompanyAccessToken().load({"id": "company_access_token_id"})
```


### Connection

Create an instance: `connection = client.Connection()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectionInfo` | `dict` |  |
| `created` | `str` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `list` |  |
| `id` | `str` | Unique identifier for a company's data connection. |
| `integrationId` | `str` | A Codat ID representing the integration. |
| `integrationKey` | `str` | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `str` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `str` | The link URL your customers can use to authorize access to their business application. |
| `links` | `dict` |  |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `platformKey` | `str` | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `str` | Name of integration connected to company. |
| `results` | `list` |  |
| `sourceId` | `str` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `str` | The type of platform of the connection. |
| `status` | `str` | The current authorization status of the data connection. |
| `totalResults` | `int` | Total number of items. |

#### Example: Load

```python
connection = client.Connection().load({"id": "connection_id", "company_id": "company_id"})
```

#### Example: List

```python
connections = client.Connection().list({"company_id": "example"})
```

#### Example: Create

```python
connection = client.Connection().create({
    "company_id": "example_company_id",  # str
    "created": "example_created",  # str
    "id": "example_id",  # str
    "integrationId": "example_integrationId",  # str
    "integrationKey": "example_integrationKey",  # str
    "linkUrl": "example_linkUrl",  # str
    "links": {},  # dict
    "pageNumber": 1,  # int
    "pageSize": 1,  # int
    "platformName": "example_platformName",  # str
    "sourceId": "example_sourceId",  # str
    "sourceType": "example_sourceType",  # str
    "status": "example_status",  # str
    "totalResults": 1,  # int
})
```


### ConnectionManagementAccessToken

Create an instance: `connection_management_access_token = client.ConnectionManagementAccessToken()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessToken` | `str` | Access token that allows SMBs to manage connections that have access to their data. |

#### Example: Load

```python
connection_management_access_token = client.ConnectionManagementAccessToken().load({"company_id": "company_id"})
```


### ConnectionManagementAllowedOrigin

Create an instance: `connection_management_allowed_origin = client.ConnectionManagementAllowedOrigin()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowedOrigins` | `list` | An array of allowed origins (i.e. |

#### Example: List

```python
connection_management_allowed_origins = client.ConnectionManagementAllowedOrigin().list()
```

#### Example: Create

```python
connection_management_allowed_origin = client.ConnectionManagementAllowedOrigin().create({
})
```


### Custom

Create an instance: `custom = client.Custom()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `str` | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `id` | `str` |  |
| `keyBy` | `list` | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `requiredData` | `dict` | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `list` |  |
| `sourceModifiedDate` | `list` | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `int` | Total number of items. |

#### Example: Load

```python
custom = client.Custom().load({"id": "custom_id"})
```


### DataStatus

Create an instance: `data_status = client.DataStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountTransactions` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `company` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `items` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `dict` | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `dict` | Describes the state of data in the Codat cache for a company and data type |

#### Example: Load

```python
data_status = client.DataStatus().load({"company_id": "company_id"})
```


### DataType

Create an instance: `data_type = client.DataType()`


### History

Create an instance: `history = client.History()`


### Integration

Create an instance: `integration = client.Integration()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataProvidedBy` | `str` | The name of the data provider. |
| `datatypeFeatures` | `list` |  |
| `enabled` | `bool` | Whether this integration is enabled for your customers to use. |
| `id` | `str` |  |
| `integrationId` | `str` | A Codat ID representing the integration. |
| `isBeta` | `bool` | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `bool` | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `str` | A unique 4-letter key to represent a platform in each integration. |
| `links` | `dict` |  |
| `logoUrl` | `str` | Static url for integration's logo. |
| `name` | `str` | Name of integration. |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `results` | `list` |  |
| `sourceId` | `str` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `str` | The type of platform of the connection. |
| `totalResults` | `int` | Total number of items. |

#### Example: Load

```python
integration = client.Integration().load({"id": "integration_id"})
```

#### Example: List

```python
integrations = client.Integration().list()
```


### Option

Create an instance: `option = client.Option()`


### Product

Create an instance: `product = client.Product()`


### Profile

Create an instance: `profile = client.Profile()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `str` | The API key for this Codat instance. |
| `confirmCompanyName` | `bool` | `True` if the company name has been confirmed. |
| `iconUrl` | `str` | Static url to your organization's icon. |
| `logoUrl` | `str` | Static url to your organization's logo. |
| `name` | `str` | The name given to the instance. |
| `redirectUrl` | `str` | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | `list` | A list of urls that are allowed to communicate with Codat. |

#### Example: List

```python
profiles = client.Profile().list()
```


### PullOperation

Create an instance: `pull_operation = client.PullOperation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyId` | `str` | Unique identifier of the company associated to this pull operation. |
| `completed` | `str` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `connectionId` | `str` | Unique identifier of the connection associated to this pull operation. |
| `dataType` | `str` | The data type you are requesting in a pull operation. |
| `errorMessage` | `str` | A message about a transient or persistent error returned by Codat or the source platform. |
| `id` | `str` | Unique identifier of the pull operation. |
| `isCompleted` | `bool` | `True` if the pull operation is completed successfully. |
| `isErrored` | `bool` | `True` if the pull operation entered an error state. |
| `links` | `dict` |  |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `progress` | `int` | An integer signifying the progress of the pull operation. |
| `requested` | `str` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `list` |  |
| `status` | `str` | The current status of the dataset. |
| `statusDescription` | `str` | Additional information about the dataset status. |
| `totalResults` | `int` | Total number of items. |

#### Example: Load

```python
pull_operation = client.PullOperation().load({"company_id": "company_id", "dataset_id": "dataset_id"})
```

#### Example: List

```python
pull_operations = client.PullOperation().list({"company_id": "example"})
```

#### Example: Create

```python
pull_operation = client.PullOperation().create({
    "company_id": "example_company_id",  # str
    "companyId": "example_companyId",  # str
    "connectionId": "example_connectionId",  # str
    "dataType": "example_dataType",  # str
    "id": "example_id",  # str
    "isCompleted": True,  # bool
    "isErrored": True,  # bool
    "links": {},  # dict
    "pageNumber": 1,  # int
    "pageSize": 1,  # int
    "progress": 1,  # int
    "requested": "example_requested",  # str
    "status": "example_status",  # str
    "totalResults": 1,  # int
})
```


### Push

Create an instance: `push = client.Push()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `changes` | `list` | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `str` | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `str` | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `str` | Unique identifier for a company's data connection. |
| `dataType` | `str` | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `str` | A message about the error. |
| `id` | `str` |  |
| `links` | `dict` |  |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `pushOperationKey` | `str` | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `str` | The datetime when the push was requested. |
| `results` | `list` |  |
| `status` | `str` | The current status of the push operation. |
| `statusCode` | `int` | Push status code. |
| `timeoutInMinutes` | `int` | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `int` | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `int` | Total number of items. |
| `validation` | `dict` | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

#### Example: Load

```python
push = client.Push().load({"id": "push_id", "company_id": "company_id"})
```

#### Example: List

```python
pushs = client.Push().list({"company_id": "example"})
```


### PushOption

Create an instance: `push_option = client.PushOption()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | A description of the property. |
| `displayName` | `str` | The property's display name. |
| `id` | `str` |  |
| `options` | `list` |  |
| `properties` | `dict` |  |
| `required` | `bool` | The property is required if `True`. |
| `type` | `str` | The option type. |
| `validation` | `dict` |  |

#### Example: Load

```python
push_option = client.PushOption().load({"id": "push_option_id", "company_id": "company_id", "connection_id": "connection_id"})
```


### Queue

Create an instance: `queue = client.Queue()`


### RefreshData

Create an instance: `refresh_data = client.RefreshData()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
refresh_data = client.RefreshData().create({
    "company_id": "example_company_id",  # str
})
```


### Setting

Create an instance: `setting = client.Setting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `str` | The API key value used to make authenticated http requests. |
| `createdDate` | `str` | The date the entity was created. |
| `id` | `str` | Unique identifier for the API key. |
| `name` | `str` | A meaningful name assigned to the API key. |

#### Example: List

```python
settings = client.Setting().list()
```

#### Example: Create

```python
setting = client.Setting().create({
})
```


### SupplementalData

Create an instance: `supplemental_data = client.SupplementalData()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `supplementalDataConfig` | `dict` |  |


### SupplementalDataConfig

Create an instance: `supplemental_data_config = client.SupplementalDataConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `str` | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `dict` | The additional properties that are required when pulling records. |
| `pushData` | `dict` | The additional properties that are required to create and/or update records. |

#### Example: Load

```python
supplemental_data_config = client.SupplementalDataConfig().load({"data_type_id": "data_type_id", "platform_key": "platform_key"})
```


### Sync

Create an instance: `sync = client.Sync()`


### SyncSetting

Create an instance: `sync_setting = client.SyncSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataType` | `str` | Available data types |
| `fetchOnFirstLink` | `bool` | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `bool` | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | `int` | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | `str` | Date from which data should be fetched. |
| `syncFromWindow` | `int` | Number of months of data to be fetched. |
| `syncOrder` | `int` | The sync in which data types are queued for a sync. |
| `syncSchedule` | `int` | Number of hours after which this data type should be refreshed. |

#### Example: List

```python
sync_settings = client.SyncSetting().list()
```


### Validation

Create an instance: `validation = client.Validation()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `warnings` | `list` |  |

#### Example: List

```python
validations = client.Validation().list({"company_id": "example", "sync_id": "example"})
```


### Webhook

Create an instance: `webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyTags` | `list` | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `bool` | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `list` | An array of event types the webhook consumer subscribes to. |
| `id` | `str` | Unique identifier for the webhook consumer. |
| `url` | `str` | The URL that will consume webhook events dispatched by Codat. |

#### Example: List

```python
webhooks = client.Webhook().list()
```

#### Example: Create

```python
webhook = client.Webhook().create({
})
```


### WebhookZapierKey

Create an instance: `webhook_zapier_key = client.WebhookZapierKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `str` |  |

#### Example: Create

```python
webhook_zapier_key = client.WebhookZapierKey().create({
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── codatplatform_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`codatplatform_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
pushoption = client.PushOption()
pushoption.load({"company_id": "example", "connection_id": "example", "id": "example_id"})

# pushoption.data_get() now returns the pushoption data from the last load
# pushoption.match_get() returns the last match criteria
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
