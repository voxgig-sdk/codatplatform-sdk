
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


describe('ConnectionManagementAccessTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.ConnectionManagementAccessToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accessToken":{"a":true,"h":"Access Token","n":"accessToken","r":false,"sh":"Access token that allows SMBs to manage connections that have access to their data.","t":"`$STRING`","key$":"accessToken","index$":0}},"name":"connection_management_access_token","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /companies/{companyId}/connectionManagement/accessToken","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/companies/{companyId}/connectionManagement/accessToken","q":{"exist":["company_id"]},"r":{"param":{"companyId":"company_id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"connectionManagement"},{"lit":"accessToken"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.company"]]},"key$":"connection_management_access_token","name__orig":"connection_management_access_token","Name":"ConnectionManagementAccessToken","name_":"connection_management_access_token","name-":"connection-management-access-token","NAME":"CONNECTION_MANAGEMENT_ACCESS_TOKEN","index$":4}, {"active":true,"entity":"connection_management_access_token","key$":"BasicConnectionManagementAccessTokenFlow","kind":"basic","name":"BasicConnectionManagementAccessTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"connection_management_access_token_ref01","srcdatavar":"connection_management_access_token_ref01_data","suffix":"_dt0"},"m":{"id":"connection_management_access_token01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-connection_management_access_token_ref01"}}],"index$":0}]}, 'ConnectionManagementAccessToken', {"GET /companies/{companyId}/connectionManagement/accessToken":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let connection_management_access_token_ref01_data = Object.values(setup.data.existing.connection_management_access_token)[0]

    // LOAD
    const connection_management_access_token_ref01_ent = client.ConnectionManagementAccessToken()
    const connection_management_access_token_ref01_match_dt0 = {}
    const connection_management_access_token_ref01_data_dt0 = (await connection_management_access_token_ref01_ent.load(connection_management_access_token_ref01_match_dt0)).data()
    assert(null != connection_management_access_token_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/connection_management_access_token/ConnectionManagementAccessTokenTestData.json')

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
    ['connection_management_access_token01','connection_management_access_token02','connection_management_access_token03','company01','company02','company03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ACCESS_TOKEN_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ACCESS_TOKEN_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ACCESS_TOKEN_ENTID']
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
  
