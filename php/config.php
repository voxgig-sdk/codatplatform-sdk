<?php
declare(strict_types=1);

// Codatplatform SDK configuration

class CodatplatformConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Codatplatform",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.codat.io",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "access_token" => [],
                    "all" => [],
                    "api_key" => [],
                    "branding" => [],
                    "company" => [],
                    "company_access_token" => [],
                    "connection" => [],
                    "connection_management_access_token" => [],
                    "connection_management_allowed_origin" => [],
                    "custom" => [],
                    "data_status" => [],
                    "data_type" => [],
                    "history" => [],
                    "integration" => [],
                    "option" => [],
                    "product" => [],
                    "profile" => [],
                    "pull_operation" => [],
                    "push" => [],
                    "push_option" => [],
                    "queue" => [],
                    "refresh_data" => [],
                    "setting" => [],
                    "supplemental_data" => [],
                    "supplemental_data_config" => [],
                    "sync" => [],
                    "sync_setting" => [],
                    "validation" => [],
                    "webhook" => [],
                    "webhook_zapier_key" => [],
                ],
            ],
            "entity" => [
        'access_token' => [
          'fields' => [],
          'name' => 'access_token',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
            ],
          ],
        ],
        'all' => [
          'fields' => [],
          'name' => 'all',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
            ],
          ],
        ],
        'api_key' => [
          'fields' => [],
          'name' => 'api_key',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'branding' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'button',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'logo',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'sourceId',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
          ],
          'name' => 'branding',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'gbol',
                        'kind' => 'param',
                        'name' => 'platform_key',
                        'orig' => 'platform_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/integrations/{platformKey}/branding',
                  'parts' => [
                    'integrations',
                    '{platform_key}',
                    'branding',
                  ],
                  'rename' => [
                    'param' => [
                      'platformKey' => 'platform_key',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'platform_key',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'integration',
              ],
            ],
          ],
        ],
        'company' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'createdByUserName',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'dataConnections',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'lastSync',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'links',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'patch' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'pageNumber',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'pageSize',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'products',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'redirect',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'referenceParentCompany',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'referenceSubsidiaryCompanies',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'results',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'tags',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'totalResults',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 16,
            ],
          ],
          'name' => 'company',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'product_identifier',
                        'orig' => 'product_identifier',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/companies/{companyId}/products/{productIdentifier}/refresh',
                  'parts' => [
                    'companies',
                    '{id}',
                    'products',
                    '{product_identifier}',
                    'refresh',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'id',
                      'productIdentifier' => 'product_identifier',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'product_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/companies',
                  'parts' => [
                    'companies',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '-modifiedDate',
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'id=e3334455-1aed-4e71-ab43-6bccf12092ee',
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'region=uk && team=invoice-finance',
                        'kind' => 'query',
                        'name' => 'tag',
                        'orig' => 'tag',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies',
                  'parts' => [
                    'companies',
                  ],
                  'select' => [
                    'exist' => [
                      'order_by',
                      'page',
                      'page_size',
                      'query',
                      'tag',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}',
                  'parts' => [
                    'companies',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'patch' => [
              'input' => 'data',
              'name' => 'patch',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/companies/{companyId}',
                  'parts' => [
                    'companies',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'patch',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'product_identifier',
                        'orig' => 'product_identifier',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/companies/{companyId}/products/{productIdentifier}',
                  'parts' => [
                    'companies',
                    '{id}',
                    'products',
                    '{product_identifier}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'id',
                      'productIdentifier' => 'product_identifier',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'product_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/companies/{companyId}',
                  'parts' => [
                    'companies',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'product_identifier',
                        'orig' => 'product_identifier',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/companies/{companyId}/products/{productIdentifier}',
                  'parts' => [
                    'companies',
                    '{id}',
                    'products',
                    '{product_identifier}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'id',
                      'productIdentifier' => 'product_identifier',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'product_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/companies/{companyId}',
                  'parts' => [
                    'companies',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'product',
              ],
            ],
          ],
        ],
        'company_access_token' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'accessToken',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'expiresIn',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'tokenType',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
          ],
          'name' => 'company_access_token',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/accessToken',
                  'parts' => [
                    'companies',
                    '{id}',
                    'accessToken',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'connection' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'connectionInfo',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'dataConnectionErrors',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'integrationId',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'integrationKey',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'lastSync',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'linkUrl',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'links',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'pageNumber',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'pageSize',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'platformKey',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'platformName',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'results',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'sourceId',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'sourceType',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'status',
              'op' => [
                'patch' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'totalResults',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 17,
            ],
          ],
          'name' => 'connection',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/companies/{companyId}/connections',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'connections',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => '-modifiedDate',
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'id=e3334455-1aed-4e71-ab43-6bccf12092ee',
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/connections',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'connections',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'order_by',
                      'page',
                      'page_size',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => '2e9d2c44-f675-40ba-8049-353bfcb5e171',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'connection_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/connections/{connectionId}',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'connections',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                      'connectionId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'patch' => [
              'input' => 'data',
              'name' => 'patch',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '2e9d2c44-f675-40ba-8049-353bfcb5e171',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'connection_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/companies/{companyId}/connections/{connectionId}',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'connections',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                      'connectionId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'status' => '`reqdata.status`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'patch',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => '2e9d2c44-f675-40ba-8049-353bfcb5e171',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'connection_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/companies/{companyId}/connections/{connectionId}',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'connections',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                      'connectionId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => '2e9d2c44-f675-40ba-8049-353bfcb5e171',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'connection_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/companies/{companyId}/connections/{connectionId}/authorization',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'connections',
                    '{id}',
                    'authorization',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                      'connectionId' => 'id',
                    ],
                  ],
                  'select' => [
                    '$action' => 'authorization',
                    'exist' => [
                      'company_id',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
            ],
          ],
        ],
        'connection_management_access_token' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'accessToken',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
          ],
          'name' => 'connection_management_access_token',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/connectionManagement/accessToken',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'connectionManagement',
                    'accessToken',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
            ],
          ],
        ],
        'connection_management_allowed_origin' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'allowedOrigins',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
          ],
          'name' => 'connection_management_allowed_origin',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/connectionManagement/corsSettings',
                  'parts' => [
                    'connectionManagement',
                    'corsSettings',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/corsSettings',
                  'parts' => [
                    'corsSettings',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/connectionManagement/corsSettings',
                  'parts' => [
                    'connectionManagement',
                    'corsSettings',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.allowedOrigins`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/corsSettings',
                  'parts' => [
                    'corsSettings',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.allowedOrigins`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'custom' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'dataSource',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'keyBy',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'pageNumber',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'pageSize',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'requiredData',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'results',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'sourceModifiedDate',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'totalResults',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 7,
            ],
          ],
          'name' => 'custom',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => '2e9d2c44-f675-40ba-8049-353bfcb5e171',
                        'kind' => 'param',
                        'name' => 'connection_id',
                        'orig' => 'connection_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                      [
                        'active' => true,
                        'example' => 'DynamicsPurchaseOrders',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'custom_data_identifier',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 2,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'connections',
                    '{connection_id}',
                    'data',
                    'custom',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                      'connectionId' => 'connection_id',
                      'customDataIdentifier' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'connection_id',
                      'id',
                      'page',
                      'page_size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'DynamicsPurchaseOrders',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'custom_data_identifier',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'gbol',
                        'kind' => 'param',
                        'name' => 'platform_key',
                        'orig' => 'platform_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}',
                  'parts' => [
                    'integrations',
                    '{platform_key}',
                    'dataTypes',
                    'custom',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'customDataIdentifier' => 'id',
                      'platformKey' => 'platform_key',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'platform_key',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'load',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'DynamicsPurchaseOrders',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'custom_data_identifier',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'gbol',
                        'kind' => 'param',
                        'name' => 'platform_key',
                        'orig' => 'platform_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}',
                  'parts' => [
                    'integrations',
                    '{platform_key}',
                    'dataTypes',
                    'custom',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'customDataIdentifier' => 'id',
                      'platformKey' => 'platform_key',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'platform_key',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'integration',
              ],
              [
                'company',
                'connection',
              ],
            ],
          ],
        ],
        'data_status' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'accountTransactions',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'balanceSheet',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'bankAccounts',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'bankTransactions',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'bankingaccountBalances',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'bankingaccounts',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'bankingtransactionCategories',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'bankingtransactions',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'billCreditNotes',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'billPayments',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'bills',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'cashFlowStatement',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'chartOfAccounts',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'commercecompanyInfo',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'commercecustomers',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'commercedisputes',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'commercelocations',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'commerceorders',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'commercepaymentMethods',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'commercepayments',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'commerceproductCategories',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'commerceproducts',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'commercetaxComponents',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'commercetransactions',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'company',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'creditNotes',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'customers',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 26,
            ],
            [
              'active' => true,
              'name' => 'directCosts',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 27,
            ],
            [
              'active' => true,
              'name' => 'directIncomes',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 28,
            ],
            [
              'active' => true,
              'name' => 'invoices',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 29,
            ],
            [
              'active' => true,
              'name' => 'itemReceipts',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 30,
            ],
            [
              'active' => true,
              'name' => 'items',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 31,
            ],
            [
              'active' => true,
              'name' => 'journalEntries',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 32,
            ],
            [
              'active' => true,
              'name' => 'journals',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 33,
            ],
            [
              'active' => true,
              'name' => 'paymentMethods',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 34,
            ],
            [
              'active' => true,
              'name' => 'payments',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 35,
            ],
            [
              'active' => true,
              'name' => 'profitAndLoss',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 36,
            ],
            [
              'active' => true,
              'name' => 'purchaseOrders',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 37,
            ],
            [
              'active' => true,
              'name' => 'salesOrders',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 38,
            ],
            [
              'active' => true,
              'name' => 'suppliers',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 39,
            ],
            [
              'active' => true,
              'name' => 'taxRates',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 40,
            ],
            [
              'active' => true,
              'name' => 'trackingCategories',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 41,
            ],
            [
              'active' => true,
              'name' => 'transfers',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 42,
            ],
          ],
          'name' => 'data_status',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/dataStatus',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'dataStatus',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
            ],
          ],
        ],
        'data_type' => [
          'fields' => [],
          'name' => 'data_type',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'integration',
              ],
            ],
          ],
        ],
        'history' => [
          'fields' => [],
          'name' => 'history',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
            ],
          ],
        ],
        'integration' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'dataProvidedBy',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'datatypeFeatures',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'enabled',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'integrationId',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'isBeta',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'isOfflineConnector',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'key',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'links',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'logoUrl',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'pageNumber',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'pageSize',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'results',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'sourceId',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'sourceType',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'totalResults',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 15,
            ],
          ],
          'name' => 'integration',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '-modifiedDate',
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'id=e3334455-1aed-4e71-ab43-6bccf12092ee',
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/integrations',
                  'parts' => [
                    'integrations',
                  ],
                  'select' => [
                    'exist' => [
                      'order_by',
                      'page',
                      'page_size',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'gbol',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'platform_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/integrations/{platformKey}',
                  'parts' => [
                    'integrations',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'platformKey' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'integration',
              ],
            ],
          ],
        ],
        'option' => [
          'fields' => [],
          'name' => 'option',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'company',
                'connection',
              ],
            ],
          ],
        ],
        'product' => [
          'fields' => [],
          'name' => 'product',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
              [
                'company',
                'product',
              ],
            ],
          ],
        ],
        'profile' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'apiKey',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'confirmCompanyName',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'iconUrl',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'logoUrl',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'redirectUrl',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'whiteListUrls',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
          ],
          'name' => 'profile',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/profile',
                  'parts' => [
                    'profile',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.whiteListUrls`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/profile',
                  'parts' => [
                    'profile',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'pull_operation' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'companyId',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'completed',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'connectionId',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'dataType',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'errorMessage',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'isCompleted',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'isErrored',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'links',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'pageNumber',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'pageSize',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'progress',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'requested',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'results',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'statusDescription',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'totalResults',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 16,
            ],
          ],
          'name' => 'pull_operation',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => '2e9d2c44-f675-40ba-8049-353bfcb5e171',
                        'kind' => 'param',
                        'name' => 'connection_id',
                        'orig' => 'connection_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                      [
                        'active' => true,
                        'example' => 'DynamicsPurchaseOrders',
                        'kind' => 'param',
                        'name' => 'custom_data_identifier',
                        'orig' => 'custom_data_identifier',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 2,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'connections',
                    '{connection_id}',
                    'data',
                    'queue',
                    'custom',
                    '{custom_data_identifier}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                      'connectionId' => 'connection_id',
                      'customDataIdentifier' => 'custom_data_identifier',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'connection_id',
                      'custom_data_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'invoices',
                        'kind' => 'param',
                        'name' => 'data_type',
                        'orig' => 'data_type',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'connection_id',
                        'orig' => 'connection_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/companies/{companyId}/data/queue/{dataType}',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'data',
                    'queue',
                    '{data_type}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                      'dataType' => 'data_type',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'connection_id',
                      'data_type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => '-modifiedDate',
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'id=e3334455-1aed-4e71-ab43-6bccf12092ee',
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/data/history',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'data',
                    'history',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'order_by',
                      'page',
                      'page_size',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/data/history/{datasetId}',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'data',
                    'history',
                    '{dataset_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                      'datasetId' => 'dataset_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'dataset_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
              [
                'company',
                'history',
              ],
              [
                'company',
                'queue',
              ],
              [
                'company',
                'connection',
                'custom',
              ],
            ],
          ],
        ],
        'push' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'changes',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'companyId',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'completedOnUtc',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'dataConnectionKey',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'dataType',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'errorMessage',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'links',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'pageNumber',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'pageSize',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'pushOperationKey',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'requestedOnUtc',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'results',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'statusCode',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'timeoutInMinutes',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'timeoutInSeconds',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'totalResults',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'validation',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 17,
            ],
          ],
          'name' => 'push',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => '-modifiedDate',
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'id=e3334455-1aed-4e71-ab43-6bccf12092ee',
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/push',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'push',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'order_by',
                      'page',
                      'page_size',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'push_operation_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/push/{pushOperationKey}',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'push',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                      'pushOperationKey' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
            ],
          ],
        ],
        'push_option' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'displayName',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'options',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'properties',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'required',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'validation',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
          ],
          'name' => 'push_option',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => '2e9d2c44-f675-40ba-8049-353bfcb5e171',
                        'kind' => 'param',
                        'name' => 'connection_id',
                        'orig' => 'connection_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                      [
                        'active' => true,
                        'example' => 'invoices',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'data_type',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 2,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/connections/{connectionId}/options/{dataType}',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'connections',
                    '{connection_id}',
                    'options',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                      'connectionId' => 'connection_id',
                      'dataType' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'connection_id',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'company',
                'connection',
              ],
            ],
          ],
        ],
        'queue' => [
          'fields' => [],
          'name' => 'queue',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
            ],
          ],
        ],
        'refresh_data' => [
          'fields' => [],
          'name' => 'refresh_data',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/companies/{companyId}/data/all',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'data',
                    'all',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
            ],
          ],
        ],
        'setting' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'apiKey',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'createdDate',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
          ],
          'name' => 'setting',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/apiKeys',
                  'parts' => [
                    'apiKeys',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/profile/syncSettings',
                  'parts' => [
                    'profile',
                    'syncSettings',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/apiKeys',
                  'parts' => [
                    'apiKeys',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'api_key_id',
                        'orig' => 'api_key_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/apiKeys/{apiKeyId}',
                  'parts' => [
                    'apiKeys',
                    '{api_key_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'apiKeyId' => 'api_key_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'api_key_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'api_key',
              ],
            ],
          ],
        ],
        'supplemental_data' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'supplementalDataConfig',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
          ],
          'name' => 'supplemental_data',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'invoices',
                        'kind' => 'param',
                        'name' => 'data_type_id',
                        'orig' => 'data_type',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'gbol',
                        'kind' => 'param',
                        'name' => 'platform_key',
                        'orig' => 'platform_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig',
                  'parts' => [
                    'integrations',
                    '{platform_key}',
                    'dataTypes',
                    '{data_type_id}',
                    'supplementalDataConfig',
                  ],
                  'rename' => [
                    'param' => [
                      'dataType' => 'data_type_id',
                      'platformKey' => 'platform_key',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'data_type_id',
                      'platform_key',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'integration',
                'data_type',
              ],
            ],
          ],
        ],
        'supplemental_data_config' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'dataSource',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'pullData',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'pushData',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
          ],
          'name' => 'supplemental_data_config',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'invoices',
                        'kind' => 'param',
                        'name' => 'data_type_id',
                        'orig' => 'data_type',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'gbol',
                        'kind' => 'param',
                        'name' => 'platform_key',
                        'orig' => 'platform_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig',
                  'parts' => [
                    'integrations',
                    '{platform_key}',
                    'dataTypes',
                    '{data_type_id}',
                    'supplementalDataConfig',
                  ],
                  'rename' => [
                    'param' => [
                      'dataType' => 'data_type_id',
                      'platformKey' => 'platform_key',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'data_type_id',
                      'platform_key',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.supplementalDataConfig`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'integration',
                'data_type',
              ],
            ],
          ],
        ],
        'sync' => [
          'fields' => [],
          'name' => 'sync',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'company',
              ],
            ],
          ],
        ],
        'sync_setting' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'dataType',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'fetchOnFirstLink',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'isLocked',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'monthsToSync',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'syncFromUtc',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'syncFromWindow',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'syncOrder',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'syncSchedule',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 7,
            ],
          ],
          'name' => 'sync_setting',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/profile/syncSettings',
                  'parts' => [
                    'profile',
                    'syncSettings',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.settings`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'validation' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'errors',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'warnings',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
          ],
          'name' => 'validation',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'company_id',
                        'orig' => 'company_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'sync_id',
                        'orig' => 'dataset_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/companies/{companyId}/sync/{datasetId}/validation',
                  'parts' => [
                    'companies',
                    '{company_id}',
                    'sync',
                    '{sync_id}',
                    'validation',
                  ],
                  'rename' => [
                    'param' => [
                      'companyId' => 'company_id',
                      'datasetId' => 'sync_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'company_id',
                      'sync_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'company',
                'sync',
              ],
            ],
          ],
        ],
        'webhook' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'companyTags',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'disabled',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'eventTypes',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'url',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
          ],
          'name' => 'webhook',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/webhooks',
                  'parts' => [
                    'webhooks',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/webhooks',
                  'parts' => [
                    'webhooks',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '8a210b68-6988-11ed-a1eb-0242ac120002',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'webhook_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/webhooks/{webhookId}',
                  'parts' => [
                    'webhooks',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'webhookId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'webhook_zapier_key' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'key',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
          ],
          'name' => 'webhook_zapier_key',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/webhooks/integrationKeys/zapier',
                  'parts' => [
                    'webhooks',
                    'integrationKeys',
                    'zapier',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CodatplatformFeatures::make_feature($name);
    }
}
