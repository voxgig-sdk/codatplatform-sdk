

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


describe('PushOptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.PushOption()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'push_option.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"A description of the property.","t":"`$STRING`","key$":"description","index$":0},"displayName":{"a":true,"h":"Display Name","n":"displayName","r":true,"sh":"The property's display name.","t":"`$STRING`","key$":"displayName","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"options":{"a":true,"h":"Options","n":"options","r":false,"t":"`$ARRAY`","key$":"options","index$":3},"properties":{"a":true,"h":"Properties","n":"properties","r":false,"t":"`$OBJECT`","key$":"properties","index$":4},"required":{"a":true,"h":"Required","n":"required","r":true,"sh":"The property is required if `True`.","t":"`$BOOLEAN`","key$":"required","index$":5},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The option type.","t":"`$STRING`","key$":"type","index$":6},"validation":{"a":true,"h":"Validation","n":"validation","r":false,"t":"`$OBJECT`","key$":"validation","index$":7}},"id":{"field":"id","name":"id"},"name":"push_option","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /companies/{companyId}/connections/{connectionId}/options/{dataType}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2e9d2c44-f675-40ba-8049-353bfcb5e171","k":"param","n":"connection_id","or":"connection_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"invoices","k":"param","n":"id","or":"data_type","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/companies/{companyId}/connections/{connectionId}/options/{dataType}","q":{"exist":["company_id","connection_id","id"]},"r":{"param":{"companyId":"company_id","connectionId":"connection_id","dataType":"id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"connections"},{"var":"connection_id"},{"lit":"options"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.company","$.main.kit.entity.connection"]]},"key$":"push_option","name__orig":"push_option","Name":"PushOption","name_":"push_option","name-":"push-option","NAME":"PUSH_OPTION","index$":12}, {"active":true,"entity":"push_option","key$":"BasicPushOptionFlow","kind":"basic","name":"BasicPushOptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"push_option_ref01","srcdatavar":"push_option_ref01_data","suffix":"_dt0"},"m":{"company_id":"company01","connection_id":"connection01","id":"push_option01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-push_option_ref01"}}],"index$":0}]}, 'PushOption', {"GET /companies/{companyId}/connections/{connectionId}/options/{dataType}":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"connectionId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"2e9d2c44-f675-40ba-8049-353bfcb5e171","description":"Unique identifier for a company's data connection."},"description":"Unique identifier for a connection.","x-ref":"#/components/parameters/connectionId","index$":1},{"name":"dataType","description":"The key of a Codat data type.","in":"path","required":true,"schema":{"title":"Data types","x-internal":true,"type":"string","description":"Available data types","enum":["accountTransactions","balanceSheet","bankAccounts","bankTransactions","billCreditNotes","billPayments","bills","cashFlowStatement","chartOfAccounts","company","creditNotes","customers","directCosts","directIncomes","invoices","itemReceipts","items","journalEntries","journals","paymentMethods","payments","profitAndLoss","purchaseOrders","salesOrders","suppliers","taxRates","trackingCategories","transfers","banking-accountBalances","banking-accounts","banking-transactionCategories","banking-transactions","commerce-companyInfo","commerce-customers","commerce-disputes","commerce-locations","commerce-orders","commerce-paymentMethods","commerce-payments","commerce-productCategories","commerce-products","commerce-taxComponents","commerce-transactions"],"example":"invoices","x-ref":"#/components/schemas/DataType"},"x-ref":"#/components/parameters/dataType","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let push_option_ref01_data = Object.values(setup.data.existing.push_option)[0] as any

    // LOAD
    const push_option_ref01_ent = client.PushOption()
    const push_option_ref01_match_dt0: any = {}
    push_option_ref01_match_dt0.id = push_option_ref01_data.id
    const push_option_ref01_data_dt0 = (await push_option_ref01_ent.load(push_option_ref01_match_dt0)).data()
    assert(push_option_ref01_data_dt0.id === push_option_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/push_option/PushOptionTestData.json')

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
    ['push_option01','push_option02','push_option03','company01','company02','company03','connection01','connection02','connection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_PUSH_OPTION_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_PUSH_OPTION_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_PUSH_OPTION_ENTID']
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
  
