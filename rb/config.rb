# Codatplatform SDK configuration

module CodatplatformConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Codatplatform",
        "slug" => "codatplatform",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "debug" => {
          "options" => {
            "active" => false,
            "max" => 100,
            "redact" => [
              "authorization",
              "cookie",
              "set-cookie",
              "api-key",
              "apikey",
              "x-api-key",
              "idempotency-key",
            ],
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "onEntry" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "none",
        },
        "idempotency" => {
          "options" => {
            "active" => false,
            "header" => "Idempotency-Key",
            "methods" => [
              "POST",
              "PUT",
              "PATCH",
              "DELETE",
            ],
            "ops" => [
              "create",
              "update",
              "remove",
            ],
          },
          "optspec" => {
            "keygen" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "none",
        },
        "metrics" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "none",
        },
        "paging" => {
          "options" => {
            "active" => false,
            "afterVar" => "after",
            "cursorParam" => "cursor",
            "firstVar" => "first",
            "limitParam" => "limit",
            "pageParam" => "page",
            "startPage" => 1,
          },
          "optspec" => {
            "limit" => "`$NUMBER`",
            "ops" => "`$LIST`",
          },
          "strict" => false,
          "transport" => "none",
        },
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api.codat.io",
        "auth" => {
          "prefix" => "",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "branding" => {},
          "company" => {},
          "company_access_token" => {},
          "connection" => {},
          "connection_management_access_token" => {},
          "connection_management_allowed_origin" => {},
          "custom" => {},
          "data_status" => {},
          "integration" => {},
          "profile" => {},
          "pull_operation" => {},
          "push" => {},
          "push_option" => {},
          "refresh_data" => {},
          "setting" => {},
          "supplemental_data" => {},
          "supplemental_data_config" => {},
          "sync_setting" => {},
          "validation" => {},
          "webhook" => {},
          "webhook_zapier_key" => {},
        },
      },
      "entity" => {
        "branding" => {
          "fields" => [
            {
              "name" => "button",
              "title" => "Button",
              "type" => "`$OBJECT`",
              "short" => "Button branding references.",
            },
            {
              "name" => "logo",
              "title" => "Logo",
              "type" => "`$OBJECT`",
              "short" => "Logo branding references.",
            },
            {
              "name" => "sourceId",
              "title" => "Source Id",
              "type" => "`$STRING`",
              "short" => "A source-specific ID used to distinguish between different sources originating from the same data connection.",
              "format" => "uuid",
            },
          ],
          "name" => "branding",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/integrations/{platformKey}/branding",
                  "segments" => [
                    {
                      "lit" => "integrations",
                    },
                    {
                      "var" => "platform_key",
                    },
                    {
                      "lit" => "branding",
                    },
                  ],
                  "parts" => [
                    "integrations",
                    "{platform_key}",
                    "branding",
                  ],
                  "rename" => {
                    "param" => {
                      "platformKey" => "platform_key",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "platform_key",
                        "orig" => "platform_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "gbol",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "platform_key",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.integration",
              ],
            ],
          },
        },
        "company" => {
          "fields" => [
            {
              "name" => "created",
              "title" => "Created",
              "type" => "`$STRING`",
              "short" => "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
            },
            {
              "name" => "createdByUserName",
              "title" => "Created By User Name",
              "type" => "`$STRING`",
              "short" => "Name of user that created the company in Codat.",
            },
            {
              "name" => "dataConnections",
              "title" => "Data Connections",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "Additional information about the company.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Unique identifier for your SMB in Codat.",
              "format" => "uuid",
            },
            {
              "name" => "lastSync",
              "title" => "Last Sync",
              "type" => "`$STRING`",
              "short" => "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
            },
            {
              "name" => "links",
              "title" => "Links",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "patch" => {
                  "type" => "`$STRING`",
                },
              },
              "short" => "The name of the company",
            },
            {
              "name" => "pageNumber",
              "title" => "Page Number",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Current page number.",
            },
            {
              "name" => "pageSize",
              "title" => "Page Size",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Number of items to return in results array.",
            },
            {
              "name" => "products",
              "title" => "Products",
              "type" => "`$ARRAY`",
              "short" => "An array of products that are currently enabled for the company.",
            },
            {
              "name" => "redirect",
              "title" => "Redirect",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company.",
              "format" => "uri",
            },
            {
              "name" => "referenceParentCompany",
              "title" => "Reference Parent Company",
              "type" => "`$OBJECT`",
              "short" => "The parent entity or controlling organization of this company.",
            },
            {
              "name" => "referenceSubsidiaryCompanies",
              "title" => "Reference Subsidiary Companies",
              "type" => "`$ARRAY`",
              "short" => "A list of subsidiary companies owned or controlled by this entity.",
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "tags",
              "title" => "Tags",
              "type" => "`$OBJECT`",
              "short" => "A collection of user-defined key-value pairs that store custom metadata against the company.",
            },
            {
              "name" => "totalResults",
              "title" => "Total Results",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Total number of items.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "company",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/companies/{companyId}/products/{productIdentifier}/refresh",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "products",
                    },
                    {
                      "var" => "product_identifier",
                    },
                    {
                      "lit" => "refresh",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{id}",
                    "products",
                    "{product_identifier}",
                    "refresh",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "id",
                      "productIdentifier" => "product_identifier",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "product_identifier",
                        "orig" => "product_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "refresh",
                    "exist" => [
                      "id",
                      "product_identifier",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/companies",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                  ],
                  "parts" => [
                    "companies",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                  ],
                  "parts" => [
                    "companies",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "-modifiedDate",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 100,
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                      },
                      {
                        "name" => "tag",
                        "orig" => "tag",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "region=uk && team=invoice-finance",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "order_by",
                      "page",
                      "page_size",
                      "query",
                      "tag",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
            "patch" => {
              "input" => "data",
              "name" => "patch",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PATCH",
                  "orig" => "/companies/{companyId}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/companies/{companyId}/products/{productIdentifier}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "products",
                    },
                    {
                      "var" => "product_identifier",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{id}",
                    "products",
                    "{product_identifier}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "id",
                      "productIdentifier" => "product_identifier",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "product_identifier",
                        "orig" => "product_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                      "product_identifier",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/companies/{companyId}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/companies/{companyId}/products/{productIdentifier}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "products",
                    },
                    {
                      "var" => "product_identifier",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{id}",
                    "products",
                    "{product_identifier}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "id",
                      "productIdentifier" => "product_identifier",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "product_identifier",
                        "orig" => "product_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                      "product_identifier",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/companies/{companyId}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "company_access_token" => {
          "fields" => [
            {
              "name" => "accessToken",
              "title" => "Access Token",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The access token for the company.",
            },
            {
              "name" => "expiresIn",
              "title" => "Expires In",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "The number of seconds until the access token expires.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "tokenType",
              "title" => "Token Type",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The type of token.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "company_access_token",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/accessToken",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "accessToken",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{id}",
                    "accessToken",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "connection" => {
          "fields" => [
            {
              "name" => "connectionInfo",
              "title" => "Connection Info",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "created",
              "title" => "Created",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
            },
            {
              "name" => "dataConnectionErrors",
              "title" => "Data Connection Errors",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Unique identifier for a company's data connection.",
              "format" => "uuid",
            },
            {
              "name" => "integrationId",
              "title" => "Integration Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "A Codat ID representing the integration.",
              "format" => "uuid",
            },
            {
              "name" => "integrationKey",
              "title" => "Integration Key",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "A unique four-character ID that identifies the platform of the company's data connection.",
            },
            {
              "name" => "lastSync",
              "title" => "Last Sync",
              "type" => "`$STRING`",
              "short" => "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
            },
            {
              "name" => "linkUrl",
              "title" => "Link Url",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The link URL your customers can use to authorize access to their business application.",
              "format" => "uri",
            },
            {
              "name" => "links",
              "title" => "Links",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "pageNumber",
              "title" => "Page Number",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Current page number.",
            },
            {
              "name" => "pageSize",
              "title" => "Page Size",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Number of items to return in results array.",
            },
            {
              "name" => "platformKey",
              "title" => "Platform Key",
              "type" => "`$STRING`",
              "short" => "A unique 4-letter key to represent a platform in each integration.",
            },
            {
              "name" => "platformName",
              "title" => "Platform Name",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Name of integration connected to company.",
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "sourceId",
              "title" => "Source Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "A source-specific ID used to distinguish between different sources originating from the same data connection.",
              "format" => "uuid",
            },
            {
              "name" => "sourceType",
              "title" => "Source Type",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The type of platform of the connection.",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "update" => {
                  "type" => "`$STRING`",
                },
              },
              "short" => "The current authorization status of the data connection.",
            },
            {
              "name" => "totalResults",
              "title" => "Total Results",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Total number of items.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "connection",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/companies/{companyId}/connections",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "connections",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "connections",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                    ],
                  },
                },
              ],
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/connections",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "connections",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "connections",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "-modifiedDate",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 100,
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "order_by",
                      "page",
                      "page_size",
                      "query",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/connections/{connectionId}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "connections",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "connections",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                      "connectionId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "id",
                    ],
                  },
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/companies/{companyId}/connections/{connectionId}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "connections",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "connections",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                      "connectionId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "id",
                    ],
                  },
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PATCH",
                  "orig" => "/companies/{companyId}/connections/{connectionId}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "connections",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "connections",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                      "connectionId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "status" => "`reqdata.status`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/companies/{companyId}/connections/{connectionId}/authorization",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "connections",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "authorization",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "connections",
                    "{id}",
                    "authorization",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                      "connectionId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "authorization",
                    "exist" => [
                      "company_id",
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.company",
              ],
            ],
          },
        },
        "connection_management_access_token" => {
          "fields" => [
            {
              "name" => "accessToken",
              "title" => "Access Token",
              "type" => "`$STRING`",
              "short" => "Access token that allows SMBs to manage connections that have access to their data.",
            },
          ],
          "name" => "connection_management_access_token",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/connectionManagement/accessToken",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "connectionManagement",
                    },
                    {
                      "lit" => "accessToken",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "connectionManagement",
                    "accessToken",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.company",
              ],
            ],
          },
        },
        "connection_management_allowed_origin" => {
          "fields" => [
            {
              "name" => "allowedOrigins",
              "title" => "Allowed Origins",
              "type" => "`$ARRAY`",
              "short" => "An array of allowed origins (i.e.",
            },
          ],
          "name" => "connection_management_allowed_origin",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/connectionManagement/corsSettings",
                  "segments" => [
                    {
                      "lit" => "connectionManagement",
                    },
                    {
                      "lit" => "corsSettings",
                    },
                  ],
                  "parts" => [
                    "connectionManagement",
                    "corsSettings",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/corsSettings",
                  "segments" => [
                    {
                      "lit" => "corsSettings",
                    },
                  ],
                  "parts" => [
                    "corsSettings",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/connectionManagement/corsSettings",
                  "segments" => [
                    {
                      "lit" => "connectionManagement",
                    },
                    {
                      "lit" => "corsSettings",
                    },
                  ],
                  "parts" => [
                    "connectionManagement",
                    "corsSettings",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.allowedOrigins`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/corsSettings",
                  "segments" => [
                    {
                      "lit" => "corsSettings",
                    },
                  ],
                  "parts" => [
                    "corsSettings",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.allowedOrigins`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "custom" => {
          "fields" => [
            {
              "name" => "dataSource",
              "title" => "Data Source",
              "type" => "`$STRING`",
              "short" => "Underlying endpoint of the source platform that will serve as a data source for the custom data type.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "keyBy",
              "title" => "Key By",
              "type" => "`$ARRAY`",
              "short" => "An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type.",
            },
            {
              "name" => "pageNumber",
              "title" => "Page Number",
              "type" => "`$INTEGER`",
              "short" => "Current page number.",
            },
            {
              "name" => "pageSize",
              "title" => "Page Size",
              "type" => "`$INTEGER`",
              "short" => "Number of items to return in results array.",
            },
            {
              "name" => "requiredData",
              "title" => "Required Data",
              "type" => "`$OBJECT`",
              "short" => "Properties required to be fetched from the underlying platform for the custom data type that is being configured.",
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "sourceModifiedDate",
              "title" => "Source Modified Date",
              "type" => "`$ARRAY`",
              "short" => "Property in the source platform nominated by the client that defines the date when a record was last modified there.",
            },
            {
              "name" => "totalResults",
              "title" => "Total Results",
              "type" => "`$INTEGER`",
              "short" => "Total number of items.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "custom",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "connections",
                    },
                    {
                      "var" => "connection_id",
                    },
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "custom",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "connections",
                    "{connection_id}",
                    "data",
                    "custom",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                      "connectionId" => "connection_id",
                      "customDataIdentifier" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "connection_id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      },
                      {
                        "name" => "id",
                        "orig" => "custom_data_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "DynamicsPurchaseOrders",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 100,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "connection_id",
                      "id",
                      "page",
                      "page_size",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}",
                  "segments" => [
                    {
                      "lit" => "integrations",
                    },
                    {
                      "var" => "platform_key",
                    },
                    {
                      "lit" => "dataTypes",
                    },
                    {
                      "lit" => "custom",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "integrations",
                    "{platform_key}",
                    "dataTypes",
                    "custom",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "customDataIdentifier" => "id",
                      "platformKey" => "platform_key",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "custom_data_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "DynamicsPurchaseOrders",
                      },
                      {
                        "name" => "platform_key",
                        "orig" => "platform_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "gbol",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                      "platform_key",
                    ],
                  },
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}",
                  "segments" => [
                    {
                      "lit" => "integrations",
                    },
                    {
                      "var" => "platform_key",
                    },
                    {
                      "lit" => "dataTypes",
                    },
                    {
                      "lit" => "custom",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "integrations",
                    "{platform_key}",
                    "dataTypes",
                    "custom",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "customDataIdentifier" => "id",
                      "platformKey" => "platform_key",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "custom_data_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "DynamicsPurchaseOrders",
                      },
                      {
                        "name" => "platform_key",
                        "orig" => "platform_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "gbol",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                      "platform_key",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.integration",
              ],
              [
                "$.main.kit.entity.company",
                "$.main.kit.entity.connection",
              ],
            ],
          },
        },
        "data_status" => {
          "fields" => [
            {
              "name" => "accountTransactions",
              "title" => "Account Transactions",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "balanceSheet",
              "title" => "Balance Sheet",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "bankAccounts",
              "title" => "Bank Accounts",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "bankTransactions",
              "title" => "Bank Transactions",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "bankingaccountBalances",
              "title" => "Bankingaccount Balances",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "bankingaccounts",
              "title" => "Bankingaccounts",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "bankingtransactionCategories",
              "title" => "Bankingtransaction Categories",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "bankingtransactions",
              "title" => "Bankingtransactions",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "billCreditNotes",
              "title" => "Bill Credit Notes",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "billPayments",
              "title" => "Bill Payments",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "bills",
              "title" => "Bills",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "cashFlowStatement",
              "title" => "Cash Flow Statement",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "chartOfAccounts",
              "title" => "Chart Of Accounts",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "commercecompanyInfo",
              "title" => "Commercecompany Info",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "commercecustomers",
              "title" => "Commercecustomers",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "commercedisputes",
              "title" => "Commercedisputes",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "commercelocations",
              "title" => "Commercelocations",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "commerceorders",
              "title" => "Commerceorders",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "commercepaymentMethods",
              "title" => "Commercepayment Methods",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "commercepayments",
              "title" => "Commercepayments",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "commerceproductCategories",
              "title" => "Commerceproduct Categories",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "commerceproducts",
              "title" => "Commerceproducts",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "commercetaxComponents",
              "title" => "Commercetax Components",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "commercetransactions",
              "title" => "Commercetransactions",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "company",
              "title" => "Company",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "creditNotes",
              "title" => "Credit Notes",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "customers",
              "title" => "Customers",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "directCosts",
              "title" => "Direct Costs",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "directIncomes",
              "title" => "Direct Incomes",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "invoices",
              "title" => "Invoices",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "itemReceipts",
              "title" => "Item Receipts",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "items",
              "title" => "Items",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "journalEntries",
              "title" => "Journal Entries",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "journals",
              "title" => "Journals",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "paymentMethods",
              "title" => "Payment Methods",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "payments",
              "title" => "Payments",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "profitAndLoss",
              "title" => "Profit And Loss",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "purchaseOrders",
              "title" => "Purchase Orders",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "salesOrders",
              "title" => "Sales Orders",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "suppliers",
              "title" => "Suppliers",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "taxRates",
              "title" => "Tax Rates",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "trackingCategories",
              "title" => "Tracking Categories",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
            {
              "name" => "transfers",
              "title" => "Transfers",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Describes the state of data in the Codat cache for a company and data type",
            },
          ],
          "name" => "data_status",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/dataStatus",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "dataStatus",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "dataStatus",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.company",
              ],
            ],
          },
        },
        "integration" => {
          "fields" => [
            {
              "name" => "dataProvidedBy",
              "title" => "Data Provided By",
              "type" => "`$STRING`",
              "short" => "The name of the data provider.",
            },
            {
              "name" => "datatypeFeatures",
              "title" => "Datatype Features",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "enabled",
              "title" => "Enabled",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Whether this integration is enabled for your customers to use.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "integrationId",
              "title" => "Integration Id",
              "type" => "`$STRING`",
              "short" => "A Codat ID representing the integration.",
              "format" => "uuid",
            },
            {
              "name" => "isBeta",
              "title" => "Is Beta",
              "type" => "`$BOOLEAN`",
              "short" => "`True` if the integration is currently in beta release.",
            },
            {
              "name" => "isOfflineConnector",
              "title" => "Is Offline Connector",
              "type" => "`$BOOLEAN`",
              "short" => "`True` if the integration is to an application installed and run locally on an SMBs computer.",
            },
            {
              "name" => "key",
              "title" => "Key",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "A unique 4-letter key to represent a platform in each integration.",
            },
            {
              "name" => "links",
              "title" => "Links",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "logoUrl",
              "title" => "Logo Url",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Static url for integration's logo.",
              "format" => "uri",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Name of integration.",
            },
            {
              "name" => "pageNumber",
              "title" => "Page Number",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Current page number.",
            },
            {
              "name" => "pageSize",
              "title" => "Page Size",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Number of items to return in results array.",
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "sourceId",
              "title" => "Source Id",
              "type" => "`$STRING`",
              "short" => "A source-specific ID used to distinguish between different sources originating from the same data connection.",
              "format" => "uuid",
            },
            {
              "name" => "sourceType",
              "title" => "Source Type",
              "type" => "`$STRING`",
              "short" => "The type of platform of the connection.",
            },
            {
              "name" => "totalResults",
              "title" => "Total Results",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Total number of items.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "integration",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/integrations",
                  "segments" => [
                    {
                      "lit" => "integrations",
                    },
                  ],
                  "parts" => [
                    "integrations",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "-modifiedDate",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 100,
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "order_by",
                      "page",
                      "page_size",
                      "query",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/integrations/{platformKey}",
                  "segments" => [
                    {
                      "lit" => "integrations",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "integrations",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "platformKey" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "platform_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "gbol",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "profile" => {
          "fields" => [
            {
              "name" => "apiKey",
              "title" => "Api Key",
              "type" => "`$STRING`",
              "short" => "The API key for this Codat instance.",
              "deprecated" => true,
            },
            {
              "name" => "confirmCompanyName",
              "title" => "Confirm Company Name",
              "type" => "`$BOOLEAN`",
              "short" => "`True` if the company name has been confirmed.",
              "deprecated" => true,
            },
            {
              "name" => "iconUrl",
              "title" => "Icon Url",
              "type" => "`$STRING`",
              "short" => "Static url to your organization's icon.",
            },
            {
              "name" => "logoUrl",
              "title" => "Logo Url",
              "type" => "`$STRING`",
              "short" => "Static url to your organization's logo.",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The name given to the instance.",
            },
            {
              "name" => "redirectUrl",
              "title" => "Redirect Url",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB.",
            },
            {
              "name" => "whiteListUrls",
              "title" => "White List Urls",
              "type" => "`$ARRAY`",
              "short" => "A list of urls that are allowed to communicate with Codat.",
            },
          ],
          "name" => "profile",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/profile",
                  "segments" => [
                    {
                      "lit" => "profile",
                    },
                  ],
                  "parts" => [
                    "profile",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.whiteListUrls`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/profile",
                  "segments" => [
                    {
                      "lit" => "profile",
                    },
                  ],
                  "parts" => [
                    "profile",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "pull_operation" => {
          "fields" => [
            {
              "name" => "companyId",
              "title" => "Company Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Unique identifier of the company associated to this pull operation.",
              "format" => "uuid",
            },
            {
              "name" => "completed",
              "title" => "Completed",
              "type" => "`$STRING`",
              "short" => "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
            },
            {
              "name" => "connectionId",
              "title" => "Connection Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Unique identifier of the connection associated to this pull operation.",
              "format" => "uuid",
            },
            {
              "name" => "dataType",
              "title" => "Data Type",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The data type you are requesting in a pull operation.",
            },
            {
              "name" => "errorMessage",
              "title" => "Error Message",
              "type" => "`$STRING`",
              "short" => "A message about a transient or persistent error returned by Codat or the source platform.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Unique identifier of the pull operation.",
              "format" => "uuid",
            },
            {
              "name" => "isCompleted",
              "title" => "Is Completed",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "`True` if the pull operation is completed successfully.",
            },
            {
              "name" => "isErrored",
              "title" => "Is Errored",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "`True` if the pull operation entered an error state.",
            },
            {
              "name" => "links",
              "title" => "Links",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "pageNumber",
              "title" => "Page Number",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Current page number.",
            },
            {
              "name" => "pageSize",
              "title" => "Page Size",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Number of items to return in results array.",
            },
            {
              "name" => "progress",
              "title" => "Progress",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "An integer signifying the progress of the pull operation.",
            },
            {
              "name" => "requested",
              "title" => "Requested",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The current status of the dataset.",
            },
            {
              "name" => "statusDescription",
              "title" => "Status Description",
              "type" => "`$STRING`",
              "short" => "Additional information about the dataset status.",
            },
            {
              "name" => "totalResults",
              "title" => "Total Results",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Total number of items.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "pull_operation",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "connections",
                    },
                    {
                      "var" => "connection_id",
                    },
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "queue",
                    },
                    {
                      "lit" => "custom",
                    },
                    {
                      "var" => "custom_data_identifier",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "connections",
                    "{connection_id}",
                    "data",
                    "queue",
                    "custom",
                    "{custom_data_identifier}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                      "connectionId" => "connection_id",
                      "customDataIdentifier" => "custom_data_identifier",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "connection_id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      },
                      {
                        "name" => "custom_data_identifier",
                        "orig" => "custom_data_identifier",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "DynamicsPurchaseOrders",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "connection_id",
                      "custom_data_identifier",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/companies/{companyId}/data/queue/{dataType}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "queue",
                    },
                    {
                      "var" => "data_type",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "data",
                    "queue",
                    "{data_type}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                      "dataType" => "data_type",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "data_type",
                        "orig" => "data_type",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "invoices",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "connection_id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "connection_id",
                      "data_type",
                    ],
                  },
                },
              ],
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/data/history",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "history",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "data",
                    "history",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "-modifiedDate",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 100,
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "order_by",
                      "page",
                      "page_size",
                      "query",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/data/history/{datasetId}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "history",
                    },
                    {
                      "var" => "dataset_id",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "data",
                    "history",
                    "{dataset_id}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                      "datasetId" => "dataset_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "dataset_id",
                        "orig" => "dataset_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "dataset_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.company",
              ],
              [
                "$.main.kit.entity.company",
              ],
              [
                "$.main.kit.entity.company",
              ],
              [
                "$.main.kit.entity.company",
                "$.main.kit.entity.connection",
                "$.main.kit.entity.custom",
              ],
            ],
          },
        },
        "push" => {
          "fields" => [
            {
              "name" => "changes",
              "title" => "Changes",
              "type" => "`$ARRAY`",
              "short" => "Contains a single entry that communicates which record has changed and the manner in which it changed.",
            },
            {
              "name" => "companyId",
              "title" => "Company Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Unique identifier for your SMB in Codat.",
              "format" => "uuid",
            },
            {
              "name" => "completedOnUtc",
              "title" => "Completed On Utc",
              "type" => "`$STRING`",
              "short" => "The datetime when the push was completed, null if Pending.",
            },
            {
              "name" => "dataConnectionKey",
              "title" => "Data Connection Key",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Unique identifier for a company's data connection.",
              "format" => "uuid",
            },
            {
              "name" => "dataType",
              "title" => "Data Type",
              "type" => "`$STRING`",
              "short" => "The type of data being pushed, eg invoices, customers.",
            },
            {
              "name" => "errorMessage",
              "title" => "Error Message",
              "type" => "`$STRING`",
              "short" => "A message about the error.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "links",
              "title" => "Links",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "pageNumber",
              "title" => "Page Number",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Current page number.",
            },
            {
              "name" => "pageSize",
              "title" => "Page Size",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Number of items to return in results array.",
            },
            {
              "name" => "pushOperationKey",
              "title" => "Push Operation Key",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "A unique identifier generated by Codat to represent this single push operation.",
              "format" => "uuid",
            },
            {
              "name" => "requestedOnUtc",
              "title" => "Requested On Utc",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The datetime when the push was requested.",
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The current status of the push operation.",
            },
            {
              "name" => "statusCode",
              "title" => "Status Code",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Push status code.",
            },
            {
              "name" => "timeoutInMinutes",
              "title" => "Timeout In Minutes",
              "type" => "`$INTEGER`",
              "short" => "Number of minutes the push operation must complete within before it times out.",
              "format" => "int32",
            },
            {
              "name" => "timeoutInSeconds",
              "title" => "Timeout In Seconds",
              "type" => "`$INTEGER`",
              "short" => "Number of seconds the push operation must complete within before it times out.",
              "deprecated" => true,
              "format" => "int32",
            },
            {
              "name" => "totalResults",
              "title" => "Total Results",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Total number of items.",
            },
            {
              "name" => "validation",
              "title" => "Validation",
              "type" => "`$OBJECT`",
              "short" => "A human-readable object describing validation decisions Codat has made when pushing data into the platform.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "push",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/push",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "push",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "push",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "-modifiedDate",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 100,
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "order_by",
                      "page",
                      "page_size",
                      "query",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/push/{pushOperationKey}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "push",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "push",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                      "pushOperationKey" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "id",
                        "orig" => "push_operation_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.company",
              ],
            ],
          },
        },
        "push_option" => {
          "fields" => [
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "A description of the property.",
            },
            {
              "name" => "displayName",
              "title" => "Display Name",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The property's display name.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "options",
              "title" => "Options",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "properties",
              "title" => "Properties",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "required",
              "title" => "Required",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "The property is required if `True`.",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The option type.",
            },
            {
              "name" => "validation",
              "title" => "Validation",
              "type" => "`$OBJECT`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "push_option",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/connections/{connectionId}/options/{dataType}",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "connections",
                    },
                    {
                      "var" => "connection_id",
                    },
                    {
                      "lit" => "options",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "connections",
                    "{connection_id}",
                    "options",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                      "connectionId" => "connection_id",
                      "dataType" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "connection_id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      },
                      {
                        "name" => "id",
                        "orig" => "data_type",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "invoices",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "connection_id",
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.company",
                "$.main.kit.entity.connection",
              ],
            ],
          },
        },
        "refresh_data" => {
          "fields" => [],
          "name" => "refresh_data",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/companies/{companyId}/data/all",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "all",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "data",
                    "all",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.company",
              ],
            ],
          },
        },
        "setting" => {
          "fields" => [
            {
              "name" => "apiKey",
              "title" => "Api Key",
              "type" => "`$STRING`",
              "short" => "The API key value used to make authenticated http requests.",
            },
            {
              "name" => "createdDate",
              "title" => "Created Date",
              "type" => "`$STRING`",
              "short" => "The date the entity was created.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the API key.",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "short" => "A meaningful name assigned to the API key.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "setting",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/apiKeys",
                  "segments" => [
                    {
                      "lit" => "apiKeys",
                    },
                  ],
                  "parts" => [
                    "apiKeys",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/profile/syncSettings",
                  "segments" => [
                    {
                      "lit" => "profile",
                    },
                    {
                      "lit" => "syncSettings",
                    },
                  ],
                  "parts" => [
                    "profile",
                    "syncSettings",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/apiKeys",
                  "segments" => [
                    {
                      "lit" => "apiKeys",
                    },
                  ],
                  "parts" => [
                    "apiKeys",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/apiKeys/{apiKeyId}",
                  "segments" => [
                    {
                      "lit" => "apiKeys",
                    },
                    {
                      "var" => "api_key_id",
                    },
                  ],
                  "parts" => [
                    "apiKeys",
                    "{api_key_id}",
                  ],
                  "rename" => {
                    "param" => {
                      "apiKeyId" => "api_key_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "api_key_id",
                        "orig" => "api_key_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "api_key_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "supplemental_data" => {
          "fields" => [
            {
              "name" => "supplementalDataConfig",
              "title" => "Supplemental Data Config",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "supplemental_data",
          "op" => {
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig",
                  "segments" => [
                    {
                      "lit" => "integrations",
                    },
                    {
                      "var" => "platform_key",
                    },
                    {
                      "lit" => "dataTypes",
                    },
                    {
                      "var" => "data_type_id",
                    },
                    {
                      "lit" => "supplementalDataConfig",
                    },
                  ],
                  "parts" => [
                    "integrations",
                    "{platform_key}",
                    "dataTypes",
                    "{data_type_id}",
                    "supplementalDataConfig",
                  ],
                  "rename" => {
                    "param" => {
                      "dataType" => "data_type_id",
                      "platformKey" => "platform_key",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "data_type_id",
                        "orig" => "data_type",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "invoices",
                      },
                      {
                        "name" => "platform_key",
                        "orig" => "platform_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "gbol",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "data_type_id",
                      "platform_key",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.integration",
              ],
            ],
          },
        },
        "supplemental_data_config" => {
          "fields" => [
            {
              "name" => "dataSource",
              "title" => "Data Source",
              "type" => "`$STRING`",
              "short" => "The underlying endpoint of the source system which the configuration is targeting.",
            },
            {
              "name" => "pullData",
              "title" => "Pull Data",
              "type" => "`$OBJECT`",
              "short" => "The additional properties that are required when pulling records.",
            },
            {
              "name" => "pushData",
              "title" => "Push Data",
              "type" => "`$OBJECT`",
              "short" => "The additional properties that are required to create and/or update records.",
            },
          ],
          "name" => "supplemental_data_config",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig",
                  "segments" => [
                    {
                      "lit" => "integrations",
                    },
                    {
                      "var" => "platform_key",
                    },
                    {
                      "lit" => "dataTypes",
                    },
                    {
                      "var" => "data_type_id",
                    },
                    {
                      "lit" => "supplementalDataConfig",
                    },
                  ],
                  "parts" => [
                    "integrations",
                    "{platform_key}",
                    "dataTypes",
                    "{data_type_id}",
                    "supplementalDataConfig",
                  ],
                  "rename" => {
                    "param" => {
                      "dataType" => "data_type_id",
                      "platformKey" => "platform_key",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.supplementalDataConfig`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "data_type_id",
                        "orig" => "data_type",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "invoices",
                      },
                      {
                        "name" => "platform_key",
                        "orig" => "platform_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "gbol",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "data_type_id",
                      "platform_key",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.integration",
              ],
            ],
          },
        },
        "sync_setting" => {
          "fields" => [
            {
              "name" => "dataType",
              "title" => "Data Type",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Available data types",
            },
            {
              "name" => "fetchOnFirstLink",
              "title" => "Fetch On First Link",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Whether this data type should be queued after a company has authorized a connection.",
            },
            {
              "name" => "isLocked",
              "title" => "Is Locked",
              "type" => "`$BOOLEAN`",
              "short" => "`True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked.",
            },
            {
              "name" => "monthsToSync",
              "title" => "Months To Sync",
              "type" => "`$INTEGER`",
              "short" => "Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only.",
            },
            {
              "name" => "syncFromUtc",
              "title" => "Sync From Utc",
              "type" => "`$STRING`",
              "short" => "Date from which data should be fetched.",
            },
            {
              "name" => "syncFromWindow",
              "title" => "Sync From Window",
              "type" => "`$INTEGER`",
              "short" => "Number of months of data to be fetched.",
            },
            {
              "name" => "syncOrder",
              "title" => "Sync Order",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "The sync in which data types are queued for a sync.",
            },
            {
              "name" => "syncSchedule",
              "title" => "Sync Schedule",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Number of hours after which this data type should be refreshed.",
            },
          ],
          "name" => "sync_setting",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/profile/syncSettings",
                  "segments" => [
                    {
                      "lit" => "profile",
                    },
                    {
                      "lit" => "syncSettings",
                    },
                  ],
                  "parts" => [
                    "profile",
                    "syncSettings",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.settings`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "validation" => {
          "fields" => [
            {
              "name" => "errors",
              "title" => "Errors",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "warnings",
              "title" => "Warnings",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "validation",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/companies/{companyId}/sync/{datasetId}/validation",
                  "segments" => [
                    {
                      "lit" => "companies",
                    },
                    {
                      "var" => "company_id",
                    },
                    {
                      "lit" => "sync",
                    },
                    {
                      "var" => "sync_id",
                    },
                    {
                      "lit" => "validation",
                    },
                  ],
                  "parts" => [
                    "companies",
                    "{company_id}",
                    "sync",
                    "{sync_id}",
                    "validation",
                  ],
                  "rename" => {
                    "param" => {
                      "companyId" => "company_id",
                      "datasetId" => "sync_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "company_id",
                        "orig" => "company_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                      {
                        "name" => "sync_id",
                        "orig" => "dataset_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "company_id",
                      "sync_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.company",
              ],
            ],
          },
        },
        "webhook" => {
          "fields" => [
            {
              "name" => "companyTags",
              "title" => "Company Tags",
              "type" => "`$ARRAY`",
              "short" => "Company tags provide an additional way to filter messages, independent of event types.",
            },
            {
              "name" => "disabled",
              "title" => "Disabled",
              "type" => "`$BOOLEAN`",
              "short" => "Flag that enables or disables the endpoint from receiving events.",
            },
            {
              "name" => "eventTypes",
              "title" => "Event Types",
              "type" => "`$ARRAY`",
              "short" => "An array of event types the webhook consumer subscribes to.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the webhook consumer.",
              "format" => "uuid",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "short" => "The URL that will consume webhook events dispatched by Codat.",
              "format" => "uri",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "webhook",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/webhooks",
                  "segments" => [
                    {
                      "lit" => "webhooks",
                    },
                  ],
                  "parts" => [
                    "webhooks",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/webhooks",
                  "segments" => [
                    {
                      "lit" => "webhooks",
                    },
                  ],
                  "parts" => [
                    "webhooks",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/webhooks/{webhookId}",
                  "segments" => [
                    {
                      "lit" => "webhooks",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "webhooks",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "webhookId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "webhook_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8a210b68-6988-11ed-a1eb-0242ac120002",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "webhook_zapier_key" => {
          "fields" => [
            {
              "name" => "key",
              "title" => "Key",
              "type" => "`$STRING`",
            },
          ],
          "name" => "webhook_zapier_key",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/webhooks/integrationKeys/zapier",
                  "segments" => [
                    {
                      "lit" => "webhooks",
                    },
                    {
                      "lit" => "integrationKeys",
                    },
                    {
                      "lit" => "zapier",
                    },
                  ],
                  "parts" => [
                    "webhooks",
                    "integrationKeys",
                    "zapier",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CodatplatformFeatures.make_feature(name)
  end
end
