# Codatplatform Golang SDK



The Golang SDK for the Codatplatform API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AccessToken(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/codatplatform-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/codatplatform-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/codatplatform-sdk/go=../codatplatform-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "os"
    sdk "github.com/voxgig-sdk/codatplatform-sdk/go"
)

func main() {
    client := sdk.NewCodatplatformSDK(map[string]any{
        "apikey": os.Getenv("CODATPLATFORM_APIKEY"),
    })

    _ = client
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
pushoption, err := client.PushOption(nil).Load(map[string]any{"company_id": "example", "connection_id": "example", "id": "example_id"}, nil)
if err != nil {
    // handle err
    return
}
_ = pushoption
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

pushOption, err := client.PushOption(nil).Load(
    map[string]any{"id": "test01", "company_id": "example", "connection_id": "example"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(pushOption) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCodatplatformSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCodatplatformSDK

```go
func NewCodatplatformSDK(options map[string]any) *CodatplatformSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CodatplatformSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CodatplatformSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AccessToken` | `(data map[string]any) CodatplatformEntity` | Create an AccessToken entity instance. |
| `All` | `(data map[string]any) CodatplatformEntity` | Create an All entity instance. |
| `ApiKey` | `(data map[string]any) CodatplatformEntity` | Create an ApiKey entity instance. |
| `Branding` | `(data map[string]any) CodatplatformEntity` | Create a Branding entity instance. |
| `Company` | `(data map[string]any) CodatplatformEntity` | Create a Company entity instance. |
| `CompanyAccessToken` | `(data map[string]any) CodatplatformEntity` | Create a CompanyAccessToken entity instance. |
| `Connection` | `(data map[string]any) CodatplatformEntity` | Create a Connection entity instance. |
| `ConnectionManagementAccessToken` | `(data map[string]any) CodatplatformEntity` | Create a ConnectionManagementAccessToken entity instance. |
| `ConnectionManagementAllowedOrigin` | `(data map[string]any) CodatplatformEntity` | Create a ConnectionManagementAllowedOrigin entity instance. |
| `Custom` | `(data map[string]any) CodatplatformEntity` | Create a Custom entity instance. |
| `DataStatus` | `(data map[string]any) CodatplatformEntity` | Create a DataStatus entity instance. |
| `DataType` | `(data map[string]any) CodatplatformEntity` | Create a DataType entity instance. |
| `History` | `(data map[string]any) CodatplatformEntity` | Create a History entity instance. |
| `Integration` | `(data map[string]any) CodatplatformEntity` | Create an Integration entity instance. |
| `Option` | `(data map[string]any) CodatplatformEntity` | Create an Option entity instance. |
| `Product` | `(data map[string]any) CodatplatformEntity` | Create a Product entity instance. |
| `Profile` | `(data map[string]any) CodatplatformEntity` | Create a Profile entity instance. |
| `PullOperation` | `(data map[string]any) CodatplatformEntity` | Create a PullOperation entity instance. |
| `Push` | `(data map[string]any) CodatplatformEntity` | Create a Push entity instance. |
| `PushOption` | `(data map[string]any) CodatplatformEntity` | Create a PushOption entity instance. |
| `Queue` | `(data map[string]any) CodatplatformEntity` | Create a Queue entity instance. |
| `RefreshData` | `(data map[string]any) CodatplatformEntity` | Create a RefreshData entity instance. |
| `Setting` | `(data map[string]any) CodatplatformEntity` | Create a Setting entity instance. |
| `SupplementalData` | `(data map[string]any) CodatplatformEntity` | Create a SupplementalData entity instance. |
| `SupplementalDataConfig` | `(data map[string]any) CodatplatformEntity` | Create a SupplementalDataConfig entity instance. |
| `Sync` | `(data map[string]any) CodatplatformEntity` | Create a Sync entity instance. |
| `SyncSetting` | `(data map[string]any) CodatplatformEntity` | Create a SyncSetting entity instance. |
| `Validation` | `(data map[string]any) CodatplatformEntity` | Create a Validation entity instance. |
| `Webhook` | `(data map[string]any) CodatplatformEntity` | Create a Webhook entity instance. |
| `WebhookZapierKey` | `(data map[string]any) CodatplatformEntity` | Create a WebhookZapierKey entity instance. |

### Entity interface (CodatplatformEntity)

All entities implement the `CodatplatformEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    branding, err := client.Branding(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // branding is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

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
| `"button"` |  |
| `"logo"` |  |
| `"sourceId"` |  |

Operations: Load.

API path: `/integrations/{platformKey}/branding`

#### Company

| Field | Description |
| --- | --- |
| `"created"` |  |
| `"createdByUserName"` |  |
| `"dataConnections"` |  |
| `"description"` |  |
| `"id"` |  |
| `"lastSync"` |  |
| `"links"` |  |
| `"name"` |  |
| `"pageNumber"` |  |
| `"pageSize"` |  |
| `"products"` |  |
| `"redirect"` |  |
| `"referenceParentCompany"` |  |
| `"referenceSubsidiaryCompanies"` |  |
| `"results"` |  |
| `"tags"` |  |
| `"totalResults"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/companies/{companyId}/products/{productIdentifier}/refresh`

#### CompanyAccessToken

| Field | Description |
| --- | --- |
| `"accessToken"` |  |
| `"expiresIn"` |  |
| `"tokenType"` |  |

Operations: Load.

API path: `/companies/{companyId}/accessToken`

#### Connection

| Field | Description |
| --- | --- |
| `"connectionInfo"` |  |
| `"created"` |  |
| `"dataConnectionErrors"` |  |
| `"id"` |  |
| `"integrationId"` |  |
| `"integrationKey"` |  |
| `"lastSync"` |  |
| `"linkUrl"` |  |
| `"links"` |  |
| `"pageNumber"` |  |
| `"pageSize"` |  |
| `"platformKey"` |  |
| `"platformName"` |  |
| `"results"` |  |
| `"sourceId"` |  |
| `"sourceType"` |  |
| `"status"` |  |
| `"totalResults"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/companies/{companyId}/connections`

#### ConnectionManagementAccessToken

| Field | Description |
| --- | --- |
| `"accessToken"` |  |

Operations: Load.

API path: `/companies/{companyId}/connectionManagement/accessToken`

#### ConnectionManagementAllowedOrigin

| Field | Description |
| --- | --- |
| `"allowedOrigins"` |  |

Operations: Create, List.

API path: `/connectionManagement/corsSettings`

#### Custom

| Field | Description |
| --- | --- |
| `"dataSource"` |  |
| `"keyBy"` |  |
| `"pageNumber"` |  |
| `"pageSize"` |  |
| `"requiredData"` |  |
| `"results"` |  |
| `"sourceModifiedDate"` |  |
| `"totalResults"` |  |

Operations: Load, Update.

API path: `/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}`

#### DataStatus

| Field | Description |
| --- | --- |
| `"accountTransactions"` |  |
| `"balanceSheet"` |  |
| `"bankAccounts"` |  |
| `"bankTransactions"` |  |
| `"bankingaccountBalances"` |  |
| `"bankingaccounts"` |  |
| `"bankingtransactionCategories"` |  |
| `"bankingtransactions"` |  |
| `"billCreditNotes"` |  |
| `"billPayments"` |  |
| `"bills"` |  |
| `"cashFlowStatement"` |  |
| `"chartOfAccounts"` |  |
| `"commercecompanyInfo"` |  |
| `"commercecustomers"` |  |
| `"commercedisputes"` |  |
| `"commercelocations"` |  |
| `"commerceorders"` |  |
| `"commercepaymentMethods"` |  |
| `"commercepayments"` |  |
| `"commerceproductCategories"` |  |
| `"commerceproducts"` |  |
| `"commercetaxComponents"` |  |
| `"commercetransactions"` |  |
| `"company"` |  |
| `"creditNotes"` |  |
| `"customers"` |  |
| `"directCosts"` |  |
| `"directIncomes"` |  |
| `"invoices"` |  |
| `"itemReceipts"` |  |
| `"items"` |  |
| `"journalEntries"` |  |
| `"journals"` |  |
| `"paymentMethods"` |  |
| `"payments"` |  |
| `"profitAndLoss"` |  |
| `"purchaseOrders"` |  |
| `"salesOrders"` |  |
| `"suppliers"` |  |
| `"taxRates"` |  |
| `"trackingCategories"` |  |
| `"transfers"` |  |

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
| `"dataProvidedBy"` |  |
| `"datatypeFeatures"` |  |
| `"enabled"` |  |
| `"integrationId"` |  |
| `"isBeta"` |  |
| `"isOfflineConnector"` |  |
| `"key"` |  |
| `"links"` |  |
| `"logoUrl"` |  |
| `"name"` |  |
| `"pageNumber"` |  |
| `"pageSize"` |  |
| `"results"` |  |
| `"sourceId"` |  |
| `"sourceType"` |  |
| `"totalResults"` |  |

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
| `"apiKey"` |  |
| `"confirmCompanyName"` |  |
| `"iconUrl"` |  |
| `"logoUrl"` |  |
| `"name"` |  |
| `"redirectUrl"` |  |
| `"whiteListUrls"` |  |

Operations: List, Update.

API path: `/profile`

#### PullOperation

| Field | Description |
| --- | --- |
| `"companyId"` |  |
| `"completed"` |  |
| `"connectionId"` |  |
| `"dataType"` |  |
| `"errorMessage"` |  |
| `"id"` |  |
| `"isCompleted"` |  |
| `"isErrored"` |  |
| `"links"` |  |
| `"pageNumber"` |  |
| `"pageSize"` |  |
| `"progress"` |  |
| `"requested"` |  |
| `"results"` |  |
| `"status"` |  |
| `"statusDescription"` |  |
| `"totalResults"` |  |

Operations: Create, List, Load.

API path: `/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}`

#### Push

| Field | Description |
| --- | --- |
| `"changes"` |  |
| `"companyId"` |  |
| `"completedOnUtc"` |  |
| `"dataConnectionKey"` |  |
| `"dataType"` |  |
| `"errorMessage"` |  |
| `"links"` |  |
| `"pageNumber"` |  |
| `"pageSize"` |  |
| `"pushOperationKey"` |  |
| `"requestedOnUtc"` |  |
| `"results"` |  |
| `"status"` |  |
| `"statusCode"` |  |
| `"timeoutInMinutes"` |  |
| `"timeoutInSeconds"` |  |
| `"totalResults"` |  |
| `"validation"` |  |

Operations: List, Load.

API path: `/companies/{companyId}/push`

#### PushOption

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"displayName"` |  |
| `"options"` |  |
| `"properties"` |  |
| `"required"` |  |
| `"type"` |  |
| `"validation"` |  |

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
| `"apiKey"` |  |
| `"createdDate"` |  |
| `"id"` |  |
| `"name"` |  |

Operations: Create, List, Remove.

API path: `/apiKeys`

#### SupplementalData

| Field | Description |
| --- | --- |
| `"supplementalDataConfig"` |  |

Operations: Update.

API path: `/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig`

#### SupplementalDataConfig

| Field | Description |
| --- | --- |
| `"dataSource"` |  |
| `"pullData"` |  |
| `"pushData"` |  |

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
| `"dataType"` |  |
| `"fetchOnFirstLink"` |  |
| `"isLocked"` |  |
| `"monthsToSync"` |  |
| `"syncFromUtc"` |  |
| `"syncFromWindow"` |  |
| `"syncOrder"` |  |
| `"syncSchedule"` |  |

Operations: List.

API path: `/profile/syncSettings`

#### Validation

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"warnings"` |  |

Operations: List.

API path: `/companies/{companyId}/sync/{datasetId}/validation`

#### Webhook

| Field | Description |
| --- | --- |
| `"companyTags"` |  |
| `"disabled"` |  |
| `"eventTypes"` |  |
| `"id"` |  |
| `"url"` |  |

Operations: Create, List, Remove.

API path: `/webhooks`

#### WebhookZapierKey

| Field | Description |
| --- | --- |
| `"key"` |  |

Operations: Create.

API path: `/webhooks/integrationKeys/zapier`



## Entities


### AccessToken

Create an instance: `accessToken := client.AccessToken(nil)`


### All

Create an instance: `all := client.All(nil)`


### ApiKey

Create an instance: `apiKey := client.ApiKey(nil)`


### Branding

Create an instance: `branding := client.Branding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `button` | `map[string]any` |  |
| `logo` | `map[string]any` |  |
| `sourceId` | `string` |  |

#### Example: Load

```go
branding, err := client.Branding(nil).Load(map[string]any{"platform_key": "platform_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(branding) // the loaded record
```


### Company

Create an instance: `company := client.Company(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `createdByUserName` | `string` |  |
| `dataConnections` | `[]any` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `lastSync` | `string` |  |
| `links` | `map[string]any` |  |
| `name` | `string` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `products` | `[]any` |  |
| `redirect` | `string` |  |
| `referenceParentCompany` | `map[string]any` |  |
| `referenceSubsidiaryCompanies` | `[]any` |  |
| `results` | `[]any` |  |
| `tags` | `map[string]any` |  |
| `totalResults` | `int` |  |

#### Example: Load

```go
company, err := client.Company(nil).Load(map[string]any{"id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(company) // the loaded record
```

#### Example: List

```go
companys, err := client.Company(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(companys) // the array of records
```

#### Example: Create

```go
result, err := client.Company(nil).Create(map[string]any{
    "links": map[string]any{},
    "name": "example_name",
    "pageNumber": 1,
    "pageSize": 1,
    "redirect": "example_redirect",
    "totalResults": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CompanyAccessToken

Create an instance: `companyAccessToken := client.CompanyAccessToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessToken` | `string` |  |
| `expiresIn` | `int` |  |
| `tokenType` | `string` |  |

#### Example: Load

```go
companyAccessToken, err := client.CompanyAccessToken(nil).Load(map[string]any{"id": "company_access_token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(companyAccessToken) // the loaded record
```


### Connection

Create an instance: `connection := client.Connection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectionInfo` | `map[string]any` |  |
| `created` | `string` |  |
| `dataConnectionErrors` | `[]any` |  |
| `id` | `string` |  |
| `integrationId` | `string` |  |
| `integrationKey` | `string` |  |
| `lastSync` | `string` |  |
| `linkUrl` | `string` |  |
| `links` | `map[string]any` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `platformKey` | `string` |  |
| `platformName` | `string` |  |
| `results` | `[]any` |  |
| `sourceId` | `string` |  |
| `sourceType` | `string` |  |
| `status` | `string` |  |
| `totalResults` | `int` |  |

#### Example: Load

```go
connection, err := client.Connection(nil).Load(map[string]any{"id": "connection_id", "company_id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(connection) // the loaded record
```

#### Example: List

```go
connections, err := client.Connection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(connections) // the array of records
```

#### Example: Create

```go
result, err := client.Connection(nil).Create(map[string]any{
    "company_id": "example_company_id",
    "created": "example_created",
    "id": "example_id",
    "integrationId": "example_integrationId",
    "integrationKey": "example_integrationKey",
    "linkUrl": "example_linkUrl",
    "links": map[string]any{},
    "pageNumber": 1,
    "pageSize": 1,
    "platformName": "example_platformName",
    "sourceId": "example_sourceId",
    "sourceType": "example_sourceType",
    "status": "example_status",
    "totalResults": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ConnectionManagementAccessToken

Create an instance: `connectionManagementAccessToken := client.ConnectionManagementAccessToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessToken` | `string` |  |

#### Example: Load

```go
connectionManagementAccessToken, err := client.ConnectionManagementAccessToken(nil).Load(map[string]any{"company_id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(connectionManagementAccessToken) // the loaded record
```


### ConnectionManagementAllowedOrigin

Create an instance: `connectionManagementAllowedOrigin := client.ConnectionManagementAllowedOrigin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowedOrigins` | `[]any` |  |

#### Example: List

```go
connectionManagementAllowedOrigins, err := client.ConnectionManagementAllowedOrigin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(connectionManagementAllowedOrigins) // the array of records
```

#### Example: Create

```go
result, err := client.ConnectionManagementAllowedOrigin(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Custom

Create an instance: `custom := client.Custom(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `string` |  |
| `keyBy` | `[]any` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `requiredData` | `map[string]any` |  |
| `results` | `[]any` |  |
| `sourceModifiedDate` | `[]any` |  |
| `totalResults` | `int` |  |

#### Example: Load

```go
custom, err := client.Custom(nil).Load(map[string]any{"id": "custom_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(custom) // the loaded record
```


### DataStatus

Create an instance: `dataStatus := client.DataStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountTransactions` | `map[string]any` |  |
| `balanceSheet` | `map[string]any` |  |
| `bankAccounts` | `map[string]any` |  |
| `bankTransactions` | `map[string]any` |  |
| `bankingaccountBalances` | `map[string]any` |  |
| `bankingaccounts` | `map[string]any` |  |
| `bankingtransactionCategories` | `map[string]any` |  |
| `bankingtransactions` | `map[string]any` |  |
| `billCreditNotes` | `map[string]any` |  |
| `billPayments` | `map[string]any` |  |
| `bills` | `map[string]any` |  |
| `cashFlowStatement` | `map[string]any` |  |
| `chartOfAccounts` | `map[string]any` |  |
| `commercecompanyInfo` | `map[string]any` |  |
| `commercecustomers` | `map[string]any` |  |
| `commercedisputes` | `map[string]any` |  |
| `commercelocations` | `map[string]any` |  |
| `commerceorders` | `map[string]any` |  |
| `commercepaymentMethods` | `map[string]any` |  |
| `commercepayments` | `map[string]any` |  |
| `commerceproductCategories` | `map[string]any` |  |
| `commerceproducts` | `map[string]any` |  |
| `commercetaxComponents` | `map[string]any` |  |
| `commercetransactions` | `map[string]any` |  |
| `company` | `map[string]any` |  |
| `creditNotes` | `map[string]any` |  |
| `customers` | `map[string]any` |  |
| `directCosts` | `map[string]any` |  |
| `directIncomes` | `map[string]any` |  |
| `invoices` | `map[string]any` |  |
| `itemReceipts` | `map[string]any` |  |
| `items` | `map[string]any` |  |
| `journalEntries` | `map[string]any` |  |
| `journals` | `map[string]any` |  |
| `paymentMethods` | `map[string]any` |  |
| `payments` | `map[string]any` |  |
| `profitAndLoss` | `map[string]any` |  |
| `purchaseOrders` | `map[string]any` |  |
| `salesOrders` | `map[string]any` |  |
| `suppliers` | `map[string]any` |  |
| `taxRates` | `map[string]any` |  |
| `trackingCategories` | `map[string]any` |  |
| `transfers` | `map[string]any` |  |

#### Example: Load

```go
dataStatus, err := client.DataStatus(nil).Load(map[string]any{"company_id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dataStatus) // the loaded record
```


### DataType

Create an instance: `dataType := client.DataType(nil)`


### History

Create an instance: `history := client.History(nil)`


### Integration

Create an instance: `integration := client.Integration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataProvidedBy` | `string` |  |
| `datatypeFeatures` | `[]any` |  |
| `enabled` | `bool` |  |
| `integrationId` | `string` |  |
| `isBeta` | `bool` |  |
| `isOfflineConnector` | `bool` |  |
| `key` | `string` |  |
| `links` | `map[string]any` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `results` | `[]any` |  |
| `sourceId` | `string` |  |
| `sourceType` | `string` |  |
| `totalResults` | `int` |  |

#### Example: Load

```go
integration, err := client.Integration(nil).Load(map[string]any{"id": "integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(integration) // the loaded record
```

#### Example: List

```go
integrations, err := client.Integration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(integrations) // the array of records
```


### Option

Create an instance: `option := client.Option(nil)`


### Product

Create an instance: `product := client.Product(nil)`


### Profile

Create an instance: `profile := client.Profile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` |  |
| `confirmCompanyName` | `bool` |  |
| `iconUrl` | `string` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `redirectUrl` | `string` |  |
| `whiteListUrls` | `[]any` |  |

#### Example: List

```go
profiles, err := client.Profile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(profiles) // the array of records
```


### PullOperation

Create an instance: `pullOperation := client.PullOperation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyId` | `string` |  |
| `completed` | `string` |  |
| `connectionId` | `string` |  |
| `dataType` | `string` |  |
| `errorMessage` | `string` |  |
| `id` | `string` |  |
| `isCompleted` | `bool` |  |
| `isErrored` | `bool` |  |
| `links` | `map[string]any` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `progress` | `int` |  |
| `requested` | `string` |  |
| `results` | `[]any` |  |
| `status` | `string` |  |
| `statusDescription` | `string` |  |
| `totalResults` | `int` |  |

#### Example: Load

```go
pullOperation, err := client.PullOperation(nil).Load(map[string]any{"company_id": "company_id", "dataset_id": "dataset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(pullOperation) // the loaded record
```

#### Example: List

```go
pullOperations, err := client.PullOperation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pullOperations) // the array of records
```

#### Example: Create

```go
result, err := client.PullOperation(nil).Create(map[string]any{
    "company_id": "example_company_id",
    "companyId": "example_companyId",
    "connectionId": "example_connectionId",
    "dataType": "example_dataType",
    "id": "example_id",
    "isCompleted": true,
    "isErrored": true,
    "links": map[string]any{},
    "pageNumber": 1,
    "pageSize": 1,
    "progress": 1,
    "requested": "example_requested",
    "status": "example_status",
    "totalResults": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Push

Create an instance: `push := client.Push(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `changes` | `[]any` |  |
| `companyId` | `string` |  |
| `completedOnUtc` | `string` |  |
| `dataConnectionKey` | `string` |  |
| `dataType` | `string` |  |
| `errorMessage` | `string` |  |
| `links` | `map[string]any` |  |
| `pageNumber` | `int` |  |
| `pageSize` | `int` |  |
| `pushOperationKey` | `string` |  |
| `requestedOnUtc` | `string` |  |
| `results` | `[]any` |  |
| `status` | `string` |  |
| `statusCode` | `int` |  |
| `timeoutInMinutes` | `int` |  |
| `timeoutInSeconds` | `int` |  |
| `totalResults` | `int` |  |
| `validation` | `map[string]any` |  |

#### Example: Load

```go
push, err := client.Push(nil).Load(map[string]any{"id": "push_id", "company_id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(push) // the loaded record
```

#### Example: List

```go
pushs, err := client.Push(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pushs) // the array of records
```


### PushOption

Create an instance: `pushOption := client.PushOption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `displayName` | `string` |  |
| `options` | `[]any` |  |
| `properties` | `map[string]any` |  |
| `required` | `bool` |  |
| `type` | `string` |  |
| `validation` | `map[string]any` |  |

#### Example: Load

```go
pushOption, err := client.PushOption(nil).Load(map[string]any{"id": "push_option_id", "company_id": "company_id", "connection_id": "connection_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(pushOption) // the loaded record
```


### Queue

Create an instance: `queue := client.Queue(nil)`


### RefreshData

Create an instance: `refreshData := client.RefreshData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.RefreshData(nil).Create(map[string]any{
    "company_id": "example_company_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Setting

Create an instance: `setting := client.Setting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` |  |
| `createdDate` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |

#### Example: List

```go
settings, err := client.Setting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(settings) // the array of records
```

#### Example: Create

```go
result, err := client.Setting(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SupplementalData

Create an instance: `supplementalData := client.SupplementalData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `supplementalDataConfig` | `map[string]any` |  |


### SupplementalDataConfig

Create an instance: `supplementalDataConfig := client.SupplementalDataConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `string` |  |
| `pullData` | `map[string]any` |  |
| `pushData` | `map[string]any` |  |

#### Example: Load

```go
supplementalDataConfig, err := client.SupplementalDataConfig(nil).Load(map[string]any{"data_type_id": "data_type_id", "platform_key": "platform_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(supplementalDataConfig) // the loaded record
```


### Sync

Create an instance: `sync := client.Sync(nil)`


### SyncSetting

Create an instance: `syncSetting := client.SyncSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataType` | `string` |  |
| `fetchOnFirstLink` | `bool` |  |
| `isLocked` | `bool` |  |
| `monthsToSync` | `int` |  |
| `syncFromUtc` | `string` |  |
| `syncFromWindow` | `int` |  |
| `syncOrder` | `int` |  |
| `syncSchedule` | `int` |  |

#### Example: List

```go
syncSettings, err := client.SyncSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(syncSettings) // the array of records
```


### Validation

Create an instance: `validation := client.Validation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `warnings` | `[]any` |  |

#### Example: List

```go
validations, err := client.Validation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(validations) // the array of records
```


### Webhook

Create an instance: `webhook := client.Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyTags` | `[]any` |  |
| `disabled` | `bool` |  |
| `eventTypes` | `[]any` |  |
| `id` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
webhooks, err := client.Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooks) // the array of records
```

#### Example: Create

```go
result, err := client.Webhook(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WebhookZapierKey

Create an instance: `webhookZapierKey := client.WebhookZapierKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |

#### Example: Create

```go
result, err := client.WebhookZapierKey(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/codatplatform-sdk/go/
├── codatplatform.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/codatplatform-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
pushoption := client.PushOption(nil)
pushoption.Load(map[string]any{"company_id": "example", "connection_id": "example", "id": "example_id"}, nil)

// pushoption.Data() now returns the pushoption data from the last load
// pushoption.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
