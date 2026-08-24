# Codatplatform SDK configuration


def make_config():
    return {
        "main": {
            "name": "Codatplatform",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.codat.io",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "access_token": {},
                "all": {},
                "api_key": {},
                "branding": {},
                "company": {},
                "company_access_token": {},
                "connection": {},
                "connection_management_access_token": {},
                "connection_management_allowed_origin": {},
                "custom": {},
                "data_status": {},
                "data_type": {},
                "history": {},
                "integration": {},
                "option": {},
                "product": {},
                "profile": {},
                "pull_operation": {},
                "push": {},
                "push_option": {},
                "queue": {},
                "refresh_data": {},
                "setting": {},
                "supplemental_data": {},
                "supplemental_data_config": {},
                "sync": {},
                "sync_setting": {},
                "validation": {},
                "webhook": {},
                "webhook_zapier_key": {},
            },
        },
        "entity": {
      "access_token": {
        "fields": [],
        "name": "access_token",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "company",
            ],
          ],
        },
      },
      "all": {
        "fields": [],
        "name": "all",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "company",
            ],
          ],
        },
      },
      "api_key": {
        "fields": [],
        "name": "api_key",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "branding": {
        "fields": [
          {
            "active": True,
            "name": "button",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "logo",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "sourceId",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "branding",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "gbol",
                      "kind": "param",
                      "name": "platform_key",
                      "orig": "platform_key",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/integrations/{platformKey}/branding",
                "parts": [
                  "integrations",
                  "{platform_key}",
                  "branding",
                ],
                "rename": {
                  "param": {
                    "platformKey": "platform_key",
                  },
                },
                "select": {
                  "exist": [
                    "platform_key",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "integration",
            ],
          ],
        },
      },
      "company": {
        "fields": [
          {
            "active": True,
            "name": "created",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "createdByUserName",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "dataConnections",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "lastSync",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "links",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "patch": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "pageNumber",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "pageSize",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "products",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "redirect",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "referenceParentCompany",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "referenceSubsidiaryCompanies",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "results",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "tags",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "totalResults",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 16,
          },
        ],
        "name": "company",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "product_identifier",
                      "orig": "product_identifier",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/companies/{companyId}/products/{productIdentifier}/refresh",
                "parts": [
                  "companies",
                  "{id}",
                  "products",
                  "{product_identifier}",
                  "refresh",
                ],
                "rename": {
                  "param": {
                    "companyId": "id",
                    "productIdentifier": "product_identifier",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "product_identifier",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/companies",
                "parts": [
                  "companies",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "-modifiedDate",
                      "kind": "query",
                      "name": "order_by",
                      "orig": "order_by",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "region=uk && team=invoice-finance",
                      "kind": "query",
                      "name": "tag",
                      "orig": "tag",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies",
                "parts": [
                  "companies",
                ],
                "select": {
                  "exist": [
                    "order_by",
                    "page",
                    "page_size",
                    "query",
                    "tag",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}",
                "parts": [
                  "companies",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "companyId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/companies/{companyId}",
                "parts": [
                  "companies",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "companyId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "product_identifier",
                      "orig": "product_identifier",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/companies/{companyId}/products/{productIdentifier}",
                "parts": [
                  "companies",
                  "{id}",
                  "products",
                  "{product_identifier}",
                ],
                "rename": {
                  "param": {
                    "companyId": "id",
                    "productIdentifier": "product_identifier",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "product_identifier",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/companies/{companyId}",
                "parts": [
                  "companies",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "companyId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "product_identifier",
                      "orig": "product_identifier",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/companies/{companyId}/products/{productIdentifier}",
                "parts": [
                  "companies",
                  "{id}",
                  "products",
                  "{product_identifier}",
                ],
                "rename": {
                  "param": {
                    "companyId": "id",
                    "productIdentifier": "product_identifier",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "product_identifier",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/companies/{companyId}",
                "parts": [
                  "companies",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "companyId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "product",
            ],
          ],
        },
      },
      "company_access_token": {
        "fields": [
          {
            "active": True,
            "name": "accessToken",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "expiresIn",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "tokenType",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "company_access_token",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/accessToken",
                "parts": [
                  "companies",
                  "{id}",
                  "accessToken",
                ],
                "rename": {
                  "param": {
                    "companyId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "connection": {
        "fields": [
          {
            "active": True,
            "name": "connectionInfo",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "dataConnectionErrors",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "integrationId",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "integrationKey",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "lastSync",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "linkUrl",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "links",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "pageNumber",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "pageSize",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "platformKey",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "platformName",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "results",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "sourceId",
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "sourceType",
            "req": True,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "status",
            "op": {
              "patch": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "totalResults",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 17,
          },
        ],
        "name": "connection",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/companies/{companyId}/connections",
                "parts": [
                  "companies",
                  "{company_id}",
                  "connections",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "-modifiedDate",
                      "kind": "query",
                      "name": "order_by",
                      "orig": "order_by",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/connections",
                "parts": [
                  "companies",
                  "{company_id}",
                  "connections",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "order_by",
                    "page",
                    "page_size",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      "kind": "param",
                      "name": "id",
                      "orig": "connection_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/connections/{connectionId}",
                "parts": [
                  "companies",
                  "{company_id}",
                  "connections",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                    "connectionId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      "kind": "param",
                      "name": "id",
                      "orig": "connection_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/companies/{companyId}/connections/{connectionId}",
                "parts": [
                  "companies",
                  "{company_id}",
                  "connections",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                    "connectionId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "status": "`reqdata.status`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      "kind": "param",
                      "name": "id",
                      "orig": "connection_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/companies/{companyId}/connections/{connectionId}",
                "parts": [
                  "companies",
                  "{company_id}",
                  "connections",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                    "connectionId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      "kind": "param",
                      "name": "id",
                      "orig": "connection_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/companies/{companyId}/connections/{connectionId}/authorization",
                "parts": [
                  "companies",
                  "{company_id}",
                  "connections",
                  "{id}",
                  "authorization",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                    "connectionId": "id",
                  },
                },
                "select": {
                  "$action": "authorization",
                  "exist": [
                    "company_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "company",
            ],
          ],
        },
      },
      "connection_management_access_token": {
        "fields": [
          {
            "active": True,
            "name": "accessToken",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
        ],
        "name": "connection_management_access_token",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/connectionManagement/accessToken",
                "parts": [
                  "companies",
                  "{company_id}",
                  "connectionManagement",
                  "accessToken",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "company",
            ],
          ],
        },
      },
      "connection_management_allowed_origin": {
        "fields": [
          {
            "active": True,
            "name": "allowedOrigins",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "connection_management_allowed_origin",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/connectionManagement/corsSettings",
                "parts": [
                  "connectionManagement",
                  "corsSettings",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/corsSettings",
                "parts": [
                  "corsSettings",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/connectionManagement/corsSettings",
                "parts": [
                  "connectionManagement",
                  "corsSettings",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.allowedOrigins`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/corsSettings",
                "parts": [
                  "corsSettings",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.allowedOrigins`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "custom": {
        "fields": [
          {
            "active": True,
            "name": "dataSource",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "keyBy",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "pageNumber",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "pageSize",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "requiredData",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "results",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "sourceModifiedDate",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "totalResults",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
        ],
        "name": "custom",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      "kind": "param",
                      "name": "connection_id",
                      "orig": "connection_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "example": "DynamicsPurchaseOrders",
                      "kind": "param",
                      "name": "id",
                      "orig": "custom_data_identifier",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}",
                "parts": [
                  "companies",
                  "{company_id}",
                  "connections",
                  "{connection_id}",
                  "data",
                  "custom",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                    "connectionId": "connection_id",
                    "customDataIdentifier": "id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "connection_id",
                    "id",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "DynamicsPurchaseOrders",
                      "kind": "param",
                      "name": "id",
                      "orig": "custom_data_identifier",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "gbol",
                      "kind": "param",
                      "name": "platform_key",
                      "orig": "platform_key",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}",
                "parts": [
                  "integrations",
                  "{platform_key}",
                  "dataTypes",
                  "custom",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "customDataIdentifier": "id",
                    "platformKey": "platform_key",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "platform_key",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "DynamicsPurchaseOrders",
                      "kind": "param",
                      "name": "id",
                      "orig": "custom_data_identifier",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "gbol",
                      "kind": "param",
                      "name": "platform_key",
                      "orig": "platform_key",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}",
                "parts": [
                  "integrations",
                  "{platform_key}",
                  "dataTypes",
                  "custom",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "customDataIdentifier": "id",
                    "platformKey": "platform_key",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "platform_key",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "integration",
            ],
            [
              "company",
              "connection",
            ],
          ],
        },
      },
      "data_status": {
        "fields": [
          {
            "active": True,
            "name": "accountTransactions",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "balanceSheet",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "bankAccounts",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "bankTransactions",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "bankingaccountBalances",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "bankingaccounts",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "bankingtransactionCategories",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "bankingtransactions",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "billCreditNotes",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "billPayments",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "bills",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "cashFlowStatement",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "chartOfAccounts",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "commercecompanyInfo",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "commercecustomers",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "commercedisputes",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "commercelocations",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "commerceorders",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "commercepaymentMethods",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "commercepayments",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "commerceproductCategories",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "commerceproducts",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "commercetaxComponents",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "commercetransactions",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "company",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "creditNotes",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "customers",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "directCosts",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "directIncomes",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "invoices",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "itemReceipts",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "items",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "journalEntries",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "journals",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "paymentMethods",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "payments",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "profitAndLoss",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "purchaseOrders",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "salesOrders",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 38,
          },
          {
            "active": True,
            "name": "suppliers",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 39,
          },
          {
            "active": True,
            "name": "taxRates",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 40,
          },
          {
            "active": True,
            "name": "trackingCategories",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 41,
          },
          {
            "active": True,
            "name": "transfers",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 42,
          },
        ],
        "name": "data_status",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/dataStatus",
                "parts": [
                  "companies",
                  "{company_id}",
                  "dataStatus",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "company",
            ],
          ],
        },
      },
      "data_type": {
        "fields": [],
        "name": "data_type",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "integration",
            ],
          ],
        },
      },
      "history": {
        "fields": [],
        "name": "history",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "company",
            ],
          ],
        },
      },
      "integration": {
        "fields": [
          {
            "active": True,
            "name": "dataProvidedBy",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "datatypeFeatures",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "enabled",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "integrationId",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "isBeta",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "isOfflineConnector",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "key",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "links",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "logoUrl",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "pageNumber",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "pageSize",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "results",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "sourceId",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "sourceType",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "totalResults",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 15,
          },
        ],
        "name": "integration",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "-modifiedDate",
                      "kind": "query",
                      "name": "order_by",
                      "orig": "order_by",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/integrations",
                "parts": [
                  "integrations",
                ],
                "select": {
                  "exist": [
                    "order_by",
                    "page",
                    "page_size",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "gbol",
                      "kind": "param",
                      "name": "id",
                      "orig": "platform_key",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/integrations/{platformKey}",
                "parts": [
                  "integrations",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "platformKey": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "integration",
            ],
          ],
        },
      },
      "option": {
        "fields": [],
        "name": "option",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "company",
              "connection",
            ],
          ],
        },
      },
      "product": {
        "fields": [],
        "name": "product",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "company",
            ],
            [
              "company",
              "product",
            ],
          ],
        },
      },
      "profile": {
        "fields": [
          {
            "active": True,
            "name": "apiKey",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "confirmCompanyName",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "iconUrl",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "logoUrl",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "redirectUrl",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "whiteListUrls",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 6,
          },
        ],
        "name": "profile",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/profile",
                "parts": [
                  "profile",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.whiteListUrls`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "PUT",
                "orig": "/profile",
                "parts": [
                  "profile",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "pull_operation": {
        "fields": [
          {
            "active": True,
            "name": "companyId",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "completed",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "connectionId",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "dataType",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "errorMessage",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "isCompleted",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "isErrored",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "links",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "pageNumber",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "pageSize",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "progress",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "requested",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "results",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "statusDescription",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "totalResults",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 16,
          },
        ],
        "name": "pull_operation",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      "kind": "param",
                      "name": "connection_id",
                      "orig": "connection_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "example": "DynamicsPurchaseOrders",
                      "kind": "param",
                      "name": "custom_data_identifier",
                      "orig": "custom_data_identifier",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 2,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}",
                "parts": [
                  "companies",
                  "{company_id}",
                  "connections",
                  "{connection_id}",
                  "data",
                  "queue",
                  "custom",
                  "{custom_data_identifier}",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                    "connectionId": "connection_id",
                    "customDataIdentifier": "custom_data_identifier",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "connection_id",
                    "custom_data_identifier",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "invoices",
                      "kind": "param",
                      "name": "data_type",
                      "orig": "data_type",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "connection_id",
                      "orig": "connection_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/companies/{companyId}/data/queue/{dataType}",
                "parts": [
                  "companies",
                  "{company_id}",
                  "data",
                  "queue",
                  "{data_type}",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                    "dataType": "data_type",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "connection_id",
                    "data_type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "-modifiedDate",
                      "kind": "query",
                      "name": "order_by",
                      "orig": "order_by",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/data/history",
                "parts": [
                  "companies",
                  "{company_id}",
                  "data",
                  "history",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "order_by",
                    "page",
                    "page_size",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "dataset_id",
                      "orig": "dataset_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/data/history/{datasetId}",
                "parts": [
                  "companies",
                  "{company_id}",
                  "data",
                  "history",
                  "{dataset_id}",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                    "datasetId": "dataset_id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "dataset_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "company",
            ],
            [
              "company",
              "history",
            ],
            [
              "company",
              "queue",
            ],
            [
              "company",
              "connection",
              "custom",
            ],
          ],
        },
      },
      "push": {
        "fields": [
          {
            "active": True,
            "name": "changes",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "companyId",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "completedOnUtc",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "dataConnectionKey",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "dataType",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "errorMessage",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "links",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "pageNumber",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "pageSize",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "pushOperationKey",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "requestedOnUtc",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "results",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "statusCode",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "timeoutInMinutes",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "timeoutInSeconds",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "totalResults",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "validation",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 17,
          },
        ],
        "name": "push",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "-modifiedDate",
                      "kind": "query",
                      "name": "order_by",
                      "orig": "order_by",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/push",
                "parts": [
                  "companies",
                  "{company_id}",
                  "push",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "order_by",
                    "page",
                    "page_size",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "push_operation_key",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/push/{pushOperationKey}",
                "parts": [
                  "companies",
                  "{company_id}",
                  "push",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                    "pushOperationKey": "id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "company",
            ],
          ],
        },
      },
      "push_option": {
        "fields": [
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "displayName",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "options",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "properties",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "required",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "validation",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 6,
          },
        ],
        "name": "push_option",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                      "kind": "param",
                      "name": "connection_id",
                      "orig": "connection_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "example": "invoices",
                      "kind": "param",
                      "name": "id",
                      "orig": "data_type",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 2,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/connections/{connectionId}/options/{dataType}",
                "parts": [
                  "companies",
                  "{company_id}",
                  "connections",
                  "{connection_id}",
                  "options",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                    "connectionId": "connection_id",
                    "dataType": "id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "connection_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "company",
              "connection",
            ],
          ],
        },
      },
      "queue": {
        "fields": [],
        "name": "queue",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "company",
            ],
          ],
        },
      },
      "refresh_data": {
        "fields": [],
        "name": "refresh_data",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/companies/{companyId}/data/all",
                "parts": [
                  "companies",
                  "{company_id}",
                  "data",
                  "all",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "company",
            ],
          ],
        },
      },
      "setting": {
        "fields": [
          {
            "active": True,
            "name": "apiKey",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "createdDate",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "setting",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/apiKeys",
                "parts": [
                  "apiKeys",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/profile/syncSettings",
                "parts": [
                  "profile",
                  "syncSettings",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/apiKeys",
                "parts": [
                  "apiKeys",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "api_key_id",
                      "orig": "api_key_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/apiKeys/{apiKeyId}",
                "parts": [
                  "apiKeys",
                  "{api_key_id}",
                ],
                "rename": {
                  "param": {
                    "apiKeyId": "api_key_id",
                  },
                },
                "select": {
                  "exist": [
                    "api_key_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [
            [
              "api_key",
            ],
          ],
        },
      },
      "supplemental_data": {
        "fields": [
          {
            "active": True,
            "name": "supplementalDataConfig",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
        ],
        "name": "supplemental_data",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "invoices",
                      "kind": "param",
                      "name": "data_type_id",
                      "orig": "data_type",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "gbol",
                      "kind": "param",
                      "name": "platform_key",
                      "orig": "platform_key",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig",
                "parts": [
                  "integrations",
                  "{platform_key}",
                  "dataTypes",
                  "{data_type_id}",
                  "supplementalDataConfig",
                ],
                "rename": {
                  "param": {
                    "dataType": "data_type_id",
                    "platformKey": "platform_key",
                  },
                },
                "select": {
                  "exist": [
                    "data_type_id",
                    "platform_key",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "integration",
              "data_type",
            ],
          ],
        },
      },
      "supplemental_data_config": {
        "fields": [
          {
            "active": True,
            "name": "dataSource",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "pullData",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "pushData",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
        ],
        "name": "supplemental_data_config",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "invoices",
                      "kind": "param",
                      "name": "data_type_id",
                      "orig": "data_type",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "gbol",
                      "kind": "param",
                      "name": "platform_key",
                      "orig": "platform_key",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig",
                "parts": [
                  "integrations",
                  "{platform_key}",
                  "dataTypes",
                  "{data_type_id}",
                  "supplementalDataConfig",
                ],
                "rename": {
                  "param": {
                    "dataType": "data_type_id",
                    "platformKey": "platform_key",
                  },
                },
                "select": {
                  "exist": [
                    "data_type_id",
                    "platform_key",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.supplementalDataConfig`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "integration",
              "data_type",
            ],
          ],
        },
      },
      "sync": {
        "fields": [],
        "name": "sync",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "company",
            ],
          ],
        },
      },
      "sync_setting": {
        "fields": [
          {
            "active": True,
            "name": "dataType",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "fetchOnFirstLink",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "isLocked",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "monthsToSync",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "syncFromUtc",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "syncFromWindow",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "syncOrder",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "syncSchedule",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
        ],
        "name": "sync_setting",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/profile/syncSettings",
                "parts": [
                  "profile",
                  "syncSettings",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.settings`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "validation": {
        "fields": [
          {
            "active": True,
            "name": "errors",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "warnings",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
        ],
        "name": "validation",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "company_id",
                      "orig": "company_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "sync_id",
                      "orig": "dataset_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/companies/{companyId}/sync/{datasetId}/validation",
                "parts": [
                  "companies",
                  "{company_id}",
                  "sync",
                  "{sync_id}",
                  "validation",
                ],
                "rename": {
                  "param": {
                    "companyId": "company_id",
                    "datasetId": "sync_id",
                  },
                },
                "select": {
                  "exist": [
                    "company_id",
                    "sync_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "company",
              "sync",
            ],
          ],
        },
      },
      "webhook": {
        "fields": [
          {
            "active": True,
            "name": "companyTags",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "disabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "eventTypes",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "webhook",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/webhooks",
                "parts": [
                  "webhooks",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks",
                "parts": [
                  "webhooks",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                      "kind": "param",
                      "name": "id",
                      "orig": "webhook_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/webhooks/{webhookId}",
                "parts": [
                  "webhooks",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "webhookId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "webhook_zapier_key": {
        "fields": [
          {
            "active": True,
            "name": "key",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
        ],
        "name": "webhook_zapier_key",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/webhooks/integrationKeys/zapier",
                "parts": [
                  "webhooks",
                  "integrationKeys",
                  "zapier",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
