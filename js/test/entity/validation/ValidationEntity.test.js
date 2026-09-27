
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


describe('ValidationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Validation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":false,"t":"`$ARRAY`","key$":"errors","index$":0},"warnings":{"a":true,"h":"Warnings","n":"warnings","r":false,"t":"`$ARRAY`","key$":"warnings","index$":1}},"name":"validation","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /companies/{companyId}/sync/{datasetId}/validation","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"sync_id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/companies/{companyId}/sync/{datasetId}/validation","q":{"exist":["company_id","sync_id"]},"r":{"param":{"companyId":"company_id","datasetId":"sync_id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"sync"},{"var":"sync_id"},{"lit":"validation"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.company"]]},"key$":"validation","name__orig":"validation","Name":"Validation","name_":"validation","name-":"validation","NAME":"VALIDATION","index$":18}, {"active":true,"entity":"validation","key$":"BasicValidationFlow","kind":"basic","name":"BasicValidationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"company_id":"company01","sync_id":"sync01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"validation_ref01"}}],"index$":0}]}, 'Validation', {"GET /companies/{companyId}/sync/{datasetId}/validation":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0},{"name":"datasetId","in":"path","required":true,"schema":{"type":"string","format":"uuid","description":"Unique identifier for the dataset that completed its sync."},"description":"Unique identifier for the dataset that completed its sync.","x-ref":"#/components/parameters/datasetId","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let validation_ref01_data = Object.values(setup.data.existing.validation)[0]

    // LIST
    const validation_ref01_ent = client.Validation()
    const validation_ref01_match = {}
    validation_ref01_match['company_id'] = setup.idmap['company01']
    validation_ref01_match['sync_id'] = setup.idmap['sync01']

    const validation_ref01_list = (await validation_ref01_ent.list(validation_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/validation/ValidationTestData.json')

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
    ['validation01','validation02','validation03','company01','company02','company03','sync01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_VALIDATION_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_VALIDATION_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_VALIDATION_ENTID']
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
  
