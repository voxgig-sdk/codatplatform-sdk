
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


describe('SettingEntity', async () => {

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Setting()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const setting_ref01_ent = client.Setting()
    let setting_ref01_data = setup.data.new.setting['setting_ref01']

    setting_ref01_data = await setting_ref01_ent.create(setting_ref01_data)
    assert(null != setting_ref01_data.id)


    // LIST
    const setting_ref01_match = {}

    const setting_ref01_list = await setting_ref01_ent.list(setting_ref01_match)

    assert(!isempty(select(setting_ref01_list, { id: setting_ref01_data.id })))


    // REMOVE
    const setting_ref01_match_rm0 = {}
    setting_ref01_match_rm0.id = setting_ref01_data.id
    await setting_ref01_ent.remove(setting_ref01_match_rm0)
  

    // LIST
    const setting_ref01_match_rt0 = {}

    const setting_ref01_list_rt0 = await setting_ref01_ent.list(setting_ref01_match_rt0)

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
    ['setting01','setting02','setting03','api_key01','api_key02','api_key03'],
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
    'CODATPLATFORM_APIKEY': 'NONE',
  })

  idmap = env['CODATPLATFORM_TEST_SETTING_ENTID']

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
  
