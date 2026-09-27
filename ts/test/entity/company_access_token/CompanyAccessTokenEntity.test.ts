

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


describe('CompanyAccessTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.CompanyAccessToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'company_access_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accessToken":{"a":true,"h":"Access Token","n":"accessToken","r":true,"sh":"The access token for the company.","t":"`$STRING`","key$":"accessToken","index$":0},"expiresIn":{"a":true,"h":"Expires In","n":"expiresIn","r":true,"sh":"The number of seconds until the access token expires.","t":"`$INTEGER`","key$":"expiresIn","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"tokenType":{"a":true,"h":"Token Type","n":"tokenType","r":true,"sh":"The type of token.","t":"`$STRING`","key$":"tokenType","index$":3}},"id":{"field":"id","name":"id"},"name":"company_access_token","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /companies/{companyId}/accessToken","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"8a210b68-6988-11ed-a1eb-0242ac120002","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/companies/{companyId}/accessToken","q":{"exist":["id"]},"r":{"param":{"companyId":"id"}},"s":[{"lit":"companies"},{"var":"id"},{"lit":"accessToken"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"company_access_token","name__orig":"company_access_token","Name":"CompanyAccessToken","name_":"company_access_token","name-":"company-access-token","NAME":"COMPANY_ACCESS_TOKEN","index$":2}, {"active":true,"entity":"company_access_token","key$":"BasicCompanyAccessTokenFlow","kind":"basic","name":"BasicCompanyAccessTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"company_access_token_ref01","srcdatavar":"company_access_token_ref01_data","suffix":"_dt0"},"m":{"id":"company_access_token01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-company_access_token_ref01"}}],"index$":0}]}, 'CompanyAccessToken', {"GET /companies/{companyId}/accessToken":{"protocol":"http","parameters":[{"name":"companyId","in":"path","required":true,"schema":{"type":"string","format":"uuid","example":"8a210b68-6988-11ed-a1eb-0242ac120002","description":"Unique identifier for your SMB in Codat."},"description":"Unique identifier for a company.","x-ref":"#/components/parameters/companyId","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let company_access_token_ref01_data = Object.values(setup.data.existing.company_access_token)[0] as any

    // LOAD
    const company_access_token_ref01_ent = client.CompanyAccessToken()
    const company_access_token_ref01_match_dt0: any = {}
    company_access_token_ref01_match_dt0.id = company_access_token_ref01_data.id
    const company_access_token_ref01_data_dt0 = (await company_access_token_ref01_ent.load(company_access_token_ref01_match_dt0)).data()
    assert(company_access_token_ref01_data_dt0.id === company_access_token_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/company_access_token/CompanyAccessTokenTestData.json')

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
    ['company_access_token01','company_access_token02','company_access_token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_COMPANY_ACCESS_TOKEN_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_COMPANY_ACCESS_TOKEN_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_COMPANY_ACCESS_TOKEN_ENTID']
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
  
