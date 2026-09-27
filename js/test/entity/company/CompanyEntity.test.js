
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


describe('CompanyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Company()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"h":"Created","n":"created","r":false,"sh":"In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.","t":"`$STRING`","key$":"created","index$":0},"createdByUserName":{"a":true,"h":"Created By User Name","n":"createdByUserName","r":false,"sh":"Name of user that created the company in Codat.","t":"`$STRING`","key$":"createdByUserName","index$":1},"dataConnections":{"a":true,"h":"Data Connections","n":"dataConnections","r":false,"t":"`$ARRAY`","key$":"dataConnections","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Additional information about the company.","t":"`$STRING`","key$":"description","index$":3},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"Unique identifier for your SMB in Codat.","t":"`$STRING`","key$":"id","index$":4},"lastSync":{"a":true,"h":"Last Sync","n":"lastSync","r":false,"sh":"In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>.","t":"`$STRING`","key$":"lastSync","index$":5},"links":{"a":true,"h":"Links","n":"links","r":true,"t":"`$OBJECT`","key$":"links","index$":6},"name":{"a":true,"h":"Name","n":"name","op":{"patch":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The name of the company","t":"`$STRING`","key$":"name","index$":7},"pageNumber":{"a":true,"h":"Page Number","n":"pageNumber","r":true,"sh":"Current page number.","t":"`$INTEGER`","key$":"pageNumber","index$":8},"pageSize":{"a":true,"h":"Page Size","n":"pageSize","r":true,"sh":"Number of items to return in results array.","t":"`$INTEGER`","key$":"pageSize","index$":9},"products":{"a":true,"h":"Products","n":"products","r":false,"sh":"An array of products that are currently enabled for the company.","t":"`$ARRAY`","key$":"products","index$":10},"redirect":{"a":true,"fo":"uri","h":"Redirect","n":"redirect","r":true,"sh":"The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company.","t":"`$STRING`","key$":"redirect","index$":11},"referenceParentCompany":{"a":true,"h":"Reference Parent Company","n":"referenceParentCompany","r":false,"sh":"The parent entity or controlling organization of this company.","t":"`$OBJECT`","key$":"referenceParentCompany","index$":12},"referenceSubsidiaryCompanies":{"a":true,"h":"Reference Subsidiary Companies","n":"referenceSubsidiaryCompanies","r":false,"sh":"A list of subsidiary companies owned or controlled by this entity.","t":"`$ARRAY`","key$":"referenceSubsidiaryCompanies","index$":13},"results":{"a":true,"h":"Results","n":"results","r":false,"t":"`$ARRAY`","key$":"results","index$":14},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"A collection of user-defined key-value pairs that store custom metadata against the company.","t":"`$OBJECT`","key$":"tags","index$":15},"totalResults":{"a":true,"h":"Total Results","n":"totalResults","r":true,"sh":"Total number of items.","t":"`$INTEGER`","key$":"totalResults","index$":16}},"id":{"field":"id","name":"id"},"name":"company","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /companies/{companyId}/products/{productIdentifier}/refresh","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"product_identifier","or":"product_identifier","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/companies/{companyId}/products/{productIdentifier}/refresh","q":{"$action":"refresh","exist":["id","product_identifier"]},"r":{"param":{"companyId":"id","productIdentifier":"product_identifier"}},"s":[{"lit":"companies"},{"var":"id"},{"lit":"products"},{"var":"product_identifier"},{"lit":"refresh"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /companies","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/companies","q":{},"r":{},"s":[{"lit":"companies"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /companies","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"-modifiedDate","k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":100,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"id=e3334455-1aed-4e71-ab43-6bccf12092ee","k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"region=uk && team=invoice-finance","k":"query","n":"tag","or":"tag","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/companies","q":{"exist":["order_by","page","page_size","query","tag"]},"r":{},"s":[{"lit":"companies"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /companies/{companyId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/companies/{companyId}","q":{"exist":["id"]},"r":{"param":{"companyId":"id"}},"s":[{"lit":"companies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /companies/{companyId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/companies/{companyId}","q":{"exist":["id"]},"r":{"param":{"companyId":"id"}},"s":[{"lit":"companies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /companies/{companyId}/products/{productIdentifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"product_identifier","or":"product_identifier","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/companies/{companyId}/products/{productIdentifier}","q":{"exist":["id","product_identifier"]},"r":{"param":{"companyId":"id","productIdentifier":"product_identifier"}},"s":[{"lit":"companies"},{"var":"id"},{"lit":"products"},{"var":"product_identifier"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /companies/{companyId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/companies/{companyId}","q":{"exist":["id"]},"r":{"param":{"companyId":"id"}},"s":[{"lit":"companies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /companies/{companyId}/products/{productIdentifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"product_identifier","or":"product_identifier","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/companies/{companyId}/products/{productIdentifier}","q":{"exist":["id","product_identifier"]},"r":{"param":{"companyId":"id","productIdentifier":"product_identifier"}},"s":[{"lit":"companies"},{"var":"id"},{"lit":"products"},{"var":"product_identifier"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /companies/{companyId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/companies/{companyId}","q":{"exist":["id"]},"r":{"param":{"companyId":"id"}},"s":[{"lit":"companies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"company","name__orig":"company","Name":"Company","name_":"company","name-":"company","NAME":"COMPANY","index$":1}, {"active":true,"entity":"company","key$":"BasicCompanyFlow","kind":"basic","name":"BasicCompanyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"company_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"company_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"company_ref01","srcdatavar":"company_ref01_data","suffix":"_up0","textfield":"created"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-company_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"company_ref01","srcdatavar":"company_ref01_data","suffix":"_dt0"},"m":{"id":"company01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-company_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"company_ref01","suffix":"_rm0"},"m":{"id":"company01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"company_ref01"}}],"index$":5}]}, 'Company', {"POST /companies/{companyId}/products/{productIdentifier}/refresh":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"productIdentifier","in":"path","required":true,"schema":{"type":"string","examples":["bank-feeds","lending","payables","expenses"]},"description":"Human-readable product identifier for a product.","x-ref":"#/components/parameters/productIdentifier","index$":1}]},"POST /companies":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Create company request","x-internal":true,"type":"object","properties":{"name":{"type":"string","description":"Name of company being connected.","pattern":"^[A-Za-z0-9\\s\\-',&@.,?!\\s]+$","minLength":1,"example":"Bank of Dave","key$":"name"},"description":{"type":"string","example":"Requested early access to the new financing scheme.","description":"Additional information about the company. This can be used to store foreign IDs, references, etc.","key$":"description"},"tags":{"title":"Tags","type":"object","maxProperties":10,"propertyNames":{"pattern":"^.{1,27}$"},"additionalProperties":{"type":"string","maxLength":100},"description":"A collection of user-defined key-value pairs that store custom metadata against the company.","x-ref":"#/components/schemas/Company/definitions/companyDetails/properties/tags","key$":"tags"}},"required":["name"],"x-ref":"#/components/schemas/CompanyRequestBody","index$":1},"examples":{"With no description":{"value":{"name":"Technicalium"}},"With a description":{"value":{"name":"Technicalium","description":"Technology services, including web and app design and development"}}}}}},"parameters":[]},"GET /companies":{"protocol":"http","parameters":[{"name":"page","in":"query","schema":{"type":"integer","format":"int32","minimum":1,"example":1,"default":1},"description":"Page number. [Read more](https://docs.codat.io/using-the-api/paging).","x-ref":"#/components/parameters/page","index$":0},{"name":"pageSize","in":"query","schema":{"type":"integer","format":"int32","default":100,"example":100,"minimum":1,"maximum":5000},"description":"Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).","x-ref":"#/components/parameters/pageSize","index$":1},{"name":"query","in":"query","required":false,"schema":{"type":"string"},"example":"id=e3334455-1aed-4e71-ab43-6bccf12092ee","description":"Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).","x-ref":"#/components/parameters/query","index$":2},{"name":"orderBy","in":"query","required":false,"schema":{"type":"string","example":"-modifiedDate"},"description":"Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).","x-ref":"#/components/parameters/orderBy","index$":3},{"name":"tags","in":"query","schema":{"type":"string"},"example":"region=uk && team=invoice-finance","description":"Filter companies by tags using the \"equals\" (=), \"not equals\" (!=), and \"contains\" (~) operators with [Codat’s query language](https://docs.codat.io/using-the-api/querying).","index$":4}]},"GET /companies/{companyId}":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0}]},"PATCH /companies/{companyId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Update company request","x-internal":true,"type":"object","properties":{"name":{"type":"string","description":"Name of company being connected.","pattern":"^[A-Za-z0-9\\s\\-',&@.,?!\\s]+$","minLength":1,"example":"Bank of Dave","key$":"name"},"description":{"type":"string","example":"Requested early access to the new financing scheme.","description":"Additional information about the company. This can be used to store foreign IDs, references, etc.","x-ref":"#/components/schemas/CompanyRequestBody/properties/description","key$":"description"},"tags":{"title":"Tags","type":"object","maxProperties":10,"propertyNames":{"pattern":"^.{1,27}$"},"additionalProperties":{"type":"string","maxLength":100},"description":"A collection of user-defined key-value pairs that store custom metadata against the company.","x-ref":"#/components/schemas/Company/definitions/companyDetails/properties/tags","key$":"tags"}},"x-ref":"#/components/schemas/CompanyUpdateRequest","index$":1},"examples":{"Update tags":{"value":{"tags":{"refrence":"new reference"}}},"Update name":{"value":{"name":"New Name"}}}}}},"parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0}]},"DELETE /companies/{companyId}/products/{productIdentifier}":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"productIdentifier","in":"path","required":true,"schema":{"type":"string","examples":["bank-feeds","lending","payables","expenses"]},"description":"Human-readable product identifier for a product.","x-ref":"#/components/parameters/productIdentifier","index$":1}]},"DELETE /companies/{companyId}":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0}]},"PUT /companies/{companyId}/products/{productIdentifier}":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"productIdentifier","in":"path","required":true,"schema":{"type":"string","examples":["bank-feeds","lending","payables","expenses"]},"description":"Human-readable product identifier for a product.","x-ref":"#/components/parameters/productIdentifier","index$":1}]},"PUT /companies/{companyId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Create company request","x-internal":true,"type":"object","properties":{"name":{"type":"string","description":"Name of company being connected.","pattern":"^[A-Za-z0-9\\s\\-',&@.,?!\\s]+$","minLength":1,"example":"Bank of Dave","key$":"name"},"description":{"type":"string","example":"Requested early access to the new financing scheme.","description":"Additional information about the company. This can be used to store foreign IDs, references, etc.","key$":"description"},"tags":{"title":"Tags","type":"object","maxProperties":10,"propertyNames":{"pattern":"^.{1,27}$"},"additionalProperties":{"type":"string","maxLength":100},"description":"A collection of user-defined key-value pairs that store custom metadata against the company.","x-ref":"#/components/schemas/Company/definitions/companyDetails/properties/tags","key$":"tags"}},"required":["name"],"x-ref":"#/components/schemas/CompanyRequestBody","index$":1},"examples":{"Update name":{"value":{"name":"New Name"}},"Update description":{"value":{"name":"Same name","description":"Additional documents required"}}}}}},"parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const company_ref01_ent = client.Company()
    let company_ref01_data = setup.data.new.company['company_ref01']

    company_ref01_data = (await company_ref01_ent.create(company_ref01_data)).data()
    assert(null != company_ref01_data.id)


    // LIST
    const company_ref01_match = {}

    const company_ref01_list = (await company_ref01_ent.list(company_ref01_match)).map((e) => e.data())

    assert(!isempty(select(company_ref01_list, { id: company_ref01_data.id })))


    // UPDATE
    const company_ref01_data_up0 = {}
    company_ref01_data_up0.id = company_ref01_data.id

    const company_ref01_markdef_up0 = { name: 'created', value: 'Mark01-company_ref01_' + setup.now }
    company_ref01_data_up0 [company_ref01_markdef_up0.name] = company_ref01_markdef_up0.value

    const company_ref01_resdata_up0 = (await company_ref01_ent.update(company_ref01_data_up0)).data()
    assert(company_ref01_resdata_up0.id === company_ref01_data_up0.id)

    assert(company_ref01_resdata_up0[company_ref01_markdef_up0.name] === company_ref01_markdef_up0.value)


    // LOAD
    const company_ref01_match_dt0 = {}
    company_ref01_match_dt0.id = company_ref01_data.id
    const company_ref01_data_dt0 = (await company_ref01_ent.load(company_ref01_match_dt0)).data()
    assert(company_ref01_data_dt0.id === company_ref01_data.id)


    // REMOVE
    const company_ref01_match_rm0 = {}
    company_ref01_match_rm0.id = company_ref01_data.id
    await company_ref01_ent.remove(company_ref01_match_rm0)
  

    // LIST
    const company_ref01_match_rt0 = {}

    const company_ref01_list_rt0 = (await company_ref01_ent.list(company_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(company_ref01_list_rt0, { id: company_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/company/CompanyTestData.json')

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
    ['company01','company02','company03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_COMPANY_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_COMPANY_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_COMPANY_ENTID']
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
  
