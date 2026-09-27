

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


describe('IntegrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Integration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'integration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"dataProvidedBy":{"a":true,"h":"Data Provided By","n":"dataProvidedBy","r":false,"sh":"The name of the data provider.","t":"`$STRING`","key$":"dataProvidedBy","index$":0},"datatypeFeatures":{"a":true,"h":"Datatype Features","n":"datatypeFeatures","r":false,"t":"`$ARRAY`","key$":"datatypeFeatures","index$":1},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"Whether this integration is enabled for your customers to use.","t":"`$BOOLEAN`","key$":"enabled","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"integrationId":{"a":true,"fo":"uuid","h":"Integration Id","n":"integrationId","r":false,"sh":"A Codat ID representing the integration.","t":"`$STRING`","key$":"integrationId","index$":4},"isBeta":{"a":true,"h":"Is Beta","n":"isBeta","r":false,"sh":"`True` if the integration is currently in beta release.","t":"`$BOOLEAN`","key$":"isBeta","index$":5},"isOfflineConnector":{"a":true,"h":"Is Offline Connector","n":"isOfflineConnector","r":false,"sh":"`True` if the integration is to an application installed and run locally on an SMBs computer.","t":"`$BOOLEAN`","key$":"isOfflineConnector","index$":6},"key":{"a":true,"h":"Key","n":"key","r":true,"sh":"A unique 4-letter key to represent a platform in each integration.","t":"`$STRING`","key$":"key","index$":7},"links":{"a":true,"h":"Links","n":"links","r":true,"t":"`$OBJECT`","key$":"links","index$":8},"logoUrl":{"a":true,"fo":"uri","h":"Logo Url","n":"logoUrl","r":true,"sh":"Static url for integration's logo.","t":"`$STRING`","key$":"logoUrl","index$":9},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of integration.","t":"`$STRING`","key$":"name","index$":10},"pageNumber":{"a":true,"h":"Page Number","n":"pageNumber","r":true,"sh":"Current page number.","t":"`$INTEGER`","key$":"pageNumber","index$":11},"pageSize":{"a":true,"h":"Page Size","n":"pageSize","r":true,"sh":"Number of items to return in results array.","t":"`$INTEGER`","key$":"pageSize","index$":12},"results":{"a":true,"h":"Results","n":"results","r":false,"t":"`$ARRAY`","key$":"results","index$":13},"sourceId":{"a":true,"fo":"uuid","h":"Source Id","n":"sourceId","r":false,"sh":"A source-specific ID used to distinguish between different sources originating from the same data connection.","t":"`$STRING`","key$":"sourceId","index$":14},"sourceType":{"a":true,"h":"Source Type","n":"sourceType","r":false,"sh":"The type of platform of the connection.","t":"`$STRING`","key$":"sourceType","index$":15},"totalResults":{"a":true,"h":"Total Results","n":"totalResults","r":true,"sh":"Total number of items.","t":"`$INTEGER`","key$":"totalResults","index$":16}},"id":{"field":"id","name":"id"},"name":"integration","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /integrations","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"-modifiedDate","k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":100,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"id=e3334455-1aed-4e71-ab43-6bccf12092ee","k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/integrations","q":{"exist":["order_by","page","page_size","query"]},"r":{},"s":[{"lit":"integrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /integrations/{platformKey}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"gbol","k":"param","n":"id","or":"platform_key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/integrations/{platformKey}","q":{"exist":["id"]},"r":{"param":{"platformKey":"id"}},"s":[{"lit":"integrations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"integration","name__orig":"integration","Name":"Integration","name_":"integration","name-":"integration","NAME":"INTEGRATION","index$":8}, {"active":true,"entity":"integration","key$":"BasicIntegrationFlow","kind":"basic","name":"BasicIntegrationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"integration_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"integration_ref01","srcdatavar":"integration_ref01_data","suffix":"_dt0"},"m":{"id":"integration01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-integration_ref01"}}],"index$":1}]}, 'Integration', {"GET /integrations":{"protocol":"http","parameters":[{"name":"page","in":"query","schema":{"type":"integer","format":"int32","minimum":1,"example":1,"default":1},"description":"Page number. [Read more](https://docs.codat.io/using-the-api/paging).","x-ref":"#/components/parameters/page","index$":0},{"name":"pageSize","in":"query","schema":{"type":"integer","format":"int32","default":100,"example":100,"minimum":1,"maximum":5000},"description":"Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).","x-ref":"#/components/parameters/pageSize","index$":1},{"name":"query","in":"query","required":false,"schema":{"type":"string"},"example":"id=e3334455-1aed-4e71-ab43-6bccf12092ee","description":"Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).","x-ref":"#/components/parameters/query","index$":2},{"name":"orderBy","in":"query","required":false,"schema":{"type":"string","example":"-modifiedDate"},"description":"Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).","x-ref":"#/components/parameters/orderBy","index$":3}]},"GET /integrations/{platformKey}":{"protocol":"http","parameters":[{"name":"platformKey","in":"path","required":true,"schema":{"type":"string","minLength":4,"maxLength":4,"pattern":"[a-z]{4}","example":"gbol","description":"A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys."},"description":"A unique 4-letter key to represent a platform in each integration.","x-ref":"#/components/parameters/platformKey","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let integration_ref01_data = Object.values(setup.data.existing.integration)[0] as any

    // LIST
    const integration_ref01_ent = client.Integration()
    const integration_ref01_match: any = {}

    const integration_ref01_list = (await integration_ref01_ent.list(integration_ref01_match)).map((e: any) => e.data())


    // LOAD
    const integration_ref01_match_dt0: any = {}
    integration_ref01_match_dt0.id = integration_ref01_data.id
    const integration_ref01_data_dt0 = (await integration_ref01_ent.load(integration_ref01_match_dt0)).data()
    assert(integration_ref01_data_dt0.id === integration_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/integration/IntegrationTestData.json')

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
    ['integration01','integration02','integration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_INTEGRATION_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_INTEGRATION_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_INTEGRATION_ENTID']
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
  
