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
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
				"branding": map[string]any{},
				"company": map[string]any{},
				"company_access_token": map[string]any{},
				"connection": map[string]any{},
				"connection_management_access_token": map[string]any{},
				"connection_management_allowed_origin": map[string]any{},
				"custom": map[string]any{},
				"data_status": map[string]any{},
				"integration": map[string]any{},
				"profile": map[string]any{},
				"pull_operation": map[string]any{},
				"push": map[string]any{},
				"push_option": map[string]any{},
				"refresh_data": map[string]any{},
				"setting": map[string]any{},
				"supplemental_data": map[string]any{},
				"supplemental_data_config": map[string]any{},
				"sync_setting": map[string]any{},
				"validation": map[string]any{},
				"webhook": map[string]any{},
				"webhook_zapier_key": map[string]any{},
			},
		},
		"entity": map[string]any{
			"branding": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "button",
						"title": "Button",
						"type": "`$OBJECT`",
						"short": "Button branding references.",
					},
					map[string]any{
						"name": "logo",
						"title": "Logo",
						"type": "`$OBJECT`",
						"short": "Logo branding references.",
					},
					map[string]any{
						"name": "sourceId",
						"title": "Source Id",
						"type": "`$STRING`",
						"short": "A source-specific ID used to distinguish between different sources originating from the same data connection.",
						"format": "uuid",
					},
				},
				"name": "branding",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/integrations/{platformKey}/branding",
								"segments": []any{
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "platform_key",
									},
									map[string]any{
										"lit": "branding",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "platform_key",
											"orig": "platform_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gbol",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"platform_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.integration",
						},
					},
				},
			},
			"company": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$STRING`",
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
					},
					map[string]any{
						"name": "createdByUserName",
						"title": "Created By User Name",
						"type": "`$STRING`",
						"short": "Name of user that created the company in Codat.",
					},
					map[string]any{
						"name": "dataConnections",
						"title": "Data Connections",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Additional information about the company.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for your SMB in Codat.",
						"format": "uuid",
					},
					map[string]any{
						"name": "lastSync",
						"title": "Last Sync",
						"type": "`$STRING`",
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"patch": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The name of the company",
					},
					map[string]any{
						"name": "pageNumber",
						"title": "Page Number",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Current page number.",
					},
					map[string]any{
						"name": "pageSize",
						"title": "Page Size",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of items to return in results array.",
					},
					map[string]any{
						"name": "products",
						"title": "Products",
						"type": "`$ARRAY`",
						"short": "An array of products that are currently enabled for the company.",
					},
					map[string]any{
						"name": "redirect",
						"title": "Redirect",
						"type": "`$STRING`",
						"req": true,
						"short": "The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company.",
						"format": "uri",
					},
					map[string]any{
						"name": "referenceParentCompany",
						"title": "Reference Parent Company",
						"type": "`$OBJECT`",
						"short": "The parent entity or controlling organization of this company.",
					},
					map[string]any{
						"name": "referenceSubsidiaryCompanies",
						"title": "Reference Subsidiary Companies",
						"type": "`$ARRAY`",
						"short": "A list of subsidiary companies owned or controlled by this entity.",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$OBJECT`",
						"short": "A collection of user-defined key-value pairs that store custom metadata against the company.",
					},
					map[string]any{
						"name": "totalResults",
						"title": "Total Results",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total number of items.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "company",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/companies/{companyId}/products/{productIdentifier}/refresh",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_identifier",
									},
									map[string]any{
										"lit": "refresh",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "product_identifier",
											"orig": "product_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "refresh",
									"exist": []any{
										"id",
										"product_identifier",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/companies",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
								},
								"parts": []any{
									"companies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
								},
								"parts": []any{
									"companies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "-modifiedDate",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
										},
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
											"kind": "query",
											"example": "region=uk && team=invoice-finance",
										},
									},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"companies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/companies/{companyId}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"companies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/companies/{companyId}/products/{productIdentifier}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_identifier",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "product_identifier",
											"orig": "product_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"product_identifier",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/companies/{companyId}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"companies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/companies/{companyId}/products/{productIdentifier}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_identifier",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "product_identifier",
											"orig": "product_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"product_identifier",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/companies/{companyId}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"companies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"companyId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"company_access_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accessToken",
						"title": "Access Token",
						"type": "`$STRING`",
						"req": true,
						"short": "The access token for the company.",
					},
					map[string]any{
						"name": "expiresIn",
						"title": "Expires In",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The number of seconds until the access token expires.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tokenType",
						"title": "Token Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of token.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "company_access_token",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/accessToken",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "accessToken",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Connection Info",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$STRING`",
						"req": true,
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
					},
					map[string]any{
						"name": "dataConnectionErrors",
						"title": "Data Connection Errors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for a company's data connection.",
						"format": "uuid",
					},
					map[string]any{
						"name": "integrationId",
						"title": "Integration Id",
						"type": "`$STRING`",
						"req": true,
						"short": "A Codat ID representing the integration.",
						"format": "uuid",
					},
					map[string]any{
						"name": "integrationKey",
						"title": "Integration Key",
						"type": "`$STRING`",
						"req": true,
						"short": "A unique four-character ID that identifies the platform of the company's data connection.",
					},
					map[string]any{
						"name": "lastSync",
						"title": "Last Sync",
						"type": "`$STRING`",
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
					},
					map[string]any{
						"name": "linkUrl",
						"title": "Link Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The link URL your customers can use to authorize access to their business application.",
						"format": "uri",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "pageNumber",
						"title": "Page Number",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Current page number.",
					},
					map[string]any{
						"name": "pageSize",
						"title": "Page Size",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of items to return in results array.",
					},
					map[string]any{
						"name": "platformKey",
						"title": "Platform Key",
						"type": "`$STRING`",
						"short": "A unique 4-letter key to represent a platform in each integration.",
					},
					map[string]any{
						"name": "platformName",
						"title": "Platform Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of integration connected to company.",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sourceId",
						"title": "Source Id",
						"type": "`$STRING`",
						"req": true,
						"short": "A source-specific ID used to distinguish between different sources originating from the same data connection.",
						"format": "uuid",
					},
					map[string]any{
						"name": "sourceType",
						"title": "Source Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of platform of the connection.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The current authorization status of the data connection.",
					},
					map[string]any{
						"name": "totalResults",
						"title": "Total Results",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total number of items.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "connection",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/companies/{companyId}/connections",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "connections",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/connections",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "connections",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
									"query": []any{
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "-modifiedDate",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/connections/{connectionId}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "connections",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/companies/{companyId}/connections/{connectionId}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "connections",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/companies/{companyId}/connections/{connectionId}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "connections",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": map[string]any{
										"status": "`reqdata.status`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/companies/{companyId}/connections/{connectionId}/authorization",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "connections",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "authorization",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
										},
									},
								},
								"select": map[string]any{
									"$action": "authorization",
									"exist": []any{
										"company_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.company",
						},
					},
				},
			},
			"connection_management_access_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accessToken",
						"title": "Access Token",
						"type": "`$STRING`",
						"short": "Access token that allows SMBs to manage connections that have access to their data.",
					},
				},
				"name": "connection_management_access_token",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/connectionManagement/accessToken",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "connectionManagement",
									},
									map[string]any{
										"lit": "accessToken",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.company",
						},
					},
				},
			},
			"connection_management_allowed_origin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowedOrigins",
						"title": "Allowed Origins",
						"type": "`$ARRAY`",
						"short": "An array of allowed origins (i.e.",
					},
				},
				"name": "connection_management_allowed_origin",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/connectionManagement/corsSettings",
								"segments": []any{
									map[string]any{
										"lit": "connectionManagement",
									},
									map[string]any{
										"lit": "corsSettings",
									},
								},
								"parts": []any{
									"connectionManagement",
									"corsSettings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/corsSettings",
								"segments": []any{
									map[string]any{
										"lit": "corsSettings",
									},
								},
								"parts": []any{
									"corsSettings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/connectionManagement/corsSettings",
								"segments": []any{
									map[string]any{
										"lit": "connectionManagement",
									},
									map[string]any{
										"lit": "corsSettings",
									},
								},
								"parts": []any{
									"connectionManagement",
									"corsSettings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.allowedOrigins`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/corsSettings",
								"segments": []any{
									map[string]any{
										"lit": "corsSettings",
									},
								},
								"parts": []any{
									"corsSettings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.allowedOrigins`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Data Source",
						"type": "`$STRING`",
						"short": "Underlying endpoint of the source platform that will serve as a data source for the custom data type.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "keyBy",
						"title": "Key By",
						"type": "`$ARRAY`",
						"short": "An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type.",
					},
					map[string]any{
						"name": "pageNumber",
						"title": "Page Number",
						"type": "`$INTEGER`",
						"short": "Current page number.",
					},
					map[string]any{
						"name": "pageSize",
						"title": "Page Size",
						"type": "`$INTEGER`",
						"short": "Number of items to return in results array.",
					},
					map[string]any{
						"name": "requiredData",
						"title": "Required Data",
						"type": "`$OBJECT`",
						"short": "Properties required to be fetched from the underlying platform for the custom data type that is being configured.",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sourceModifiedDate",
						"title": "Source Modified Date",
						"type": "`$ARRAY`",
						"short": "Property in the source platform nominated by the client that defines the date when a record was last modified there.",
					},
					map[string]any{
						"name": "totalResults",
						"title": "Total Results",
						"type": "`$INTEGER`",
						"short": "Total number of items.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "connections",
									},
									map[string]any{
										"var": "connection_id",
									},
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "custom",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "connection_id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
										},
										map[string]any{
											"name": "id",
											"orig": "custom_data_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "DynamicsPurchaseOrders",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}",
								"segments": []any{
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "platform_key",
									},
									map[string]any{
										"lit": "dataTypes",
									},
									map[string]any{
										"lit": "custom",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "custom_data_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "DynamicsPurchaseOrders",
										},
										map[string]any{
											"name": "platform_key",
											"orig": "platform_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gbol",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"platform_key",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}",
								"segments": []any{
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "platform_key",
									},
									map[string]any{
										"lit": "dataTypes",
									},
									map[string]any{
										"lit": "custom",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "custom_data_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "DynamicsPurchaseOrders",
										},
										map[string]any{
											"name": "platform_key",
											"orig": "platform_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gbol",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"platform_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.integration",
						},
						[]any{
							"$.main.kit.entity.company",
							"$.main.kit.entity.connection",
						},
					},
				},
			},
			"data_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountTransactions",
						"title": "Account Transactions",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "balanceSheet",
						"title": "Balance Sheet",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "bankAccounts",
						"title": "Bank Accounts",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "bankTransactions",
						"title": "Bank Transactions",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "bankingaccountBalances",
						"title": "Bankingaccount Balances",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "bankingaccounts",
						"title": "Bankingaccounts",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "bankingtransactionCategories",
						"title": "Bankingtransaction Categories",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "bankingtransactions",
						"title": "Bankingtransactions",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "billCreditNotes",
						"title": "Bill Credit Notes",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "billPayments",
						"title": "Bill Payments",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "bills",
						"title": "Bills",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "cashFlowStatement",
						"title": "Cash Flow Statement",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "chartOfAccounts",
						"title": "Chart Of Accounts",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "commercecompanyInfo",
						"title": "Commercecompany Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "commercecustomers",
						"title": "Commercecustomers",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "commercedisputes",
						"title": "Commercedisputes",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "commercelocations",
						"title": "Commercelocations",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "commerceorders",
						"title": "Commerceorders",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "commercepaymentMethods",
						"title": "Commercepayment Methods",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "commercepayments",
						"title": "Commercepayments",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "commerceproductCategories",
						"title": "Commerceproduct Categories",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "commerceproducts",
						"title": "Commerceproducts",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "commercetaxComponents",
						"title": "Commercetax Components",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "commercetransactions",
						"title": "Commercetransactions",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "company",
						"title": "Company",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "creditNotes",
						"title": "Credit Notes",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "customers",
						"title": "Customers",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "directCosts",
						"title": "Direct Costs",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "directIncomes",
						"title": "Direct Incomes",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "invoices",
						"title": "Invoices",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "itemReceipts",
						"title": "Item Receipts",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "items",
						"title": "Items",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "journalEntries",
						"title": "Journal Entries",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "journals",
						"title": "Journals",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "paymentMethods",
						"title": "Payment Methods",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "payments",
						"title": "Payments",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "profitAndLoss",
						"title": "Profit And Loss",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "purchaseOrders",
						"title": "Purchase Orders",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "salesOrders",
						"title": "Sales Orders",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "suppliers",
						"title": "Suppliers",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "taxRates",
						"title": "Tax Rates",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "trackingCategories",
						"title": "Tracking Categories",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
					map[string]any{
						"name": "transfers",
						"title": "Transfers",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the state of data in the Codat cache for a company and data type",
					},
				},
				"name": "data_status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/dataStatus",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "dataStatus",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.company",
						},
					},
				},
			},
			"integration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dataProvidedBy",
						"title": "Data Provided By",
						"type": "`$STRING`",
						"short": "The name of the data provider.",
					},
					map[string]any{
						"name": "datatypeFeatures",
						"title": "Datatype Features",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether this integration is enabled for your customers to use.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "integrationId",
						"title": "Integration Id",
						"type": "`$STRING`",
						"short": "A Codat ID representing the integration.",
						"format": "uuid",
					},
					map[string]any{
						"name": "isBeta",
						"title": "Is Beta",
						"type": "`$BOOLEAN`",
						"short": "`True` if the integration is currently in beta release.",
					},
					map[string]any{
						"name": "isOfflineConnector",
						"title": "Is Offline Connector",
						"type": "`$BOOLEAN`",
						"short": "`True` if the integration is to an application installed and run locally on an SMBs computer.",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
						"short": "A unique 4-letter key to represent a platform in each integration.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "logoUrl",
						"title": "Logo Url",
						"type": "`$STRING`",
						"req": true,
						"short": "Static url for integration's logo.",
						"format": "uri",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of integration.",
					},
					map[string]any{
						"name": "pageNumber",
						"title": "Page Number",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Current page number.",
					},
					map[string]any{
						"name": "pageSize",
						"title": "Page Size",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of items to return in results array.",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sourceId",
						"title": "Source Id",
						"type": "`$STRING`",
						"short": "A source-specific ID used to distinguish between different sources originating from the same data connection.",
						"format": "uuid",
					},
					map[string]any{
						"name": "sourceType",
						"title": "Source Type",
						"type": "`$STRING`",
						"short": "The type of platform of the connection.",
					},
					map[string]any{
						"name": "totalResults",
						"title": "Total Results",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total number of items.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "integration",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/integrations",
								"segments": []any{
									map[string]any{
										"lit": "integrations",
									},
								},
								"parts": []any{
									"integrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "-modifiedDate",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"order_by",
										"page",
										"page_size",
										"query",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/integrations/{platformKey}",
								"segments": []any{
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"integrations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"platformKey": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "platform_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gbol",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"profile": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiKey",
						"title": "Api Key",
						"type": "`$STRING`",
						"short": "The API key for this Codat instance.",
						"deprecated": true,
					},
					map[string]any{
						"name": "confirmCompanyName",
						"title": "Confirm Company Name",
						"type": "`$BOOLEAN`",
						"short": "`True` if the company name has been confirmed.",
						"deprecated": true,
					},
					map[string]any{
						"name": "iconUrl",
						"title": "Icon Url",
						"type": "`$STRING`",
						"short": "Static url to your organization's icon.",
					},
					map[string]any{
						"name": "logoUrl",
						"title": "Logo Url",
						"type": "`$STRING`",
						"short": "Static url to your organization's logo.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name given to the instance.",
					},
					map[string]any{
						"name": "redirectUrl",
						"title": "Redirect Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB.",
					},
					map[string]any{
						"name": "whiteListUrls",
						"title": "White List Urls",
						"type": "`$ARRAY`",
						"short": "A list of urls that are allowed to communicate with Codat.",
					},
				},
				"name": "profile",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/profile",
								"segments": []any{
									map[string]any{
										"lit": "profile",
									},
								},
								"parts": []any{
									"profile",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.whiteListUrls`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/profile",
								"segments": []any{
									map[string]any{
										"lit": "profile",
									},
								},
								"parts": []any{
									"profile",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Company Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the company associated to this pull operation.",
						"format": "uuid",
					},
					map[string]any{
						"name": "completed",
						"title": "Completed",
						"type": "`$STRING`",
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
					},
					map[string]any{
						"name": "connectionId",
						"title": "Connection Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the connection associated to this pull operation.",
						"format": "uuid",
					},
					map[string]any{
						"name": "dataType",
						"title": "Data Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The data type you are requesting in a pull operation.",
					},
					map[string]any{
						"name": "errorMessage",
						"title": "Error Message",
						"type": "`$STRING`",
						"short": "A message about a transient or persistent error returned by Codat or the source platform.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the pull operation.",
						"format": "uuid",
					},
					map[string]any{
						"name": "isCompleted",
						"title": "Is Completed",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "`True` if the pull operation is completed successfully.",
					},
					map[string]any{
						"name": "isErrored",
						"title": "Is Errored",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "`True` if the pull operation entered an error state.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "pageNumber",
						"title": "Page Number",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Current page number.",
					},
					map[string]any{
						"name": "pageSize",
						"title": "Page Size",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of items to return in results array.",
					},
					map[string]any{
						"name": "progress",
						"title": "Progress",
						"type": "`$INTEGER`",
						"req": true,
						"short": "An integer signifying the progress of the pull operation.",
					},
					map[string]any{
						"name": "requested",
						"title": "Requested",
						"type": "`$STRING`",
						"req": true,
						"short": "In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the dataset.",
					},
					map[string]any{
						"name": "statusDescription",
						"title": "Status Description",
						"type": "`$STRING`",
						"short": "Additional information about the dataset status.",
					},
					map[string]any{
						"name": "totalResults",
						"title": "Total Results",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total number of items.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "pull_operation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "connections",
									},
									map[string]any{
										"var": "connection_id",
									},
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "queue",
									},
									map[string]any{
										"lit": "custom",
									},
									map[string]any{
										"var": "custom_data_identifier",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "connection_id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
										},
										map[string]any{
											"name": "custom_data_identifier",
											"orig": "custom_data_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "DynamicsPurchaseOrders",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"connection_id",
										"custom_data_identifier",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/companies/{companyId}/data/queue/{dataType}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "queue",
									},
									map[string]any{
										"var": "data_type",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "data_type",
											"orig": "data_type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "invoices",
										},
									},
									"query": []any{
										map[string]any{
											"name": "connection_id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"connection_id",
										"data_type",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/data/history",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "history",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
									"query": []any{
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "-modifiedDate",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/data/history/{datasetId}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "history",
									},
									map[string]any{
										"var": "dataset_id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"dataset_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.company",
						},
						[]any{
							"$.main.kit.entity.company",
						},
						[]any{
							"$.main.kit.entity.company",
						},
						[]any{
							"$.main.kit.entity.company",
							"$.main.kit.entity.connection",
							"$.main.kit.entity.custom",
						},
					},
				},
			},
			"push": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "changes",
						"title": "Changes",
						"type": "`$ARRAY`",
						"short": "Contains a single entry that communicates which record has changed and the manner in which it changed.",
					},
					map[string]any{
						"name": "companyId",
						"title": "Company Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for your SMB in Codat.",
						"format": "uuid",
					},
					map[string]any{
						"name": "completedOnUtc",
						"title": "Completed On Utc",
						"type": "`$STRING`",
						"short": "The datetime when the push was completed, null if Pending.",
					},
					map[string]any{
						"name": "dataConnectionKey",
						"title": "Data Connection Key",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for a company's data connection.",
						"format": "uuid",
					},
					map[string]any{
						"name": "dataType",
						"title": "Data Type",
						"type": "`$STRING`",
						"short": "The type of data being pushed, eg invoices, customers.",
					},
					map[string]any{
						"name": "errorMessage",
						"title": "Error Message",
						"type": "`$STRING`",
						"short": "A message about the error.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "pageNumber",
						"title": "Page Number",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Current page number.",
					},
					map[string]any{
						"name": "pageSize",
						"title": "Page Size",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of items to return in results array.",
					},
					map[string]any{
						"name": "pushOperationKey",
						"title": "Push Operation Key",
						"type": "`$STRING`",
						"req": true,
						"short": "A unique identifier generated by Codat to represent this single push operation.",
						"format": "uuid",
					},
					map[string]any{
						"name": "requestedOnUtc",
						"title": "Requested On Utc",
						"type": "`$STRING`",
						"req": true,
						"short": "The datetime when the push was requested.",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the push operation.",
					},
					map[string]any{
						"name": "statusCode",
						"title": "Status Code",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Push status code.",
					},
					map[string]any{
						"name": "timeoutInMinutes",
						"title": "Timeout In Minutes",
						"type": "`$INTEGER`",
						"short": "Number of minutes the push operation must complete within before it times out.",
						"format": "int32",
					},
					map[string]any{
						"name": "timeoutInSeconds",
						"title": "Timeout In Seconds",
						"type": "`$INTEGER`",
						"short": "Number of seconds the push operation must complete within before it times out.",
						"deprecated": true,
						"format": "int32",
					},
					map[string]any{
						"name": "totalResults",
						"title": "Total Results",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total number of items.",
					},
					map[string]any{
						"name": "validation",
						"title": "Validation",
						"type": "`$OBJECT`",
						"short": "A human-readable object describing validation decisions Codat has made when pushing data into the platform.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "push",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/push",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "push",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
									"query": []any{
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "-modifiedDate",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/push/{pushOperationKey}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "push",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "id",
											"orig": "push_operation_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.company",
						},
					},
				},
			},
			"push_option": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A description of the property.",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The property's display name.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "options",
						"title": "Options",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "properties",
						"title": "Properties",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "required",
						"title": "Required",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "The property is required if `True`.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The option type.",
					},
					map[string]any{
						"name": "validation",
						"title": "Validation",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "push_option",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/connections/{connectionId}/options/{dataType}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "connections",
									},
									map[string]any{
										"var": "connection_id",
									},
									map[string]any{
										"lit": "options",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "connection_id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
										},
										map[string]any{
											"name": "id",
											"orig": "data_type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "invoices",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"connection_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.company",
							"$.main.kit.entity.connection",
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
								"kind": "http",
								"method": "POST",
								"orig": "/companies/{companyId}/data/all",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "all",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.company",
						},
					},
				},
			},
			"setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiKey",
						"title": "Api Key",
						"type": "`$STRING`",
						"short": "The API key value used to make authenticated http requests.",
					},
					map[string]any{
						"name": "createdDate",
						"title": "Created Date",
						"type": "`$STRING`",
						"short": "The date the entity was created.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the API key.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "A meaningful name assigned to the API key.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "setting",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/apiKeys",
								"segments": []any{
									map[string]any{
										"lit": "apiKeys",
									},
								},
								"parts": []any{
									"apiKeys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/profile/syncSettings",
								"segments": []any{
									map[string]any{
										"lit": "profile",
									},
									map[string]any{
										"lit": "syncSettings",
									},
								},
								"parts": []any{
									"profile",
									"syncSettings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/apiKeys",
								"segments": []any{
									map[string]any{
										"lit": "apiKeys",
									},
								},
								"parts": []any{
									"apiKeys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/apiKeys/{apiKeyId}",
								"segments": []any{
									map[string]any{
										"lit": "apiKeys",
									},
									map[string]any{
										"var": "api_key_id",
									},
								},
								"parts": []any{
									"apiKeys",
									"{api_key_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"apiKeyId": "api_key_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "api_key_id",
											"orig": "api_key_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"api_key_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"supplemental_data": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "supplementalDataConfig",
						"title": "Supplemental Data Config",
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
								"kind": "http",
								"method": "PUT",
								"orig": "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig",
								"segments": []any{
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "platform_key",
									},
									map[string]any{
										"lit": "dataTypes",
									},
									map[string]any{
										"var": "data_type_id",
									},
									map[string]any{
										"lit": "supplementalDataConfig",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "data_type_id",
											"orig": "data_type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "invoices",
										},
										map[string]any{
											"name": "platform_key",
											"orig": "platform_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gbol",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data_type_id",
										"platform_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.integration",
						},
					},
				},
			},
			"supplemental_data_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dataSource",
						"title": "Data Source",
						"type": "`$STRING`",
						"short": "The underlying endpoint of the source system which the configuration is targeting.",
					},
					map[string]any{
						"name": "pullData",
						"title": "Pull Data",
						"type": "`$OBJECT`",
						"short": "The additional properties that are required when pulling records.",
					},
					map[string]any{
						"name": "pushData",
						"title": "Push Data",
						"type": "`$OBJECT`",
						"short": "The additional properties that are required to create and/or update records.",
					},
				},
				"name": "supplemental_data_config",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig",
								"segments": []any{
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "platform_key",
									},
									map[string]any{
										"lit": "dataTypes",
									},
									map[string]any{
										"var": "data_type_id",
									},
									map[string]any{
										"lit": "supplementalDataConfig",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.supplementalDataConfig`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "data_type_id",
											"orig": "data_type",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "invoices",
										},
										map[string]any{
											"name": "platform_key",
											"orig": "platform_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gbol",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data_type_id",
										"platform_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.integration",
						},
					},
				},
			},
			"sync_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dataType",
						"title": "Data Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Available data types",
					},
					map[string]any{
						"name": "fetchOnFirstLink",
						"title": "Fetch On First Link",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether this data type should be queued after a company has authorized a connection.",
					},
					map[string]any{
						"name": "isLocked",
						"title": "Is Locked",
						"type": "`$BOOLEAN`",
						"short": "`True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked.",
					},
					map[string]any{
						"name": "monthsToSync",
						"title": "Months To Sync",
						"type": "`$INTEGER`",
						"short": "Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only.",
					},
					map[string]any{
						"name": "syncFromUtc",
						"title": "Sync From Utc",
						"type": "`$STRING`",
						"short": "Date from which data should be fetched.",
					},
					map[string]any{
						"name": "syncFromWindow",
						"title": "Sync From Window",
						"type": "`$INTEGER`",
						"short": "Number of months of data to be fetched.",
					},
					map[string]any{
						"name": "syncOrder",
						"title": "Sync Order",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The sync in which data types are queued for a sync.",
					},
					map[string]any{
						"name": "syncSchedule",
						"title": "Sync Schedule",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of hours after which this data type should be refreshed.",
					},
				},
				"name": "sync_setting",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/profile/syncSettings",
								"segments": []any{
									map[string]any{
										"lit": "profile",
									},
									map[string]any{
										"lit": "syncSettings",
									},
								},
								"parts": []any{
									"profile",
									"syncSettings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.settings`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Errors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "warnings",
						"title": "Warnings",
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
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{companyId}/sync/{datasetId}/validation",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "sync",
									},
									map[string]any{
										"var": "sync_id",
									},
									map[string]any{
										"lit": "validation",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
										map[string]any{
											"name": "sync_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"sync_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.company",
						},
					},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "companyTags",
						"title": "Company Tags",
						"type": "`$ARRAY`",
						"short": "Company tags provide an additional way to filter messages, independent of event types.",
					},
					map[string]any{
						"name": "disabled",
						"title": "Disabled",
						"type": "`$BOOLEAN`",
						"short": "Flag that enables or disables the endpoint from receiving events.",
					},
					map[string]any{
						"name": "eventTypes",
						"title": "Event Types",
						"type": "`$ARRAY`",
						"short": "An array of event types the webhook consumer subscribes to.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the webhook consumer.",
						"format": "uuid",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "The URL that will consume webhook events dispatched by Codat.",
						"format": "uri",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks/{webhookId}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Key",
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
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/integrationKeys/zapier",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"lit": "integrationKeys",
									},
									map[string]any{
										"lit": "zapier",
									},
								},
								"parts": []any{
									"webhooks",
									"integrationKeys",
									"zapier",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
