
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


describe('SettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Setting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apiKey":{"a":true,"h":"Api Key","n":"apiKey","r":false,"sh":"The API key value used to make authenticated http requests.","t":"`$STRING`","key$":"apiKey","index$":0},"createdDate":{"a":true,"h":"Created Date","n":"createdDate","r":false,"sh":"The date the entity was created.","t":"`$STRING`","key$":"createdDate","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the API key.","t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"A meaningful name assigned to the API key.","t":"`$STRING`","key$":"name","index$":3}},"id":{"field":"id","name":"id"},"name":"setting","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /apiKeys","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/apiKeys","q":{},"r":{},"s":[{"lit":"apiKeys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /profile/syncSettings","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/profile/syncSettings","q":{},"r":{},"s":[{"lit":"profile"},{"lit":"syncSettings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /apiKeys","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/apiKeys","q":{},"r":{},"s":[{"lit":"apiKeys"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /apiKeys/{apiKeyId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"api_key_id","or":"api_key_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/apiKeys/{apiKeyId}","q":{"exist":["api_key_id"]},"r":{"param":{"apiKeyId":"api_key_id"}},"s":[{"lit":"apiKeys"},{"var":"api_key_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"setting","name__orig":"setting","Name":"Setting","name_":"setting","name-":"setting","NAME":"SETTING","index$":14}, {"active":true,"entity":"setting","key$":"BasicSettingFlow","kind":"basic","name":"BasicSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"setting_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"setting_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"setting_ref01","suffix":"_rm0"},"m":{"id":"setting01"},"o":"remove","s":[],"v":[],"index$":2},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"setting_ref01"}}],"index$":3}]}, 'Setting', {"POST /apiKeys":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Create API key","description":"Details about the newly created API key.","x-internal":true,"type":"object","properties":{"name":{"type":"string","maxLength":50,"nullable":true,"description":"A meaningful name assigned to the API key.","example":"azure-invoice-finance-processor","x-ref":"#/components/schemas/ApiKeyDetails/allOf/0/properties/name","key$":"name"}},"x-ref":"#/components/schemas/CreateApiKey","index$":1},"examples":{"Create API key with name":{"value":{"name":"azure-invoice-finance-processor"}}}}}},"parameters":[]},"POST /profile/syncSettings":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"properties":{"clientId":{"title":"Client ID","type":"string","format":"uuid","description":"Unique identifier for your client in Codat.","x-ref":"#/components/schemas/ClientId"},"settings":{"type":"array","items":{"title":"SyncSetting","description":"Describes how often, and how much history, should be fetched for the given data type when a pull operation is queued.","examples":[],"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/SyncSetting"}},"overridesDefaults":{"type":"boolean","default":true,"description":"Set to `True` if you want to override default [sync settings](https://docs.codat.io/knowledge-base/advanced-sync-settings)."}},"required":["clientId","settings","overridesDefaults"]}],"type":"object","index$":1}}},"description":"Include a `syncSetting` object for each data type.\n`syncFromWindow`, `syncFromUTC` & `monthsToSync` only need to be included if you wish to set a value for them."},"parameters":[]},"GET /apiKeys":{"protocol":"http","parameters":[]},"DELETE /apiKeys/{apiKeyId}":{"protocol":"http","parameters":[{"name":"apiKeyId","in":"path","required":true,"schema":{"type":"string","example":"8a210b68-6988-11ed-a1eb-0242ac120002"},"description":"Unique identifier for api key.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const setting_ref01_ent = client.Setting()
    let setting_ref01_data = setup.data.new.setting['setting_ref01']

    setting_ref01_data = (await setting_ref01_ent.create(setting_ref01_data)).data()
    assert(null != setting_ref01_data.id)


    // LIST
    const setting_ref01_match = {}

    const setting_ref01_list = (await setting_ref01_ent.list(setting_ref01_match)).map((e) => e.data())

    assert(!isempty(select(setting_ref01_list, { id: setting_ref01_data.id })))


    // REMOVE
    const setting_ref01_match_rm0 = {}
    setting_ref01_match_rm0.id = setting_ref01_data.id
    await setting_ref01_ent.remove(setting_ref01_match_rm0)
  

    // LIST
    const setting_ref01_match_rt0 = {}

    const setting_ref01_list_rt0 = (await setting_ref01_ent.list(setting_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(setting_ref01_list_rt0, { id: setting_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/setting/SettingTestData.json')

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
    ['setting01','setting02','setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_SETTING_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_SETTING_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_SETTING_ENTID']
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
  
