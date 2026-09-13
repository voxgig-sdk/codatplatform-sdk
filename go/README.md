# Codatplatform Golang SDK



The Golang SDK for the Codatplatform API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AccessToken(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `js`, `lua`, `php`, `py`, `rb`, `ts` — see
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
| `"button"` | Button branding references. |
| `"logo"` | Logo branding references. |
| `"sourceId"` | A source-specific ID used to distinguish between different sources originating from the same data connection. |

Operations: Load.

API path: `/integrations/{platformKey}/branding`

#### Company

| Field | Description |
| --- | --- |
| `"created"` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `"createdByUserName"` | Name of user that created the company in Codat. |
| `"dataConnections"` |  |
| `"description"` | Additional information about the company. |
| `"id"` | Unique identifier for your SMB in Codat. |
| `"lastSync"` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `"links"` |  |
| `"name"` | The name of the company |
| `"pageNumber"` | Current page number. |
| `"pageSize"` | Number of items to return in results array. |
| `"products"` | An array of products that are currently enabled for the company. |
| `"redirect"` | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `"referenceParentCompany"` | The parent entity or controlling organization of this company. |
| `"referenceSubsidiaryCompanies"` | A list of subsidiary companies owned or controlled by this entity. |
| `"results"` |  |
| `"tags"` | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `"totalResults"` | Total number of items. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/companies/{companyId}/products/{productIdentifier}/refresh`

#### CompanyAccessToken

| Field | Description |
| --- | --- |
| `"accessToken"` | The access token for the company. |
| `"expiresIn"` | The number of seconds until the access token expires. |
| `"id"` |  |
| `"tokenType"` | The type of token. |

Operations: Load.

API path: `/companies/{companyId}/accessToken`

#### Connection

| Field | Description |
| --- | --- |
| `"connectionInfo"` |  |
| `"created"` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `"dataConnectionErrors"` |  |
| `"id"` | Unique identifier for a company's data connection. |
| `"integrationId"` | A Codat ID representing the integration. |
| `"integrationKey"` | A unique four-character ID that identifies the platform of the company's data connection. |
| `"lastSync"` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `"linkUrl"` | The link URL your customers can use to authorize access to their business application. |
| `"links"` |  |
| `"pageNumber"` | Current page number. |
| `"pageSize"` | Number of items to return in results array. |
| `"platformKey"` | A unique 4-letter key to represent a platform in each integration. |
| `"platformName"` | Name of integration connected to company. |
| `"results"` |  |
| `"sourceId"` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `"sourceType"` | The type of platform of the connection. |
| `"status"` | The current authorization status of the data connection. |
| `"totalResults"` | Total number of items. |

Operations: Create, List, Load, Remove, Update.

API path: `/companies/{companyId}/connections`

#### ConnectionManagementAccessToken

| Field | Description |
| --- | --- |
| `"accessToken"` | Access token that allows SMBs to manage connections that have access to their data. |

Operations: Load.

API path: `/companies/{companyId}/connectionManagement/accessToken`

#### ConnectionManagementAllowedOrigin

| Field | Description |
| --- | --- |
| `"allowedOrigins"` | An array of allowed origins (i.e. |

Operations: Create, List.

API path: `/connectionManagement/corsSettings`

#### Custom

| Field | Description |
| --- | --- |
| `"dataSource"` | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `"id"` |  |
| `"keyBy"` | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `"pageNumber"` | Current page number. |
| `"pageSize"` | Number of items to return in results array. |
| `"requiredData"` | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `"results"` |  |
| `"sourceModifiedDate"` | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `"totalResults"` | Total number of items. |

Operations: Load, Update.

API path: `/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}`

#### DataStatus

| Field | Description |
| --- | --- |
| `"accountTransactions"` | Describes the state of data in the Codat cache for a company and data type |
| `"balanceSheet"` | Describes the state of data in the Codat cache for a company and data type |
| `"bankAccounts"` | Describes the state of data in the Codat cache for a company and data type |
| `"bankTransactions"` | Describes the state of data in the Codat cache for a company and data type |
| `"bankingaccountBalances"` | Describes the state of data in the Codat cache for a company and data type |
| `"bankingaccounts"` | Describes the state of data in the Codat cache for a company and data type |
| `"bankingtransactionCategories"` | Describes the state of data in the Codat cache for a company and data type |
| `"bankingtransactions"` | Describes the state of data in the Codat cache for a company and data type |
| `"billCreditNotes"` | Describes the state of data in the Codat cache for a company and data type |
| `"billPayments"` | Describes the state of data in the Codat cache for a company and data type |
| `"bills"` | Describes the state of data in the Codat cache for a company and data type |
| `"cashFlowStatement"` | Describes the state of data in the Codat cache for a company and data type |
| `"chartOfAccounts"` | Describes the state of data in the Codat cache for a company and data type |
| `"commercecompanyInfo"` | Describes the state of data in the Codat cache for a company and data type |
| `"commercecustomers"` | Describes the state of data in the Codat cache for a company and data type |
| `"commercedisputes"` | Describes the state of data in the Codat cache for a company and data type |
| `"commercelocations"` | Describes the state of data in the Codat cache for a company and data type |
| `"commerceorders"` | Describes the state of data in the Codat cache for a company and data type |
| `"commercepaymentMethods"` | Describes the state of data in the Codat cache for a company and data type |
| `"commercepayments"` | Describes the state of data in the Codat cache for a company and data type |
| `"commerceproductCategories"` | Describes the state of data in the Codat cache for a company and data type |
| `"commerceproducts"` | Describes the state of data in the Codat cache for a company and data type |
| `"commercetaxComponents"` | Describes the state of data in the Codat cache for a company and data type |
| `"commercetransactions"` | Describes the state of data in the Codat cache for a company and data type |
| `"company"` | Describes the state of data in the Codat cache for a company and data type |
| `"creditNotes"` | Describes the state of data in the Codat cache for a company and data type |
| `"customers"` | Describes the state of data in the Codat cache for a company and data type |
| `"directCosts"` | Describes the state of data in the Codat cache for a company and data type |
| `"directIncomes"` | Describes the state of data in the Codat cache for a company and data type |
| `"invoices"` | Describes the state of data in the Codat cache for a company and data type |
| `"itemReceipts"` | Describes the state of data in the Codat cache for a company and data type |
| `"items"` | Describes the state of data in the Codat cache for a company and data type |
| `"journalEntries"` | Describes the state of data in the Codat cache for a company and data type |
| `"journals"` | Describes the state of data in the Codat cache for a company and data type |
| `"paymentMethods"` | Describes the state of data in the Codat cache for a company and data type |
| `"payments"` | Describes the state of data in the Codat cache for a company and data type |
| `"profitAndLoss"` | Describes the state of data in the Codat cache for a company and data type |
| `"purchaseOrders"` | Describes the state of data in the Codat cache for a company and data type |
| `"salesOrders"` | Describes the state of data in the Codat cache for a company and data type |
| `"suppliers"` | Describes the state of data in the Codat cache for a company and data type |
| `"taxRates"` | Describes the state of data in the Codat cache for a company and data type |
| `"trackingCategories"` | Describes the state of data in the Codat cache for a company and data type |
| `"transfers"` | Describes the state of data in the Codat cache for a company and data type |

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
| `"dataProvidedBy"` | The name of the data provider. |
| `"datatypeFeatures"` |  |
| `"enabled"` | Whether this integration is enabled for your customers to use. |
| `"id"` |  |
| `"integrationId"` | A Codat ID representing the integration. |
| `"isBeta"` | `True` if the integration is currently in beta release. |
| `"isOfflineConnector"` | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `"key"` | A unique 4-letter key to represent a platform in each integration. |
| `"links"` |  |
| `"logoUrl"` | Static url for integration's logo. |
| `"name"` | Name of integration. |
| `"pageNumber"` | Current page number. |
| `"pageSize"` | Number of items to return in results array. |
| `"results"` |  |
| `"sourceId"` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `"sourceType"` | The type of platform of the connection. |
| `"totalResults"` | Total number of items. |

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
| `"apiKey"` | The API key for this Codat instance. |
| `"confirmCompanyName"` | `True` if the company name has been confirmed. |
| `"iconUrl"` | Static url to your organization's icon. |
| `"logoUrl"` | Static url to your organization's logo. |
| `"name"` | The name given to the instance. |
| `"redirectUrl"` | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `"whiteListUrls"` | A list of urls that are allowed to communicate with Codat. |

Operations: List, Update.

API path: `/profile`

#### PullOperation

| Field | Description |
| --- | --- |
| `"companyId"` | Unique identifier of the company associated to this pull operation. |
| `"completed"` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `"connectionId"` | Unique identifier of the connection associated to this pull operation. |
| `"dataType"` | The data type you are requesting in a pull operation. |
| `"errorMessage"` | A message about a transient or persistent error returned by Codat or the source platform. |
| `"id"` | Unique identifier of the pull operation. |
| `"isCompleted"` | `True` if the pull operation is completed successfully. |
| `"isErrored"` | `True` if the pull operation entered an error state. |
| `"links"` |  |
| `"pageNumber"` | Current page number. |
| `"pageSize"` | Number of items to return in results array. |
| `"progress"` | An integer signifying the progress of the pull operation. |
| `"requested"` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `"results"` |  |
| `"status"` | The current status of the dataset. |
| `"statusDescription"` | Additional information about the dataset status. |
| `"totalResults"` | Total number of items. |

Operations: Create, List, Load.

API path: `/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}`

#### Push

| Field | Description |
| --- | --- |
| `"changes"` | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `"companyId"` | Unique identifier for your SMB in Codat. |
| `"completedOnUtc"` | The datetime when the push was completed, null if Pending. |
| `"dataConnectionKey"` | Unique identifier for a company's data connection. |
| `"dataType"` | The type of data being pushed, eg invoices, customers. |
| `"errorMessage"` | A message about the error. |
| `"id"` |  |
| `"links"` |  |
| `"pageNumber"` | Current page number. |
| `"pageSize"` | Number of items to return in results array. |
| `"pushOperationKey"` | A unique identifier generated by Codat to represent this single push operation. |
| `"requestedOnUtc"` | The datetime when the push was requested. |
| `"results"` |  |
| `"status"` | The current status of the push operation. |
| `"statusCode"` | Push status code. |
| `"timeoutInMinutes"` | Number of minutes the push operation must complete within before it times out. |
| `"timeoutInSeconds"` | Number of seconds the push operation must complete within before it times out. |
| `"totalResults"` | Total number of items. |
| `"validation"` | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

Operations: List, Load.

API path: `/companies/{companyId}/push`

#### PushOption

| Field | Description |
| --- | --- |
| `"description"` | A description of the property. |
| `"displayName"` | The property's display name. |
| `"id"` |  |
| `"options"` |  |
| `"properties"` |  |
| `"required"` | The property is required if `True`. |
| `"type"` | The option type. |
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
| `"apiKey"` | The API key value used to make authenticated http requests. |
| `"createdDate"` | The date the entity was created. |
| `"id"` | Unique identifier for the API key. |
| `"name"` | A meaningful name assigned to the API key. |

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
| `"dataSource"` | The underlying endpoint of the source system which the configuration is targeting. |
| `"pullData"` | The additional properties that are required when pulling records. |
| `"pushData"` | The additional properties that are required to create and/or update records. |

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
| `"dataType"` | Available data types |
| `"fetchOnFirstLink"` | Whether this data type should be queued after a company has authorized a connection. |
| `"isLocked"` | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `"monthsToSync"` | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `"syncFromUtc"` | Date from which data should be fetched. |
| `"syncFromWindow"` | Number of months of data to be fetched. |
| `"syncOrder"` | The sync in which data types are queued for a sync. |
| `"syncSchedule"` | Number of hours after which this data type should be refreshed. |

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
| `"companyTags"` | Company tags provide an additional way to filter messages, independent of event types. |
| `"disabled"` | Flag that enables or disables the endpoint from receiving events. |
| `"eventTypes"` | An array of event types the webhook consumer subscribes to. |
| `"id"` | Unique identifier for the webhook consumer. |
| `"url"` | The URL that will consume webhook events dispatched by Codat. |

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
| `button` | `map[string]any` | Button branding references. |
| `logo` | `map[string]any` | Logo branding references. |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |

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
| `created` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `string` | Name of user that created the company in Codat. |
| `dataConnections` | `[]any` |  |
| `description` | `string` | Additional information about the company. |
| `id` | `string` | Unique identifier for your SMB in Codat. |
| `lastSync` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `map[string]any` |  |
| `name` | `string` | The name of the company |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `products` | `[]any` | An array of products that are currently enabled for the company. |
| `redirect` | `string` | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `map[string]any` | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `[]any` | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `[]any` |  |
| `tags` | `map[string]any` | A collection of user-defined key-value pairs that store custom metadata against the company. |
| `totalResults` | `int` | Total number of items. |

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
    "id": "example_id",
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
| `accessToken` | `string` | The access token for the company. |
| `expiresIn` | `int` | The number of seconds until the access token expires. |
| `id` | `string` |  |
| `tokenType` | `string` | The type of token. |

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
| `created` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `[]any` |  |
| `id` | `string` | Unique identifier for a company's data connection. |
| `integrationId` | `string` | A Codat ID representing the integration. |
| `integrationKey` | `string` | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `string` | The link URL your customers can use to authorize access to their business application. |
| `links` | `map[string]any` |  |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `platformKey` | `string` | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `string` | Name of integration connected to company. |
| `results` | `[]any` |  |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | The type of platform of the connection. |
| `status` | `string` | The current authorization status of the data connection. |
| `totalResults` | `int` | Total number of items. |

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
| `accessToken` | `string` | Access token that allows SMBs to manage connections that have access to their data. |

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
| `allowedOrigins` | `[]any` | An array of allowed origins (i.e. |

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
| `dataSource` | `string` | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `id` | `string` |  |
| `keyBy` | `[]any` | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `requiredData` | `map[string]any` | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `[]any` |  |
| `sourceModifiedDate` | `[]any` | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `int` | Total number of items. |

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
| `accountTransactions` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `company` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `items` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `map[string]any` | Describes the state of data in the Codat cache for a company and data type |

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
| `dataProvidedBy` | `string` | The name of the data provider. |
| `datatypeFeatures` | `[]any` |  |
| `enabled` | `bool` | Whether this integration is enabled for your customers to use. |
| `id` | `string` |  |
| `integrationId` | `string` | A Codat ID representing the integration. |
| `isBeta` | `bool` | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `bool` | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `string` | A unique 4-letter key to represent a platform in each integration. |
| `links` | `map[string]any` |  |
| `logoUrl` | `string` | Static url for integration's logo. |
| `name` | `string` | Name of integration. |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `results` | `[]any` |  |
| `sourceId` | `string` | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | The type of platform of the connection. |
| `totalResults` | `int` | Total number of items. |

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
| `apiKey` | `string` | The API key for this Codat instance. |
| `confirmCompanyName` | `bool` | `True` if the company name has been confirmed. |
| `iconUrl` | `string` | Static url to your organization's icon. |
| `logoUrl` | `string` | Static url to your organization's logo. |
| `name` | `string` | The name given to the instance. |
| `redirectUrl` | `string` | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | `[]any` | A list of urls that are allowed to communicate with Codat. |

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
| `companyId` | `string` | Unique identifier of the company associated to this pull operation. |
| `completed` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `connectionId` | `string` | Unique identifier of the connection associated to this pull operation. |
| `dataType` | `string` | The data type you are requesting in a pull operation. |
| `errorMessage` | `string` | A message about a transient or persistent error returned by Codat or the source platform. |
| `id` | `string` | Unique identifier of the pull operation. |
| `isCompleted` | `bool` | `True` if the pull operation is completed successfully. |
| `isErrored` | `bool` | `True` if the pull operation entered an error state. |
| `links` | `map[string]any` |  |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `progress` | `int` | An integer signifying the progress of the pull operation. |
| `requested` | `string` | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `[]any` |  |
| `status` | `string` | The current status of the dataset. |
| `statusDescription` | `string` | Additional information about the dataset status. |
| `totalResults` | `int` | Total number of items. |

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
| `changes` | `[]any` | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `string` | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `string` | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `string` | Unique identifier for a company's data connection. |
| `dataType` | `string` | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `string` | A message about the error. |
| `id` | `string` |  |
| `links` | `map[string]any` |  |
| `pageNumber` | `int` | Current page number. |
| `pageSize` | `int` | Number of items to return in results array. |
| `pushOperationKey` | `string` | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `string` | The datetime when the push was requested. |
| `results` | `[]any` |  |
| `status` | `string` | The current status of the push operation. |
| `statusCode` | `int` | Push status code. |
| `timeoutInMinutes` | `int` | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `int` | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `int` | Total number of items. |
| `validation` | `map[string]any` | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

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
| `description` | `string` | A description of the property. |
| `displayName` | `string` | The property's display name. |
| `id` | `string` |  |
| `options` | `[]any` |  |
| `properties` | `map[string]any` |  |
| `required` | `bool` | The property is required if `True`. |
| `type` | `string` | The option type. |
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
| `apiKey` | `string` | The API key value used to make authenticated http requests. |
| `createdDate` | `string` | The date the entity was created. |
| `id` | `string` | Unique identifier for the API key. |
| `name` | `string` | A meaningful name assigned to the API key. |

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
| `dataSource` | `string` | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `map[string]any` | The additional properties that are required when pulling records. |
| `pushData` | `map[string]any` | The additional properties that are required to create and/or update records. |

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
| `dataType` | `string` | Available data types |
| `fetchOnFirstLink` | `bool` | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `bool` | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | `int` | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | `string` | Date from which data should be fetched. |
| `syncFromWindow` | `int` | Number of months of data to be fetched. |
| `syncOrder` | `int` | The sync in which data types are queued for a sync. |
| `syncSchedule` | `int` | Number of hours after which this data type should be refreshed. |

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
| `companyTags` | `[]any` | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `bool` | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `[]any` | An array of event types the webhook consumer subscribes to. |
| `id` | `string` | Unique identifier for the webhook consumer. |
| `url` | `string` | The URL that will consume webhook events dispatched by Codat. |

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
