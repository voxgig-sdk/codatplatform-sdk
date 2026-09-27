

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


describe('WebhookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.Webhook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['create', 'list', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhook.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"companyTags":{"a":true,"h":"Company Tags","n":"companyTags","r":false,"sh":"Company tags provide an additional way to filter messages, independent of event types.","t":"`$ARRAY`","key$":"companyTags","index$":0},"disabled":{"a":true,"h":"Disabled","n":"disabled","r":false,"sh":"Flag that enables or disables the endpoint from receiving events.","t":"`$BOOLEAN`","key$":"disabled","index$":1},"eventTypes":{"a":true,"h":"Event Types","n":"eventTypes","r":false,"sh":"An array of event types the webhook consumer subscribes to.","t":"`$ARRAY`","key$":"eventTypes","index$":2},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":false,"sh":"Unique identifier for the webhook consumer.","t":"`$STRING`","key$":"id","index$":3},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"sh":"The URL that will consume webhook events dispatched by Codat.","t":"`$STRING`","key$":"url","index$":4}},"id":{"field":"id","name":"id"},"name":"webhook","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /webhooks","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/webhooks","q":{},"r":{},"s":[{"lit":"webhooks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /webhooks","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/webhooks","q":{},"r":{},"s":[{"lit":"webhooks"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /webhooks/{webhookId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"id","or":"webhook_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/webhooks/{webhookId}","q":{"exist":["id"]},"r":{"param":{"webhookId":"id"}},"s":[{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"webhook","name__orig":"webhook","Name":"Webhook","name_":"webhook","name-":"webhook","NAME":"WEBHOOK","index$":19}, {"active":true,"entity":"webhook","key$":"BasicWebhookFlow","kind":"basic","name":"BasicWebhookFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhook_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"webhook_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"webhook_ref01","suffix":"_rm0"},"m":{"id":"webhook01"},"o":"remove","s":[],"v":[],"index$":2},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"webhook_ref01"}}],"index$":3}]}, 'Webhook', {"POST /webhooks":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Create webhook consumer","type":"object","properties":{"url":{"description":"The URL that will consume webhook events dispatched by Codat.","format":"uri","type":"string","x-ref":"#/components/schemas/WebhookConsumer/properties/url","key$":"url"},"disabled":{"default":false,"description":"Flag that enables or disables the endpoint from receiving events. Disabled when set to `true`.","nullable":true,"type":"boolean","x-ref":"#/components/schemas/WebhookConsumer/properties/disabled","key$":"disabled"},"eventTypes":{"description":"An array of event types the webhook consumer subscribes to.","items":{"type":"string"},"type":"array","x-ref":"#/components/schemas/WebhookConsumer/properties/eventTypes","key$":"eventTypes"},"companyTags":{"description":"Company tags provide an additional way to filter messages, independent of event types. Company tags are case-sensitive, and only messages from companies with matching tags will be sent to this endpoint. Use the format `tagKey:tagValue`.","items":{"maxLength":128,"type":"string"},"maxItems":10,"nullable":true,"type":"array","x-ref":"#/components/schemas/WebhookConsumer/properties/companyTags","key$":"companyTags"}},"x-ref":"#/components/schemas/WebhookConsumer/definitions/webhookConsumerPrototype","index$":1},"examples":{"Subscribe consumer to one or more event types":{"value":{"url":"https://example.com/webhoook-consumer","eventTypes":["DataSyncCompleted","Dataset data changed"]}},"Subscribe consumer with disabled endpoint":{"value":{"url":"https://example.com/webhoook-consumer","eventTypes":["DataSyncCompleted"],"disabled":true}}}}}},"parameters":[]},"GET /webhooks":{"protocol":"http","parameters":[]},"DELETE /webhooks/{webhookId}":{"protocol":"http","parameters":[{"name":"webhookId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for the webhook consumer.","x-ref":"#/components/schemas/WebhookConsumer/properties/id"},"description":"Unique identifier for the webhook consumer.","x-ref":"#/components/parameters/webhookId","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhook_ref01_ent = client.Webhook()
    let webhook_ref01_data = setup.data.new.webhook['webhook_ref01']

    webhook_ref01_data = (await webhook_ref01_ent.create(webhook_ref01_data)).data()
    assert(null != webhook_ref01_data.id)


    // LIST
    const webhook_ref01_match: any = {}

    const webhook_ref01_list = (await webhook_ref01_ent.list(webhook_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(webhook_ref01_list, { id: webhook_ref01_data.id })))


    // REMOVE
    const webhook_ref01_match_rm0: any = { id: webhook_ref01_data.id }
    await webhook_ref01_ent.remove(webhook_ref01_match_rm0)
  

    // LIST
    const webhook_ref01_match_rt0: any = {}

    const webhook_ref01_list_rt0 = (await webhook_ref01_ent.list(webhook_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(webhook_ref01_list_rt0, { id: webhook_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhook/WebhookTestData.json')

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
    ['webhook01','webhook02','webhook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_WEBHOOK_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_WEBHOOK_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_WEBHOOK_ENTID']
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
  
