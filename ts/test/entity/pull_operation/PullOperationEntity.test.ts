

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


describe('PullOperationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.PullOperation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pull_operation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"companyId":{"a":true,"fo":"uuid","h":"Company Id","n":"companyId","r":true,"sh":"Unique identifier of the company associated to this pull operation.","t":"`$STRING`","key$":"companyId","index$":0},"completed":{"a":true,"h":"Completed","n":"completed","r":false,"sh":"In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.","t":"`$STRING`","key$":"completed","index$":1},"connectionId":{"a":true,"fo":"uuid","h":"Connection Id","n":"connectionId","r":true,"sh":"Unique identifier of the connection associated to this pull operation.","t":"`$STRING`","key$":"connectionId","index$":2},"dataType":{"a":true,"h":"Data Type","n":"dataType","r":true,"sh":"The data type you are requesting in a pull operation.","t":"`$STRING`","key$":"dataType","index$":3},"errorMessage":{"a":true,"h":"Error Message","n":"errorMessage","r":false,"sh":"A message about a transient or persistent error returned by Codat or the source platform.","t":"`$STRING`","key$":"errorMessage","index$":4},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"Unique identifier of the pull operation.","t":"`$STRING`","key$":"id","index$":5},"isCompleted":{"a":true,"h":"Is Completed","n":"isCompleted","r":true,"sh":"`True` if the pull operation is completed successfully.","t":"`$BOOLEAN`","key$":"isCompleted","index$":6},"isErrored":{"a":true,"h":"Is Errored","n":"isErrored","r":true,"sh":"`True` if the pull operation entered an error state.","t":"`$BOOLEAN`","key$":"isErrored","index$":7},"links":{"a":true,"h":"Links","n":"links","r":true,"t":"`$OBJECT`","key$":"links","index$":8},"pageNumber":{"a":true,"h":"Page Number","n":"pageNumber","r":true,"sh":"Current page number.","t":"`$INTEGER`","key$":"pageNumber","index$":9},"pageSize":{"a":true,"h":"Page Size","n":"pageSize","r":true,"sh":"Number of items to return in results array.","t":"`$INTEGER`","key$":"pageSize","index$":10},"progress":{"a":true,"h":"Progress","n":"progress","r":true,"sh":"An integer signifying the progress of the pull operation.","t":"`$INTEGER`","key$":"progress","index$":11},"requested":{"a":true,"h":"Requested","n":"requested","r":true,"sh":"In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.","t":"`$STRING`","key$":"requested","index$":12},"results":{"a":true,"h":"Results","n":"results","r":false,"t":"`$ARRAY`","key$":"results","index$":13},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The current status of the dataset.","t":"`$STRING`","key$":"status","index$":14},"statusDescription":{"a":true,"h":"Status Description","n":"statusDescription","r":false,"sh":"Additional information about the dataset status.","t":"`$STRING`","key$":"statusDescription","index$":15},"totalResults":{"a":true,"h":"Total Results","n":"totalResults","r":true,"sh":"Total number of items.","t":"`$INTEGER`","key$":"totalResults","index$":16}},"id":{"field":"id","name":"id"},"name":"pull_operation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2e9d2c44-f675-40ba-8049-353bfcb5e171","k":"param","n":"connection_id","or":"connection_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"DynamicsPurchaseOrders","k":"param","n":"custom_data_identifier","or":"custom_data_identifier","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}","q":{"exist":["company_id","connection_id","custom_data_identifier"]},"r":{"param":{"companyId":"company_id","connectionId":"connection_id","customDataIdentifier":"custom_data_identifier"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"connections"},{"var":"connection_id"},{"lit":"data"},{"lit":"queue"},{"lit":"custom"},{"var":"custom_data_identifier"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /companies/{companyId}/data/queue/{dataType}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"invoices","k":"param","n":"data_type","or":"data_type","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"connection_id","or":"connection_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/companies/{companyId}/data/queue/{dataType}","q":{"exist":["company_id","connection_id","data_type"]},"r":{"param":{"companyId":"company_id","dataType":"data_type"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"data"},{"lit":"queue"},{"var":"data_type"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /companies/{companyId}/data/history","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"-modifiedDate","k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":100,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"id=e3334455-1aed-4e71-ab43-6bccf12092ee","k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/companies/{companyId}/data/history","q":{"exist":["company_id","order_by","page","page_size","query"]},"r":{"param":{"companyId":"company_id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"data"},{"lit":"history"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /companies/{companyId}/data/history/{datasetId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"dataset_id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/companies/{companyId}/data/history/{datasetId}","q":{"exist":["company_id","dataset_id"]},"r":{"param":{"companyId":"company_id","datasetId":"dataset_id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"data"},{"lit":"history"},{"var":"dataset_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.company"],["$.main.kit.entity.company"],["$.main.kit.entity.company"],["$.main.kit.entity.company","$.main.kit.entity.connection","$.main.kit.entity.custom"]]},"key$":"pull_operation","name__orig":"pull_operation","Name":"PullOperation","name_":"pull_operation","name-":"pull-operation","NAME":"PULL_OPERATION","index$":10}, {"active":true,"entity":"pull_operation","key$":"BasicPullOperationFlow","kind":"basic","name":"BasicPullOperationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"pull_operation_ref01"},"m":{"company_id":"company01","data_type":"data_type01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"company_id":"company01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"pull_operation_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"pull_operation_ref01","srcdatavar":"pull_operation_ref01_data","suffix":"_dt0"},"m":{"company_id":"company01","id":"pull_operation01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pull_operation_ref01"}}],"index$":2}]}, 'PullOperation', {"POST /companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"connectionId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"2e9d2c44-f675-40ba-8049-353bfcb5e171","description":"Unique identifier for a company's data connection."},"description":"Unique identifier for a connection.","x-ref":"#/components/parameters/connectionId","index$":1},{"name":"customDataIdentifier","in":"path","required":true,"schema":{"type":"string","example":"DynamicsPurchaseOrders"},"description":"Unique identifier for a custom data type.","x-ref":"#/components/parameters/customDataIdentifier","index$":2}]},"POST /companies/{companyId}/data/queue/{dataType}":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"dataType","description":"The key of a Codat data type.","in":"path","required":true,"schema":{"title":"Data types","x-internal":true,"type":"string","description":"Available data types","enum":["accountTransactions","balanceSheet","bankAccounts","bankTransactions","billCreditNotes","billPayments","bills","cashFlowStatement","chartOfAccounts","company","creditNotes","customers","directCosts","directIncomes","invoices","itemReceipts","items","journalEntries","journals","paymentMethods","payments","profitAndLoss","purchaseOrders","salesOrders","suppliers","taxRates","trackingCategories","transfers","banking-accountBalances","banking-accounts","banking-transactionCategories","banking-transactions","commerce-companyInfo","commerce-customers","commerce-disputes","commerce-locations","commerce-orders","commerce-paymentMethods","commerce-payments","commerce-productCategories","commerce-products","commerce-taxComponents","commerce-transactions"],"example":"invoices","x-ref":"#/components/schemas/DataType"},"x-ref":"#/components/parameters/dataType","index$":1},{"schema":{"type":"string","format":"uuid"},"in":"query","name":"connectionId","description":"Optionally, provide a data connection id to only queue pull operations on that connection.","index$":2}]},"GET /companies/{companyId}/data/history":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","minimum":1,"example":1,"default":1},"description":"Page number. [Read more](https://docs.codat.io/using-the-api/paging).","x-ref":"#/components/parameters/page","index$":1},{"name":"pageSize","in":"query","schema":{"type":"integer","format":"int32","default":100,"example":100,"minimum":1,"maximum":5000},"description":"Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).","x-ref":"#/components/parameters/pageSize","index$":2},{"name":"query","in":"query","required":false,"schema":{"type":"string"},"example":"id=e3334455-1aed-4e71-ab43-6bccf12092ee","description":"Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).","x-ref":"#/components/parameters/query","index$":3},{"name":"orderBy","in":"query","required":false,"schema":{"type":"string","example":"-modifiedDate"},"description":"Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).","x-ref":"#/components/parameters/orderBy","index$":4}]},"GET /companies/{companyId}/data/history/{datasetId}":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"datasetId","in":"path","required":true,"schema":{"type":"string","format":"uuid","description":"Unique identifier for the dataset that completed its sync."},"description":"Unique identifier for the dataset that completed its sync.","x-ref":"#/components/parameters/datasetId","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const pull_operation_ref01_ent = client.PullOperation()
    let pull_operation_ref01_data = setup.data.new.pull_operation['pull_operation_ref01']
    pull_operation_ref01_data['company_id'] = setup.idmap['company01']
    pull_operation_ref01_data['data_type'] = setup.idmap['data_type01']

    pull_operation_ref01_data = (await pull_operation_ref01_ent.create(pull_operation_ref01_data)).data()
    assert(null != pull_operation_ref01_data.id)


    // LIST
    const pull_operation_ref01_match: any = {}
    pull_operation_ref01_match['company_id'] = setup.idmap['company01']

    const pull_operation_ref01_list = (await pull_operation_ref01_ent.list(pull_operation_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(pull_operation_ref01_list, { id: pull_operation_ref01_data.id })))


    // LOAD
    const pull_operation_ref01_match_dt0: any = {}
    pull_operation_ref01_match_dt0.id = pull_operation_ref01_data.id
    const pull_operation_ref01_data_dt0 = (await pull_operation_ref01_ent.load(pull_operation_ref01_match_dt0)).data()
    assert(pull_operation_ref01_data_dt0.id === pull_operation_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/pull_operation/PullOperationTestData.json')

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
    ['pull_operation01','pull_operation02','pull_operation03','company01','company02','company03','connection01','connection02','connection03','custom01','custom02','custom03','data_type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_PULL_OPERATION_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_PULL_OPERATION_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_PULL_OPERATION_ENTID']
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
  
