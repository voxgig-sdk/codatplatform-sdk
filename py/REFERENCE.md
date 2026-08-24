# Codatplatform Python SDK Reference

Complete API reference for the Codatplatform Python SDK.


## CodatplatformSDK

### Constructor

```python
from codatplatform_sdk import CodatplatformSDK

client = CodatplatformSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CodatplatformSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CodatplatformSDK.test()
```


### Instance Methods

#### `AccessToken(data=None)`

Create a new `AccessTokenEntity` instance. Pass `None` for no initial data.

#### `All(data=None)`

Create a new `AllEntity` instance. Pass `None` for no initial data.

#### `ApiKey(data=None)`

Create a new `ApiKeyEntity` instance. Pass `None` for no initial data.

#### `Branding(data=None)`

Create a new `BrandingEntity` instance. Pass `None` for no initial data.

#### `Company(data=None)`

Create a new `CompanyEntity` instance. Pass `None` for no initial data.

#### `CompanyAccessToken(data=None)`

Create a new `CompanyAccessTokenEntity` instance. Pass `None` for no initial data.

#### `Connection(data=None)`

Create a new `ConnectionEntity` instance. Pass `None` for no initial data.

#### `ConnectionManagementAccessToken(data=None)`

Create a new `ConnectionManagementAccessTokenEntity` instance. Pass `None` for no initial data.

#### `ConnectionManagementAllowedOrigin(data=None)`

Create a new `ConnectionManagementAllowedOriginEntity` instance. Pass `None` for no initial data.

#### `Custom(data=None)`

Create a new `CustomEntity` instance. Pass `None` for no initial data.

#### `DataStatus(data=None)`

Create a new `DataStatusEntity` instance. Pass `None` for no initial data.

#### `DataType(data=None)`

Create a new `DataTypeEntity` instance. Pass `None` for no initial data.

#### `History(data=None)`

Create a new `HistoryEntity` instance. Pass `None` for no initial data.

#### `Integration(data=None)`

Create a new `IntegrationEntity` instance. Pass `None` for no initial data.

#### `Option(data=None)`

Create a new `OptionEntity` instance. Pass `None` for no initial data.

#### `Product(data=None)`

Create a new `ProductEntity` instance. Pass `None` for no initial data.

#### `Profile(data=None)`

Create a new `ProfileEntity` instance. Pass `None` for no initial data.

#### `PullOperation(data=None)`

Create a new `PullOperationEntity` instance. Pass `None` for no initial data.

#### `Push(data=None)`

Create a new `PushEntity` instance. Pass `None` for no initial data.

#### `PushOption(data=None)`

Create a new `PushOptionEntity` instance. Pass `None` for no initial data.

#### `Queue(data=None)`

Create a new `QueueEntity` instance. Pass `None` for no initial data.

#### `RefreshData(data=None)`

Create a new `RefreshDataEntity` instance. Pass `None` for no initial data.

#### `Setting(data=None)`

Create a new `SettingEntity` instance. Pass `None` for no initial data.

#### `SupplementalData(data=None)`

Create a new `SupplementalDataEntity` instance. Pass `None` for no initial data.

#### `SupplementalDataConfig(data=None)`

Create a new `SupplementalDataConfigEntity` instance. Pass `None` for no initial data.

#### `Sync(data=None)`

Create a new `SyncEntity` instance. Pass `None` for no initial data.

#### `SyncSetting(data=None)`

Create a new `SyncSettingEntity` instance. Pass `None` for no initial data.

#### `Validation(data=None)`

Create a new `ValidationEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `WebhookZapierKey(data=None)`

Create a new `WebhookZapierKeyEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AccessTokenEntity

```python
access_token = client.AccessToken()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccessTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AllEntity

```python
all = client.All()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AllEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiKeyEntity

```python
api_key = client.ApiKey()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BrandingEntity

```python
branding = client.Branding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `button` | `dict` | No |  |
| `logo` | `dict` | No |  |
| `sourceId` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Branding().load({"platform_key": "platform_key"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrandingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompanyEntity

```python
company = client.Company()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `str` | No |  |
| `createdByUserName` | `str` | No |  |
| `dataConnections` | `list` | No |  |
| `description` | `str` | No |  |
| `id` | `str` | Yes |  |
| `lastSync` | `str` | No |  |
| `links` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `products` | `list` | No |  |
| `redirect` | `str` | Yes |  |
| `referenceParentCompany` | `dict` | No |  |
| `referenceSubsidiaryCompanies` | `list` | No |  |
| `results` | `list` | No |  |
| `tags` | `dict` | No |  |
| `totalResults` | `int` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Company().create({
    "links": {},  # dict
    "name": "example_name",  # str
    "pageNumber": 1,  # int
    "pageSize": 1,  # int
    "redirect": "example_redirect",  # str
    "totalResults": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Company().list()
for company in results:
    print(company)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Company().load({"id": "company_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Company().remove({"id": "company_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Company().update({
    "id": "company_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompanyAccessTokenEntity

```python
company_access_token = client.CompanyAccessToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `str` | Yes |  |
| `expiresIn` | `int` | Yes |  |
| `tokenType` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CompanyAccessToken().load({"id": "company_access_token_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyAccessTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectionEntity

```python
connection = client.Connection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectionInfo` | `dict` | No |  |
| `created` | `str` | Yes |  |
| `dataConnectionErrors` | `list` | No |  |
| `id` | `str` | Yes |  |
| `integrationId` | `str` | Yes |  |
| `integrationKey` | `str` | Yes |  |
| `lastSync` | `str` | No |  |
| `linkUrl` | `str` | Yes |  |
| `links` | `dict` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `platformKey` | `str` | No |  |
| `platformName` | `str` | Yes |  |
| `results` | `list` | No |  |
| `sourceId` | `str` | Yes |  |
| `sourceType` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `totalResults` | `int` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Connection().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Connection().list()
for connection in results:
    print(connection)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Connection().load({"id": "connection_id", "company_id": "company_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Connection().remove({"id": "connection_id", "company_id": "company_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Connection().update({
    "id": "connection_id",
    "company_id": "company_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectionManagementAccessTokenEntity

```python
connection_management_access_token = client.ConnectionManagementAccessToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConnectionManagementAccessToken().load({"company_id": "company_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionManagementAccessTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectionManagementAllowedOriginEntity

```python
connection_management_allowed_origin = client.ConnectionManagementAllowedOrigin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedOrigins` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConnectionManagementAllowedOrigin().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConnectionManagementAllowedOrigin().list()
for connection_management_allowed_origin in results:
    print(connection_management_allowed_origin)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionManagementAllowedOriginEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomEntity

```python
custom = client.Custom()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `str` | No |  |
| `keyBy` | `list` | No |  |
| `pageNumber` | `int` | No |  |
| `pageSize` | `int` | No |  |
| `requiredData` | `dict` | No |  |
| `results` | `list` | No |  |
| `sourceModifiedDate` | `list` | No |  |
| `totalResults` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Custom().load({"id": "custom_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Custom().update({
    "id": "custom_id",
    "platform_key": "platform_key",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataStatusEntity

```python
data_status = client.DataStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountTransactions` | `dict` | Yes |  |
| `balanceSheet` | `dict` | Yes |  |
| `bankAccounts` | `dict` | Yes |  |
| `bankTransactions` | `dict` | Yes |  |
| `bankingaccountBalances` | `dict` | Yes |  |
| `bankingaccounts` | `dict` | Yes |  |
| `bankingtransactionCategories` | `dict` | Yes |  |
| `bankingtransactions` | `dict` | Yes |  |
| `billCreditNotes` | `dict` | Yes |  |
| `billPayments` | `dict` | Yes |  |
| `bills` | `dict` | Yes |  |
| `cashFlowStatement` | `dict` | Yes |  |
| `chartOfAccounts` | `dict` | Yes |  |
| `commercecompanyInfo` | `dict` | Yes |  |
| `commercecustomers` | `dict` | Yes |  |
| `commercedisputes` | `dict` | Yes |  |
| `commercelocations` | `dict` | Yes |  |
| `commerceorders` | `dict` | Yes |  |
| `commercepaymentMethods` | `dict` | Yes |  |
| `commercepayments` | `dict` | Yes |  |
| `commerceproductCategories` | `dict` | Yes |  |
| `commerceproducts` | `dict` | Yes |  |
| `commercetaxComponents` | `dict` | Yes |  |
| `commercetransactions` | `dict` | Yes |  |
| `company` | `dict` | Yes |  |
| `creditNotes` | `dict` | Yes |  |
| `customers` | `dict` | Yes |  |
| `directCosts` | `dict` | Yes |  |
| `directIncomes` | `dict` | Yes |  |
| `invoices` | `dict` | Yes |  |
| `itemReceipts` | `dict` | Yes |  |
| `items` | `dict` | Yes |  |
| `journalEntries` | `dict` | Yes |  |
| `journals` | `dict` | Yes |  |
| `paymentMethods` | `dict` | Yes |  |
| `payments` | `dict` | Yes |  |
| `profitAndLoss` | `dict` | Yes |  |
| `purchaseOrders` | `dict` | Yes |  |
| `salesOrders` | `dict` | Yes |  |
| `suppliers` | `dict` | Yes |  |
| `taxRates` | `dict` | Yes |  |
| `trackingCategories` | `dict` | Yes |  |
| `transfers` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DataStatus().load({"company_id": "company_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataTypeEntity

```python
data_type = client.DataType()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HistoryEntity

```python
history = client.History()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IntegrationEntity

```python
integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataProvidedBy` | `str` | No |  |
| `datatypeFeatures` | `list` | No |  |
| `enabled` | `bool` | Yes |  |
| `integrationId` | `str` | No |  |
| `isBeta` | `bool` | No |  |
| `isOfflineConnector` | `bool` | No |  |
| `key` | `str` | Yes |  |
| `links` | `dict` | Yes |  |
| `logoUrl` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `results` | `list` | No |  |
| `sourceId` | `str` | No |  |
| `sourceType` | `str` | No |  |
| `totalResults` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Integration().list()
for integration in results:
    print(integration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Integration().load({"id": "integration_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OptionEntity

```python
option = client.Option()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductEntity

```python
product = client.Product()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProfileEntity

```python
profile = client.Profile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `str` | No |  |
| `confirmCompanyName` | `bool` | No |  |
| `iconUrl` | `str` | No |  |
| `logoUrl` | `str` | No |  |
| `name` | `str` | Yes |  |
| `redirectUrl` | `str` | Yes |  |
| `whiteListUrls` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Profile().list()
for profile in results:
    print(profile)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Profile().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProfileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PullOperationEntity

```python
pull_operation = client.PullOperation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyId` | `str` | Yes |  |
| `completed` | `str` | No |  |
| `connectionId` | `str` | Yes |  |
| `dataType` | `str` | Yes |  |
| `errorMessage` | `str` | No |  |
| `id` | `str` | Yes |  |
| `isCompleted` | `bool` | Yes |  |
| `isErrored` | `bool` | Yes |  |
| `links` | `dict` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `progress` | `int` | Yes |  |
| `requested` | `str` | Yes |  |
| `results` | `list` | No |  |
| `status` | `str` | Yes |  |
| `statusDescription` | `str` | No |  |
| `totalResults` | `int` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PullOperation().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PullOperation().list()
for pull_operation in results:
    print(pull_operation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PullOperation().load({"company_id": "company_id", "dataset_id": "dataset_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PullOperationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PushEntity

```python
push = client.Push()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changes` | `list` | No |  |
| `companyId` | `str` | Yes |  |
| `completedOnUtc` | `str` | No |  |
| `dataConnectionKey` | `str` | Yes |  |
| `dataType` | `str` | No |  |
| `errorMessage` | `str` | No |  |
| `links` | `dict` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `pushOperationKey` | `str` | Yes |  |
| `requestedOnUtc` | `str` | Yes |  |
| `results` | `list` | No |  |
| `status` | `str` | Yes |  |
| `statusCode` | `int` | Yes |  |
| `timeoutInMinutes` | `int` | No |  |
| `timeoutInSeconds` | `int` | No |  |
| `totalResults` | `int` | Yes |  |
| `validation` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Push().list()
for push in results:
    print(push)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Push().load({"id": "push_id", "company_id": "company_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PushEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PushOptionEntity

```python
push_option = client.PushOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `displayName` | `str` | Yes |  |
| `options` | `list` | No |  |
| `properties` | `dict` | No |  |
| `required` | `bool` | Yes |  |
| `type` | `str` | Yes |  |
| `validation` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PushOption().load({"id": "push_option_id", "company_id": "company_id", "connection_id": "connection_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PushOptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## QueueEntity

```python
queue = client.Queue()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QueueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RefreshDataEntity

```python
refresh_data = client.RefreshData()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RefreshData().create({
    "company_id": "example_company_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RefreshDataEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SettingEntity

```python
setting = client.Setting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `str` | No |  |
| `createdDate` | `str` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Setting().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Setting().list()
for setting in results:
    print(setting)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Setting().remove({"api_key_id": "api_key_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SupplementalDataEntity

```python
supplemental_data = client.SupplementalData()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `supplementalDataConfig` | `dict` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SupplementalData().update({
    "data_type_id": "data_type_id",
    "platform_key": "platform_key",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupplementalDataEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SupplementalDataConfigEntity

```python
supplemental_data_config = client.SupplementalDataConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `str` | No |  |
| `pullData` | `dict` | No |  |
| `pushData` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SupplementalDataConfig().load({"data_type_id": "data_type_id", "platform_key": "platform_key"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupplementalDataConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SyncEntity

```python
sync = client.Sync()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SyncEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SyncSettingEntity

```python
sync_setting = client.SyncSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataType` | `str` | Yes |  |
| `fetchOnFirstLink` | `bool` | Yes |  |
| `isLocked` | `bool` | No |  |
| `monthsToSync` | `int` | No |  |
| `syncFromUtc` | `str` | No |  |
| `syncFromWindow` | `int` | No |  |
| `syncOrder` | `int` | Yes |  |
| `syncSchedule` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SyncSetting().list()
for sync_setting in results:
    print(sync_setting)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SyncSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ValidationEntity

```python
validation = client.Validation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | No |  |
| `warnings` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Validation().list()
for validation in results:
    print(validation)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ValidationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyTags` | `list` | No |  |
| `disabled` | `bool` | No |  |
| `eventTypes` | `list` | No |  |
| `id` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Webhook().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Webhook().list()
for webhook in results:
    print(webhook)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Webhook().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookZapierKeyEntity

```python
webhook_zapier_key = client.WebhookZapierKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WebhookZapierKey().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookZapierKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = CodatplatformSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

