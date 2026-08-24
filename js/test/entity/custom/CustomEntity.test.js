
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { CodatplatformSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('CustomEntity', async () => {

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Custom()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_ref01_data = Object.values(setup.data.existing.custom)[0]

    // UPDATE
    const custom_ref01_ent = client.Custom()
    const custom_ref01_data_up0 = {}
    custom_ref01_data_up0 ['platform_key'] = setup.idmap['platform_key']

    const custom_ref01_markdef_up0 = { name: 'dataSource', value: 'Mark01-custom_ref01_' + setup.now }
    custom_ref01_data_up0 [custom_ref01_markdef_up0.name] = custom_ref01_markdef_up0.value

    const custom_ref01_resdata_up0 = (await custom_ref01_ent.update(custom_ref01_data_up0)).data()
    assert(null != custom_ref01_resdata_up0)

    assert(custom_ref01_resdata_up0[custom_ref01_markdef_up0.name] === custom_ref01_markdef_up0.value)


    // LOAD
    const custom_ref01_match_dt0 = {}
    const custom_ref01_data_dt0 = (await custom_ref01_ent.load(custom_ref01_match_dt0)).data()
    assert(null != custom_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/custom/CustomTestData.json')

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
    ['custom01','custom02','custom03','integration01','integration02','integration03','company01','company02','company03','connection01','connection02','connection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_CUSTOM_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': 'NONE',
  })

  idmap = env['CODATPLATFORM_TEST_CUSTOM_ENTID']

  if ('TRUE' === env.CODATPLATFORM_TEST_LIVE) {
    client = new CodatplatformSDK(merge([
      {
        apikey: env.CODATPLATFORM_APIKEY,
      },
      extra
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
  
