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
`load()` returns the bare record (a `dict`) and raises on error.

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

# Entity ops return the bare record and raise on error.
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

Entity operations return the bare result data (a `dict` for single-entity
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
| `button` | `dict` |  |
| `logo` | `dict` |  |
| `sourceId` | `str` |  |

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
| `created` | `str` |  |
| `createdByUserName` | `str` |  |
| `dataConnections` | `list` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `lastSync` | `str` |  |
| `links` | `dict` |  |
| `name` | `str` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `products` | `list` |  |
| `redirect` | `str` |  |
| `referenceParentCompany` | `dict` |  |
| `referenceSubsidiaryCompanies` | `list` |  |
| `results` | `list` |  |
| `tags` | `dict` |  |
| `totalResults` | `int` |  |

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
| `accessToken` | `str` |  |
| `expiresIn` | `int` |  |
| `tokenType` | `str` |  |

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
| `created` | `str` |  |
| `dataConnectionErrors` | `list` |  |
| `id` | `str` |  |
| `integrationId` | `str` |  |
| `integrationKey` | `str` |  |
| `lastSync` | `str` |  |
| `linkUrl` | `str` |  |
| `links` | `dict` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `platformKey` | `str` |  |
| `platformName` | `str` |  |
| `results` | `list` |  |
| `sourceId` | `str` |  |
| `sourceType` | `str` |  |
| `status` | `str` |  |
| `totalResults` | `int` |  |

#### Example: Load

```python
connection = client.Connection().load({"id": "connection_id", "company_id": "company_id"})
```

#### Example: List

```python
connections = client.Connection().list()
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
| `accessToken` | `str` |  |

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
| `allowedOrigins` | `list` |  |

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
| `dataSource` | `str` |  |
| `keyBy` | `list` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `requiredData` | `dict` |  |
| `results` | `list` |  |
| `sourceModifiedDate` | `list` |  |
| `totalResults` | `int` |  |

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
| `accountTransactions` | `dict` |  |
| `balanceSheet` | `dict` |  |
| `bankAccounts` | `dict` |  |
| `bankTransactions` | `dict` |  |
| `bankingaccountBalances` | `dict` |  |
| `bankingaccounts` | `dict` |  |
| `bankingtransactionCategories` | `dict` |  |
| `bankingtransactions` | `dict` |  |
| `billCreditNotes` | `dict` |  |
| `billPayments` | `dict` |  |
| `bills` | `dict` |  |
| `cashFlowStatement` | `dict` |  |
| `chartOfAccounts` | `dict` |  |
| `commercecompanyInfo` | `dict` |  |
| `commercecustomers` | `dict` |  |
| `commercedisputes` | `dict` |  |
| `commercelocations` | `dict` |  |
| `commerceorders` | `dict` |  |
| `commercepaymentMethods` | `dict` |  |
| `commercepayments` | `dict` |  |
| `commerceproductCategories` | `dict` |  |
| `commerceproducts` | `dict` |  |
| `commercetaxComponents` | `dict` |  |
| `commercetransactions` | `dict` |  |
| `company` | `dict` |  |
| `creditNotes` | `dict` |  |
| `customers` | `dict` |  |
| `directCosts` | `dict` |  |
| `directIncomes` | `dict` |  |
| `invoices` | `dict` |  |
| `itemReceipts` | `dict` |  |
| `items` | `dict` |  |
| `journalEntries` | `dict` |  |
| `journals` | `dict` |  |
| `paymentMethods` | `dict` |  |
| `payments` | `dict` |  |
| `profitAndLoss` | `dict` |  |
| `purchaseOrders` | `dict` |  |
| `salesOrders` | `dict` |  |
| `suppliers` | `dict` |  |
| `taxRates` | `dict` |  |
| `trackingCategories` | `dict` |  |
| `transfers` | `dict` |  |

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
| `dataProvidedBy` | `str` |  |
| `datatypeFeatures` | `list` |  |
| `enabled` | `bool` |  |
| `integrationId` | `str` |  |
| `isBeta` | `bool` |  |
| `isOfflineConnector` | `bool` |  |
| `key` | `str` |  |
| `links` | `dict` |  |
| `logoUrl` | `str` |  |
| `name` | `str` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `results` | `list` |  |
| `sourceId` | `str` |  |
| `sourceType` | `str` |  |
| `totalResults` | `int` |  |

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
| `apiKey` | `str` |  |
| `confirmCompanyName` | `bool` |  |
| `iconUrl` | `str` |  |
| `logoUrl` | `str` |  |
| `name` | `str` |  |
| `redirectUrl` | `str` |  |
| `whiteListUrls` | `list` |  |

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
| `companyId` | `str` |  |
| `completed` | `str` |  |
| `connectionId` | `str` |  |
| `dataType` | `str` |  |
| `errorMessage` | `str` |  |
| `id` | `str` |  |
| `isCompleted` | `bool` |  |
| `isErrored` | `bool` |  |
| `links` | `dict` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `progress` | `int` |  |
| `requested` | `str` |  |
| `results` | `list` |  |
| `status` | `str` |  |
| `statusDescription` | `str` |  |
| `totalResults` | `int` |  |

#### Example: Load

```python
pull_operation = client.PullOperation().load({"company_id": "company_id", "dataset_id": "dataset_id"})
```

#### Example: List

```python
pull_operations = client.PullOperation().list()
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
| `changes` | `list` |  |
| `companyId` | `str` |  |
| `completedOnUtc` | `str` |  |
| `dataConnectionKey` | `str` |  |
| `dataType` | `str` |  |
| `errorMessage` | `str` |  |
| `links` | `dict` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `pushOperationKey` | `str` |  |
| `requestedOnUtc` | `str` |  |
| `results` | `list` |  |
| `status` | `str` |  |
| `statusCode` | `int` |  |
| `timeoutInMinutes` | `int` |  |
| `timeoutInSeconds` | `int` |  |
| `totalResults` | `int` |  |
| `validation` | `dict` |  |

#### Example: Load

```python
push = client.Push().load({"id": "push_id", "company_id": "company_id"})
```

#### Example: List

```python
pushs = client.Push().list()
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
| `description` | `str` |  |
| `displayName` | `str` |  |
| `options` | `list` |  |
| `properties` | `dict` |  |
| `required` | `bool` |  |
| `type` | `str` |  |
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
| `apiKey` | `str` |  |
| `createdDate` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |

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
| `dataSource` | `str` |  |
| `pullData` | `dict` |  |
| `pushData` | `dict` |  |

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
| `dataType` | `str` |  |
| `fetchOnFirstLink` | `bool` |  |
| `isLocked` | `bool` |  |
| `monthsToSync` | `int` |  |
| `syncFromUtc` | `str` |  |
| `syncFromWindow` | `int` |  |
| `syncOrder` | `int` |  |
| `syncSchedule` | `int` |  |

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
validations = client.Validation().list()
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
| `companyTags` | `list` |  |
| `disabled` | `bool` |  |
| `eventTypes` | `list` |  |
| `id` | `str` |  |
| `url` | `str` |  |

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
