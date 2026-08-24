
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { CodatplatformSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


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

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (maybeSkipControl(t, 'entityOp', 'connection_management_allowed_origin.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ALLOWED_ORIGIN_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const connection_management_allowed_origin_ref01_ent = client.ConnectionManagementAllowedOrigin()
    let connection_management_allowed_origin_ref01_data = setup.data.new.connection_management_allowed_origin['connection_management_allowed_origin_ref01']

    connection_management_allowed_origin_ref01_data = await connection_management_allowed_origin_ref01_ent.create(connection_management_allowed_origin_ref01_data)
    assert(null != connection_management_allowed_origin_ref01_data)


    // LIST
    const connection_management_allowed_origin_ref01_match: any = {}

    const connection_management_allowed_origin_ref01_list = await connection_management_allowed_origin_ref01_ent.list(connection_management_allowed_origin_ref01_match)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ALLOWED_ORIGIN_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ALLOWED_ORIGIN_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': 'NONE',
  })

  idmap = env['CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ALLOWED_ORIGIN_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  if (live) {
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
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
