# Codatplatform JavaScript SDK Reference

Complete API reference for the Codatplatform JavaScript SDK.


## CodatplatformSDK

### Constructor

```ts
new CodatplatformSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CodatplatformSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CodatplatformSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CodatplatformSDK` instance in test mode.


### Instance Methods

#### `AccessToken(data?: object)`

Create a new `AccessToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccessTokenEntity` instance.

#### `All(data?: object)`

Create a new `All` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AllEntity` instance.

#### `ApiKey(data?: object)`

Create a new `ApiKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiKeyEntity` instance.

#### `Branding(data?: object)`

Create a new `Branding` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BrandingEntity` instance.

#### `Company(data?: object)`

Create a new `Company` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyEntity` instance.

#### `CompanyAccessToken(data?: object)`

Create a new `CompanyAccessToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyAccessTokenEntity` instance.

#### `Connection(data?: object)`

Create a new `Connection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectionEntity` instance.

#### `ConnectionManagementAccessToken(data?: object)`

Create a new `ConnectionManagementAccessToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectionManagementAccessTokenEntity` instance.

#### `ConnectionManagementAllowedOrigin(data?: object)`

Create a new `ConnectionManagementAllowedOrigin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectionManagementAllowedOriginEntity` instance.

#### `Custom(data?: object)`

Create a new `Custom` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomEntity` instance.

#### `DataStatus(data?: object)`

Create a new `DataStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataStatusEntity` instance.

#### `DataType(data?: object)`

Create a new `DataType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataTypeEntity` instance.

#### `History(data?: object)`

Create a new `History` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HistoryEntity` instance.

#### `Integration(data?: object)`

Create a new `Integration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationEntity` instance.

#### `Option(data?: object)`

Create a new `Option` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OptionEntity` instance.

#### `Product(data?: object)`

Create a new `Product` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductEntity` instance.

#### `Profile(data?: object)`

Create a new `Profile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProfileEntity` instance.

#### `PullOperation(data?: object)`

Create a new `PullOperation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PullOperationEntity` instance.

#### `Push(data?: object)`

Create a new `Push` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PushEntity` instance.

#### `PushOption(data?: object)`

Create a new `PushOption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PushOptionEntity` instance.

#### `Queue(data?: object)`

Create a new `Queue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QueueEntity` instance.

#### `RefreshData(data?: object)`

Create a new `RefreshData` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RefreshDataEntity` instance.

#### `Setting(data?: object)`

Create a new `Setting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SettingEntity` instance.

#### `SupplementalData(data?: object)`

Create a new `SupplementalData` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SupplementalDataEntity` instance.

#### `SupplementalDataConfig(data?: object)`

Create a new `SupplementalDataConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SupplementalDataConfigEntity` instance.

#### `Sync(data?: object)`

Create a new `Sync` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SyncEntity` instance.

#### `SyncSetting(data?: object)`

Create a new `SyncSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SyncSettingEntity` instance.

#### `Validation(data?: object)`

Create a new `Validation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ValidationEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `WebhookZapierKey(data?: object)`

Create a new `WebhookZapierKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookZapierKeyEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CodatplatformSDK.test()`.

**Returns:** `CodatplatformSDK` instance in test mode.


---

## AccessTokenEntity

```ts
const access_token = client.AccessToken()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccessTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AllEntity

```ts
const all = client.All()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AllEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiKeyEntity

```ts
const api_key = client.ApiKey()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BrandingEntity

```ts
const branding = client.Branding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `button` | `Object` | No | Button branding references. |
| `logo` | `Object` | No | Logo branding references. |
| `sourceId` | `string` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Branding().load({ platform_key: 'platform_key' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BrandingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyEntity

```ts
const company = client.Company()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `string` | No | Name of user that created the company in Codat. |
| `dataConnections` | `Array` | No |  |
| `description` | `string` | No | Additional information about the company. |
| `id` | `string` | Yes | Unique identifier for your SMB in Codat. |
| `lastSync` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `Object` | Yes |  |
| `name` | `string` | Yes | The name of the company |
| `pageNumber` | `number` | Yes | Current page number. |
| `pageSize` | `number` | Yes | Number of items to return in results array. |
| `products` | `Array` | No | An array of products that are currently enabled for the company. |
| `redirect` | `string` | Yes | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `Object` | No | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `Array` | No | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `Array` | No |  |
| `tags` | `Object` | No | A collection of user-defined key-value pairs that store custom metadata against the company. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Company().create({
  id: 'example_id',
  links: {},
  name: 'example_name',
  pageNumber: 1,
  pageSize: 1,
  redirect: 'example_redirect',
  totalResults: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Company().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Company().load({ id: 'company_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Company().remove({ id: 'company_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Company().update({
  id: 'company_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyAccessTokenEntity

```ts
const company_access_token = client.CompanyAccessToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `string` | Yes | The access token for the company. |
| `expiresIn` | `number` | Yes | The number of seconds until the access token expires. |
| `id` | `string` | No |  |
| `tokenType` | `string` | Yes | The type of token. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CompanyAccessToken().load({ id: 'company_access_token_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyAccessTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectionEntity

```ts
const connection = client.Connection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectionInfo` | `Object` | No |  |
| `created` | `string` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `Array` | No |  |
| `id` | `string` | Yes | Unique identifier for a company's data connection. |
| `integrationId` | `string` | Yes | A Codat ID representing the integration. |
| `integrationKey` | `string` | Yes | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `string` | Yes | The link URL your customers can use to authorize access to their business application. |
| `links` | `Object` | Yes |  |
| `pageNumber` | `number` | Yes | Current page number. |
| `pageSize` | `number` | Yes | Number of items to return in results array. |
| `platformKey` | `string` | No | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `string` | Yes | Name of integration connected to company. |
| `results` | `Array` | No |  |
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
| `status` | - | - | - | Yes | - |
| `totalResults` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Connection().create({
  company_id: 'example_company_id',
  created: 'example_created',
  id: 'example_id',
  integrationId: 'example_integrationId',
  integrationKey: 'example_integrationKey',
  linkUrl: 'example_linkUrl',
  links: {},
  pageNumber: 1,
  pageSize: 1,
  platformName: 'example_platformName',
  sourceId: 'example_sourceId',
  sourceType: 'example_sourceType',
  status: 'example_status',
  totalResults: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Connection().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Connection().load({ id: 'connection_id', company_id: 'company_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Connection().remove({ id: 'connection_id', company_id: 'company_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Connection().update({
  id: 'connection_id',
  company_id: 'company_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectionManagementAccessTokenEntity

```ts
const connection_management_access_token = client.ConnectionManagementAccessToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `string` | No | Access token that allows SMBs to manage connections that have access to their data. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConnectionManagementAccessToken().load({ company_id: 'company_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectionManagementAccessTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectionManagementAllowedOriginEntity

```ts
const connection_management_allowed_origin = client.ConnectionManagementAllowedOrigin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedOrigins` | `Array` | No | An array of allowed origins (i.e. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConnectionManagementAllowedOrigin().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConnectionManagementAllowedOrigin().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectionManagementAllowedOriginEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomEntity

```ts
const custom = client.Custom()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `string` | No | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `id` | `string` | No |  |
| `keyBy` | `Array` | No | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `number` | No | Current page number. |
| `pageSize` | `number` | No | Number of items to return in results array. |
| `requiredData` | `Object` | No | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `Array` | No |  |
| `sourceModifiedDate` | `Array` | No | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `number` | No | Total number of items. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Custom().load({ id: 'custom_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Custom().update({
  id: 'custom_id',
  platform_key: 'platform_key',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataStatusEntity

```ts
const data_status = client.DataStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountTransactions` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `company` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `items` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `Object` | Yes | Describes the state of data in the Codat cache for a company and data type |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DataStatus().load({ company_id: 'company_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataTypeEntity

```ts
const data_type = client.DataType()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HistoryEntity

```ts
const history = client.History()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationEntity

```ts
const integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataProvidedBy` | `string` | No | The name of the data provider. |
| `datatypeFeatures` | `Array` | No |  |
| `enabled` | `boolean` | Yes | Whether this integration is enabled for your customers to use. |
| `id` | `string` | No |  |
| `integrationId` | `string` | No | A Codat ID representing the integration. |
| `isBeta` | `boolean` | No | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `boolean` | No | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `string` | Yes | A unique 4-letter key to represent a platform in each integration. |
| `links` | `Object` | Yes |  |
| `logoUrl` | `string` | Yes | Static url for integration's logo. |
| `name` | `string` | Yes | Name of integration. |
| `pageNumber` | `number` | Yes | Current page number. |
| `pageSize` | `number` | Yes | Number of items to return in results array. |
| `results` | `Array` | No |  |
| `sourceId` | `string` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | No | The type of platform of the connection. |
| `totalResults` | `number` | Yes | Total number of items. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Integration().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Integration().load({ id: 'integration_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OptionEntity

```ts
const option = client.Option()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductEntity

```ts
const product = client.Product()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProfileEntity

```ts
const profile = client.Profile()
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
| `whiteListUrls` | `Array` | No | A list of urls that are allowed to communicate with Codat. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Profile().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Profile().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProfileEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PullOperationEntity

```ts
const pull_operation = client.PullOperation()
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
| `links` | `Object` | Yes |  |
| `pageNumber` | `number` | Yes | Current page number. |
| `pageSize` | `number` | Yes | Number of items to return in results array. |
| `progress` | `number` | Yes | An integer signifying the progress of the pull operation. |
| `requested` | `string` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `Array` | No |  |
| `status` | `string` | Yes | The current status of the dataset. |
| `statusDescription` | `string` | No | Additional information about the dataset status. |
| `totalResults` | `number` | Yes | Total number of items. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PullOperation().create({
  company_id: 'example_company_id',
  companyId: 'example_companyId',
  connectionId: 'example_connectionId',
  dataType: 'example_dataType',
  id: 'example_id',
  isCompleted: true,
  isErrored: true,
  links: {},
  pageNumber: 1,
  pageSize: 1,
  progress: 1,
  requested: 'example_requested',
  status: 'example_status',
  totalResults: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PullOperation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PullOperation().load({ company_id: 'company_id', dataset_id: 'dataset_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PullOperationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PushEntity

```ts
const push = client.Push()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changes` | `Array` | No | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `string` | Yes | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `string` | No | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `string` | Yes | Unique identifier for a company's data connection. |
| `dataType` | `string` | No | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `string` | No | A message about the error. |
| `id` | `string` | No |  |
| `links` | `Object` | Yes |  |
| `pageNumber` | `number` | Yes | Current page number. |
| `pageSize` | `number` | Yes | Number of items to return in results array. |
| `pushOperationKey` | `string` | Yes | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `string` | Yes | The datetime when the push was requested. |
| `results` | `Array` | No |  |
| `status` | `string` | Yes | The current status of the push operation. |
| `statusCode` | `number` | Yes | Push status code. |
| `timeoutInMinutes` | `number` | No | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `number` | No | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `number` | Yes | Total number of items. |
| `validation` | `Object` | No | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Push().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Push().load({ id: 'push_id', company_id: 'company_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PushEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PushOptionEntity

```ts
const push_option = client.PushOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A description of the property. |
| `displayName` | `string` | Yes | The property's display name. |
| `id` | `string` | No |  |
| `options` | `Array` | No |  |
| `properties` | `Object` | No |  |
| `required` | `boolean` | Yes | The property is required if `True`. |
| `type` | `string` | Yes | The option type. |
| `validation` | `Object` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PushOption().load({ id: 'push_option_id', company_id: 'company_id', connection_id: 'connection_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PushOptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QueueEntity

```ts
const queue = client.Queue()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QueueEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RefreshDataEntity

```ts
const refresh_data = client.RefreshData()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RefreshData().create({
  company_id: 'example_company_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RefreshDataEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SettingEntity

```ts
const setting = client.Setting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | The API key value used to make authenticated http requests. |
| `createdDate` | `string` | No | The date the entity was created. |
| `id` | `string` | No | Unique identifier for the API key. |
| `name` | `string` | No | A meaningful name assigned to the API key. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Setting().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Setting().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Setting().remove({ api_key_id: 'api_key_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SupplementalDataEntity

```ts
const supplemental_data = client.SupplementalData()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `supplementalDataConfig` | `Object` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SupplementalData().update({
  data_type_id: 'data_type_id',
  platform_key: 'platform_key',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SupplementalDataEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SupplementalDataConfigEntity

```ts
const supplemental_data_config = client.SupplementalDataConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `string` | No | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `Object` | No | The additional properties that are required when pulling records. |
| `pushData` | `Object` | No | The additional properties that are required to create and/or update records. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SupplementalDataConfig().load({ data_type_id: 'data_type_id', platform_key: 'platform_key' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SupplementalDataConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SyncEntity

```ts
const sync = client.Sync()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SyncEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SyncSettingEntity

```ts
const sync_setting = client.SyncSetting()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SyncSetting().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SyncSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ValidationEntity

```ts
const validation = client.Validation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | No |  |
| `warnings` | `Array` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Validation().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ValidationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyTags` | `Array` | No | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `boolean` | No | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `Array` | No | An array of event types the webhook consumer subscribes to. |
| `id` | `string` | No | Unique identifier for the webhook consumer. |
| `url` | `string` | No | The URL that will consume webhook events dispatched by Codat. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Webhook().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Webhook().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Webhook().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookZapierKeyEntity

```ts
const webhook_zapier_key = client.WebhookZapierKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WebhookZapierKey().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookZapierKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CodatplatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new CodatplatformSDK({
  feature: {
    test: { active: true },
  }
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

