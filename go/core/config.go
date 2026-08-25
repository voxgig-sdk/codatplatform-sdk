package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Codatplatform",
			"slug": "codatplatform",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.codat.io",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"access_token": map[string]any{},
				"all": map[string]any{},
				"api_key": map[string]any{},
				"branding": map[string]any{},
				"company": map[string]any{},
				"company_access_token": map[string]any{},
				"connection": map[string]any{},
				"connection_management_access_token": map[string]any{},
				"connection_management_allowed_origin": map[string]any{},
				"custom": map[string]any{},
				"data_status": map[string]any{},
				"data_type": map[string]any{},
				"history": map[string]any{},
				"integration": map[string]any{},
				"option": map[string]any{},
				"product": map[string]any{},
				"profile": map[string]any{},
				"pull_operation": map[string]any{},
				"push": map[string]any{},
				"push_option": map[string]any{},
				"queue": map[string]any{},
				"refresh_data": map[string]any{},
				"setting": map[string]any{},
				"supplemental_data": map[string]any{},
				"supplemental_data_config": map[string]any{},
				"sync": map[string]any{},
				"sync_setting": map[string]any{},
				"validation": map[string]any{},
				"webhook": map[string]any{},
				"webhook_zapier_key": map[string]any{},
			},
		},
		"entity": map[string]any{
			"access_token": map[string]any{
				"fields": []any{},
				"name": "access_token",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
					},
				},
			},
			"all": map[string]any{
				"fields": []any{},
				"name": "all",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
					},
				},
			},
			"api_key": map[string]any{
				"fields": []any{},
				"name": "api_key",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"branding": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "button",
						"short": "Button branding references.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "logo",
						"short": "Logo branding references.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sourceId",
						"short": "A source-specific ID used to distinguish between different sources originating from the same data connection.",
						"type": "`$STRING`",
					},
				},
				"name": "branding",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "gbol",
											"kind": "param",
											"name": "platform_key",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/integrations/{platformKey}/branding",
								"parts": []any{
									"integrations",
									"{platform_key}",
									"branding",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"platformKey": "platform_key",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"platform_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"integration",
						},
					},
				},
			},
			"company": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created",
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdByUserName",
						"short": "Name of user that created the company in Codat.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dataConnections",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"short": "Additional information about the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for your SMB in Codat.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastSync",
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"patch": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the company",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pageNumber",
						"req": true,
						"short": "Current page number.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pageSize",
						"req": true,
						"short": "Number of items to return in results array.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "products",
						"short": "An array of products that are currently enabled for the company.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "redirect",
						"req": true,
						"short": "The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceParentCompany",
						"short": "The parent entity or controlling organization of this company.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "referenceSubsidiaryCompanies",
						"short": "A list of subsidiary companies owned or controlled by this entity.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tags",
						"short": "A collection of user-defined key-value pairs that store custom metadata against the company.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "totalResults",
						"req": true,
						"short": "Total number of items.",
						"type": "`$INTEGER`",
					},
				},
				"name": "company",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "product_identifier",
											"orig": "product_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/companies/{companyId}/products/{productIdentifier}/refresh",
								"parts": []any{
									"companies",
									"{id}",
									"products",
									"{product_identifier}",
									"refresh",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
										"productIdentifier": "product_identifier",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"product_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/companies",
								"parts": []any{
									"companies",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "-modifiedDate",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "region=uk && team=invoice-finance",
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies",
								"parts": []any{
									"companies",
								},
								"select": map[string]any{
									"exist": []any{
										"order_by",
										"page",
										"page_size",
										"query",
										"tag",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}",
								"parts": []any{
									"companies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/companies/{companyId}",
								"parts": []any{
									"companies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "product_identifier",
											"orig": "product_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/companies/{companyId}/products/{productIdentifier}",
								"parts": []any{
									"companies",
									"{id}",
									"products",
									"{product_identifier}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
										"productIdentifier": "product_identifier",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"product_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/companies/{companyId}",
								"parts": []any{
									"companies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "product_identifier",
											"orig": "product_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/companies/{companyId}/products/{productIdentifier}",
								"parts": []any{
									"companies",
									"{id}",
									"products",
									"{product_identifier}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
										"productIdentifier": "product_identifier",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"product_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/companies/{companyId}",
								"parts": []any{
									"companies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"product",
						},
					},
				},
			},
			"company_access_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accessToken",
						"req": true,
						"short": "The access token for the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expiresIn",
						"req": true,
						"short": "The number of seconds until the access token expires.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tokenType",
						"req": true,
						"short": "The type of token.",
						"type": "`$STRING`",
					},
				},
				"name": "company_access_token",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/accessToken",
								"parts": []any{
									"companies",
									"{id}",
									"accessToken",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"connection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "connectionInfo",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "created",
						"req": true,
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dataConnectionErrors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for a company's data connection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "integrationId",
						"req": true,
						"short": "A Codat ID representing the integration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "integrationKey",
						"req": true,
						"short": "A unique four-character ID that identifies the platform of the company's data connection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastSync",
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "linkUrl",
						"req": true,
						"short": "The link URL your customers can use to authorize access to their business application.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pageNumber",
						"req": true,
						"short": "Current page number.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pageSize",
						"req": true,
						"short": "Number of items to return in results array.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "platformKey",
						"short": "A unique 4-letter key to represent a platform in each integration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "platformName",
						"req": true,
						"short": "Name of integration connected to company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sourceId",
						"req": true,
						"short": "A source-specific ID used to distinguish between different sources originating from the same data connection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceType",
						"req": true,
						"short": "The type of platform of the connection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"op": map[string]any{
							"patch": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The current authorization status of the data connection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalResults",
						"req": true,
						"short": "Total number of items.",
						"type": "`$INTEGER`",
					},
				},
				"name": "connection",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/companies/{companyId}/connections",
								"parts": []any{
									"companies",
									"{company_id}",
									"connections",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "-modifiedDate",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/connections",
								"parts": []any{
									"companies",
									"{company_id}",
									"connections",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"order_by",
										"page",
										"page_size",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/connections/{connectionId}",
								"parts": []any{
									"companies",
									"{company_id}",
									"connections",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
										"connectionId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/companies/{companyId}/connections/{connectionId}",
								"parts": []any{
									"companies",
									"{company_id}",
									"connections",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
										"connectionId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"status": "`reqdata.status`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/companies/{companyId}/connections/{connectionId}",
								"parts": []any{
									"companies",
									"{company_id}",
									"connections",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
										"connectionId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/companies/{companyId}/connections/{connectionId}/authorization",
								"parts": []any{
									"companies",
									"{company_id}",
									"connections",
									"{id}",
									"authorization",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
										"connectionId": "id",
									},
								},
								"select": map[string]any{
									"$action": "authorization",
									"exist": []any{
										"company_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
					},
				},
			},
			"connection_management_access_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accessToken",
						"short": "Access token that allows SMBs to manage connections that have access to their data.",
						"type": "`$STRING`",
					},
				},
				"name": "connection_management_access_token",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/connectionManagement/accessToken",
								"parts": []any{
									"companies",
									"{company_id}",
									"connectionManagement",
									"accessToken",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
					},
				},
			},
			"connection_management_allowed_origin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowedOrigins",
						"short": "An array of allowed origins (i.e.",
						"type": "`$ARRAY`",
					},
				},
				"name": "connection_management_allowed_origin",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/connectionManagement/corsSettings",
								"parts": []any{
									"connectionManagement",
									"corsSettings",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/corsSettings",
								"parts": []any{
									"corsSettings",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/connectionManagement/corsSettings",
								"parts": []any{
									"connectionManagement",
									"corsSettings",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.allowedOrigins`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/corsSettings",
								"parts": []any{
									"corsSettings",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.allowedOrigins`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dataSource",
						"short": "Underlying endpoint of the source platform that will serve as a data source for the custom data type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "keyBy",
						"short": "An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pageNumber",
						"short": "Current page number.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pageSize",
						"short": "Number of items to return in results array.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "requiredData",
						"short": "Properties required to be fetched from the underlying platform for the custom data type that is being configured.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sourceModifiedDate",
						"short": "Property in the source platform nominated by the client that defines the date when a record was last modified there.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "totalResults",
						"short": "Total number of items.",
						"type": "`$INTEGER`",
					},
				},
				"name": "custom",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "connection_id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "DynamicsPurchaseOrders",
											"kind": "param",
											"name": "id",
											"orig": "custom_data_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}",
								"parts": []any{
									"companies",
									"{company_id}",
									"connections",
									"{connection_id}",
									"data",
									"custom",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
										"connectionId": "connection_id",
										"customDataIdentifier": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"connection_id",
										"id",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "DynamicsPurchaseOrders",
											"kind": "param",
											"name": "id",
											"orig": "custom_data_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gbol",
											"kind": "param",
											"name": "platform_key",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}",
								"parts": []any{
									"integrations",
									"{platform_key}",
									"dataTypes",
									"custom",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"customDataIdentifier": "id",
										"platformKey": "platform_key",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"platform_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "DynamicsPurchaseOrders",
											"kind": "param",
											"name": "id",
											"orig": "custom_data_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gbol",
											"kind": "param",
											"name": "platform_key",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}",
								"parts": []any{
									"integrations",
									"{platform_key}",
									"dataTypes",
									"custom",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"customDataIdentifier": "id",
										"platformKey": "platform_key",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"platform_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"integration",
						},
						[]any{
							"company",
							"connection",
						},
					},
				},
			},
			"data_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountTransactions",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "balanceSheet",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "bankAccounts",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "bankTransactions",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "bankingaccountBalances",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "bankingaccounts",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "bankingtransactionCategories",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "bankingtransactions",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "billCreditNotes",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "billPayments",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "bills",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "cashFlowStatement",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "chartOfAccounts",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commercecompanyInfo",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commercecustomers",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commercedisputes",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commercelocations",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commerceorders",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commercepaymentMethods",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commercepayments",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commerceproductCategories",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commerceproducts",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commercetaxComponents",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commercetransactions",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "company",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "creditNotes",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "customers",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "directCosts",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "directIncomes",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "invoices",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "itemReceipts",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "items",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "journalEntries",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "journals",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "paymentMethods",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "payments",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "profitAndLoss",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "purchaseOrders",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "salesOrders",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "suppliers",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "taxRates",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "trackingCategories",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "transfers",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
						"type": "`$OBJECT`",
					},
				},
				"name": "data_status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/dataStatus",
								"parts": []any{
									"companies",
									"{company_id}",
									"dataStatus",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
					},
				},
			},
			"data_type": map[string]any{
				"fields": []any{},
				"name": "data_type",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"integration",
						},
					},
				},
			},
			"history": map[string]any{
				"fields": []any{},
				"name": "history",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
					},
				},
			},
			"integration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dataProvidedBy",
						"short": "The name of the data provider.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "datatypeFeatures",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "enabled",
						"req": true,
						"short": "Whether this integration is enabled for your customers to use.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "integrationId",
						"short": "A Codat ID representing the integration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isBeta",
						"short": "`True` if the integration is currently in beta release.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isOfflineConnector",
						"short": "`True` if the integration is to an application installed and run locally on an SMBs computer.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "key",
						"req": true,
						"short": "A unique 4-letter key to represent a platform in each integration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "logoUrl",
						"req": true,
						"short": "Static url for integration's logo.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Name of integration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pageNumber",
						"req": true,
						"short": "Current page number.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pageSize",
						"req": true,
						"short": "Number of items to return in results array.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sourceId",
						"short": "A source-specific ID used to distinguish between different sources originating from the same data connection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceType",
						"short": "The type of platform of the connection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalResults",
						"req": true,
						"short": "Total number of items.",
						"type": "`$INTEGER`",
					},
				},
				"name": "integration",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "-modifiedDate",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/integrations",
								"parts": []any{
									"integrations",
								},
								"select": map[string]any{
									"exist": []any{
										"order_by",
										"page",
										"page_size",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "gbol",
											"kind": "param",
											"name": "id",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/integrations/{platformKey}",
								"parts": []any{
									"integrations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"platformKey": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"integration",
						},
					},
				},
			},
			"option": map[string]any{
				"fields": []any{},
				"name": "option",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
							"connection",
						},
					},
				},
			},
			"product": map[string]any{
				"fields": []any{},
				"name": "product",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
						[]any{
							"company",
							"product",
						},
					},
				},
			},
			"profile": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiKey",
						"short": "The API key for this Codat instance.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "confirmCompanyName",
						"short": "`True` if the company name has been confirmed.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "iconUrl",
						"short": "Static url to your organization's icon.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logoUrl",
						"short": "Static url to your organization's logo.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name given to the instance.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "redirectUrl",
						"req": true,
						"short": "The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "whiteListUrls",
						"short": "A list of urls that are allowed to communicate with Codat.",
						"type": "`$ARRAY`",
					},
				},
				"name": "profile",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/profile",
								"parts": []any{
									"profile",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.whiteListUrls`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PUT",
								"orig": "/profile",
								"parts": []any{
									"profile",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"pull_operation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "companyId",
						"req": true,
						"short": "Unique identifier of the company associated to this pull operation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "completed",
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "connectionId",
						"req": true,
						"short": "Unique identifier of the connection associated to this pull operation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dataType",
						"req": true,
						"short": "The data type you are requesting in a pull operation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errorMessage",
						"short": "A message about a transient or persistent error returned by Codat or the source platform.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier of the pull operation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isCompleted",
						"req": true,
						"short": "`True` if the pull operation is completed successfully.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isErrored",
						"req": true,
						"short": "`True` if the pull operation entered an error state.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "links",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pageNumber",
						"req": true,
						"short": "Current page number.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pageSize",
						"req": true,
						"short": "Number of items to return in results array.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "progress",
						"req": true,
						"short": "An integer signifying the progress of the pull operation.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "requested",
						"req": true,
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the dataset.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "statusDescription",
						"short": "Additional information about the dataset status.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalResults",
						"req": true,
						"short": "Total number of items.",
						"type": "`$INTEGER`",
					},
				},
				"name": "pull_operation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "connection_id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "DynamicsPurchaseOrders",
											"kind": "param",
											"name": "custom_data_identifier",
											"orig": "custom_data_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}",
								"parts": []any{
									"companies",
									"{company_id}",
									"connections",
									"{connection_id}",
									"data",
									"queue",
									"custom",
									"{custom_data_identifier}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
										"connectionId": "connection_id",
										"customDataIdentifier": "custom_data_identifier",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"connection_id",
										"custom_data_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "invoices",
											"kind": "param",
											"name": "data_type",
											"orig": "data_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "connection_id",
											"orig": "connection_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/companies/{companyId}/data/queue/{dataType}",
								"parts": []any{
									"companies",
									"{company_id}",
									"data",
									"queue",
									"{data_type}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
										"dataType": "data_type",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"connection_id",
										"data_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "-modifiedDate",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/data/history",
								"parts": []any{
									"companies",
									"{company_id}",
									"data",
									"history",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"order_by",
										"page",
										"page_size",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "dataset_id",
											"orig": "dataset_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/data/history/{datasetId}",
								"parts": []any{
									"companies",
									"{company_id}",
									"data",
									"history",
									"{dataset_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
										"datasetId": "dataset_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"dataset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
						[]any{
							"company",
							"history",
						},
						[]any{
							"company",
							"queue",
						},
						[]any{
							"company",
							"connection",
							"custom",
						},
					},
				},
			},
			"push": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "changes",
						"short": "Contains a single entry that communicates which record has changed and the manner in which it changed.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "companyId",
						"req": true,
						"short": "Unique identifier for your SMB in Codat.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "completedOnUtc",
						"short": "The datetime when the push was completed, null if Pending.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dataConnectionKey",
						"req": true,
						"short": "Unique identifier for a company's data connection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dataType",
						"short": "The type of data being pushed, eg invoices, customers.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errorMessage",
						"short": "A message about the error.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pageNumber",
						"req": true,
						"short": "Current page number.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pageSize",
						"req": true,
						"short": "Number of items to return in results array.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pushOperationKey",
						"req": true,
						"short": "A unique identifier generated by Codat to represent this single push operation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "requestedOnUtc",
						"req": true,
						"short": "The datetime when the push was requested.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the push operation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "statusCode",
						"req": true,
						"short": "Push status code.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "timeoutInMinutes",
						"short": "Number of minutes the push operation must complete within before it times out.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "timeoutInSeconds",
						"short": "Number of seconds the push operation must complete within before it times out.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "totalResults",
						"req": true,
						"short": "Total number of items.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "validation",
						"short": "A human-readable object describing validation decisions Codat has made when pushing data into the platform.",
						"type": "`$OBJECT`",
					},
				},
				"name": "push",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "-modifiedDate",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/push",
								"parts": []any{
									"companies",
									"{company_id}",
									"push",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"order_by",
										"page",
										"page_size",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "push_operation_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/push/{pushOperationKey}",
								"parts": []any{
									"companies",
									"{company_id}",
									"push",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
										"pushOperationKey": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
					},
				},
			},
			"push_option": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "A description of the property.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"req": true,
						"short": "The property's display name.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "options",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "properties",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "required",
						"req": true,
						"short": "The property is required if `True`.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The option type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "validation",
						"type": "`$OBJECT`",
					},
				},
				"name": "push_option",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "connection_id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "invoices",
											"kind": "param",
											"name": "id",
											"orig": "data_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/connections/{connectionId}/options/{dataType}",
								"parts": []any{
									"companies",
									"{company_id}",
									"connections",
									"{connection_id}",
									"options",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
										"connectionId": "connection_id",
										"dataType": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"connection_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
							"connection",
						},
					},
				},
			},
			"queue": map[string]any{
				"fields": []any{},
				"name": "queue",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
					},
				},
			},
			"refresh_data": map[string]any{
				"fields": []any{},
				"name": "refresh_data",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/companies/{companyId}/data/all",
								"parts": []any{
									"companies",
									"{company_id}",
									"data",
									"all",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
					},
				},
			},
			"setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiKey",
						"short": "The API key value used to make authenticated http requests.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdDate",
						"short": "The date the entity was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the API key.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "A meaningful name assigned to the API key.",
						"type": "`$STRING`",
					},
				},
				"name": "setting",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/apiKeys",
								"parts": []any{
									"apiKeys",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/profile/syncSettings",
								"parts": []any{
									"profile",
									"syncSettings",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/apiKeys",
								"parts": []any{
									"apiKeys",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "api_key_id",
											"orig": "api_key_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/apiKeys/{apiKeyId}",
								"parts": []any{
									"apiKeys",
									"{api_key_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"apiKeyId": "api_key_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"api_key_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"api_key",
						},
					},
				},
			},
			"supplemental_data": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "supplementalDataConfig",
						"type": "`$OBJECT`",
					},
				},
				"name": "supplemental_data",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "invoices",
											"kind": "param",
											"name": "data_type_id",
											"orig": "data_type",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gbol",
											"kind": "param",
											"name": "platform_key",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig",
								"parts": []any{
									"integrations",
									"{platform_key}",
									"dataTypes",
									"{data_type_id}",
									"supplementalDataConfig",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dataType": "data_type_id",
										"platformKey": "platform_key",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data_type_id",
										"platform_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"integration",
							"data_type",
						},
					},
				},
			},
			"supplemental_data_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dataSource",
						"short": "The underlying endpoint of the source system which the configuration is targeting.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pullData",
						"short": "The additional properties that are required when pulling records.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pushData",
						"short": "The additional properties that are required to create and/or update records.",
						"type": "`$OBJECT`",
					},
				},
				"name": "supplemental_data_config",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "invoices",
											"kind": "param",
											"name": "data_type_id",
											"orig": "data_type",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gbol",
											"kind": "param",
											"name": "platform_key",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig",
								"parts": []any{
									"integrations",
									"{platform_key}",
									"dataTypes",
									"{data_type_id}",
									"supplementalDataConfig",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dataType": "data_type_id",
										"platformKey": "platform_key",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data_type_id",
										"platform_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.supplementalDataConfig`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"integration",
							"data_type",
						},
					},
				},
			},
			"sync": map[string]any{
				"fields": []any{},
				"name": "sync",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
					},
				},
			},
			"sync_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dataType",
						"req": true,
						"short": "Available data types",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fetchOnFirstLink",
						"req": true,
						"short": "Whether this data type should be queued after a company has authorized a connection.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isLocked",
						"short": "`True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "monthsToSync",
						"short": "Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "syncFromUtc",
						"short": "Date from which data should be fetched.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "syncFromWindow",
						"short": "Number of months of data to be fetched.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "syncOrder",
						"req": true,
						"short": "The sync in which data types are queued for a sync.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "syncSchedule",
						"req": true,
						"short": "Number of hours after which this data type should be refreshed.",
						"type": "`$INTEGER`",
					},
				},
				"name": "sync_setting",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/profile/syncSettings",
								"parts": []any{
									"profile",
									"syncSettings",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.settings`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"validation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "warnings",
						"type": "`$ARRAY`",
					},
				},
				"name": "validation",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "sync_id",
											"orig": "dataset_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/sync/{datasetId}/validation",
								"parts": []any{
									"companies",
									"{company_id}",
									"sync",
									"{sync_id}",
									"validation",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "company_id",
										"datasetId": "sync_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"sync_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
							"sync",
						},
					},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "companyTags",
						"short": "Company tags provide an additional way to filter messages, independent of event types.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "disabled",
						"short": "Flag that enables or disables the endpoint from receiving events.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "eventTypes",
						"short": "An array of event types the webhook consumer subscribes to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the webhook consumer.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "The URL that will consume webhook events dispatched by Codat.",
						"type": "`$STRING`",
					},
				},
				"name": "webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks",
								"parts": []any{
									"webhooks",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks",
								"parts": []any{
									"webhooks",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks/{webhookId}",
								"parts": []any{
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhook_zapier_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "key",
						"type": "`$STRING`",
					},
				},
				"name": "webhook_zapier_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/integrationKeys/zapier",
								"parts": []any{
									"webhooks",
									"integrationKeys",
									"zapier",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
