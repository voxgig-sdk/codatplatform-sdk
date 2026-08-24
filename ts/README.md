# Codatplatform TypeScript SDK



The TypeScript SDK for the Codatplatform API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AccessToken()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/codatplatform-sdk/releases](https://github.com/voxgig-sdk/codatplatform-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CodatplatformSDK } from '@voxgig-sdk/codatplatform'

const client = new CodatplatformSDK({
  apikey: process.env.CODATPLATFORM_APIKEY,
})
```

### 3. Load a branding

Branding is nested under platform_key, so provide the `platform_key`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const branding = await client.Branding().load({
    platform_key: 'example_platform_key',
  })
  console.log(branding)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const pushoption = await client.PushOption().load({ company_id: "example", connection_id: "example", id: "example_id" })
  console.log(pushoption)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CodatplatformSDK.test()

const pushoption = await client.PushOption().load({ id: 'test01', company_id: 'example_company_id', connection_id: 'example_connection_id' })
// pushoption is a bare entity populated with mock response data
console.log(pushoption)
```

You can also use the instance method:

```ts
const client = new CodatplatformSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.PushOption()

// First call runs the operation and stores its result
await entity.load({ id: 'example', company_id: 'example_company_id', connection_id: 'example_connection_id' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CodatplatformSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```


## Reference

### CodatplatformSDK

#### Constructor

```ts
new CodatplatformSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AccessToken(data?)` | `AccessTokenEntity` | Create an AccessToken entity instance. |
| `All(data?)` | `AllEntity` | Create an All entity instance. |
| `ApiKey(data?)` | `ApiKeyEntity` | Create an ApiKey entity instance. |
| `Branding(data?)` | `BrandingEntity` | Create a Branding entity instance. |
| `Company(data?)` | `CompanyEntity` | Create a Company entity instance. |
| `CompanyAccessToken(data?)` | `CompanyAccessTokenEntity` | Create a CompanyAccessToken entity instance. |
| `Connection(data?)` | `ConnectionEntity` | Create a Connection entity instance. |
| `ConnectionManagementAccessToken(data?)` | `ConnectionManagementAccessTokenEntity` | Create a ConnectionManagementAccessToken entity instance. |
| `ConnectionManagementAllowedOrigin(data?)` | `ConnectionManagementAllowedOriginEntity` | Create a ConnectionManagementAllowedOrigin entity instance. |
| `Custom(data?)` | `CustomEntity` | Create a Custom entity instance. |
| `DataStatus(data?)` | `DataStatusEntity` | Create a DataStatus entity instance. |
| `DataType(data?)` | `DataTypeEntity` | Create a DataType entity instance. |
| `History(data?)` | `HistoryEntity` | Create a History entity instance. |
| `Integration(data?)` | `IntegrationEntity` | Create an Integration entity instance. |
| `Option(data?)` | `OptionEntity` | Create an Option entity instance. |
| `Product(data?)` | `ProductEntity` | Create a Product entity instance. |
| `Profile(data?)` | `ProfileEntity` | Create a Profile entity instance. |
| `PullOperation(data?)` | `PullOperationEntity` | Create a PullOperation entity instance. |
| `Push(data?)` | `PushEntity` | Create a Push entity instance. |
| `PushOption(data?)` | `PushOptionEntity` | Create a PushOption entity instance. |
| `Queue(data?)` | `QueueEntity` | Create a Queue entity instance. |
| `RefreshData(data?)` | `RefreshDataEntity` | Create a RefreshData entity instance. |
| `Setting(data?)` | `SettingEntity` | Create a Setting entity instance. |
| `SupplementalData(data?)` | `SupplementalDataEntity` | Create a SupplementalData entity instance. |
| `SupplementalDataConfig(data?)` | `SupplementalDataConfigEntity` | Create a SupplementalDataConfig entity instance. |
| `Sync(data?)` | `SyncEntity` | Create a Sync entity instance. |
| `SyncSetting(data?)` | `SyncSettingEntity` | Create a SyncSetting entity instance. |
| `Validation(data?)` | `ValidationEntity` | Create a Validation entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `WebhookZapierKey(data?)` | `WebhookZapierKeyEntity` | Create a WebhookZapierKey entity instance. |
| `tester(testopts?, sdkopts?)` | `CodatplatformSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CodatplatformSDK.test(testopts?, sdkopts?)` | `CodatplatformSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CodatplatformSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: load.

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

Operations: create, list, load, patch, remove, update.

API path: `/companies/{companyId}/products/{productIdentifier}/refresh`

#### CompanyAccessToken

| Field | Description |
| --- | --- |
| `accessToken` |  |
| `expiresIn` |  |
| `tokenType` |  |

Operations: load.

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

Operations: create, list, load, patch, remove, update.

API path: `/companies/{companyId}/connections`

#### ConnectionManagementAccessToken

| Field | Description |
| --- | --- |
| `accessToken` |  |

Operations: load.

API path: `/companies/{companyId}/connectionManagement/accessToken`

#### ConnectionManagementAllowedOrigin

| Field | Description |
| --- | --- |
| `allowedOrigins` |  |

Operations: create, list.

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

Operations: load, update.

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

Operations: load.

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

Operations: list, load.

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

Operations: list, update.

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

Operations: create, list, load.

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

Operations: list, load.

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

Operations: load.

API path: `/companies/{companyId}/connections/{connectionId}/options/{dataType}`

#### Queue

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### RefreshData

| Field | Description |
| --- | --- |

Operations: create.

API path: `/companies/{companyId}/data/all`

#### Setting

| Field | Description |
| --- | --- |
| `apiKey` |  |
| `createdDate` |  |
| `id` |  |
| `name` |  |

Operations: create, list, remove.

API path: `/apiKeys`

#### SupplementalData

| Field | Description |
| --- | --- |
| `supplementalDataConfig` |  |

Operations: update.

API path: `/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig`

#### SupplementalDataConfig

| Field | Description |
| --- | --- |
| `dataSource` |  |
| `pullData` |  |
| `pushData` |  |

Operations: load.

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

Operations: list.

API path: `/profile/syncSettings`

#### Validation

| Field | Description |
| --- | --- |
| `errors` |  |
| `warnings` |  |

Operations: list.

API path: `/companies/{companyId}/sync/{datasetId}/validation`

#### Webhook

| Field | Description |
| --- | --- |
| `companyTags` |  |
| `disabled` |  |
| `eventTypes` |  |
| `id` |  |
| `url` |  |

Operations: create, list, remove.

API path: `/webhooks`

#### WebhookZapierKey

| Field | Description |
| --- | --- |
| `key` |  |

Operations: create.

API path: `/webhooks/integrationKeys/zapier`



## Entities


### AccessToken

Create an instance: `const access_token = client.AccessToken()`


### All

Create an instance: `const all = client.All()`


### ApiKey

Create an instance: `const api_key = client.ApiKey()`


### Branding

Create an instance: `const branding = client.Branding()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `button` | `Record<string, any>` |  |
| `logo` | `Record<string, any>` |  |
| `sourceId` | `string` |  |

#### Example: Load

```ts
const branding = await client.Branding().load({ platform_key: 'platform_key' })
```


### Company

Create an instance: `const company = client.Company()`

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
| `dataConnections` | `any[]` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `lastSync` | `string` |  |
| `links` | `Record<string, any>` |  |
| `name` | `string` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `products` | `any[]` |  |
| `redirect` | `string` |  |
| `referenceParentCompany` | `Record<string, any>` |  |
| `referenceSubsidiaryCompanies` | `any[]` |  |
| `results` | `any[]` |  |
| `tags` | `Record<string, any>` |  |
| `totalResults` | `number` |  |

#### Example: Load

```ts
const company = await client.Company().load({ id: 'company_id' })
```

#### Example: List

```ts
const companys = await client.Company().list()
```

#### Example: Create

```ts
const company = await client.Company().create({
  links: {},
  name: 'example_name',
  pageNumber: 1,
  pageSize: 1,
  redirect: 'example_redirect',
  totalResults: 1,
})
```


### CompanyAccessToken

Create an instance: `const company_access_token = client.CompanyAccessToken()`

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

```ts
const company_access_token = await client.CompanyAccessToken().load({ id: 'company_access_token_id' })
```


### Connection

Create an instance: `const connection = client.Connection()`

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
| `connectionInfo` | `Record<string, any>` |  |
| `created` | `string` |  |
| `dataConnectionErrors` | `any[]` |  |
| `id` | `string` |  |
| `integrationId` | `string` |  |
| `integrationKey` | `string` |  |
| `lastSync` | `string` |  |
| `linkUrl` | `string` |  |
| `links` | `Record<string, any>` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `platformKey` | `string` |  |
| `platformName` | `string` |  |
| `results` | `any[]` |  |
| `sourceId` | `string` |  |
| `sourceType` | `string` |  |
| `status` | `string` |  |
| `totalResults` | `number` |  |

#### Example: Load

```ts
const connection = await client.Connection().load({ id: 'connection_id', company_id: 'company_id' })
```

#### Example: List

```ts
const connections = await client.Connection().list()
```

#### Example: Create

```ts
const connection = await client.Connection().create({
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


### ConnectionManagementAccessToken

Create an instance: `const connection_management_access_token = client.ConnectionManagementAccessToken()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessToken` | `string` |  |

#### Example: Load

```ts
const connection_management_access_token = await client.ConnectionManagementAccessToken().load({ company_id: 'company_id' })
```


### ConnectionManagementAllowedOrigin

Create an instance: `const connection_management_allowed_origin = client.ConnectionManagementAllowedOrigin()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowedOrigins` | `any[]` |  |

#### Example: List

```ts
const connection_management_allowed_origins = await client.ConnectionManagementAllowedOrigin().list()
```

#### Example: Create

```ts
const connection_management_allowed_origin = await client.ConnectionManagementAllowedOrigin().create({
})
```


### Custom

Create an instance: `const custom = client.Custom()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `string` |  |
| `keyBy` | `any[]` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `requiredData` | `Record<string, any>` |  |
| `results` | `any[]` |  |
| `sourceModifiedDate` | `any[]` |  |
| `totalResults` | `number` |  |

#### Example: Load

```ts
const custom = await client.Custom().load({ id: 'custom_id' })
```


### DataStatus

Create an instance: `const data_status = client.DataStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountTransactions` | `Record<string, any>` |  |
| `balanceSheet` | `Record<string, any>` |  |
| `bankAccounts` | `Record<string, any>` |  |
| `bankTransactions` | `Record<string, any>` |  |
| `bankingaccountBalances` | `Record<string, any>` |  |
| `bankingaccounts` | `Record<string, any>` |  |
| `bankingtransactionCategories` | `Record<string, any>` |  |
| `bankingtransactions` | `Record<string, any>` |  |
| `billCreditNotes` | `Record<string, any>` |  |
| `billPayments` | `Record<string, any>` |  |
| `bills` | `Record<string, any>` |  |
| `cashFlowStatement` | `Record<string, any>` |  |
| `chartOfAccounts` | `Record<string, any>` |  |
| `commercecompanyInfo` | `Record<string, any>` |  |
| `commercecustomers` | `Record<string, any>` |  |
| `commercedisputes` | `Record<string, any>` |  |
| `commercelocations` | `Record<string, any>` |  |
| `commerceorders` | `Record<string, any>` |  |
| `commercepaymentMethods` | `Record<string, any>` |  |
| `commercepayments` | `Record<string, any>` |  |
| `commerceproductCategories` | `Record<string, any>` |  |
| `commerceproducts` | `Record<string, any>` |  |
| `commercetaxComponents` | `Record<string, any>` |  |
| `commercetransactions` | `Record<string, any>` |  |
| `company` | `Record<string, any>` |  |
| `creditNotes` | `Record<string, any>` |  |
| `customers` | `Record<string, any>` |  |
| `directCosts` | `Record<string, any>` |  |
| `directIncomes` | `Record<string, any>` |  |
| `invoices` | `Record<string, any>` |  |
| `itemReceipts` | `Record<string, any>` |  |
| `items` | `Record<string, any>` |  |
| `journalEntries` | `Record<string, any>` |  |
| `journals` | `Record<string, any>` |  |
| `paymentMethods` | `Record<string, any>` |  |
| `payments` | `Record<string, any>` |  |
| `profitAndLoss` | `Record<string, any>` |  |
| `purchaseOrders` | `Record<string, any>` |  |
| `salesOrders` | `Record<string, any>` |  |
| `suppliers` | `Record<string, any>` |  |
| `taxRates` | `Record<string, any>` |  |
| `trackingCategories` | `Record<string, any>` |  |
| `transfers` | `Record<string, any>` |  |

#### Example: Load

```ts
const data_status = await client.DataStatus().load({ company_id: 'company_id' })
```


### DataType

Create an instance: `const data_type = client.DataType()`


### History

Create an instance: `const history = client.History()`


### Integration

Create an instance: `const integration = client.Integration()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataProvidedBy` | `string` |  |
| `datatypeFeatures` | `any[]` |  |
| `enabled` | `boolean` |  |
| `integrationId` | `string` |  |
| `isBeta` | `boolean` |  |
| `isOfflineConnector` | `boolean` |  |
| `key` | `string` |  |
| `links` | `Record<string, any>` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `results` | `any[]` |  |
| `sourceId` | `string` |  |
| `sourceType` | `string` |  |
| `totalResults` | `number` |  |

#### Example: Load

```ts
const integration = await client.Integration().load({ id: 'integration_id' })
```

#### Example: List

```ts
const integrations = await client.Integration().list()
```


### Option

Create an instance: `const option = client.Option()`


### Product

Create an instance: `const product = client.Product()`


### Profile

Create an instance: `const profile = client.Profile()`

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
| `whiteListUrls` | `any[]` |  |

#### Example: List

```ts
const profiles = await client.Profile().list()
```


### PullOperation

Create an instance: `const pull_operation = client.PullOperation()`

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
| `links` | `Record<string, any>` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `progress` | `number` |  |
| `requested` | `string` |  |
| `results` | `any[]` |  |
| `status` | `string` |  |
| `statusDescription` | `string` |  |
| `totalResults` | `number` |  |

#### Example: Load

```ts
const pull_operation = await client.PullOperation().load({ company_id: 'company_id', dataset_id: 'dataset_id' })
```

#### Example: List

```ts
const pull_operations = await client.PullOperation().list()
```

#### Example: Create

```ts
const pull_operation = await client.PullOperation().create({
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


### Push

Create an instance: `const push = client.Push()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `changes` | `any[]` |  |
| `companyId` | `string` |  |
| `completedOnUtc` | `string` |  |
| `dataConnectionKey` | `string` |  |
| `dataType` | `string` |  |
| `errorMessage` | `string` |  |
| `links` | `Record<string, any>` |  |
| `pageNumber` | `number` |  |
| `pageSize` | `number` |  |
| `pushOperationKey` | `string` |  |
| `requestedOnUtc` | `string` |  |
| `results` | `any[]` |  |
| `status` | `string` |  |
| `statusCode` | `number` |  |
| `timeoutInMinutes` | `number` |  |
| `timeoutInSeconds` | `number` |  |
| `totalResults` | `number` |  |
| `validation` | `Record<string, any>` |  |

#### Example: Load

```ts
const push = await client.Push().load({ id: 'push_id', company_id: 'company_id' })
```

#### Example: List

```ts
const pushs = await client.Push().list()
```


### PushOption

Create an instance: `const push_option = client.PushOption()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `displayName` | `string` |  |
| `options` | `any[]` |  |
| `properties` | `Record<string, any>` |  |
| `required` | `boolean` |  |
| `type` | `string` |  |
| `validation` | `Record<string, any>` |  |

#### Example: Load

```ts
const push_option = await client.PushOption().load({ id: 'push_option_id', company_id: 'company_id', connection_id: 'connection_id' })
```


### Queue

Create an instance: `const queue = client.Queue()`


### RefreshData

Create an instance: `const refresh_data = client.RefreshData()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const refresh_data = await client.RefreshData().create({
  company_id: 'example_company_id',
})
```


### Setting

Create an instance: `const setting = client.Setting()`

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

```ts
const settings = await client.Setting().list()
```

#### Example: Create

```ts
const setting = await client.Setting().create({
})
```


### SupplementalData

Create an instance: `const supplemental_data = client.SupplementalData()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `supplementalDataConfig` | `Record<string, any>` |  |


### SupplementalDataConfig

Create an instance: `const supplemental_data_config = client.SupplementalDataConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `string` |  |
| `pullData` | `Record<string, any>` |  |
| `pushData` | `Record<string, any>` |  |

#### Example: Load

```ts
const supplemental_data_config = await client.SupplementalDataConfig().load({ data_type_id: 'data_type_id', platform_key: 'platform_key' })
```


### Sync

Create an instance: `const sync = client.Sync()`


### SyncSetting

Create an instance: `const sync_setting = client.SyncSetting()`

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

```ts
const sync_settings = await client.SyncSetting().list()
```


### Validation

Create an instance: `const validation = client.Validation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `warnings` | `any[]` |  |

#### Example: List

```ts
const validations = await client.Validation().list()
```


### Webhook

Create an instance: `const webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyTags` | `any[]` |  |
| `disabled` | `boolean` |  |
| `eventTypes` | `any[]` |  |
| `id` | `string` |  |
| `url` | `string` |  |

#### Example: List

```ts
const webhooks = await client.Webhook().list()
```

#### Example: Create

```ts
const webhook = await client.Webhook().create({
})
```


### WebhookZapierKey

Create an instance: `const webhook_zapier_key = client.WebhookZapierKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |

#### Example: Create

```ts
const webhook_zapier_key = await client.WebhookZapierKey().create({
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
codatplatform/
├── src/
│   ├── CodatplatformSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CodatplatformSDK } from '@voxgig-sdk/codatplatform'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const pushoption = client.PushOption()
await pushoption.load({ company_id: "example", connection_id: "example", id: "example_id" })

// pushoption.data() now returns the pushoption data from the last `load`
// pushoption.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
