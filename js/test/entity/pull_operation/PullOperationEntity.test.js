
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


describe('PullOperationEntity', async () => {

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.PullOperation()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const pull_operation_ref01_ent = client.PullOperation()
    let pull_operation_ref01_data = setup.data.new.pull_operation['pull_operation_ref01']
    pull_operation_ref01_data['company_id'] = setup.idmap['company01']
    pull_operation_ref01_data['data_type'] = setup.idmap['data_type01']

    pull_operation_ref01_data = (await pull_operation_ref01_ent.create(pull_operation_ref01_data)).data()
    assert(null != pull_operation_ref01_data.id)


    // LIST
    const pull_operation_ref01_match = {}
    pull_operation_ref01_match['company_id'] = setup.idmap['company01']

    const pull_operation_ref01_list = (await pull_operation_ref01_ent.list(pull_operation_ref01_match)).map((e) => e.data())

    assert(!isempty(select(pull_operation_ref01_list, { id: pull_operation_ref01_data.id })))


    // LOAD
    const pull_operation_ref01_match_dt0 = {}
    pull_operation_ref01_match_dt0.id = pull_operation_ref01_data.id
    const pull_operation_ref01_data_dt0 = (await pull_operation_ref01_ent.load(pull_operation_ref01_match_dt0)).data()
    assert(pull_operation_ref01_data_dt0.id === pull_operation_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/pull_operation/PullOperationTestData.json')

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
    ['pull_operation01','pull_operation02','pull_operation03','company01','company02','company03','company01','company02','company03','history01','history02','history03','company01','company02','company03','queue01','queue02','queue03','company01','company02','company03','connection01','connection02','connection03','custom01','custom02','custom03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_PULL_OPERATION_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': 'NONE',
  })

  idmap = env['CODATPLATFORM_TEST_PULL_OPERATION_ENTID']

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
  
