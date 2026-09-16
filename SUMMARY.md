# Platform API

An API for the common components of all of Codat&#39;s products. These end points cover creating and managing your companies, data connections, and integrations. [Read about the building blocks of Codat...](https://docs.codat.io/core-concepts/companies) | [See our OpenAPI spec](https://github.com/codatio/oas) --- &lt;!-- Start Codat Tags Table --&gt; ## Endpoints | Endpoints | Description | | :- |:- | | Companies | Create and manage your SMB users&#39; companies. | | Connections | Create new and manage existing data connections for a company. | | Connection management | Configure connection management UI and retrieve access tokens for authentication. | | Webhooks | Create and manage webhooks that listen to Codat&#39;s events. | | Integrations | Get a list of integrations supported by Codat and their logos. | | Refresh data | Initiate data refreshes, view pull status and history. | | Settings | Manage company profile configuration, sync settings, and API keys. | | Push data | Initiate and monitor Create, Update, and Delete operations. | | Supplemental data | Configure and pull additional data you can include in Codat&#39;s standard data types. | | Custom data type | Configure and pull additional data types that are not included in Codat&#39;s standardized data model. | &lt;!-- End Codat Tags Table --&gt;

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 30 entities and 50 HTTP routes. There are 7 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [AccessToken](docs/api/access_token.html)

SDK operations: .

### [All](docs/api/all.html)

SDK operations: .

### [ApiKey](docs/api/api_key.html)

SDK operations: .

### [Branding](docs/api/branding.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `button`: Button branding references.
- `logo`: Logo branding references.
- `sourceId`: A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.

### [Company](docs/api/company.html)

Results: OK; No Content.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `created`: In Codat&#39;s data model, dates and times are represented using the &lt;a class=&quot;external&quot; href=&quot;https://en.wikipedia.org/wiki/ISO_8601&quot; target=&quot;_blank&quot;&gt;ISO 8601 standard&lt;/a&gt;. Date and time fields are formatted as strings; for example: ``` 2020-10-08T22:40:50Z 2021-01-01T00:00:00 ``` When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information: - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z` - Unqualified local time: `2021-11-15T01:00:00` - UTC time offsets: `2021-11-15T01:00:00-05:00` &gt; Time zones &gt; &gt; Not all dates from Codat will contain information about time zones. &gt; Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
- `createdByUserName`: Name of user that created the company in Codat.
- `description`: Additional information about the company. This can be used to store foreign IDs, references, etc.
- `id`: Unique identifier for your SMB in Codat.
- `lastSync`: In Codat&#39;s data model, dates and times are represented using the &lt;a class=&quot;external&quot; href=&quot;https://en.wikipedia.org/wiki/ISO_8601&quot; target=&quot;_blank&quot;&gt;ISO 8601 standard&lt;/a&gt;. Date and time fields are formatted as strings; for example: ``` 2020-10-08T22:40:50Z 2021-01-01T00:00:00 ``` When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information: - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z` - Unqualified local time: `2021-11-15T01:00:00` - UTC time offsets: `2021-11-15T01:00:00-05:00` &gt; Time zones &gt; &gt; Not all dates from Codat will contain information about time zones. &gt; Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.

### [CompanyAccessToken](docs/api/company_access_token.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `accessToken`: The access token for the company.
- `expiresIn`: The number of seconds until the access token expires.
- `tokenType`: The type of token.

### [Connection](docs/api/connection.html)

Results: OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `created`: In Codat&#39;s data model, dates and times are represented using the &lt;a class=&quot;external&quot; href=&quot;https://en.wikipedia.org/wiki/ISO_8601&quot; target=&quot;_blank&quot;&gt;ISO 8601 standard&lt;/a&gt;. Date and time fields are formatted as strings; for example: ``` 2020-10-08T22:40:50Z 2021-01-01T00:00:00 ``` When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information: - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z` - Unqualified local time: `2021-11-15T01:00:00` - UTC time offsets: `2021-11-15T01:00:00-05:00` &gt; Time zones &gt; &gt; Not all dates from Codat will contain information about time zones. &gt; Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
- `id`: Unique identifier for a company&#39;s data connection.
- `integrationId`: A Codat ID representing the integration.
- `integrationKey`: A unique four-character ID that identifies the platform of the company&#39;s data connection. This ensures continuity if the platform changes its name in the future.
- `lastSync`: In Codat&#39;s data model, dates and times are represented using the &lt;a class=&quot;external&quot; href=&quot;https://en.wikipedia.org/wiki/ISO_8601&quot; target=&quot;_blank&quot;&gt;ISO 8601 standard&lt;/a&gt;. Date and time fields are formatted as strings; for example: ``` 2020-10-08T22:40:50Z 2021-01-01T00:00:00 ``` When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information: - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z` - Unqualified local time: `2021-11-15T01:00:00` - UTC time offsets: `2021-11-15T01:00:00-05:00` &gt; Time zones &gt; &gt; Not all dates from Codat will contain information about time zones. &gt; Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.

### [ConnectionManagementAccessToken](docs/api/connection_management_access_token.html)

Results: Success.

SDK operations: `load`.

Key fields to recognise:

- `accessToken`: Access token that allows SMBs to manage connections that have access to their data.

### [ConnectionManagementAllowedOrigin](docs/api/connection_management_allowed_origin.html)

Results: Success.

SDK operations: `create`, `list`.

Key fields to recognise:

- `allowedOrigins`: An array of allowed origins (that is your domains) to permit cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).n resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).

### [Custom](docs/api/custom.html)

Results: OK.

SDK operations: `load`, `update`.

Key fields to recognise:

- `dataSource`: Underlying endpoint of the source platform that will serve as a data source for the custom data type. This value is not validated by Codat.
- `keyBy`: An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. This value is not validated by Codat.
- `pageNumber`: Current page number.
- `pageSize`: Number of items to return in results array.
- `requiredData`: Properties required to be fetched from the underlying platform for the custom data type that is being configured. This value is not validated by Codat.

### [DataStatus](docs/api/data_status.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `accountTransactions`: Describes the state of data in the Codat cache for a company and data type
- `balanceSheet`: Describes the state of data in the Codat cache for a company and data type
- `bankAccounts`: Describes the state of data in the Codat cache for a company and data type
- `bankTransactions`: Describes the state of data in the Codat cache for a company and data type
- `bankingaccountBalances`: Describes the state of data in the Codat cache for a company and data type

### [DataType](docs/api/data_type.html)

SDK operations: .

### [History](docs/api/history.html)

SDK operations: .

### [Integration](docs/api/integration.html)

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `dataProvidedBy`: The name of the data provider.
- `enabled`: Whether this integration is enabled for your customers to use.
- `integrationId`: A Codat ID representing the integration.
- `isBeta`: `True` if the integration is currently in beta release.
- `isOfflineConnector`: `True` if the integration is to an application installed and run locally on an SMBs computer.

### [Option](docs/api/option.html)

SDK operations: .

### [Product](docs/api/product.html)

SDK operations: .

### [Profile](docs/api/profile.html)

Results: OK.

SDK operations: `list`, `update`.

Key fields to recognise:

- `apiKey`: The API key for this Codat instance.
- `confirmCompanyName`: `True` if the company name has been confirmed.
- `iconUrl`: Static url to your organization&#39;s icon.
- `logoUrl`: Static url to your organization&#39;s logo.
- `name`: The name given to the instance.

### [PullOperation](docs/api/pull_operation.html)

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `companyId`: Unique identifier of the company associated to this pull operation.
- `completed`: In Codat&#39;s data model, dates and times are represented using the &lt;a class=&quot;external&quot; href=&quot;https://en.wikipedia.org/wiki/ISO_8601&quot; target=&quot;_blank&quot;&gt;ISO 8601 standard&lt;/a&gt;. Date and time fields are formatted as strings; for example: ``` 2020-10-08T22:40:50Z 2021-01-01T00:00:00 ``` When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information: - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z` - Unqualified local time: `2021-11-15T01:00:00` - UTC time offsets: `2021-11-15T01:00:00-05:00` &gt; Time zones &gt; &gt; Not all dates from Codat will contain information about time zones. &gt; Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
- `connectionId`: Unique identifier of the connection associated to this pull operation.
- `dataType`: The data type you are requesting in a pull operation.
- `errorMessage`: A message about a transient or persistent error returned by Codat or the source platform.

### [Push](docs/api/push.html)

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `changes`: Contains a single entry that communicates which record has changed and the manner in which it changed.
- `companyId`: Unique identifier for your SMB in Codat.
- `completedOnUtc`: The datetime when the push was completed, null if Pending.
- `dataConnectionKey`: Unique identifier for a company&#39;s data connection.
- `dataType`: The type of data being pushed, eg invoices, customers.

### [PushOption](docs/api/push_option.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `description`: A description of the property.
- `displayName`: The property&#39;s display name.
- `required`: The property is required if `True`.
- `type`: The option type.

### [Queue](docs/api/queue.html)

SDK operations: .

### [RefreshData](docs/api/refresh_data.html)

Results: No Content.

SDK operations: `create`.

### [Setting](docs/api/setting.html)

Results: Success; No Content.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `apiKey`: The API key value used to make authenticated http requests.
- `createdDate`: The date the entity was created.
- `id`: Unique identifier for the API key.
- `name`: A meaningful name assigned to the API key.

### [SupplementalData](docs/api/supplemental_data.html)

Results: OK.

SDK operations: `update`.

### [SupplementalDataConfig](docs/api/supplemental_data_config.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `dataSource`: The underlying endpoint of the source system which the configuration is targeting.
- `pullData`: The additional properties that are required when pulling records.
- `pushData`: The additional properties that are required to create and/or update records.

### [Sync](docs/api/sync.html)

SDK operations: .

### [SyncSetting](docs/api/sync_setting.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `dataType`: Available data types
- `fetchOnFirstLink`: Whether this data type should be queued after a company has authorized a connection.
- `isLocked`: `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked.
- `monthsToSync`: Months of data to fetch, for report data types (`balanceSheet` &amp; `profitAndLoss`) only.
- `syncFromUtc`: Date from which data should be fetched. Set this *or* `syncFromWindow`.

### [Validation](docs/api/validation.html)

Results: OK.

SDK operations: `list`.

### [Webhook](docs/api/webhook.html)

Results: OK; No content.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `companyTags`: Company tags provide an additional way to filter messages, independent of event types. Company tags are case-sensitive, and only messages from companies with matching tags will be sent to this endpoint. Use the format `tagKey:tagValue`.
- `disabled`: Flag that enables or disables the endpoint from receiving events. Disabled when set to `true`.
- `eventTypes`: An array of event types the webhook consumer subscribes to.
- `id`: Unique identifier for the webhook consumer.
- `url`: The URL that will consume webhook events dispatched by Codat.

### [WebhookZapierKey](docs/api/webhook_zapier_key.html)

Results: OK.

SDK operations: `create`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Branding](docs/api/branding.html) | `load` | `GET /integrations/{platformKey}/branding` | Required |
| [Company](docs/api/company.html) | `create` | `POST /companies/{companyId}/products/{productIdentifier}/refresh` | Required |
| [Company](docs/api/company.html) | `create` | `POST /companies` | Required |
| [Company](docs/api/company.html) | `list` | `GET /companies` | Required |
| [Company](docs/api/company.html) | `load` | `GET /companies/{companyId}` | Required |
| [Company](docs/api/company.html) | `patch` | `PATCH /companies/{companyId}` | Required |
| [Company](docs/api/company.html) | `remove` | `DELETE /companies/{companyId}/products/{productIdentifier}` | Required |
| [Company](docs/api/company.html) | `remove` | `DELETE /companies/{companyId}` | Required |
| [Company](docs/api/company.html) | `update` | `PUT /companies/{companyId}/products/{productIdentifier}` | Required |
| [Company](docs/api/company.html) | `update` | `PUT /companies/{companyId}` | Required |
| [CompanyAccessToken](docs/api/company_access_token.html) | `load` | `GET /companies/{companyId}/accessToken` | Required |
| [Connection](docs/api/connection.html) | `create` | `POST /companies/{companyId}/connections` | Required |
| [Connection](docs/api/connection.html) | `list` | `GET /companies/{companyId}/connections` | Required |
| [Connection](docs/api/connection.html) | `load` | `GET /companies/{companyId}/connections/{connectionId}` | Required |
| [Connection](docs/api/connection.html) | `remove` | `DELETE /companies/{companyId}/connections/{connectionId}` | Required |
| [Connection](docs/api/connection.html) | `update` | `PATCH /companies/{companyId}/connections/{connectionId}` | Required |
| [Connection](docs/api/connection.html) | `update` | `PUT /companies/{companyId}/connections/{connectionId}/authorization` | Required |
| [ConnectionManagementAccessToken](docs/api/connection_management_access_token.html) | `load` | `GET /companies/{companyId}/connectionManagement/accessToken` | Required |
| [ConnectionManagementAllowedOrigin](docs/api/connection_management_allowed_origin.html) | `create` | `POST /connectionManagement/corsSettings` | Required |
| [ConnectionManagementAllowedOrigin](docs/api/connection_management_allowed_origin.html) | `create` | `POST /corsSettings` | Required |
| [ConnectionManagementAllowedOrigin](docs/api/connection_management_allowed_origin.html) | `list` | `GET /connectionManagement/corsSettings` | Required |
| [ConnectionManagementAllowedOrigin](docs/api/connection_management_allowed_origin.html) | `list` | `GET /corsSettings` | Required |
| [Custom](docs/api/custom.html) | `load` | `GET /companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}` | Required |
| [Custom](docs/api/custom.html) | `load` | `GET /integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}` | Required |
| [Custom](docs/api/custom.html) | `update` | `PUT /integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}` | Required |
| [DataStatus](docs/api/data_status.html) | `load` | `GET /companies/{companyId}/dataStatus` | Required |
| [Integration](docs/api/integration.html) | `list` | `GET /integrations` | Required |
| [Integration](docs/api/integration.html) | `load` | `GET /integrations/{platformKey}` | Required |
| [Profile](docs/api/profile.html) | `list` | `GET /profile` | Required |
| [Profile](docs/api/profile.html) | `update` | `PUT /profile` | Required |
| [PullOperation](docs/api/pull_operation.html) | `create` | `POST /companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}` | Required |
| [PullOperation](docs/api/pull_operation.html) | `create` | `POST /companies/{companyId}/data/queue/{dataType}` | Required |
| [PullOperation](docs/api/pull_operation.html) | `list` | `GET /companies/{companyId}/data/history` | Required |
| [PullOperation](docs/api/pull_operation.html) | `load` | `GET /companies/{companyId}/data/history/{datasetId}` | Required |
| [Push](docs/api/push.html) | `list` | `GET /companies/{companyId}/push` | Required |
| [Push](docs/api/push.html) | `load` | `GET /companies/{companyId}/push/{pushOperationKey}` | Required |
| [PushOption](docs/api/push_option.html) | `load` | `GET /companies/{companyId}/connections/{connectionId}/options/{dataType}` | Required |
| [RefreshData](docs/api/refresh_data.html) | `create` | `POST /companies/{companyId}/data/all` | Required |
| [Setting](docs/api/setting.html) | `create` | `POST /apiKeys` | Required |
| [Setting](docs/api/setting.html) | `create` | `POST /profile/syncSettings` | Required |
| [Setting](docs/api/setting.html) | `list` | `GET /apiKeys` | Required |
| [Setting](docs/api/setting.html) | `remove` | `DELETE /apiKeys/{apiKeyId}` | Required |
| [SupplementalData](docs/api/supplemental_data.html) | `update` | `PUT /integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig` | Required |
| [SupplementalDataConfig](docs/api/supplemental_data_config.html) | `load` | `GET /integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig` | Required |
| [SyncSetting](docs/api/sync_setting.html) | `list` | `GET /profile/syncSettings` | Required |
| [Validation](docs/api/validation.html) | `list` | `GET /companies/{companyId}/sync/{datasetId}/validation` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /webhooks` | Required |
| [Webhook](docs/api/webhook.html) | `list` | `GET /webhooks` | Required |
| [Webhook](docs/api/webhook.html) | `remove` | `DELETE /webhooks/{webhookId}` | Required |
| [WebhookZapierKey](docs/api/webhook_zapier_key.html) | `create` | `POST /webhooks/integrationKeys/zapier` | Required |

## Connect to the API

- Production: `https://api.codat.io`

The default credential is sent in the `Authorization` header.

The word &quot;Basic&quot; followed by a space and your API key. [API keys](https://docs.codat.io/platform-api#/schemas/ApiKeyDetails) are tokens used to control access to the API. You can get an API key via [the Codat Portal](https://app.codat.io/developers/api-keys), via [the API](https://docs.codat.io/platform-api#/operations/list-api-keys), or [read more](https://docs.codat.io/using-the-api/authentication) about authentication at Codat.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

