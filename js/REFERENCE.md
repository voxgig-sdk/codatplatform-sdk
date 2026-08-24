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
| `button` | `Object` | No |  |
| `logo` | `Object` | No |  |
| `sourceId` | `string` | No |  |

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
| `created` | `string` | No |  |
| `createdByUserName` | `string` | No |  |
| `dataConnections` | `Array` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `lastSync` | `string` | No |  |
| `links` | `Object` | Yes |  |
| `name` | `string` | Yes |  |
| `pageNumber` | `number` | Yes |  |
| `pageSize` | `number` | Yes |  |
| `products` | `Array` | No |  |
| `redirect` | `string` | Yes |  |
| `referenceParentCompany` | `Object` | No |  |
| `referenceSubsidiaryCompanies` | `Array` | No |  |
| `results` | `Array` | No |  |
| `tags` | `Object` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Company().create({
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
| `accessToken` | `string` | Yes |  |
| `expiresIn` | `number` | Yes |  |
| `tokenType` | `string` | Yes |  |

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
| `created` | `string` | Yes |  |
| `dataConnectionErrors` | `Array` | No |  |
| `id` | `string` | Yes |  |
| `integrationId` | `string` | Yes |  |
| `integrationKey` | `string` | Yes |  |
| `lastSync` | `string` | No |  |
| `linkUrl` | `string` | Yes |  |
| `links` | `Object` | Yes |  |
| `pageNumber` | `number` | Yes |  |
| `pageSize` | `number` | Yes |  |
| `platformKey` | `string` | No |  |
| `platformName` | `string` | Yes |  |
| `results` | `Array` | No |  |
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
| `accessToken` | `string` | No |  |

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
| `allowedOrigins` | `Array` | No |  |

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
| `dataSource` | `string` | No |  |
| `keyBy` | `Array` | No |  |
| `pageNumber` | `number` | No |  |
| `pageSize` | `number` | No |  |
| `requiredData` | `Object` | No |  |
| `results` | `Array` | No |  |
| `sourceModifiedDate` | `Array` | No |  |
| `totalResults` | `number` | No |  |

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
| `accountTransactions` | `Object` | Yes |  |
| `balanceSheet` | `Object` | Yes |  |
| `bankAccounts` | `Object` | Yes |  |
| `bankTransactions` | `Object` | Yes |  |
| `bankingaccountBalances` | `Object` | Yes |  |
| `bankingaccounts` | `Object` | Yes |  |
| `bankingtransactionCategories` | `Object` | Yes |  |
| `bankingtransactions` | `Object` | Yes |  |
| `billCreditNotes` | `Object` | Yes |  |
| `billPayments` | `Object` | Yes |  |
| `bills` | `Object` | Yes |  |
| `cashFlowStatement` | `Object` | Yes |  |
| `chartOfAccounts` | `Object` | Yes |  |
| `commercecompanyInfo` | `Object` | Yes |  |
| `commercecustomers` | `Object` | Yes |  |
| `commercedisputes` | `Object` | Yes |  |
| `commercelocations` | `Object` | Yes |  |
| `commerceorders` | `Object` | Yes |  |
| `commercepaymentMethods` | `Object` | Yes |  |
| `commercepayments` | `Object` | Yes |  |
| `commerceproductCategories` | `Object` | Yes |  |
| `commerceproducts` | `Object` | Yes |  |
| `commercetaxComponents` | `Object` | Yes |  |
| `commercetransactions` | `Object` | Yes |  |
| `company` | `Object` | Yes |  |
| `creditNotes` | `Object` | Yes |  |
| `customers` | `Object` | Yes |  |
| `directCosts` | `Object` | Yes |  |
| `directIncomes` | `Object` | Yes |  |
| `invoices` | `Object` | Yes |  |
| `itemReceipts` | `Object` | Yes |  |
| `items` | `Object` | Yes |  |
| `journalEntries` | `Object` | Yes |  |
| `journals` | `Object` | Yes |  |
| `paymentMethods` | `Object` | Yes |  |
| `payments` | `Object` | Yes |  |
| `profitAndLoss` | `Object` | Yes |  |
| `purchaseOrders` | `Object` | Yes |  |
| `salesOrders` | `Object` | Yes |  |
| `suppliers` | `Object` | Yes |  |
| `taxRates` | `Object` | Yes |  |
| `trackingCategories` | `Object` | Yes |  |
| `transfers` | `Object` | Yes |  |

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
| `dataProvidedBy` | `string` | No |  |
| `datatypeFeatures` | `Array` | No |  |
| `enabled` | `boolean` | Yes |  |
| `integrationId` | `string` | No |  |
| `isBeta` | `boolean` | No |  |
| `isOfflineConnector` | `boolean` | No |  |
| `key` | `string` | Yes |  |
| `links` | `Object` | Yes |  |
| `logoUrl` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `pageNumber` | `number` | Yes |  |
| `pageSize` | `number` | Yes |  |
| `results` | `Array` | No |  |
| `sourceId` | `string` | No |  |
| `sourceType` | `string` | No |  |
| `totalResults` | `number` | Yes |  |

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
| `apiKey` | `string` | No |  |
| `confirmCompanyName` | `boolean` | No |  |
| `iconUrl` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `whiteListUrls` | `Array` | No |  |

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
| `companyId` | `string` | Yes |  |
| `completed` | `string` | No |  |
| `connectionId` | `string` | Yes |  |
| `dataType` | `string` | Yes |  |
| `errorMessage` | `string` | No |  |
| `id` | `string` | Yes |  |
| `isCompleted` | `boolean` | Yes |  |
| `isErrored` | `boolean` | Yes |  |
| `links` | `Object` | Yes |  |
| `pageNumber` | `number` | Yes |  |
| `pageSize` | `number` | Yes |  |
| `progress` | `number` | Yes |  |
| `requested` | `string` | Yes |  |
| `results` | `Array` | No |  |
| `status` | `string` | Yes |  |
| `statusDescription` | `string` | No |  |
| `totalResults` | `number` | Yes |  |

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
| `changes` | `Array` | No |  |
| `companyId` | `string` | Yes |  |
| `completedOnUtc` | `string` | No |  |
| `dataConnectionKey` | `string` | Yes |  |
| `dataType` | `string` | No |  |
| `errorMessage` | `string` | No |  |
| `links` | `Object` | Yes |  |
| `pageNumber` | `number` | Yes |  |
| `pageSize` | `number` | Yes |  |
| `pushOperationKey` | `string` | Yes |  |
| `requestedOnUtc` | `string` | Yes |  |
| `results` | `Array` | No |  |
| `status` | `string` | Yes |  |
| `statusCode` | `number` | Yes |  |
| `timeoutInMinutes` | `number` | No |  |
| `timeoutInSeconds` | `number` | No |  |
| `totalResults` | `number` | Yes |  |
| `validation` | `Object` | No |  |

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
| `description` | `string` | No |  |
| `displayName` | `string` | Yes |  |
| `options` | `Array` | No |  |
| `properties` | `Object` | No |  |
| `required` | `boolean` | Yes |  |
| `type` | `string` | Yes |  |
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
| `apiKey` | `string` | No |  |
| `createdDate` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No |  |

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
| `dataSource` | `string` | No |  |
| `pullData` | `Object` | No |  |
| `pushData` | `Object` | No |  |

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
| `dataType` | `string` | Yes |  |
| `fetchOnFirstLink` | `boolean` | Yes |  |
| `isLocked` | `boolean` | No |  |
| `monthsToSync` | `number` | No |  |
| `syncFromUtc` | `string` | No |  |
| `syncFromWindow` | `number` | No |  |
| `syncOrder` | `number` | Yes |  |
| `syncSchedule` | `number` | Yes |  |

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
| `companyTags` | `Array` | No |  |
| `disabled` | `boolean` | No |  |
| `eventTypes` | `Array` | No |  |
| `id` | `string` | No |  |
| `url` | `string` | No |  |

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

