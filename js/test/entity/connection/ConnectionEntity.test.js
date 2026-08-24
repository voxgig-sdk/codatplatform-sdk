
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


describe('ConnectionEntity', async () => {

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Connection()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
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
    'CODATPLATFORM_APIKEY': 'NONE',
  })

  idmap = env['CODATPLATFORM_TEST_CONNECTION_ENTID']

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
  
