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
| `button` | `dict` | No | Button branding references. |
| `logo` | `dict` | No | Logo branding references. |
| `sourceId` | `str` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |

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
| `created` | `str` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `str` | No | Name of user that created the company in Codat. |
| `dataConnections` | `list` | No |  |
| `description` | `str` | No | Additional information about the company. |
| `id` | `str` | Yes | Unique identifier for your SMB in Codat. |
| `lastSync` | `str` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `dict` | Yes |  |
| `name` | `str` | Yes | The name of the company |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `products` | `list` | No | An array of products that are currently enabled for the company. |
| `redirect` | `str` | Yes | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `dict` | No | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `list` | No | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `list` | No |  |
| `tags` | `dict` | No | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `totalResults` | `int` | Yes | Total number of items. |

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
    "id": "example_id",  # str
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
| `accessToken` | `str` | Yes | The access token for the company. |
| `expiresIn` | `int` | Yes | The number of seconds until the access token expires. |
| `id` | `str` | No |  |
| `tokenType` | `str` | Yes | The type of token. |

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
| `created` | `str` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `list` | No |  |
| `id` | `str` | Yes | Unique identifier for a company's data connection. |
| `integrationId` | `str` | Yes | A Codat ID representing the integration. |
| `integrationKey` | `str` | Yes | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `str` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `str` | Yes | The link URL your customers can use to authorize access to their business application. |
| `links` | `dict` | Yes |  |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `platformKey` | `str` | No | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `str` | Yes | Name of integration connected to company. |
| `results` | `list` | No |  |
| `sourceId` | `str` | Yes | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `str` | Yes | The type of platform of the connection. |
| `status` | `str` | Yes | The current authorization status of the data connection. |
| `totalResults` | `int` | Yes | Total number of items. |

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
results = client.Connection().list({"company_id": "example"})
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
| `accessToken` | `str` | No | Access token that allows SMBs to manage connections that have access to their data. |

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
| `allowedOrigins` | `list` | No | An array of allowed origins (i.e. |

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
| `dataSource` | `str` | No | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `id` | `str` | No |  |
| `keyBy` | `list` | No | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `int` | No | Current page number. |
| `pageSize` | `int` | No | Number of items to return in results array. |
| `requiredData` | `dict` | No | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `list` | No |  |
| `sourceModifiedDate` | `list` | No | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `int` | No | Total number of items. |

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
| `accountTransactions` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `company` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `items` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `dict` | Yes | Describes the state of data in the Codat cache for a company and data type |

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
| `dataProvidedBy` | `str` | No | The name of the data provider. |
| `datatypeFeatures` | `list` | No |  |
| `enabled` | `bool` | Yes | Whether this integration is enabled for your customers to use. |
| `id` | `str` | No |  |
| `integrationId` | `str` | No | A Codat ID representing the integration. |
| `isBeta` | `bool` | No | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `bool` | No | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `str` | Yes | A unique 4-letter key to represent a platform in each integration. |
| `links` | `dict` | Yes |  |
| `logoUrl` | `str` | Yes | Static url for integration's logo. |
| `name` | `str` | Yes | Name of integration. |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `results` | `list` | No |  |
| `sourceId` | `str` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `str` | No | The type of platform of the connection. |
| `totalResults` | `int` | Yes | Total number of items. |

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
| `apiKey` | `str` | No | The API key for this Codat instance. |
| `confirmCompanyName` | `bool` | No | `True` if the company name has been confirmed. |
| `iconUrl` | `str` | No | Static url to your organization's icon. |
| `logoUrl` | `str` | No | Static url to your organization's logo. |
| `name` | `str` | Yes | The name given to the instance. |
| `redirectUrl` | `str` | Yes | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | `list` | No | A list of urls that are allowed to communicate with Codat. |

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
| `companyId` | `str` | Yes | Unique identifier of the company associated to this pull operation. |
| `completed` | `str` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `connectionId` | `str` | Yes | Unique identifier of the connection associated to this pull operation. |
| `dataType` | `str` | Yes | The data type you are requesting in a pull operation. |
| `errorMessage` | `str` | No | A message about a transient or persistent error returned by Codat or the source platform. |
| `id` | `str` | Yes | Unique identifier of the pull operation. |
| `isCompleted` | `bool` | Yes | `True` if the pull operation is completed successfully. |
| `isErrored` | `bool` | Yes | `True` if the pull operation entered an error state. |
| `links` | `dict` | Yes |  |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `progress` | `int` | Yes | An integer signifying the progress of the pull operation. |
| `requested` | `str` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `list` | No |  |
| `status` | `str` | Yes | The current status of the dataset. |
| `statusDescription` | `str` | No | Additional information about the dataset status. |
| `totalResults` | `int` | Yes | Total number of items. |

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
results = client.PullOperation().list({"company_id": "example"})
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
| `changes` | `list` | No | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `str` | Yes | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `str` | No | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `str` | Yes | Unique identifier for a company's data connection. |
| `dataType` | `str` | No | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `str` | No | A message about the error. |
| `id` | `str` | No |  |
| `links` | `dict` | Yes |  |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `pushOperationKey` | `str` | Yes | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `str` | Yes | The datetime when the push was requested. |
| `results` | `list` | No |  |
| `status` | `str` | Yes | The current status of the push operation. |
| `statusCode` | `int` | Yes | Push status code. |
| `timeoutInMinutes` | `int` | No | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `int` | No | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `int` | Yes | Total number of items. |
| `validation` | `dict` | No | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Push().list({"company_id": "example"})
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
| `description` | `str` | No | A description of the property. |
| `displayName` | `str` | Yes | The property's display name. |
| `id` | `str` | No |  |
| `options` | `list` | No |  |
| `properties` | `dict` | No |  |
| `required` | `bool` | Yes | The property is required if `True`. |
| `type` | `str` | Yes | The option type. |
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
| `apiKey` | `str` | No | The API key value used to make authenticated http requests. |
| `createdDate` | `str` | No | The date the entity was created. |
| `id` | `str` | No | Unique identifier for the API key. |
| `name` | `str` | No | A meaningful name assigned to the API key. |

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
| `dataSource` | `str` | No | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `dict` | No | The additional properties that are required when pulling records. |
| `pushData` | `dict` | No | The additional properties that are required to create and/or update records. |

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
| `dataType` | `str` | Yes | Available data types |
| `fetchOnFirstLink` | `bool` | Yes | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `bool` | No | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | `int` | No | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | `str` | No | Date from which data should be fetched. |
| `syncFromWindow` | `int` | No | Number of months of data to be fetched. |
| `syncOrder` | `int` | Yes | The sync in which data types are queued for a sync. |
| `syncSchedule` | `int` | Yes | Number of hours after which this data type should be refreshed. |

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
results = client.Validation().list({"company_id": "example", "sync_id": "example"})
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
| `companyTags` | `list` | No | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `bool` | No | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `list` | No | An array of event types the webhook consumer subscribes to. |
| `id` | `str` | No | Unique identifier for the webhook consumer. |
| `url` | `str` | No | The URL that will consume webhook events dispatched by Codat. |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

