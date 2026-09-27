
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { CodatplatformSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ConnectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Connection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"connectionInfo":{"a":true,"h":"Connection Info","n":"connectionInfo","r":false,"t":"`$OBJECT`","key$":"connectionInfo","index$":0},"created":{"a":true,"h":"Created","n":"created","r":true,"sh":"In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.","t":"`$STRING`","key$":"created","index$":1},"dataConnectionErrors":{"a":true,"h":"Data Connection Errors","n":"dataConnectionErrors","r":false,"t":"`$ARRAY`","key$":"dataConnectionErrors","index$":2},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"Unique identifier for a company's data connection.","t":"`$STRING`","key$":"id","index$":3},"integrationId":{"a":true,"fo":"uuid","h":"Integration Id","n":"integrationId","r":true,"sh":"A Codat ID representing the integration.","t":"`$STRING`","key$":"integrationId","index$":4},"integrationKey":{"a":true,"h":"Integration Key","n":"integrationKey","r":true,"sh":"A unique four-character ID that identifies the platform of the company's data connection.","t":"`$STRING`","key$":"integrationKey","index$":5},"lastSync":{"a":true,"h":"Last Sync","n":"lastSync","r":false,"sh":"In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.","t":"`$STRING`","key$":"lastSync","index$":6},"linkUrl":{"a":true,"fo":"uri","h":"Link Url","n":"linkUrl","r":true,"sh":"The link URL your customers can use to authorize access to their business application.","t":"`$STRING`","key$":"linkUrl","index$":7},"links":{"a":true,"h":"Links","n":"links","r":true,"t":"`$OBJECT`","key$":"links","index$":8},"pageNumber":{"a":true,"h":"Page Number","n":"pageNumber","r":true,"sh":"Current page number.","t":"`$INTEGER`","key$":"pageNumber","index$":9},"pageSize":{"a":true,"h":"Page Size","n":"pageSize","r":true,"sh":"Number of items to return in results array.","t":"`$INTEGER`","key$":"pageSize","index$":10},"platformKey":{"a":true,"h":"Platform Key","n":"platformKey","r":false,"sh":"A unique 4-letter key to represent a platform in each integration.","t":"`$STRING`","key$":"platformKey","index$":11},"platformName":{"a":true,"h":"Platform Name","n":"platformName","r":true,"sh":"Name of integration connected to company.","t":"`$STRING`","key$":"platformName","index$":12},"results":{"a":true,"h":"Results","n":"results","r":false,"t":"`$ARRAY`","key$":"results","index$":13},"sourceId":{"a":true,"fo":"uuid","h":"Source Id","n":"sourceId","r":true,"sh":"A source-specific ID used to distinguish between different sources originating from the same data connection.","t":"`$STRING`","key$":"sourceId","index$":14},"sourceType":{"a":true,"h":"Source Type","n":"sourceType","r":true,"sh":"The type of platform of the connection.","t":"`$STRING`","key$":"sourceType","index$":15},"status":{"a":true,"h":"Status","n":"status","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The current authorization status of the data connection.","t":"`$STRING`","key$":"status","index$":16},"totalResults":{"a":true,"h":"Total Results","n":"totalResults","r":true,"sh":"Total number of items.","t":"`$INTEGER`","key$":"totalResults","index$":17}},"id":{"field":"id","name":"id"},"name":"connection","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /companies/{companyId}/connections","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/companies/{companyId}/connections","q":{"exist":["company_id"]},"r":{"param":{"companyId":"company_id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"connections"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /companies/{companyId}/connections","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"-modifiedDate","k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":100,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"id=e3334455-1aed-4e71-ab43-6bccf12092ee","k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/companies/{companyId}/connections","q":{"exist":["company_id","order_by","page","page_size","query"]},"r":{"param":{"companyId":"company_id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"connections"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /companies/{companyId}/connections/{connectionId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2e9d2c44-f675-40ba-8049-353bfcb5e171","k":"param","n":"id","or":"connection_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/companies/{companyId}/connections/{connectionId}","q":{"exist":["company_id","id"]},"r":{"param":{"companyId":"company_id","connectionId":"id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"connections"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /companies/{companyId}/connections/{connectionId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2e9d2c44-f675-40ba-8049-353bfcb5e171","k":"param","n":"id","or":"connection_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/companies/{companyId}/connections/{connectionId}","q":{"exist":["company_id","id"]},"r":{"param":{"companyId":"company_id","connectionId":"id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"connections"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /companies/{companyId}/connections/{connectionId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2e9d2c44-f675-40ba-8049-353bfcb5e171","k":"param","n":"id","or":"connection_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/companies/{companyId}/connections/{connectionId}","q":{"exist":["company_id","id"]},"r":{"param":{"companyId":"company_id","connectionId":"id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"connections"},{"var":"id"}],"t":{"req":{"status":"`reqdata.status`"},"res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /companies/{companyId}/connections/{connectionId}/authorization","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2e9d2c44-f675-40ba-8049-353bfcb5e171","k":"param","n":"id","or":"connection_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/companies/{companyId}/connections/{connectionId}/authorization","q":{"$action":"authorization","exist":["company_id","id"]},"r":{"param":{"companyId":"company_id","connectionId":"id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"connections"},{"var":"id"},{"lit":"authorization"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.company"]]},"key$":"connection","name__orig":"connection","Name":"Connection","name_":"connection","name-":"connection","NAME":"CONNECTION","index$":3}, {"active":true,"entity":"connection","key$":"BasicConnectionFlow","kind":"basic","name":"BasicConnectionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"connection_ref01"},"m":{"company_id":"company01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"company_id":"company01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"connection_ref01"}}],"index$":1},{"a":true,"d":{"company_id":"company01"},"i":{"ref":"connection_ref01","srcdatavar":"connection_ref01_data","suffix":"_up0","textfield":"created"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-connection_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"connection_ref01","srcdatavar":"connection_ref01_data","suffix":"_dt0"},"m":{"company_id":"company01","id":"connection01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-connection_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"connection_ref01","suffix":"_rm0"},"m":{"company_id":"company01","id":"connection01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"company_id":"company01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"connection_ref01"}}],"index$":5}]}, 'Connection', {"POST /companies/{companyId}/connections":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"platformKey":{"type":"string","minLength":4,"maxLength":4,"pattern":"[a-z]{4}","example":"gbol","description":"A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys.","x-ref":"#/components/parameters/platformKey/schema","key$":"platformKey"}},"index$":1}}}},"parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0}]},"GET /companies/{companyId}/connections":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","minimum":1,"example":1,"default":1},"description":"Page number. [Read more](https://docs.codat.io/using-the-api/paging).","x-ref":"#/components/parameters/page","index$":1},{"name":"pageSize","in":"query","schema":{"type":"integer","format":"int32","default":100,"example":100,"minimum":1,"maximum":5000},"description":"Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).","x-ref":"#/components/parameters/pageSize","index$":2},{"name":"query","in":"query","required":false,"schema":{"type":"string"},"example":"id=e3334455-1aed-4e71-ab43-6bccf12092ee","description":"Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).","x-ref":"#/components/parameters/query","index$":3},{"name":"orderBy","in":"query","required":false,"schema":{"type":"string","example":"-modifiedDate"},"description":"Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).","x-ref":"#/components/parameters/orderBy","index$":4}]},"GET /companies/{companyId}/connections/{connectionId}":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"connectionId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"2e9d2c44-f675-40ba-8049-353bfcb5e171","description":"Unique identifier for a company's data connection."},"description":"Unique identifier for a connection.","x-ref":"#/components/parameters/connectionId","index$":1}]},"DELETE /companies/{companyId}/connections/{connectionId}":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"connectionId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"2e9d2c44-f675-40ba-8049-353bfcb5e171","description":"Unique identifier for a company's data connection."},"description":"Unique identifier for a connection.","x-ref":"#/components/parameters/connectionId","index$":1}]},"PATCH /companies/{companyId}/connections/{connectionId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Update connection","x-internal":true,"type":"object","properties":{"status":{"title":"Data connection status","description":"The current authorization status of the data connection.","type":"string","enum":["PendingAuth","Linked","Unlinked","Deauthorized"],"nullable":true,"x-ref":"#/components/schemas/Connection/definitions/dataConnectionStatus","key$":"status"}},"additionalProperties":false,"x-ref":"#/components/schemas/UpdateConnectionStatus","index$":1},"examples":{"Example":{"value":{"status":"Unlinked"}}}}},"description":""},"parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"connectionId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"2e9d2c44-f675-40ba-8049-353bfcb5e171","description":"Unique identifier for a company's data connection."},"description":"Unique identifier for a connection.","x-ref":"#/components/parameters/connectionId","index$":1}]},"PUT /companies/{companyId}/connections/{connectionId}/authorization":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","additionalProperties":{"type":"string"}}}},"description":""},"parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"connectionId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"2e9d2c44-f675-40ba-8049-353bfcb5e171","description":"Unique identifier for a company's data connection."},"description":"Unique identifier for a connection.","x-ref":"#/components/parameters/connectionId","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const connection_ref01_ent = client.Connection()
    let connection_ref01_data = setup.data.new.connection['connection_ref01']
    connection_ref01_data['company_id'] = setup.idmap['company01']

    connection_ref01_data = (await connection_ref01_ent.create(connection_ref01_data)).data()
    assert(null != connection_ref01_data.id)


    // LIST
    const connection_ref01_match = {}
    connection_ref01_match['company_id'] = setup.idmap['company01']

    const connection_ref01_list = (await connection_ref01_ent.list(connection_ref01_match)).map((e) => e.data())

    assert(!isempty(select(connection_ref01_list, { id: connection_ref01_data.id })))


    // UPDATE
    const connection_ref01_data_up0 = {}
    connection_ref01_data_up0.id = connection_ref01_data.id
    connection_ref01_data_up0 ['company_id'] = setup.idmap['company_id']

    const connection_ref01_markdef_up0 = { name: 'created', value: 'Mark01-connection_ref01_' + setup.now }
    connection_ref01_data_up0 [connection_ref01_markdef_up0.name] = connection_ref01_markdef_up0.value

    const connection_ref01_resdata_up0 = (await connection_ref01_ent.update(connection_ref01_data_up0)).data()
    assert(connection_ref01_resdata_up0.id === connection_ref01_data_up0.id)

    assert(connection_ref01_resdata_up0[connection_ref01_markdef_up0.name] === connection_ref01_markdef_up0.value)


    // LOAD
    const connection_ref01_match_dt0 = {}
    connection_ref01_match_dt0.id = connection_ref01_data.id
    const connection_ref01_data_dt0 = (await connection_ref01_ent.load(connection_ref01_match_dt0)).data()
    assert(connection_ref01_data_dt0.id === connection_ref01_data.id)


    // REMOVE
    const connection_ref01_match_rm0 = {}
    connection_ref01_match_rm0.id = connection_ref01_data.id
    await connection_ref01_ent.remove(connection_ref01_match_rm0)
  

    // LIST
    const connection_ref01_match_rt0 = {}
    connection_ref01_match_rt0['company_id'] = setup.idmap['company01']

    const connection_ref01_list_rt0 = (await connection_ref01_ent.list(connection_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(connection_ref01_list_rt0, { id: connection_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/connection/ConnectionTestData.json')

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
    ['connection01','connection02','connection03','company01','company02','company03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_CONNECTION_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_CONNECTION_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_CONNECTION_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
