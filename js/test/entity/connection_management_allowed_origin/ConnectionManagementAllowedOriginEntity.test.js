
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


describe('ConnectionManagementAllowedOriginEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.ConnectionManagementAllowedOrigin()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allowedOrigins":{"a":true,"h":"Allowed Origins","n":"allowedOrigins","r":false,"sh":"An array of allowed origins (i.e.","t":"`$ARRAY`","key$":"allowedOrigins","index$":0}},"name":"connection_management_allowed_origin","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /connectionManagement/corsSettings","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/connectionManagement/corsSettings","q":{},"r":{},"s":[{"lit":"connectionManagement"},{"lit":"corsSettings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /corsSettings","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/corsSettings","q":{},"r":{},"s":[{"lit":"corsSettings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /connectionManagement/corsSettings","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/connectionManagement/corsSettings","q":{},"r":{},"s":[{"lit":"connectionManagement"},{"lit":"corsSettings"}],"t":{"req":"`reqdata`","res":"`body.allowedOrigins`"},"index$":0},{"a":true,"co":{"id":"GET /corsSettings","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/corsSettings","q":{},"r":{},"s":[{"lit":"corsSettings"}],"t":{"req":"`reqdata`","res":"`body.allowedOrigins`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"connection_management_allowed_origin","name__orig":"connection_management_allowed_origin","Name":"ConnectionManagementAllowedOrigin","name_":"connection_management_allowed_origin","name-":"connection-management-allowed-origin","NAME":"CONNECTION_MANAGEMENT_ALLOWED_ORIGIN","index$":5}, {"active":true,"entity":"connection_management_allowed_origin","key$":"BasicConnectionManagementAllowedOriginFlow","kind":"basic","name":"BasicConnectionManagementAllowedOriginFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"connection_management_allowed_origin_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"connection_management_allowed_origin_ref01"}}],"index$":1}]}, 'ConnectionManagementAllowedOrigin', {"POST /connectionManagement/corsSettings":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Allowed origins","type":"object","properties":{"allowedOrigins":{"description":"An array of allowed origins (i.e. your domains) to permit cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).n resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).","items":{"description":"A domain you want to allow CORS with Codat.","format":"uri","type":"string"},"key$":"allowedOrigins","type":"array"}},"example":{"allowedOrigins":["https://www.bank-of-dave.com"]},"x-ref":"#/components/schemas/ConnectionManagementAllowedOrigins","index$":1},"examples":{"Allowed origins":{"value":{"allowedOrigins":["https://www.bank-of-dave.com"]},"x-ref":"#/components/examples/connectionManagementAllowedOriginsResponse"}}}}},"parameters":[]},"POST /corsSettings":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Allowed origins","type":"object","properties":{"allowedOrigins":{"description":"An array of allowed origins (i.e. your domains) to permit cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).n resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).","items":{"description":"A domain you want to allow CORS with Codat.","format":"uri","type":"string"},"key$":"allowedOrigins","type":"array"}},"example":{"allowedOrigins":["https://www.bank-of-dave.com"]},"x-ref":"#/components/schemas/ConnectionManagementAllowedOrigins","index$":1},"examples":{"Allowed origins":{"value":{"allowedOrigins":["https://www.bank-of-dave.com"]},"x-ref":"#/components/examples/connectionManagementAllowedOriginsResponse"}}}}},"parameters":[]},"GET /connectionManagement/corsSettings":{"protocol":"http","parameters":[]},"GET /corsSettings":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const connection_management_allowed_origin_ref01_ent = client.ConnectionManagementAllowedOrigin()
    let connection_management_allowed_origin_ref01_data = setup.data.new.connection_management_allowed_origin['connection_management_allowed_origin_ref01']

    connection_management_allowed_origin_ref01_data = (await connection_management_allowed_origin_ref01_ent.create(connection_management_allowed_origin_ref01_data)).data()
    assert(null != connection_management_allowed_origin_ref01_data)


    // LIST
    const connection_management_allowed_origin_ref01_match = {}

    const connection_management_allowed_origin_ref01_list = (await connection_management_allowed_origin_ref01_ent.list(connection_management_allowed_origin_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/connection_management_allowed_origin/ConnectionManagementAllowedOriginTestData.json')

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
    ['connection_management_allowed_origin01','connection_management_allowed_origin02','connection_management_allowed_origin03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ALLOWED_ORIGIN_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ALLOWED_ORIGIN_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ALLOWED_ORIGIN_ENTID']
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
  
