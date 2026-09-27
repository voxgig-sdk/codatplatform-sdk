

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


describe('SyncSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.SyncSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'sync_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"dataType":{"a":true,"h":"Data Type","n":"dataType","r":true,"sh":"Available data types","t":"`$STRING`","key$":"dataType","index$":0},"fetchOnFirstLink":{"a":true,"h":"Fetch On First Link","n":"fetchOnFirstLink","r":true,"sh":"Whether this data type should be queued after a company has authorized a connection.","t":"`$BOOLEAN`","key$":"fetchOnFirstLink","index$":1},"isLocked":{"a":true,"h":"Is Locked","n":"isLocked","r":false,"sh":"`True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked.","t":"`$BOOLEAN`","key$":"isLocked","index$":2},"monthsToSync":{"a":true,"h":"Months To Sync","n":"monthsToSync","r":false,"sh":"Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only.","t":"`$INTEGER`","key$":"monthsToSync","index$":3},"syncFromUtc":{"a":true,"h":"Sync From Utc","n":"syncFromUtc","r":false,"sh":"Date from which data should be fetched.","t":"`$STRING`","key$":"syncFromUtc","index$":4},"syncFromWindow":{"a":true,"h":"Sync From Window","n":"syncFromWindow","r":false,"sh":"Number of months of data to be fetched.","t":"`$INTEGER`","key$":"syncFromWindow","index$":5},"syncOrder":{"a":true,"h":"Sync Order","n":"syncOrder","r":true,"sh":"The sync in which data types are queued for a sync.","t":"`$INTEGER`","key$":"syncOrder","index$":6},"syncSchedule":{"a":true,"h":"Sync Schedule","n":"syncSchedule","r":true,"sh":"Number of hours after which this data type should be refreshed.","t":"`$INTEGER`","key$":"syncSchedule","index$":7}},"name":"sync_setting","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /profile/syncSettings","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/profile/syncSettings","q":{},"r":{},"s":[{"lit":"profile"},{"lit":"syncSettings"}],"t":{"req":"`reqdata`","res":"`body.settings`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"sync_setting","name__orig":"sync_setting","Name":"SyncSetting","name_":"sync_setting","name-":"sync-setting","NAME":"SYNC_SETTING","index$":17}, {"active":true,"entity":"sync_setting","key$":"BasicSyncSettingFlow","kind":"basic","name":"BasicSyncSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"sync_setting_ref01"}}],"index$":0}]}, 'SyncSetting', {"GET /profile/syncSettings":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let sync_setting_ref01_data = Object.values(setup.data.existing.sync_setting)[0] as any

    // LIST
    const sync_setting_ref01_ent = client.SyncSetting()
    const sync_setting_ref01_match: any = {}

    const sync_setting_ref01_list = (await sync_setting_ref01_ent.list(sync_setting_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/sync_setting/SyncSettingTestData.json')

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
    ['sync_setting01','sync_setting02','sync_setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_SYNC_SETTING_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_SYNC_SETTING_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_SYNC_SETTING_ENTID']
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
  
