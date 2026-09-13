

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { CodatplatformSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('PullOperationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.PullOperation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'pull_operation.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_PULL_OPERATION_ENTID JSON to run live')
      return
    }
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
    const pull_operation_ref01_match: any = {}
    pull_operation_ref01_match['company_id'] = setup.idmap['company01']

    const pull_operation_ref01_list = (await pull_operation_ref01_ent.list(pull_operation_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(pull_operation_ref01_list, { id: pull_operation_ref01_data.id })))


    // LOAD
    const pull_operation_ref01_match_dt0: any = {}
    pull_operation_ref01_match_dt0.id = pull_operation_ref01_data.id
    const pull_operation_ref01_data_dt0 = (await pull_operation_ref01_ent.load(pull_operation_ref01_match_dt0)).data()
    assert(pull_operation_ref01_data_dt0.id === pull_operation_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['CODATPLATFORM_TEST_PULL_OPERATION_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'CODATPLATFORM_TEST_PULL_OPERATION_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_PULL_OPERATION_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  if (live) {
    client = new CodatplatformSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.CODATPLATFORM_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
