

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('RefreshDataEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.RefreshData()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'refresh_data.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"refresh_data","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /companies/{companyId}/data/all","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"company_id","or":"company_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/companies/{companyId}/data/all","q":{"exist":["company_id"]},"r":{"param":{"companyId":"company_id"}},"s":[{"lit":"companies"},{"var":"company_id"},{"lit":"data"},{"lit":"all"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.company"]]},"key$":"refresh_data","name__orig":"refresh_data","Name":"RefreshData","name_":"refresh_data","name-":"refresh-data","NAME":"REFRESH_DATA","index$":13}, {"active":true,"entity":"refresh_data","key$":"BasicRefreshDataFlow","kind":"basic","name":"BasicRefreshDataFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"refresh_data_ref01"},"m":{"company_id":"company01"},"o":"create","s":[],"v":[],"index$":0}]}, 'RefreshData', {"POST /companies/{companyId}/data/all":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const refresh_data_ref01_ent = client.RefreshData()
    let refresh_data_ref01_data = setup.data.new.refresh_data['refresh_data_ref01']
    refresh_data_ref01_data['company_id'] = setup.idmap['company01']

    refresh_data_ref01_data = (await refresh_data_ref01_ent.create(refresh_data_ref01_data)).data()
    assert(null != refresh_data_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/refresh_data/RefreshDataTestData.json')

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
    ['refresh_data01','refresh_data02','refresh_data03','company01','company02','company03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_REFRESH_DATA_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_REFRESH_DATA_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_REFRESH_DATA_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
