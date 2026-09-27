

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CodatplatformSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CustomEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Custom()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"dataSource":{"a":true,"h":"Data Source","n":"dataSource","r":false,"sh":"Underlying endpoint of the source platform that will serve as a data source for the custom data type.","t":"`$STRING`","key$":"dataSource","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"keyBy":{"a":true,"h":"Key By","n":"keyBy","r":false,"sh":"An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type.","t":"`$ARRAY`","key$":"keyBy","index$":2},"pageNumber":{"a":true,"h":"Page Number","n":"pageNumber","r":false,"sh":"Current page number.","t":"`$INTEGER`","key$":"pageNumber","index$":3},"pageSize":{"a":true,"h":"Page Size","n":"pageSize","r":false,"sh":"Number of items to return in results array.","t":"`$INTEGER`","key$":"pageSize","index$":4},"requiredData":{"a":true,"h":"Required Data","n":"requiredData","r":false,"sh":"Properties required to be fetched from the underlying platform for the custom data type that is being configured.","t":"`$OBJECT`","key$":"requiredData","index$":5},"results":{"a":true,"h":"Results","n":"results","r":false,"t":"`$ARRAY`","key$":"results","index$":6},"sourceModifiedDate":{"a":true,"h":"Source Modified Date","n":"sourceModifiedDate","r":false,"sh":"Property in the source platform nominated by the client that defines the date when a record was last modified there.","t":"`$ARRAY`","key$":"sourceModifiedDate","index$":7},"totalResults":{"a":true,"h":"Total Results","n":"totalResults","r":false,"sh":"Total number of items.","t":"`$INTEGER`","key$":"totalResults","index$":8}},"id":{"field":"id","name":"id"},"name":"custom","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2e9d2c44-f675-40ba-8049-353bfcb5e171","k":"param","n":"connection_id","or":"connection_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"DynamicsPurchaseOrders","k":"param","n":"id","or":"custom_data_identifier","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":100,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}","q":{"exist":["company_id","connection_id","id","page","page_size"]},"r":{"param":{"companyId":"company_id","connectionId":"connection_id","customDataIdentifier":"id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"connections"},{"var":"connection_id"},{"lit":"data"},{"lit":"custom"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"DynamicsPurchaseOrders","k":"param","n":"id","or":"custom_data_identifier","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"gbol","k":"param","n":"platform_key","or":"platform_key","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}","q":{"exist":["id","platform_key"]},"r":{"param":{"customDataIdentifier":"id","platformKey":"platform_key"}},"s":[{"lit":"integrations"},{"var":"platform_key"},{"lit":"dataTypes"},{"lit":"custom"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"DynamicsPurchaseOrders","k":"param","n":"id","or":"custom_data_identifier","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"gbol","k":"param","n":"platform_key","or":"platform_key","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}","q":{"exist":["id","platform_key"]},"r":{"param":{"customDataIdentifier":"id","platformKey":"platform_key"}},"s":[{"lit":"integrations"},{"var":"platform_key"},{"lit":"dataTypes"},{"lit":"custom"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.integration"],["$.main.kit.entity.company","$.main.kit.entity.connection"]]},"key$":"custom","name__orig":"custom","Name":"Custom","name_":"custom","name-":"custom","NAME":"CUSTOM","index$":6}, {"active":true,"entity":"custom","key$":"BasicCustomFlow","kind":"basic","name":"BasicCustomFlow","param":{},"step":[{"a":true,"d":{"platform_key":"platform_key01"},"i":{"ref":"custom_ref01","srcdatavar":"custom_ref01_data","suffix":"_up0","textfield":"dataSource"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"custom_ref01","srcdatavar":"custom_ref01_data","suffix":"_dt0"},"m":{"id":"custom01","platform_key":"platform_key01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_ref01"}}],"index$":1}]}, 'Custom', {"GET /companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"connectionId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"2e9d2c44-f675-40ba-8049-353bfcb5e171","description":"Unique identifier for a company's data connection."},"description":"Unique identifier for a connection.","x-ref":"#/components/parameters/connectionId","index$":1},{"name":"customDataIdentifier","in":"path","required":true,"schema":{"type":"string","example":"DynamicsPurchaseOrders"},"description":"Unique identifier for a custom data type.","x-ref":"#/components/parameters/customDataIdentifier","index$":2},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","minimum":1,"example":1,"default":1},"description":"Page number. [Read more](https://docs.codat.io/using-the-api/paging).","x-ref":"#/components/parameters/page","index$":3},{"name":"pageSize","in":"query","schema":{"type":"integer","format":"int32","default":100,"example":100,"minimum":1,"maximum":5000},"description":"Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).","x-ref":"#/components/parameters/pageSize","index$":4}]},"GET /integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}":{"protocol":"http","parameters":[{"name":"platformKey","in":"path","required":true,"schema":{"type":"string","minLength":4,"maxLength":4,"pattern":"[a-z]{4}","example":"gbol","description":"A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys."},"description":"A unique 4-letter key to represent a platform in each integration.","x-ref":"#/components/parameters/platformKey","index$":0},{"name":"customDataIdentifier","in":"path","required":true,"schema":{"type":"string","example":"DynamicsPurchaseOrders"},"description":"Unique identifier for a custom data type.","x-ref":"#/components/parameters/customDataIdentifier","index$":1}]},"PUT /integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}":{"protocol":"http","requestBody":{"description":"Custom data type configuration for the specified platform.","content":{"application/json":{"schema":{"title":"Custom data type configuration","type":"object","description":"Client's configuration details for a specific custom data type and platform pair.","properties":{"dataSource":{"type":"string","description":"Underlying endpoint of the source platform that will serve as a data source for the custom data type. This value is not validated by Codat.","key$":"dataSource"},"requiredData":{"type":"object","description":"Properties required to be fetched from the underlying platform for the custom data type that is being configured. This value is not validated by Codat.","additionalProperties":{"type":"string","description":"The client's defined name for the property with the value being the source system's property name which the mapping is targeting."},"key$":"requiredData"},"keyBy":{"type":"array","description":"An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. This value is not validated by Codat.","items":{"type":"string"},"minLength":1,"key$":"keyBy"},"sourceModifiedDate":{"type":"array","nullable":true,"items":{"type":"string"},"description":"Property in the source platform nominated by the client that defines the date when a record was last modified there. This value is not validated by Codat.","key$":"sourceModifiedDate"}},"examples":[{"dataSource":"api/purchaseOrders?$filter=currencyCode eq 'NOK'","requiredData":{"currencyCode":"$[*].currencyCode","id":"$[*].id","number":"$[*].number","orderDate":"$[*].orderDate","totalAmountExcludingTax":"$[*].totalAmountExcludingTax","totalTaxAmount":"$[*].totalTaxAmount","vendorName":"$[*].number"},"keyBy":["$[*].id"],"sourceModifiedDate":["$[*].lastModifiedDateTime"]}],"x-ref":"#/components/schemas/CustomDataTypeConfiguration","index$":1},"examples":{"Dynamics 365 Business Central":{"value":{"dataSource":"api/purchaseOrders","requiredData":{"currency":"$[*].currencyCode","number":"$[*].number","date":"$[*].orderDate","totalexvat":"$[*].totalAmountExcludingTax","totaltax":"$[*].totalTaxAmount","vendor":"$[*].number"},"keyBy":["$[*].id"],"sourceModifiedDate":["$[*].lastModifiedDateTime"]}},"Xero Simple Record":{"value":{"dataSource":"/api.xro/2.0/Accounts","requiredData":{"code":"$.Code","accountId":"$.AccountID","type":"$.Type","SysAcc":"$.SystemAccount"},"keyBy":["$.AccountID"]}},"Xero Mapping Arrays":{"value":{"dataSource":"/api.xro/2.0/Invoices","requiredData":{"invNumber":"$.InvoiceNumber","type":"$.Type","InvoiceID":"$.InvoiceID","lines":"$.LineItems[*]"},"keyBy":["$.InvoiceID"],"sourceModifiedDate":["$.UpdatedDateUTC"]}},"QuickBooks Online":{"value":{"dataSource":"/query?query=select * from Account","requiredData":{"id":"$.Id","Currentbal":"$.CurrentBalance","SubAcc":"$.SubAccount"},"keyBy":["$.Id"],"sourceModifiedDate":["$.time"]}}}}}},"parameters":[{"name":"platformKey","in":"path","required":true,"schema":{"type":"string","minLength":4,"maxLength":4,"pattern":"[a-z]{4}","example":"gbol","description":"A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys."},"description":"A unique 4-letter key to represent a platform in each integration.","x-ref":"#/components/parameters/platformKey","index$":0},{"name":"customDataIdentifier","in":"path","required":true,"schema":{"type":"string","example":"DynamicsPurchaseOrders"},"description":"Unique identifier for a custom data type.","x-ref":"#/components/parameters/customDataIdentifier","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_ref01_data = Object.values(setup.data.existing.custom)[0] as any

    // UPDATE
    const custom_ref01_ent = client.Custom()
    const custom_ref01_data_up0: any = {}
    custom_ref01_data_up0.id = custom_ref01_data.id
    custom_ref01_data_up0 ['platform_key'] = setup.idmap['platform_key']

    const custom_ref01_markdef_up0 = { name: 'dataSource', value: 'Mark01-custom_ref01_' + setup.now }
    ;(custom_ref01_data_up0 as any)[custom_ref01_markdef_up0.name] = custom_ref01_markdef_up0.value

    const custom_ref01_resdata_up0 = (await custom_ref01_ent.update(custom_ref01_data_up0)).data()
    assert(custom_ref01_resdata_up0.id === custom_ref01_data_up0.id)

    assert((custom_ref01_resdata_up0 as any)[custom_ref01_markdef_up0.name] === custom_ref01_markdef_up0.value)


    // LOAD
    const custom_ref01_match_dt0: any = {}
    custom_ref01_match_dt0.id = custom_ref01_data.id
    const custom_ref01_data_dt0 = (await custom_ref01_ent.load(custom_ref01_match_dt0)).data()
    assert(custom_ref01_data_dt0.id === custom_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom/CustomTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CodatplatformSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['custom01','custom02','custom03','integration01','integration02','integration03','company01','company02','company03','connection01','connection02','connection03','platform_key01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_CUSTOM_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_CUSTOM_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_CUSTOM_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CodatplatformSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.CODATPLATFORM_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CODATPLATFORM_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
