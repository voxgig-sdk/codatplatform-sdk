

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


describe('SupplementalDataEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.SupplementalData()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'supplemental_data.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"supplementalDataConfig":{"a":true,"h":"Supplemental Data Config","n":"supplementalDataConfig","r":false,"t":"`$OBJECT`","key$":"supplementalDataConfig","index$":0}},"name":"supplemental_data","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"invoices","k":"param","n":"data_type_id","or":"data_type","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"gbol","k":"param","n":"platform_key","or":"platform_key","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig","q":{"exist":["data_type_id","platform_key"]},"r":{"param":{"dataType":"data_type_id","platformKey":"platform_key"}},"s":[{"lit":"integrations"},{"var":"platform_key"},{"lit":"dataTypes"},{"var":"data_type_id"},{"lit":"supplementalDataConfig"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.integration"]]},"key$":"supplemental_data","name__orig":"supplemental_data","Name":"SupplementalData","name_":"supplemental_data","name-":"supplemental-data","NAME":"SUPPLEMENTAL_DATA","index$":15}, {"active":true,"entity":"supplemental_data","key$":"BasicSupplementalDataFlow","kind":"basic","name":"BasicSupplementalDataFlow","param":{},"step":[{"a":true,"d":{"platform_key":"platform_key01"},"i":{"ref":"supplemental_data_ref01","srcdatavar":"supplemental_data_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-supplemental_data_ref01"}}],"v":[],"index$":0}]}, 'SupplementalData', {"PUT /integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"","title":"Supplemental data configuration","type":"object","properties":{"supplementalDataConfig":{"additionalProperties":{"description":"The client's defined name for the object.","properties":{"dataSource":{"description":"The underlying endpoint of the source system which the configuration is targeting. ","type":"string","key$":"dataSource"},"pullData":{"additionalProperties":{},"description":"The additional properties that are required when pulling records.","type":"object","key$":"pullData"},"pushData":{"additionalProperties":{},"description":"The additional properties that are required to create and/or update records.","type":"object","key$":"pushData"}},"title":"Supplemental data source configuration","type":"object","key$":"additionalProperties"},"key$":"supplementalDataConfig","type":"object"}},"examples":[{"supplementalDataConfig":{"orders-supplemental-data":{"dataSource":"/orders","pullData":{"orderNumber":"order_num"},"pushData":{"orderNumber":"order_num"}}}}],"x-ref":"#/components/schemas/SupplementalDataConfiguration","index$":1},"examples":{"Xero - Accounts":{"value":{"yourKeyNameForAccounts":{"dataSource":"/Accounts","pullData":{"yourNameForTaxType":"TaxType","yourNameForSystemAccount":"SystemAccount"}}}},"Xero - Invoices":{"value":{"yourKeyNameForInvoices":{"dataSource":"/Invoices","pullData":{"yourNameForExpectedPaymentDate":"ExpectedPaymentDate","yourNameForHasAttachments":"HasAttachments"}}}},"Xero - Items":{"value":{"yourKeyNameForItems":{"dataSource":"/Items","pullData":{"yourNameForQuantityOnHand":"QuantityOnHand","yourNameForTotalCostPool":"TotalCostPool"}}}},"Xero - Contacts":{"value":{"yourKeyNameForContacts":{"dataSource":"/Contacts","pullData":{"yourNameForBankAccounts":"BankAccountDetails"}}}},"Xero - Tax rates":{"value":{"yourKeyNameForTaxRates":{"dataSource":"/TaxRates","pullData":{"yourNameForCanApplyToLiabilities":"CanApplyToLiabilities","yourNameForCanApplyToAssets":"CanApplyToAssets","yourNameForCanApplyToEquity":"CanApplyToEquity","yourNameForCanApplyToExpenses":"CanApplyToExpenses","yourNameForCanApplyToRevenue":"CanApplyToRevenue"}}}},"QBO - Customers":{"value":{"yourKeyNameForCustomers":{"dataSource":"/Customer","pullData":{"yourNameForSalesTermRef":"SalesTermRef.value","yourNameForParentRef":"ParentRef.value"}}}},"QBO - Invoices":{"value":{"yourKeyNameForInvoices":{"dataSource":"/Invoice","pullData":{"yourNameForSalesTermRef":"SalesTermRef.value"}}}}}}},"description":"The configuration for the specified platform and data type."},"parameters":[{"name":"platformKey","in":"path","required":true,"schema":{"type":"string","minLength":4,"maxLength":4,"pattern":"[a-z]{4}","example":"gbol","description":"A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys."},"description":"A unique 4-letter key to represent a platform in each integration.","x-ref":"#/components/parameters/platformKey","index$":0},{"name":"dataType","in":"path","required":true,"description":"Supported supplemental data data type.","schema":{"x-internal":true,"type":"string","description":"Data types that support supplemental data","enum":["chartOfAccounts","bills","company","creditNotes","customers","invoices","items","journalEntries","suppliers","taxRates","commerce-companyInfo","commerce-customers","commerce-disputes","commerce-locations","commerce-orders","commerce-payments","commerce-paymentMethods","commerce-products","commerce-productCategories","commerce-taxComponents","commerce-transactions"],"example":"invoices"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let supplemental_data_ref01_data = Object.values(setup.data.existing.supplemental_data)[0] as any

    // UPDATE
    const supplemental_data_ref01_ent = client.SupplementalData()
    const supplemental_data_ref01_data_up0: any = {}
    supplemental_data_ref01_data_up0 ['platform_key'] = setup.idmap['platform_key']

    const supplemental_data_ref01_resdata_up0 = (await supplemental_data_ref01_ent.update(supplemental_data_ref01_data_up0)).data()
    assert(null != supplemental_data_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/supplemental_data/SupplementalDataTestData.json')

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
    ['supplemental_data01','supplemental_data02','supplemental_data03','integration01','integration02','integration03','platform_key01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_SUPPLEMENTAL_DATA_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_SUPPLEMENTAL_DATA_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_SUPPLEMENTAL_DATA_ENTID']
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
  
