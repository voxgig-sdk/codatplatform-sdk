
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


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


  test('basic', async () => {

    const setup = basicSetup()
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

  if ('TRUE' === env.CODATPLATFORM_TEST_LIVE) {
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
      extra || {}
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
    now: Date.now(),
  }

  return setup
}
  
