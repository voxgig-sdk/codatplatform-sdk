
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


describe('CompanyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Company()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const company_ref01_ent = client.Company()
    let company_ref01_data = setup.data.new.company['company_ref01']

    company_ref01_data = (await company_ref01_ent.create(company_ref01_data)).data()
    assert(null != company_ref01_data.id)


    // LIST
    const company_ref01_match = {}

    const company_ref01_list = (await company_ref01_ent.list(company_ref01_match)).map((e) => e.data())

    assert(!isempty(select(company_ref01_list, { id: company_ref01_data.id })))


    // UPDATE
    const company_ref01_data_up0 = {}
    company_ref01_data_up0.id = company_ref01_data.id

    const company_ref01_markdef_up0 = { name: 'created', value: 'Mark01-company_ref01_' + setup.now }
    company_ref01_data_up0 [company_ref01_markdef_up0.name] = company_ref01_markdef_up0.value

    const company_ref01_resdata_up0 = (await company_ref01_ent.update(company_ref01_data_up0)).data()
    assert(company_ref01_resdata_up0.id === company_ref01_data_up0.id)

    assert(company_ref01_resdata_up0[company_ref01_markdef_up0.name] === company_ref01_markdef_up0.value)


    // LOAD
    const company_ref01_match_dt0 = {}
    company_ref01_match_dt0.id = company_ref01_data.id
    const company_ref01_data_dt0 = (await company_ref01_ent.load(company_ref01_match_dt0)).data()
    assert(company_ref01_data_dt0.id === company_ref01_data.id)


    // REMOVE
    const company_ref01_match_rm0 = {}
    company_ref01_match_rm0.id = company_ref01_data.id
    await company_ref01_ent.remove(company_ref01_match_rm0)
  

    // LIST
    const company_ref01_match_rt0 = {}

    const company_ref01_list_rt0 = (await company_ref01_ent.list(company_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(company_ref01_list_rt0, { id: company_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/company/CompanyTestData.json')

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
    ['company01','company02','company03','product01','product02','product03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_COMPANY_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_COMPANY_ENTID']

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
  
