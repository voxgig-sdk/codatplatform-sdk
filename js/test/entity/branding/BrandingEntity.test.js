
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


describe('BrandingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Branding()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"button":{"a":true,"h":"Button","n":"button","r":false,"sh":"Button branding references.","t":"`$OBJECT`","key$":"button","index$":0},"logo":{"a":true,"h":"Logo","n":"logo","r":false,"sh":"Logo branding references.","t":"`$OBJECT`","key$":"logo","index$":1},"sourceId":{"a":true,"fo":"uuid","h":"Source Id","n":"sourceId","r":false,"sh":"A source-specific ID used to distinguish between different sources originating from the same data connection.","t":"`$STRING`","key$":"sourceId","index$":2}},"name":"branding","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /integrations/{platformKey}/branding","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"gbol","k":"param","n":"platform_key","or":"platform_key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/integrations/{platformKey}/branding","q":{"exist":["platform_key"]},"r":{"param":{"platformKey":"platform_key"}},"s":[{"lit":"integrations"},{"var":"platform_key"},{"lit":"branding"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.integration"]]},"key$":"branding","name__orig":"branding","Name":"Branding","name_":"branding","name-":"branding","NAME":"BRANDING","index$":0}, {"active":true,"entity":"branding","key$":"BasicBrandingFlow","kind":"basic","name":"BasicBrandingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"branding_ref01","srcdatavar":"branding_ref01_data","suffix":"_dt0"},"m":{"id":"branding01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-branding_ref01"}}],"index$":0}]}, 'Branding', {"GET /integrations/{platformKey}/branding":{"protocol":"http","parameters":[{"name":"platformKey","in":"path","required":true,"schema":{"type":"string","minLength":4,"maxLength":4,"pattern":"[a-z]{4}","example":"gbol","description":"A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys."},"description":"A unique 4-letter key to represent a platform in each integration.","x-ref":"#/components/parameters/platformKey","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let branding_ref01_data = Object.values(setup.data.existing.branding)[0]

    // LOAD
    const branding_ref01_ent = client.Branding()
    const branding_ref01_match_dt0 = {}
    const branding_ref01_data_dt0 = (await branding_ref01_ent.load(branding_ref01_match_dt0)).data()
    assert(null != branding_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/branding/BrandingTestData.json')

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
    ['branding01','branding02','branding03','integration01','integration02','integration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_BRANDING_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_BRANDING_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_BRANDING_ENTID']
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
  
