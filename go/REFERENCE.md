# Codatplatform Golang SDK Reference

Complete API reference for the Codatplatform Golang SDK.


## CodatplatformSDK

### Constructor

```go
func NewCodatplatformSDK(options map[string]any) *CodatplatformSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CodatplatformSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CodatplatformSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AccessToken(data map[string]any) CodatplatformEntity`

Create a new `AccessToken` entity instance. Pass `nil` for no initial data.

#### `All(data map[string]any) CodatplatformEntity`

Create a new `All` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data map[string]any) CodatplatformEntity`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `Branding(data map[string]any) CodatplatformEntity`

Create a new `Branding` entity instance. Pass `nil` for no initial data.

#### `Company(data map[string]any) CodatplatformEntity`

Create a new `Company` entity instance. Pass `nil` for no initial data.

#### `CompanyAccessToken(data map[string]any) CodatplatformEntity`

Create a new `CompanyAccessToken` entity instance. Pass `nil` for no initial data.

#### `Connection(data map[string]any) CodatplatformEntity`

Create a new `Connection` entity instance. Pass `nil` for no initial data.

#### `ConnectionManagementAccessToken(data map[string]any) CodatplatformEntity`

Create a new `ConnectionManagementAccessToken` entity instance. Pass `nil` for no initial data.

#### `ConnectionManagementAllowedOrigin(data map[string]any) CodatplatformEntity`

Create a new `ConnectionManagementAllowedOrigin` entity instance. Pass `nil` for no initial data.

#### `Custom(data map[string]any) CodatplatformEntity`

Create a new `Custom` entity instance. Pass `nil` for no initial data.

#### `DataStatus(data map[string]any) CodatplatformEntity`

Create a new `DataStatus` entity instance. Pass `nil` for no initial data.

#### `DataType(data map[string]any) CodatplatformEntity`

Create a new `DataType` entity instance. Pass `nil` for no initial data.

#### `History(data map[string]any) CodatplatformEntity`

Create a new `History` entity instance. Pass `nil` for no initial data.

#### `Integration(data map[string]any) CodatplatformEntity`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `Option(data map[string]any) CodatplatformEntity`

Create a new `Option` entity instance. Pass `nil` for no initial data.

#### `Product(data map[string]any) CodatplatformEntity`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `Profile(data map[string]any) CodatplatformEntity`

Create a new `Profile` entity instance. Pass `nil` for no initial data.

#### `PullOperation(data map[string]any) CodatplatformEntity`

Create a new `PullOperation` entity instance. Pass `nil` for no initial data.

#### `Push(data map[string]any) CodatplatformEntity`

Create a new `Push` entity instance. Pass `nil` for no initial data.

#### `PushOption(data map[string]any) CodatplatformEntity`

Create a new `PushOption` entity instance. Pass `nil` for no initial data.

#### `Queue(data map[string]any) CodatplatformEntity`

Create a new `Queue` entity instance. Pass `nil` for no initial data.

#### `RefreshData(data map[string]any) CodatplatformEntity`

Create a new `RefreshData` entity instance. Pass `nil` for no initial data.

#### `Setting(data map[string]any) CodatplatformEntity`

Create a new `Setting` entity instance. Pass `nil` for no initial data.

#### `SupplementalData(data map[string]any) CodatplatformEntity`

Create a new `SupplementalData` entity instance. Pass `nil` for no initial data.

#### `SupplementalDataConfig(data map[string]any) CodatplatformEntity`

Create a new `SupplementalDataConfig` entity instance. Pass `nil` for no initial data.

#### `Sync(data map[string]any) CodatplatformEntity`

Create a new `Sync` entity instance. Pass `nil` for no initial data.

#### `SyncSetting(data map[string]any) CodatplatformEntity`

Create a new `SyncSetting` entity instance. Pass `nil` for no initial data.

#### `Validation(data map[string]any) CodatplatformEntity`

Create a new `Validation` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) CodatplatformEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `WebhookZapierKey(data map[string]any) CodatplatformEntity`

Create a new `WebhookZapierKey` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AccessTokenEntity

```go
accessToken := client.AccessToken(nil)
fmt.Println(accessToken.GetName()) // "access_token"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccessTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AllEntity

```go
all := client.All(nil)
fmt.Println(all.GetName()) // "all"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AllEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiKeyEntity

```go
apiKey := client.ApiKey(nil)
fmt.Println(apiKey.GetName()) // "api_key"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BrandingEntity

```go
branding := client.Branding(nil)
fmt.Println(branding.GetName()) // "branding"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `button` | `map[string]any` | No |  |
| `logo` | `map[string]any` | No |  |
| `sourceId` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Branding(nil).Load(map[string]any{"platform_key": "platform_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BrandingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CompanyEntity

```go
company := client.Company(nil)
fmt.Println(company.GetName()) // "company"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No |  |
| `createdByUserName` | `string` | No |  |
| `dataConnections` | `[]any` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `lastSync` | `string` | No |  |
| `links` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `products` | `[]any` | No |  |
| `redirect` | `string` | Yes |  |
| `referenceParentCompany` | `map[string]any` | No |  |
| `referenceSubsidiaryCompanies` | `[]any` | No |  |
| `results` | `[]any` | No |  |
| `tags` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Company(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Company(nil).Load(map[string]any{"id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Company(nil).Update(map[string]any{
    "id": "company_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Company(nil).Remove(map[string]any{"id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompanyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CompanyAccessTokenEntity

```go
companyAccessToken := client.CompanyAccessToken(nil)
fmt.Println(companyAccessToken.GetName()) // "company_access_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `string` | Yes |  |
| `expiresIn` | `int` | Yes |  |
| `tokenType` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CompanyAccessToken(nil).Load(map[string]any{"id": "company_access_token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompanyAccessTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectionEntity

```go
connection := client.Connection(nil)
fmt.Println(connection.GetName()) // "connection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectionInfo` | `map[string]any` | No |  |
| `created` | `string` | Yes |  |
| `dataConnectionErrors` | `[]any` | No |  |
| `id` | `string` | Yes |  |
| `integrationId` | `string` | Yes |  |
| `integrationKey` | `string` | Yes |  |
| `lastSync` | `string` | No |  |
| `linkUrl` | `string` | Yes |  |
| `links` | `map[string]any` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `platformKey` | `string` | No |  |
| `platformName` | `string` | Yes |  |
| `results` | `[]any` | No |  |
| `sourceId` | `string` | Yes |  |
| `sourceType` | `string` | Yes |  |
| `status` | `string` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Connection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Connection(nil).Load(map[string]any{"id": "connection_id", "company_id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Connection(nil).Update(map[string]any{
    "id": "connection_id",
    "company_id": "company_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Connection(nil).Remove(map[string]any{"id": "connection_id", "company_id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectionManagementAccessTokenEntity

```go
connectionManagementAccessToken := client.ConnectionManagementAccessToken(nil)
fmt.Println(connectionManagementAccessToken.GetName()) // "connection_management_access_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessToken` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConnectionManagementAccessToken(nil).Load(map[string]any{"company_id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectionManagementAccessTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectionManagementAllowedOriginEntity

```go
connectionManagementAllowedOrigin := client.ConnectionManagementAllowedOrigin(nil)
fmt.Println(connectionManagementAllowedOrigin.GetName()) // "connection_management_allowed_origin"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedOrigins` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConnectionManagementAllowedOrigin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ConnectionManagementAllowedOrigin(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectionManagementAllowedOriginEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomEntity

```go
custom := client.Custom(nil)
fmt.Println(custom.GetName()) // "custom"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `string` | No |  |
| `keyBy` | `[]any` | No |  |
| `pageNumber` | `int` | No |  |
| `pageSize` | `int` | No |  |
| `requiredData` | `map[string]any` | No |  |
| `results` | `[]any` | No |  |
| `sourceModifiedDate` | `[]any` | No |  |
| `totalResults` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Custom(nil).Load(map[string]any{"id": "custom_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Custom(nil).Update(map[string]any{
    "id": "custom_id",
    "platform_key": "platform_key",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataStatusEntity

```go
dataStatus := client.DataStatus(nil)
fmt.Println(dataStatus.GetName()) // "data_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountTransactions` | `map[string]any` | Yes |  |
| `balanceSheet` | `map[string]any` | Yes |  |
| `bankAccounts` | `map[string]any` | Yes |  |
| `bankTransactions` | `map[string]any` | Yes |  |
| `bankingaccountBalances` | `map[string]any` | Yes |  |
| `bankingaccounts` | `map[string]any` | Yes |  |
| `bankingtransactionCategories` | `map[string]any` | Yes |  |
| `bankingtransactions` | `map[string]any` | Yes |  |
| `billCreditNotes` | `map[string]any` | Yes |  |
| `billPayments` | `map[string]any` | Yes |  |
| `bills` | `map[string]any` | Yes |  |
| `cashFlowStatement` | `map[string]any` | Yes |  |
| `chartOfAccounts` | `map[string]any` | Yes |  |
| `commercecompanyInfo` | `map[string]any` | Yes |  |
| `commercecustomers` | `map[string]any` | Yes |  |
| `commercedisputes` | `map[string]any` | Yes |  |
| `commercelocations` | `map[string]any` | Yes |  |
| `commerceorders` | `map[string]any` | Yes |  |
| `commercepaymentMethods` | `map[string]any` | Yes |  |
| `commercepayments` | `map[string]any` | Yes |  |
| `commerceproductCategories` | `map[string]any` | Yes |  |
| `commerceproducts` | `map[string]any` | Yes |  |
| `commercetaxComponents` | `map[string]any` | Yes |  |
| `commercetransactions` | `map[string]any` | Yes |  |
| `company` | `map[string]any` | Yes |  |
| `creditNotes` | `map[string]any` | Yes |  |
| `customers` | `map[string]any` | Yes |  |
| `directCosts` | `map[string]any` | Yes |  |
| `directIncomes` | `map[string]any` | Yes |  |
| `invoices` | `map[string]any` | Yes |  |
| `itemReceipts` | `map[string]any` | Yes |  |
| `items` | `map[string]any` | Yes |  |
| `journalEntries` | `map[string]any` | Yes |  |
| `journals` | `map[string]any` | Yes |  |
| `paymentMethods` | `map[string]any` | Yes |  |
| `payments` | `map[string]any` | Yes |  |
| `profitAndLoss` | `map[string]any` | Yes |  |
| `purchaseOrders` | `map[string]any` | Yes |  |
| `salesOrders` | `map[string]any` | Yes |  |
| `suppliers` | `map[string]any` | Yes |  |
| `taxRates` | `map[string]any` | Yes |  |
| `trackingCategories` | `map[string]any` | Yes |  |
| `transfers` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DataStatus(nil).Load(map[string]any{"company_id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataTypeEntity

```go
dataType := client.DataType(nil)
fmt.Println(dataType.GetName()) // "data_type"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HistoryEntity

```go
history := client.History(nil)
fmt.Println(history.GetName()) // "history"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IntegrationEntity

```go
integration := client.Integration(nil)
fmt.Println(integration.GetName()) // "integration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataProvidedBy` | `string` | No |  |
| `datatypeFeatures` | `[]any` | No |  |
| `enabled` | `bool` | Yes |  |
| `integrationId` | `string` | No |  |
| `isBeta` | `bool` | No |  |
| `isOfflineConnector` | `bool` | No |  |
| `key` | `string` | Yes |  |
| `links` | `map[string]any` | Yes |  |
| `logoUrl` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `results` | `[]any` | No |  |
| `sourceId` | `string` | No |  |
| `sourceType` | `string` | No |  |
| `totalResults` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Integration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Integration(nil).Load(map[string]any{"id": "integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OptionEntity

```go
option := client.Option(nil)
fmt.Println(option.GetName()) // "option"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProductEntity

```go
product := client.Product(nil)
fmt.Println(product.GetName()) // "product"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProfileEntity

```go
profile := client.Profile(nil)
fmt.Println(profile.GetName()) // "profile"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No |  |
| `confirmCompanyName` | `bool` | No |  |
| `iconUrl` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `whiteListUrls` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Profile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Profile(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProfileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PullOperationEntity

```go
pullOperation := client.PullOperation(nil)
fmt.Println(pullOperation.GetName()) // "pull_operation"
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
| `isCompleted` | `bool` | Yes |  |
| `isErrored` | `bool` | Yes |  |
| `links` | `map[string]any` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `progress` | `int` | Yes |  |
| `requested` | `string` | Yes |  |
| `results` | `[]any` | No |  |
| `status` | `string` | Yes |  |
| `statusDescription` | `string` | No |  |
| `totalResults` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PullOperation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PullOperation(nil).Load(map[string]any{"company_id": "company_id", "dataset_id": "dataset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PullOperationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PushEntity

```go
push := client.Push(nil)
fmt.Println(push.GetName()) // "push"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changes` | `[]any` | No |  |
| `companyId` | `string` | Yes |  |
| `completedOnUtc` | `string` | No |  |
| `dataConnectionKey` | `string` | Yes |  |
| `dataType` | `string` | No |  |
| `errorMessage` | `string` | No |  |
| `links` | `map[string]any` | Yes |  |
| `pageNumber` | `int` | Yes |  |
| `pageSize` | `int` | Yes |  |
| `pushOperationKey` | `string` | Yes |  |
| `requestedOnUtc` | `string` | Yes |  |
| `results` | `[]any` | No |  |
| `status` | `string` | Yes |  |
| `statusCode` | `int` | Yes |  |
| `timeoutInMinutes` | `int` | No |  |
| `timeoutInSeconds` | `int` | No |  |
| `totalResults` | `int` | Yes |  |
| `validation` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Push(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Push(nil).Load(map[string]any{"id": "push_id", "company_id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PushEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PushOptionEntity

```go
pushOption := client.PushOption(nil)
fmt.Println(pushOption.GetName()) // "push_option"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `displayName` | `string` | Yes |  |
| `options` | `[]any` | No |  |
| `properties` | `map[string]any` | No |  |
| `required` | `bool` | Yes |  |
| `type` | `string` | Yes |  |
| `validation` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PushOption(nil).Load(map[string]any{"id": "push_option_id", "company_id": "company_id", "connection_id": "connection_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PushOptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## QueueEntity

```go
queue := client.Queue(nil)
fmt.Println(queue.GetName()) // "queue"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `QueueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RefreshDataEntity

```go
refreshData := client.RefreshData(nil)
fmt.Println(refreshData.GetName()) // "refresh_data"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RefreshData(nil).Create(map[string]any{
    "company_id": "example_company_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RefreshDataEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SettingEntity

```go
setting := client.Setting(nil)
fmt.Println(setting.GetName()) // "setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No |  |
| `createdDate` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Setting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Setting(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Setting(nil).Remove(map[string]any{"api_key_id": "api_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SupplementalDataEntity

```go
supplementalData := client.SupplementalData(nil)
fmt.Println(supplementalData.GetName()) // "supplemental_data"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `supplementalDataConfig` | `map[string]any` | No |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SupplementalData(nil).Update(map[string]any{
    "data_type_id": "data_type_id",
    "platform_key": "platform_key",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SupplementalDataEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SupplementalDataConfigEntity

```go
supplementalDataConfig := client.SupplementalDataConfig(nil)
fmt.Println(supplementalDataConfig.GetName()) // "supplemental_data_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `string` | No |  |
| `pullData` | `map[string]any` | No |  |
| `pushData` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SupplementalDataConfig(nil).Load(map[string]any{"data_type_id": "data_type_id", "platform_key": "platform_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SupplementalDataConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SyncEntity

```go
sync := client.Sync(nil)
fmt.Println(sync.GetName()) // "sync"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SyncEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SyncSettingEntity

```go
syncSetting := client.SyncSetting(nil)
fmt.Println(syncSetting.GetName()) // "sync_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataType` | `string` | Yes |  |
| `fetchOnFirstLink` | `bool` | Yes |  |
| `isLocked` | `bool` | No |  |
| `monthsToSync` | `int` | No |  |
| `syncFromUtc` | `string` | No |  |
| `syncFromWindow` | `int` | No |  |
| `syncOrder` | `int` | Yes |  |
| `syncSchedule` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SyncSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SyncSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ValidationEntity

```go
validation := client.Validation(nil)
fmt.Println(validation.GetName()) // "validation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | No |  |
| `warnings` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Validation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ValidationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyTags` | `[]any` | No |  |
| `disabled` | `bool` | No |  |
| `eventTypes` | `[]any` | No |  |
| `id` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Webhook(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Webhook(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookZapierKeyEntity

```go
webhookZapierKey := client.WebhookZapierKey(nil)
fmt.Println(webhookZapierKey.GetName()) // "webhook_zapier_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.WebhookZapierKey(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookZapierKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewCodatplatformSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

