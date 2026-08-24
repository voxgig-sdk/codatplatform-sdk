package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Codatplatform",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"active": true,
						"name": "button",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "logo",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "sourceId",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "branding",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gbol",
											"kind": "param",
											"name": "platform_key",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "created",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "createdByUserName",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "dataConnections",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "lastSync",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "links",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"patch": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "pageNumber",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "pageSize",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "products",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "redirect",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "referenceParentCompany",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "referenceSubsidiaryCompanies",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "results",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "tags",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "totalResults",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 16,
					},
				},
				"name": "company",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "product_identifier",
											"orig": "product_identifier",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "-modifiedDate",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "region=uk && team=invoice-finance",
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"reqd": false,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "product_identifier",
											"orig": "product_identifier",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 1,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "product_identifier",
											"orig": "product_identifier",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 1,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "accessToken",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "expiresIn",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "tokenType",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "company_access_token",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"connection": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "connectionInfo",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "dataConnectionErrors",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "integrationId",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "integrationKey",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "lastSync",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "linkUrl",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "links",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "pageNumber",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "pageSize",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "platformKey",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "platformName",
						"req": true,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "results",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "sourceId",
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "sourceType",
						"req": true,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"op": map[string]any{
							"patch": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "totalResults",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 17,
					},
				},
				"name": "connection",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "-modifiedDate",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "accessToken",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
				},
				"name": "connection_management_access_token",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "allowedOrigins",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
				},
				"name": "connection_management_allowed_origin",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "dataSource",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "keyBy",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "pageNumber",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "pageSize",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "requiredData",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "results",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "sourceModifiedDate",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "totalResults",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 7,
					},
				},
				"name": "custom",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "connection_id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"example": "DynamicsPurchaseOrders",
											"kind": "param",
											"name": "id",
											"orig": "custom_data_identifier",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "DynamicsPurchaseOrders",
											"kind": "param",
											"name": "id",
											"orig": "custom_data_identifier",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "gbol",
											"kind": "param",
											"name": "platform_key",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 1,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "DynamicsPurchaseOrders",
											"kind": "param",
											"name": "id",
											"orig": "custom_data_identifier",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "gbol",
											"kind": "param",
											"name": "platform_key",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "accountTransactions",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "balanceSheet",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "bankAccounts",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "bankTransactions",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "bankingaccountBalances",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "bankingaccounts",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "bankingtransactionCategories",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "bankingtransactions",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "billCreditNotes",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "billPayments",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "bills",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "cashFlowStatement",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "chartOfAccounts",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "commercecompanyInfo",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "commercecustomers",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "commercedisputes",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "commercelocations",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "commerceorders",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "commercepaymentMethods",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "commercepayments",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "commerceproductCategories",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "commerceproducts",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "commercetaxComponents",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "commercetransactions",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "company",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "creditNotes",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "customers",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "directCosts",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "directIncomes",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "invoices",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "itemReceipts",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "items",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "journalEntries",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "journals",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "paymentMethods",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "payments",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "profitAndLoss",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "purchaseOrders",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "salesOrders",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 38,
					},
					map[string]any{
						"active": true,
						"name": "suppliers",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 39,
					},
					map[string]any{
						"active": true,
						"name": "taxRates",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 40,
					},
					map[string]any{
						"active": true,
						"name": "trackingCategories",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 41,
					},
					map[string]any{
						"active": true,
						"name": "transfers",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 42,
					},
				},
				"name": "data_status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "dataProvidedBy",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "datatypeFeatures",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "enabled",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "integrationId",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "isBeta",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "isOfflineConnector",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "key",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "links",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "logoUrl",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "pageNumber",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "pageSize",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "results",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "sourceId",
						"req": false,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "sourceType",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "totalResults",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 15,
					},
				},
				"name": "integration",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "-modifiedDate",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gbol",
											"kind": "param",
											"name": "id",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "apiKey",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "confirmCompanyName",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "iconUrl",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "logoUrl",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "redirectUrl",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "whiteListUrls",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 6,
					},
				},
				"name": "profile",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"pull_operation": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "companyId",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "completed",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "connectionId",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "dataType",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "errorMessage",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "isCompleted",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "isErrored",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "links",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "pageNumber",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "pageSize",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "progress",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "requested",
						"req": true,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "results",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "statusDescription",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "totalResults",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 16,
					},
				},
				"name": "pull_operation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "connection_id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"example": "DynamicsPurchaseOrders",
											"kind": "param",
											"name": "custom_data_identifier",
											"orig": "custom_data_identifier",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 2,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "invoices",
											"kind": "param",
											"name": "data_type",
											"orig": "data_type",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "connection_id",
											"orig": "connection_id",
											"reqd": false,
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "-modifiedDate",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "dataset_id",
											"orig": "dataset_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "changes",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "companyId",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "completedOnUtc",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "dataConnectionKey",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "dataType",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "errorMessage",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "links",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "pageNumber",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "pageSize",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "pushOperationKey",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "requestedOnUtc",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "results",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "statusCode",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "timeoutInMinutes",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "timeoutInSeconds",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "totalResults",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "validation",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 17,
					},
				},
				"name": "push",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "-modifiedDate",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "push_operation_key",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "displayName",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "options",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "properties",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "required",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "validation",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 6,
					},
				},
				"name": "push_option",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
											"kind": "param",
											"name": "connection_id",
											"orig": "connection_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"example": "invoices",
											"kind": "param",
											"name": "id",
											"orig": "data_type",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 2,
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
								"index$": 0,
							},
						},
						"key$": "load",
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
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "apiKey",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "createdDate",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
				},
				"name": "setting",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "api_key_id",
											"orig": "api_key_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
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
						"active": true,
						"name": "supplementalDataConfig",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 0,
					},
				},
				"name": "supplemental_data",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "invoices",
											"kind": "param",
											"name": "data_type_id",
											"orig": "data_type",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "gbol",
											"kind": "param",
											"name": "platform_key",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "dataSource",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "pullData",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "pushData",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
				},
				"name": "supplemental_data_config",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "invoices",
											"kind": "param",
											"name": "data_type_id",
											"orig": "data_type",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "gbol",
											"kind": "param",
											"name": "platform_key",
											"orig": "platform_key",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "dataType",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "fetchOnFirstLink",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "isLocked",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "monthsToSync",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "syncFromUtc",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "syncFromWindow",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "syncOrder",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "syncSchedule",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 7,
					},
				},
				"name": "sync_setting",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"validation": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "errors",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "warnings",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 1,
					},
				},
				"name": "validation",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "sync_id",
											"orig": "dataset_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "companyTags",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "disabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "eventTypes",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "url",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
				},
				"name": "webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "8a210b68-6988-11ed-a1eb-0242ac120002",
											"kind": "param",
											"name": "id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhook_zapier_key": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "key",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
				},
				"name": "webhook_zapier_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
