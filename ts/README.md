# Codatplatform TypeScript SDK



The TypeScript SDK for the Codatplatform API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AccessToken()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `js`, `lua`, `php`, `py`, `rb` — see
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
// pushoption is the entity, populated with mock response data
// — call pushoption.data() for the record itself
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
console.log(data.id)
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

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


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
| `button` | Button branding references. |
| `logo` | Logo branding references. |
| `sourceId` | A source-specific ID used to distinguish between different sources originating from the same data connection. |

Operations: load.

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

Operations: create, list, load, patch, remove, update.

API path: `/companies/{companyId}/products/{productIdentifier}/refresh`

#### CompanyAccessToken

| Field | Description |
| --- | --- |
| `accessToken` | The access token for the company. |
| `expiresIn` | The number of seconds until the access token expires. |
| `id` |  |
| `tokenType` | The type of token. |

Operations: load.

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

Operations: create, list, load, remove, update.

API path: `/companies/{companyId}/connections`

#### ConnectionManagementAccessToken

| Field | Description |
| --- | --- |
| `accessToken` | Access token that allows SMBs to manage connections that have access to their data. |

Operations: load.

API path: `/companies/{companyId}/connectionManagement/accessToken`

#### ConnectionManagementAllowedOrigin

| Field | Description |
| --- | --- |
| `allowedOrigins` | An array of allowed origins (i.e. |

Operations: create, list.

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

Operations: load, update.

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
| `apiKey` | The API key for this Codat instance. |
| `confirmCompanyName` | `True` if the company name has been confirmed. |
| `iconUrl` | Static url to your organization's icon. |
| `logoUrl` | Static url to your organization's logo. |
| `name` | The name given to the instance. |
| `redirectUrl` | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | A list of urls that are allowed to communicate with Codat. |

Operations: list, update.

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

Operations: create, list, load.

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

Operations: list, load.

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
| `apiKey` | The API key value used to make authenticated http requests. |
| `createdDate` | The date the entity was created. |
| `id` | Unique identifier for the API key. |
| `name` | A meaningful name assigned to the API key. |

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
| `dataSource` | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | The additional properties that are required when pulling records. |
| `pushData` | The additional properties that are required to create and/or update records. |

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
| `dataType` | Available data types |
| `fetchOnFirstLink` | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | Date from which data should be fetched. |
| `syncFromWindow` | Number of months of data to be fetched. |
| `syncOrder` | The sync in which data types are queued for a sync. |
| `syncSchedule` | Number of hours after which this data type should be refreshed. |

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
| `companyTags` | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | An array of event types the webhook consumer subscribes to. |
| `id` | Unique identifier for the webhook consumer. |
| `url` | The URL that will consume webhook events dispatched by Codat. |

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
| `button` | `Record<string, any>` | Button branding references. |
| `logo` | `Record<string, any>` | Logo branding references. |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |

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
| `created` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `string` | Name of user that created the company in Codat. |
| `dataConnections` | `any[]` |  |
| `description` | `string` | Additional information about the company. |
| `id` | `string` | Unique identifier for your SMB in Codat. |
| `lastSync` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `Record<string, any>` |  |
| `name` | `string` | The name of the company |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `products` | `any[]` | An array of products that are currently enabled for the company. |
| `redirect` | `string` | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `Record<string, any>` | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `any[]` | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `any[]` |  |
| `tags` | `Record<string, any>` | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `totalResults` | `number` | Total number of items. |

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
  id: 'example_id',
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
| `accessToken` | `string` | The access token for the company. |
| `expiresIn` | `number` | The number of seconds until the access token expires. |
| `id` | `string` |  |
| `tokenType` | `string` | The type of token. |

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
| `created` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `any[]` |  |
| `id` | `string` | Unique identifier for a company's data connection. |
| `integrationId` | `string` | A Codat ID representing the integration. |
| `integrationKey` | `string` | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `string` | The link URL your customers can use to authorize access to their business application. |
| `links` | `Record<string, any>` |  |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `platformKey` | `string` | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `string` | Name of integration connected to company. |
| `results` | `any[]` |  |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | The type of platform of the connection. |
| `status` | `string` | The current authorization status of the data connection. |
| `totalResults` | `number` | Total number of items. |

#### Example: Load

```ts
const connection = await client.Connection().load({ id: 'connection_id', company_id: 'company_id' })
```

#### Example: List

```ts
const connections = await client.Connection().list({ company_id: "example" })
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
| `accessToken` | `string` | Access token that allows SMBs to manage connections that have access to their data. |

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
| `allowedOrigins` | `any[]` | An array of allowed origins (i.e. |

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
| `dataSource` | `string` | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `id` | `string` |  |
| `keyBy` | `any[]` | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `requiredData` | `Record<string, any>` | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `any[]` |  |
| `sourceModifiedDate` | `any[]` | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `number` | Total number of items. |

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
| `accountTransactions` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `company` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `items` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `Record<string, any>` | Describes the state of data in the Codat cache for a company and data type |

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
| `dataProvidedBy` | `string` | The name of the data provider. |
| `datatypeFeatures` | `any[]` |  |
| `enabled` | `boolean` | Whether this integration is enabled for your customers to use. |
| `id` | `string` |  |
| `integrationId` | `string` | A Codat ID representing the integration. |
| `isBeta` | `boolean` | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `boolean` | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `string` | A unique 4-letter key to represent a platform in each integration. |
| `links` | `Record<string, any>` |  |
| `logoUrl` | `string` | Static url for integration's logo. |
| `name` | `string` | Name of integration. |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `results` | `any[]` |  |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | The type of platform of the connection. |
| `totalResults` | `number` | Total number of items. |

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
| `apiKey` | `string` | The API key for this Codat instance. |
| `confirmCompanyName` | `boolean` | `True` if the company name has been confirmed. |
| `iconUrl` | `string` | Static url to your organization's icon. |
| `logoUrl` | `string` | Static url to your organization's logo. |
| `name` | `string` | The name given to the instance. |
| `redirectUrl` | `string` | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | `any[]` | A list of urls that are allowed to communicate with Codat. |

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
| `companyId` | `string` | Unique identifier of the company associated to this pull operation. |
| `completed` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `connectionId` | `string` | Unique identifier of the connection associated to this pull operation. |
| `dataType` | `string` | The data type you are requesting in a pull operation. |
| `errorMessage` | `string` | A message about a transient or persistent error returned by Codat or the source platform. |
| `id` | `string` | Unique identifier of the pull operation. |
| `isCompleted` | `boolean` | `True` if the pull operation is completed successfully. |
| `isErrored` | `boolean` | `True` if the pull operation entered an error state. |
| `links` | `Record<string, any>` |  |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `progress` | `number` | An integer signifying the progress of the pull operation. |
| `requested` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `any[]` |  |
| `status` | `string` | The current status of the dataset. |
| `statusDescription` | `string` | Additional information about the dataset status. |
| `totalResults` | `number` | Total number of items. |

#### Example: Load

```ts
const pull_operation = await client.PullOperation().load({ company_id: 'company_id', dataset_id: 'dataset_id' })
```

#### Example: List

```ts
const pull_operations = await client.PullOperation().list({ company_id: "example" })
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
| `changes` | `any[]` | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `string` | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `string` | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `string` | Unique identifier for a company's data connection. |
| `dataType` | `string` | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `string` | A message about the error. |
| `id` | `string` |  |
| `links` | `Record<string, any>` |  |
| `pageNumber` | `number` | Current page number. |
| `pageSize` | `number` | Number of items to return in results array. |
| `pushOperationKey` | `string` | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `string` | The datetime when the push was requested. |
| `results` | `any[]` |  |
| `status` | `string` | The current status of the push operation. |
| `statusCode` | `number` | Push status code. |
| `timeoutInMinutes` | `number` | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `number` | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `number` | Total number of items. |
| `validation` | `Record<string, any>` | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

#### Example: Load

```ts
const push = await client.Push().load({ id: 'push_id', company_id: 'company_id' })
```

#### Example: List

```ts
const pushs = await client.Push().list({ company_id: "example" })
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
| `description` | `string` | A description of the property. |
| `displayName` | `string` | The property's display name. |
| `id` | `string` |  |
| `options` | `any[]` |  |
| `properties` | `Record<string, any>` |  |
| `required` | `boolean` | The property is required if `True`. |
| `type` | `string` | The option type. |
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
| `apiKey` | `string` | The API key value used to make authenticated http requests. |
| `createdDate` | `string` | The date the entity was created. |
| `id` | `string` | Unique identifier for the API key. |
| `name` | `string` | A meaningful name assigned to the API key. |

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
| `dataSource` | `string` | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `Record<string, any>` | The additional properties that are required when pulling records. |
| `pushData` | `Record<string, any>` | The additional properties that are required to create and/or update records. |

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
| `dataType` | `string` | Available data types |
| `fetchOnFirstLink` | `boolean` | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `boolean` | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | `number` | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | `string` | Date from which data should be fetched. |
| `syncFromWindow` | `number` | Number of months of data to be fetched. |
| `syncOrder` | `number` | The sync in which data types are queued for a sync. |
| `syncSchedule` | `number` | Number of hours after which this data type should be refreshed. |

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
const validations = await client.Validation().list({ company_id: "example", sync_id: "example" })
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
| `companyTags` | `any[]` | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `boolean` | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `any[]` | An array of event types the webhook consumer subscribes to. |
| `id` | `string` | Unique identifier for the webhook consumer. |
| `url` | `string` | The URL that will consume webhook events dispatched by Codat. |

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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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
