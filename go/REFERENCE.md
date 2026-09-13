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
| `button` | `map[string]any` | No | Button branding references. |
| `logo` | `map[string]any` | No | Logo branding references. |
| `sourceId` | `string` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |

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
| `created` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `createdByUserName` | `string` | No | Name of user that created the company in Codat. |
| `dataConnections` | `[]any` | No |  |
| `description` | `string` | No | Additional information about the company. |
| `id` | `string` | Yes | Unique identifier for your SMB in Codat. |
| `lastSync` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `links` | `map[string]any` | Yes |  |
| `name` | `string` | Yes | The name of the company |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `products` | `[]any` | No | An array of products that are currently enabled for the company. |
| `redirect` | `string` | Yes | The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company. |
| `referenceParentCompany` | `map[string]any` | No | The parent entity or controlling organization of this company. |
| `referenceSubsidiaryCompanies` | `[]any` | No | A list of subsidiary companies owned or controlled by this entity. |
| `results` | `[]any` | No |  |
| `tags` | `map[string]any` | No | A collection of user-defined key-value pairs that store custom metadata against the company. |
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
| `accessToken` | `string` | Yes | The access token for the company. |
| `expiresIn` | `int` | Yes | The number of seconds until the access token expires. |
| `id` | `string` | No |  |
| `tokenType` | `string` | Yes | The type of token. |

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
| `created` | `string` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `dataConnectionErrors` | `[]any` | No |  |
| `id` | `string` | Yes | Unique identifier for a company's data connection. |
| `integrationId` | `string` | Yes | A Codat ID representing the integration. |
| `integrationKey` | `string` | Yes | A unique four-character ID that identifies the platform of the company's data connection. |
| `lastSync` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `linkUrl` | `string` | Yes | The link URL your customers can use to authorize access to their business application. |
| `links` | `map[string]any` | Yes |  |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `platformKey` | `string` | No | A unique 4-letter key to represent a platform in each integration. |
| `platformName` | `string` | Yes | Name of integration connected to company. |
| `results` | `[]any` | No |  |
| `sourceId` | `string` | Yes | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | Yes | The type of platform of the connection. |
| `status` | `string` | Yes | The current authorization status of the data connection. |
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
| `accessToken` | `string` | No | Access token that allows SMBs to manage connections that have access to their data. |

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
| `allowedOrigins` | `[]any` | No | An array of allowed origins (i.e. |

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
| `dataSource` | `string` | No | Underlying endpoint of the source platform that will serve as a data source for the custom data type. |
| `id` | `string` | No |  |
| `keyBy` | `[]any` | No | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. |
| `pageNumber` | `int` | No | Current page number. |
| `pageSize` | `int` | No | Number of items to return in results array. |
| `requiredData` | `map[string]any` | No | Properties required to be fetched from the underlying platform for the custom data type that is being configured. |
| `results` | `[]any` | No |  |
| `sourceModifiedDate` | `[]any` | No | Property in the source platform nominated by the client that defines the date when a record was last modified there. |
| `totalResults` | `int` | No | Total number of items. |

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
| `accountTransactions` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `balanceSheet` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankAccounts` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankTransactions` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccountBalances` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingaccounts` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactionCategories` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bankingtransactions` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billCreditNotes` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `billPayments` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `bills` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `cashFlowStatement` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `chartOfAccounts` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecompanyInfo` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercecustomers` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercedisputes` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercelocations` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceorders` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepaymentMethods` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercepayments` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproductCategories` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commerceproducts` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetaxComponents` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `commercetransactions` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `company` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `creditNotes` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `customers` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directCosts` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `directIncomes` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `invoices` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `itemReceipts` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `items` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journalEntries` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `journals` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `paymentMethods` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `payments` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `profitAndLoss` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `purchaseOrders` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `salesOrders` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `suppliers` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `taxRates` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `trackingCategories` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |
| `transfers` | `map[string]any` | Yes | Describes the state of data in the Codat cache for a company and data type |

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
| `dataProvidedBy` | `string` | No | The name of the data provider. |
| `datatypeFeatures` | `[]any` | No |  |
| `enabled` | `bool` | Yes | Whether this integration is enabled for your customers to use. |
| `id` | `string` | No |  |
| `integrationId` | `string` | No | A Codat ID representing the integration. |
| `isBeta` | `bool` | No | `True` if the integration is currently in beta release. |
| `isOfflineConnector` | `bool` | No | `True` if the integration is to an application installed and run locally on an SMBs computer. |
| `key` | `string` | Yes | A unique 4-letter key to represent a platform in each integration. |
| `links` | `map[string]any` | Yes |  |
| `logoUrl` | `string` | Yes | Static url for integration's logo. |
| `name` | `string` | Yes | Name of integration. |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `results` | `[]any` | No |  |
| `sourceId` | `string` | No | A source-specific ID used to distinguish between different sources originating from the same data connection. |
| `sourceType` | `string` | No | The type of platform of the connection. |
| `totalResults` | `int` | Yes | Total number of items. |

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
| `apiKey` | `string` | No | The API key for this Codat instance. |
| `confirmCompanyName` | `bool` | No | `True` if the company name has been confirmed. |
| `iconUrl` | `string` | No | Static url to your organization's icon. |
| `logoUrl` | `string` | No | Static url to your organization's logo. |
| `name` | `string` | Yes | The name given to the instance. |
| `redirectUrl` | `string` | Yes | The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB. |
| `whiteListUrls` | `[]any` | No | A list of urls that are allowed to communicate with Codat. |

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
| `companyId` | `string` | Yes | Unique identifier of the company associated to this pull operation. |
| `completed` | `string` | No | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `connectionId` | `string` | Yes | Unique identifier of the connection associated to this pull operation. |
| `dataType` | `string` | Yes | The data type you are requesting in a pull operation. |
| `errorMessage` | `string` | No | A message about a transient or persistent error returned by Codat or the source platform. |
| `id` | `string` | Yes | Unique identifier of the pull operation. |
| `isCompleted` | `bool` | Yes | `True` if the pull operation is completed successfully. |
| `isErrored` | `bool` | Yes | `True` if the pull operation entered an error state. |
| `links` | `map[string]any` | Yes |  |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `progress` | `int` | Yes | An integer signifying the progress of the pull operation. |
| `requested` | `string` | Yes | In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. |
| `results` | `[]any` | No |  |
| `status` | `string` | Yes | The current status of the dataset. |
| `statusDescription` | `string` | No | Additional information about the dataset status. |
| `totalResults` | `int` | Yes | Total number of items. |

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
| `changes` | `[]any` | No | Contains a single entry that communicates which record has changed and the manner in which it changed. |
| `companyId` | `string` | Yes | Unique identifier for your SMB in Codat. |
| `completedOnUtc` | `string` | No | The datetime when the push was completed, null if Pending. |
| `dataConnectionKey` | `string` | Yes | Unique identifier for a company's data connection. |
| `dataType` | `string` | No | The type of data being pushed, eg invoices, customers. |
| `errorMessage` | `string` | No | A message about the error. |
| `id` | `string` | No |  |
| `links` | `map[string]any` | Yes |  |
| `pageNumber` | `int` | Yes | Current page number. |
| `pageSize` | `int` | Yes | Number of items to return in results array. |
| `pushOperationKey` | `string` | Yes | A unique identifier generated by Codat to represent this single push operation. |
| `requestedOnUtc` | `string` | Yes | The datetime when the push was requested. |
| `results` | `[]any` | No |  |
| `status` | `string` | Yes | The current status of the push operation. |
| `statusCode` | `int` | Yes | Push status code. |
| `timeoutInMinutes` | `int` | No | Number of minutes the push operation must complete within before it times out. |
| `timeoutInSeconds` | `int` | No | Number of seconds the push operation must complete within before it times out. |
| `totalResults` | `int` | Yes | Total number of items. |
| `validation` | `map[string]any` | No | A human-readable object describing validation decisions Codat has made when pushing data into the platform. |

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
| `description` | `string` | No | A description of the property. |
| `displayName` | `string` | Yes | The property's display name. |
| `id` | `string` | No |  |
| `options` | `[]any` | No |  |
| `properties` | `map[string]any` | No |  |
| `required` | `bool` | Yes | The property is required if `True`. |
| `type` | `string` | Yes | The option type. |
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
| `apiKey` | `string` | No | The API key value used to make authenticated http requests. |
| `createdDate` | `string` | No | The date the entity was created. |
| `id` | `string` | No | Unique identifier for the API key. |
| `name` | `string` | No | A meaningful name assigned to the API key. |

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
| `dataSource` | `string` | No | The underlying endpoint of the source system which the configuration is targeting. |
| `pullData` | `map[string]any` | No | The additional properties that are required when pulling records. |
| `pushData` | `map[string]any` | No | The additional properties that are required to create and/or update records. |

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
| `dataType` | `string` | Yes | Available data types |
| `fetchOnFirstLink` | `bool` | Yes | Whether this data type should be queued after a company has authorized a connection. |
| `isLocked` | `bool` | No | `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked. |
| `monthsToSync` | `int` | No | Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only. |
| `syncFromUtc` | `string` | No | Date from which data should be fetched. |
| `syncFromWindow` | `int` | No | Number of months of data to be fetched. |
| `syncOrder` | `int` | Yes | The sync in which data types are queued for a sync. |
| `syncSchedule` | `int` | Yes | Number of hours after which this data type should be refreshed. |

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
| `companyTags` | `[]any` | No | Company tags provide an additional way to filter messages, independent of event types. |
| `disabled` | `bool` | No | Flag that enables or disables the endpoint from receiving events. |
| `eventTypes` | `[]any` | No | An array of event types the webhook consumer subscribes to. |
| `id` | `string` | No | Unique identifier for the webhook consumer. |
| `url` | `string` | No | The URL that will consume webhook events dispatched by Codat. |

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

