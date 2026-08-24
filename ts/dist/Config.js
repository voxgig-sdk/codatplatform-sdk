"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Codatplatform',
        slug: "codatplatform",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            }
        },
    };
    options = {
        base: "https://api.codat.io",
        auth: {
            prefix: '',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            access_token: {},
            all: {},
            api_key: {},
            branding: {},
            company: {},
            company_access_token: {},
            connection: {},
            connection_management_access_token: {},
            connection_management_allowed_origin: {},
            custom: {},
            data_status: {},
            data_type: {},
            history: {},
            integration: {},
            option: {},
            product: {},
            profile: {},
            pull_operation: {},
            push: {},
            push_option: {},
            queue: {},
            refresh_data: {},
            setting: {},
            supplemental_data: {},
            supplemental_data_config: {},
            sync: {},
            sync_setting: {},
            validation: {},
            webhook: {},
            webhook_zapier_key: {},
        }
    };
    entity = {
        "access_token": {
            "fields": [],
            "name": "access_token",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ]
                ]
            }
        },
        "all": {
            "fields": [],
            "name": "all",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ]
                ]
            }
        },
        "api_key": {
            "fields": [],
            "name": "api_key",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "branding": {
            "fields": [
                {
                    "name": "button",
                    "short": "Button branding references.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "logo",
                    "short": "Logo branding references.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "sourceId",
                    "short": "A source-specific ID used to distinguish between different sources originating from the same data connection.",
                    "type": "`$STRING`"
                }
            ],
            "name": "branding",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "gbol",
                                        "kind": "param",
                                        "name": "platform_key",
                                        "orig": "platform_key",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/integrations/{platformKey}/branding",
                            "parts": [
                                "integrations",
                                "{platform_key}",
                                "branding"
                            ],
                            "rename": {
                                "param": {
                                    "platformKey": "platform_key"
                                }
                            },
                            "select": {
                                "exist": [
                                    "platform_key"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "integration"
                    ]
                ]
            }
        },
        "company": {
            "fields": [
                {
                    "name": "created",
                    "short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
                    "type": "`$STRING`"
                },
                {
                    "name": "createdByUserName",
                    "short": "Name of user that created the company in Codat.",
                    "type": "`$STRING`"
                },
                {
                    "name": "dataConnections",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "description",
                    "short": "Additional information about the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "Unique identifier for your SMB in Codat.",
                    "type": "`$STRING`"
                },
                {
                    "name": "lastSync",
                    "short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
                    "type": "`$STRING`"
                },
                {
                    "name": "links",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "name",
                    "op": {
                        "patch": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The name of the company",
                    "type": "`$STRING`"
                },
                {
                    "name": "pageNumber",
                    "req": true,
                    "short": "Current page number.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pageSize",
                    "req": true,
                    "short": "Number of items to return in results array.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "products",
                    "short": "An array of products that are currently enabled for the company.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "redirect",
                    "req": true,
                    "short": "The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "referenceParentCompany",
                    "short": "The parent entity or controlling organization of this company.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "referenceSubsidiaryCompanies",
                    "short": "A list of subsidiary companies owned or controlled by this entity.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "tags",
                    "short": "A collection of user-defined key-value pairs that store custom metadata against the company.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "totalResults",
                    "req": true,
                    "short": "Total number of items.",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "company",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "product_identifier",
                                        "orig": "product_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/companies/{companyId}/products/{productIdentifier}/refresh",
                            "parts": [
                                "companies",
                                "{id}",
                                "products",
                                "{product_identifier}",
                                "refresh"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "id",
                                    "productIdentifier": "product_identifier"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "product_identifier"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/companies",
                            "parts": [
                                "companies"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "-modifiedDate",
                                        "kind": "query",
                                        "name": "order_by",
                                        "orig": "order_by",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "region=uk && team=invoice-finance",
                                        "kind": "query",
                                        "name": "tag",
                                        "orig": "tag",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies",
                            "parts": [
                                "companies"
                            ],
                            "select": {
                                "exist": [
                                    "order_by",
                                    "page",
                                    "page_size",
                                    "query",
                                    "tag"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{companyId}",
                            "parts": [
                                "companies",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "patch": {
                    "input": "data",
                    "name": "patch",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/companies/{companyId}",
                            "parts": [
                                "companies",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "product_identifier",
                                        "orig": "product_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/companies/{companyId}/products/{productIdentifier}",
                            "parts": [
                                "companies",
                                "{id}",
                                "products",
                                "{product_identifier}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "id",
                                    "productIdentifier": "product_identifier"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "product_identifier"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/companies/{companyId}",
                            "parts": [
                                "companies",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "product_identifier",
                                        "orig": "product_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/companies/{companyId}/products/{productIdentifier}",
                            "parts": [
                                "companies",
                                "{id}",
                                "products",
                                "{product_identifier}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "id",
                                    "productIdentifier": "product_identifier"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "product_identifier"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/companies/{companyId}",
                            "parts": [
                                "companies",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "product"
                    ]
                ]
            }
        },
        "company_access_token": {
            "fields": [
                {
                    "name": "accessToken",
                    "req": true,
                    "short": "The access token for the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "expiresIn",
                    "req": true,
                    "short": "The number of seconds until the access token expires.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tokenType",
                    "req": true,
                    "short": "The type of token.",
                    "type": "`$STRING`"
                }
            ],
            "name": "company_access_token",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{companyId}/accessToken",
                            "parts": [
                                "companies",
                                "{id}",
                                "accessToken"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "connection": {
            "fields": [
                {
                    "name": "connectionInfo",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "created",
                    "req": true,
                    "short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
                    "type": "`$STRING`"
                },
                {
                    "name": "dataConnectionErrors",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "Unique identifier for a company's data connection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "integrationId",
                    "req": true,
                    "short": "A Codat ID representing the integration.",
                    "type": "`$STRING`"
                },
                {
                    "name": "integrationKey",
                    "req": true,
                    "short": "A unique four-character ID that identifies the platform of the company's data connection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "lastSync",
                    "short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
                    "type": "`$STRING`"
                },
                {
                    "name": "linkUrl",
                    "req": true,
                    "short": "The link URL your customers can use to authorize access to their business application.",
                    "type": "`$STRING`"
                },
                {
                    "name": "links",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "pageNumber",
                    "req": true,
                    "short": "Current page number.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pageSize",
                    "req": true,
                    "short": "Number of items to return in results array.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "platformKey",
                    "short": "A unique 4-letter key to represent a platform in each integration.",
                    "type": "`$STRING`"
                },
                {
                    "name": "platformName",
                    "req": true,
                    "short": "Name of integration connected to company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "sourceId",
                    "req": true,
                    "short": "A source-specific ID used to distinguish between different sources originating from the same data connection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "sourceType",
                    "req": true,
                    "short": "The type of platform of the connection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "op": {
                        "patch": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The current authorization status of the data connection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "totalResults",
                    "req": true,
                    "short": "Total number of items.",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "connection",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/companies/{companyId}/connections",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "connections"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "-modifiedDate",
                                        "kind": "query",
                                        "name": "order_by",
                                        "orig": "order_by",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{companyId}/connections",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "connections"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "order_by",
                                    "page",
                                    "page_size",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "connection_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{companyId}/connections/{connectionId}",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "connections",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id",
                                    "connectionId": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "patch": {
                    "input": "data",
                    "name": "patch",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "connection_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/companies/{companyId}/connections/{connectionId}",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "connections",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id",
                                    "connectionId": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": {
                                    "status": "`reqdata.status`"
                                },
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "connection_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/companies/{companyId}/connections/{connectionId}",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "connections",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id",
                                    "connectionId": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "connection_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/companies/{companyId}/connections/{connectionId}/authorization",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "connections",
                                "{id}",
                                "authorization"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id",
                                    "connectionId": "id"
                                }
                            },
                            "select": {
                                "$action": "authorization",
                                "exist": [
                                    "company_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ]
                ]
            }
        },
        "connection_management_access_token": {
            "fields": [
                {
                    "name": "accessToken",
                    "short": "Access token that allows SMBs to manage connections that have access to their data.",
                    "type": "`$STRING`"
                }
            ],
            "name": "connection_management_access_token",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{companyId}/connectionManagement/accessToken",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "connectionManagement",
                                "accessToken"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ]
                ]
            }
        },
        "connection_management_allowed_origin": {
            "fields": [
                {
                    "name": "allowedOrigins",
                    "short": "An array of allowed origins (i.e.",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "connection_management_allowed_origin",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/connectionManagement/corsSettings",
                            "parts": [
                                "connectionManagement",
                                "corsSettings"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/corsSettings",
                            "parts": [
                                "corsSettings"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/connectionManagement/corsSettings",
                            "parts": [
                                "connectionManagement",
                                "corsSettings"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.allowedOrigins`"
                            }
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/corsSettings",
                            "parts": [
                                "corsSettings"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.allowedOrigins`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "custom": {
            "fields": [
                {
                    "name": "dataSource",
                    "short": "Underlying endpoint of the source platform that will serve as a data source for the custom data type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "keyBy",
                    "short": "An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "pageNumber",
                    "short": "Current page number.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pageSize",
                    "short": "Number of items to return in results array.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "requiredData",
                    "short": "Properties required to be fetched from the underlying platform for the custom data type that is being configured.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "sourceModifiedDate",
                    "short": "Property in the source platform nominated by the client that defines the date when a record was last modified there.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "totalResults",
                    "short": "Total number of items.",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "custom",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                                        "kind": "param",
                                        "name": "connection_id",
                                        "orig": "connection_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "DynamicsPurchaseOrders",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "custom_data_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`"
                                    }
                                ]
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
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id",
                                    "connectionId": "connection_id",
                                    "customDataIdentifier": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "connection_id",
                                    "id",
                                    "page",
                                    "page_size"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "DynamicsPurchaseOrders",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "custom_data_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "gbol",
                                        "kind": "param",
                                        "name": "platform_key",
                                        "orig": "platform_key",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}",
                            "parts": [
                                "integrations",
                                "{platform_key}",
                                "dataTypes",
                                "custom",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "customDataIdentifier": "id",
                                    "platformKey": "platform_key"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "platform_key"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "DynamicsPurchaseOrders",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "custom_data_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "gbol",
                                        "kind": "param",
                                        "name": "platform_key",
                                        "orig": "platform_key",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}",
                            "parts": [
                                "integrations",
                                "{platform_key}",
                                "dataTypes",
                                "custom",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "customDataIdentifier": "id",
                                    "platformKey": "platform_key"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "platform_key"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "integration"
                    ],
                    [
                        "company",
                        "connection"
                    ]
                ]
            }
        },
        "data_status": {
            "fields": [
                {
                    "name": "accountTransactions",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "balanceSheet",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "bankAccounts",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "bankTransactions",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "bankingaccountBalances",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "bankingaccounts",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "bankingtransactionCategories",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "bankingtransactions",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "billCreditNotes",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "billPayments",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "bills",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "cashFlowStatement",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "chartOfAccounts",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commercecompanyInfo",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commercecustomers",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commercedisputes",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commercelocations",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commerceorders",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commercepaymentMethods",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commercepayments",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commerceproductCategories",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commerceproducts",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commercetaxComponents",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commercetransactions",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "company",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "creditNotes",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "customers",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "directCosts",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "directIncomes",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "invoices",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "itemReceipts",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "items",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "journalEntries",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "journals",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "paymentMethods",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "payments",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "profitAndLoss",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "purchaseOrders",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "salesOrders",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "suppliers",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "taxRates",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "trackingCategories",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "transfers",
                    "req": true,
                    "short": "Describes the state of data in the Codat cache for a company and data type",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "data_status",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{companyId}/dataStatus",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "dataStatus"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ]
                ]
            }
        },
        "data_type": {
            "fields": [],
            "name": "data_type",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "integration"
                    ]
                ]
            }
        },
        "history": {
            "fields": [],
            "name": "history",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ]
                ]
            }
        },
        "integration": {
            "fields": [
                {
                    "name": "dataProvidedBy",
                    "short": "The name of the data provider.",
                    "type": "`$STRING`"
                },
                {
                    "name": "datatypeFeatures",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "enabled",
                    "req": true,
                    "short": "Whether this integration is enabled for your customers to use.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "integrationId",
                    "short": "A Codat ID representing the integration.",
                    "type": "`$STRING`"
                },
                {
                    "name": "isBeta",
                    "short": "`True` if the integration is currently in beta release.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "isOfflineConnector",
                    "short": "`True` if the integration is to an application installed and run locally on an SMBs computer.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "key",
                    "req": true,
                    "short": "A unique 4-letter key to represent a platform in each integration.",
                    "type": "`$STRING`"
                },
                {
                    "name": "links",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "logoUrl",
                    "req": true,
                    "short": "Static url for integration's logo.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "Name of integration.",
                    "type": "`$STRING`"
                },
                {
                    "name": "pageNumber",
                    "req": true,
                    "short": "Current page number.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pageSize",
                    "req": true,
                    "short": "Number of items to return in results array.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "sourceId",
                    "short": "A source-specific ID used to distinguish between different sources originating from the same data connection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "sourceType",
                    "short": "The type of platform of the connection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "totalResults",
                    "req": true,
                    "short": "Total number of items.",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "integration",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "-modifiedDate",
                                        "kind": "query",
                                        "name": "order_by",
                                        "orig": "order_by",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/integrations",
                            "parts": [
                                "integrations"
                            ],
                            "select": {
                                "exist": [
                                    "order_by",
                                    "page",
                                    "page_size",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "gbol",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "platform_key",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/integrations/{platformKey}",
                            "parts": [
                                "integrations",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "platformKey": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "integration"
                    ]
                ]
            }
        },
        "option": {
            "fields": [],
            "name": "option",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "company",
                        "connection"
                    ]
                ]
            }
        },
        "product": {
            "fields": [],
            "name": "product",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ],
                    [
                        "company",
                        "product"
                    ]
                ]
            }
        },
        "profile": {
            "fields": [
                {
                    "name": "apiKey",
                    "short": "The API key for this Codat instance.",
                    "type": "`$STRING`"
                },
                {
                    "name": "confirmCompanyName",
                    "short": "`True` if the company name has been confirmed.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "iconUrl",
                    "short": "Static url to your organization's icon.",
                    "type": "`$STRING`"
                },
                {
                    "name": "logoUrl",
                    "short": "Static url to your organization's logo.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name given to the instance.",
                    "type": "`$STRING`"
                },
                {
                    "name": "redirectUrl",
                    "req": true,
                    "short": "The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB.",
                    "type": "`$STRING`"
                },
                {
                    "name": "whiteListUrls",
                    "short": "A list of urls that are allowed to communicate with Codat.",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "profile",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/profile",
                            "parts": [
                                "profile"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.whiteListUrls`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/profile",
                            "parts": [
                                "profile"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "pull_operation": {
            "fields": [
                {
                    "name": "companyId",
                    "req": true,
                    "short": "Unique identifier of the company associated to this pull operation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "completed",
                    "short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
                    "type": "`$STRING`"
                },
                {
                    "name": "connectionId",
                    "req": true,
                    "short": "Unique identifier of the connection associated to this pull operation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "dataType",
                    "req": true,
                    "short": "The data type you are requesting in a pull operation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "errorMessage",
                    "short": "A message about a transient or persistent error returned by Codat or the source platform.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "Unique identifier of the pull operation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "isCompleted",
                    "req": true,
                    "short": "`True` if the pull operation is completed successfully.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "isErrored",
                    "req": true,
                    "short": "`True` if the pull operation entered an error state.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "links",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "pageNumber",
                    "req": true,
                    "short": "Current page number.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pageSize",
                    "req": true,
                    "short": "Number of items to return in results array.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "progress",
                    "req": true,
                    "short": "An integer signifying the progress of the pull operation.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "requested",
                    "req": true,
                    "short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
                    "type": "`$STRING`"
                },
                {
                    "name": "results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "status",
                    "req": true,
                    "short": "The current status of the dataset.",
                    "type": "`$STRING`"
                },
                {
                    "name": "statusDescription",
                    "short": "Additional information about the dataset status.",
                    "type": "`$STRING`"
                },
                {
                    "name": "totalResults",
                    "req": true,
                    "short": "Total number of items.",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "pull_operation",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                                        "kind": "param",
                                        "name": "connection_id",
                                        "orig": "connection_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "DynamicsPurchaseOrders",
                                        "kind": "param",
                                        "name": "custom_data_identifier",
                                        "orig": "custom_data_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
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
                                "{custom_data_identifier}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id",
                                    "connectionId": "connection_id",
                                    "customDataIdentifier": "custom_data_identifier"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "connection_id",
                                    "custom_data_identifier"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "invoices",
                                        "kind": "param",
                                        "name": "data_type",
                                        "orig": "data_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "connection_id",
                                        "orig": "connection_id",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/companies/{companyId}/data/queue/{dataType}",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "data",
                                "queue",
                                "{data_type}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id",
                                    "dataType": "data_type"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "connection_id",
                                    "data_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "-modifiedDate",
                                        "kind": "query",
                                        "name": "order_by",
                                        "orig": "order_by",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{companyId}/data/history",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "data",
                                "history"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "order_by",
                                    "page",
                                    "page_size",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "dataset_id",
                                        "orig": "dataset_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{companyId}/data/history/{datasetId}",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "data",
                                "history",
                                "{dataset_id}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id",
                                    "datasetId": "dataset_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "dataset_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ],
                    [
                        "company",
                        "history"
                    ],
                    [
                        "company",
                        "queue"
                    ],
                    [
                        "company",
                        "connection",
                        "custom"
                    ]
                ]
            }
        },
        "push": {
            "fields": [
                {
                    "name": "changes",
                    "short": "Contains a single entry that communicates which record has changed and the manner in which it changed.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "companyId",
                    "req": true,
                    "short": "Unique identifier for your SMB in Codat.",
                    "type": "`$STRING`"
                },
                {
                    "name": "completedOnUtc",
                    "short": "The datetime when the push was completed, null if Pending.",
                    "type": "`$STRING`"
                },
                {
                    "name": "dataConnectionKey",
                    "req": true,
                    "short": "Unique identifier for a company's data connection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "dataType",
                    "short": "The type of data being pushed, eg invoices, customers.",
                    "type": "`$STRING`"
                },
                {
                    "name": "errorMessage",
                    "short": "A message about the error.",
                    "type": "`$STRING`"
                },
                {
                    "name": "links",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "pageNumber",
                    "req": true,
                    "short": "Current page number.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pageSize",
                    "req": true,
                    "short": "Number of items to return in results array.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pushOperationKey",
                    "req": true,
                    "short": "A unique identifier generated by Codat to represent this single push operation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "requestedOnUtc",
                    "req": true,
                    "short": "The datetime when the push was requested.",
                    "type": "`$STRING`"
                },
                {
                    "name": "results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "status",
                    "req": true,
                    "short": "The current status of the push operation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "statusCode",
                    "req": true,
                    "short": "Push status code.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "timeoutInMinutes",
                    "short": "Number of minutes the push operation must complete within before it times out.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "timeoutInSeconds",
                    "short": "Number of seconds the push operation must complete within before it times out.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "totalResults",
                    "req": true,
                    "short": "Total number of items.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "validation",
                    "short": "A human-readable object describing validation decisions Codat has made when pushing data into the platform.",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "push",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "-modifiedDate",
                                        "kind": "query",
                                        "name": "order_by",
                                        "orig": "order_by",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{companyId}/push",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "push"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "order_by",
                                    "page",
                                    "page_size",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "push_operation_key",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{companyId}/push/{pushOperationKey}",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "push",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id",
                                    "pushOperationKey": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ]
                ]
            }
        },
        "push_option": {
            "fields": [
                {
                    "name": "description",
                    "short": "A description of the property.",
                    "type": "`$STRING`"
                },
                {
                    "name": "displayName",
                    "req": true,
                    "short": "The property's display name.",
                    "type": "`$STRING`"
                },
                {
                    "name": "options",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "properties",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "required",
                    "req": true,
                    "short": "The property is required if `True`.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "type",
                    "req": true,
                    "short": "The option type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "validation",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "push_option",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
                                        "kind": "param",
                                        "name": "connection_id",
                                        "orig": "connection_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "invoices",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "data_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
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
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id",
                                    "connectionId": "connection_id",
                                    "dataType": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "connection_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "company",
                        "connection"
                    ]
                ]
            }
        },
        "queue": {
            "fields": [],
            "name": "queue",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ]
                ]
            }
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
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/companies/{companyId}/data/all",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "data",
                                "all"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ]
                ]
            }
        },
        "setting": {
            "fields": [
                {
                    "name": "apiKey",
                    "short": "The API key value used to make authenticated http requests.",
                    "type": "`$STRING`"
                },
                {
                    "name": "createdDate",
                    "short": "The date the entity was created.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the API key.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "A meaningful name assigned to the API key.",
                    "type": "`$STRING`"
                }
            ],
            "name": "setting",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/apiKeys",
                            "parts": [
                                "apiKeys"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/profile/syncSettings",
                            "parts": [
                                "profile",
                                "syncSettings"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/apiKeys",
                            "parts": [
                                "apiKeys"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "api_key_id",
                                        "orig": "api_key_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/apiKeys/{apiKeyId}",
                            "parts": [
                                "apiKeys",
                                "{api_key_id}"
                            ],
                            "rename": {
                                "param": {
                                    "apiKeyId": "api_key_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "api_key_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "api_key"
                    ]
                ]
            }
        },
        "supplemental_data": {
            "fields": [
                {
                    "name": "supplementalDataConfig",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "supplemental_data",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "invoices",
                                        "kind": "param",
                                        "name": "data_type_id",
                                        "orig": "data_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "gbol",
                                        "kind": "param",
                                        "name": "platform_key",
                                        "orig": "platform_key",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig",
                            "parts": [
                                "integrations",
                                "{platform_key}",
                                "dataTypes",
                                "{data_type_id}",
                                "supplementalDataConfig"
                            ],
                            "rename": {
                                "param": {
                                    "dataType": "data_type_id",
                                    "platformKey": "platform_key"
                                }
                            },
                            "select": {
                                "exist": [
                                    "data_type_id",
                                    "platform_key"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "integration",
                        "data_type"
                    ]
                ]
            }
        },
        "supplemental_data_config": {
            "fields": [
                {
                    "name": "dataSource",
                    "short": "The underlying endpoint of the source system which the configuration is targeting.",
                    "type": "`$STRING`"
                },
                {
                    "name": "pullData",
                    "short": "The additional properties that are required when pulling records.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "pushData",
                    "short": "The additional properties that are required to create and/or update records.",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "supplemental_data_config",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "invoices",
                                        "kind": "param",
                                        "name": "data_type_id",
                                        "orig": "data_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "gbol",
                                        "kind": "param",
                                        "name": "platform_key",
                                        "orig": "platform_key",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig",
                            "parts": [
                                "integrations",
                                "{platform_key}",
                                "dataTypes",
                                "{data_type_id}",
                                "supplementalDataConfig"
                            ],
                            "rename": {
                                "param": {
                                    "dataType": "data_type_id",
                                    "platformKey": "platform_key"
                                }
                            },
                            "select": {
                                "exist": [
                                    "data_type_id",
                                    "platform_key"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.supplementalDataConfig`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "integration",
                        "data_type"
                    ]
                ]
            }
        },
        "sync": {
            "fields": [],
            "name": "sync",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ]
                ]
            }
        },
        "sync_setting": {
            "fields": [
                {
                    "name": "dataType",
                    "req": true,
                    "short": "Available data types",
                    "type": "`$STRING`"
                },
                {
                    "name": "fetchOnFirstLink",
                    "req": true,
                    "short": "Whether this data type should be queued after a company has authorized a connection.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "isLocked",
                    "short": "`True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "monthsToSync",
                    "short": "Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "syncFromUtc",
                    "short": "Date from which data should be fetched.",
                    "type": "`$STRING`"
                },
                {
                    "name": "syncFromWindow",
                    "short": "Number of months of data to be fetched.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "syncOrder",
                    "req": true,
                    "short": "The sync in which data types are queued for a sync.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "syncSchedule",
                    "req": true,
                    "short": "Number of hours after which this data type should be refreshed.",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "sync_setting",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/profile/syncSettings",
                            "parts": [
                                "profile",
                                "syncSettings"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.settings`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "validation": {
            "fields": [
                {
                    "name": "errors",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "warnings",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "validation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "sync_id",
                                        "orig": "dataset_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{companyId}/sync/{datasetId}/validation",
                            "parts": [
                                "companies",
                                "{company_id}",
                                "sync",
                                "{sync_id}",
                                "validation"
                            ],
                            "rename": {
                                "param": {
                                    "companyId": "company_id",
                                    "datasetId": "sync_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "company_id",
                                    "sync_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "company",
                        "sync"
                    ]
                ]
            }
        },
        "webhook": {
            "fields": [
                {
                    "name": "companyTags",
                    "short": "Company tags provide an additional way to filter messages, independent of event types.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "disabled",
                    "short": "Flag that enables or disables the endpoint from receiving events.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "eventTypes",
                    "short": "An array of event types the webhook consumer subscribes to.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the webhook consumer.",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "short": "The URL that will consume webhook events dispatched by Codat.",
                    "type": "`$STRING`"
                }
            ],
            "name": "webhook",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/webhooks",
                            "parts": [
                                "webhooks"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/webhooks",
                            "parts": [
                                "webhooks"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "8a210b68-6988-11ed-a1eb-0242ac120002",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "webhook_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/webhooks/{webhookId}",
                            "parts": [
                                "webhooks",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "webhookId": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "webhook_zapier_key": {
            "fields": [
                {
                    "name": "key",
                    "type": "`$STRING`"
                }
            ],
            "name": "webhook_zapier_key",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/webhooks/integrationKeys/zapier",
                            "parts": [
                                "webhooks",
                                "integrationKeys",
                                "zapier"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map