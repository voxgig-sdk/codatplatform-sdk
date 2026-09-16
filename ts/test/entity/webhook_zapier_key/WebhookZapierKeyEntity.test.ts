

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('WebhookZapierKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CODATPLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CodatplatformSDK.test()
    const ent = testsdk.WebhookZapierKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhook_zapier_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"key","req":false,"type":"`$STRING`","index$":0}],"name":"webhook_zapier_key","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /webhooks/integrationKeys/zapier","json":"{\"operationId\":\"rotate-zapier-key\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"201\":{\"content\":{\"application/json\":{\"examples\":{\"Integration key\":{\"value\":{\"key\":\"sk_integ_WM4dfoK1nKZnDE_kceze6hWDjbRwOZwG.us\"}}},\"schema\":{\"examples\":[{\"key\":\"sk_integ_WM4dfoK1nKZnDE_kceze6hWDjbRwOZwG.us\"}],\"properties\":{\"key\":{\"description\":\"Integration key used to authorize Zapier's HTTP requests with Codat.\",\"example\":\"sk_integ_WM4dfoK1nKZnDE_kceze6hWDjbRwOZwG.us\",\"type\":\"string\"}},\"title\":\"Zapier integration key\",\"type\":\"object\"}}},\"description\":\"OK\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"canBeRetried\":\"Unknown\",\"correlationId\":\"7eb40d6b415d7bcd99ce658268284056\",\"detailedErrorCode\":0,\"error\":\"Unauthorized\",\"service\":\"PublicApi\",\"statusCode\":401}}},\"schema\":{\"definitions\":{\"errorValidation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"},\"errorValidationItem\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"}},\"properties\":{\"canBeRetried\":{\"description\":\"`True` if the error occurred transiently and can be retried.\",\"type\":\"string\"},\"correlationId\":{\"description\":\"Unique identifier used to propagate to all downstream services and determine the source of the error.\",\"type\":\"string\"},\"detailedErrorCode\":{\"description\":\"Machine readable error code used to automate processes based on the code returned.\",\"type\":\"integer\"},\"error\":{\"description\":\"A brief description of the error.\",\"type\":\"string\"},\"service\":{\"description\":\"Codat's service the returned the error.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"The HTTP status code returned by the error.\",\"type\":\"integer\"},\"validation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"}},\"title\":\"Error message\",\"type\":\"object\"}}},\"description\":\"Your API request was not properly authorized.\"},\"402\":{\"content\":{\"application/json\":{\"examples\":{\"Conflict\":{\"value\":{\"canBeRetried\":\"Unknown\",\"correlationId\":\"bc997528a9d7abb9161ef45f05d38599\",\"detailedErrorCode\":0,\"error\":\"You have exceeded the 50-company limit that applies to a Free plan. We recommend that you delete any companies you no longer need and retry the request.\",\"service\":\"PublicApi\",\"statusCode\":429}}},\"schema\":{\"definitions\":{\"errorValidation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"},\"errorValidationItem\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"}},\"properties\":{\"canBeRetried\":{\"description\":\"`True` if the error occurred transiently and can be retried.\",\"type\":\"string\"},\"correlationId\":{\"description\":\"Unique identifier used to propagate to all downstream services and determine the source of the error.\",\"type\":\"string\"},\"detailedErrorCode\":{\"description\":\"Machine readable error code used to automate processes based on the code returned.\",\"type\":\"integer\"},\"error\":{\"description\":\"A brief description of the error.\",\"type\":\"string\"},\"service\":{\"description\":\"Codat's service the returned the error.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"The HTTP status code returned by the error.\",\"type\":\"integer\"},\"validation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"}},\"title\":\"Error message\",\"type\":\"object\"}}},\"description\":\"An account limit has been exceeded. The type of limit is described in the error property:\\n\\n- You have exceeded the 50-company limit that applies to a Free plan. Delete any companies you no longer need and retry the request.\\n- The requested sync schedule is not allowed. You requested an hourly sync schedule but this functionality is not included in the Free plan.\\n- Your Free account is older than 365 days and has expired. Contact support@codat.io.\\n\"},\"403\":{\"content\":{\"application/json\":{\"examples\":{\"Conflict\":{\"value\":{\"canBeRetried\":\"Unknown\",\"correlationId\":\"bc997528a9d7abb9161ef45f05d38599\",\"detailedErrorCode\":0,\"error\":\"You are using an outdated API key or a key not associated with that resource.\",\"service\":\"PublicApi\",\"statusCode\":403}}},\"schema\":{\"definitions\":{\"errorValidation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"},\"errorValidationItem\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"}},\"properties\":{\"canBeRetried\":{\"description\":\"`True` if the error occurred transiently and can be retried.\",\"type\":\"string\"},\"correlationId\":{\"description\":\"Unique identifier used to propagate to all downstream services and determine the source of the error.\",\"type\":\"string\"},\"detailedErrorCode\":{\"description\":\"Machine readable error code used to automate processes based on the code returned.\",\"type\":\"integer\"},\"error\":{\"description\":\"A brief description of the error.\",\"type\":\"string\"},\"service\":{\"description\":\"Codat's service the returned the error.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"The HTTP status code returned by the error.\",\"type\":\"integer\"},\"validation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"}},\"title\":\"Error message\",\"type\":\"object\"}}},\"description\":\"You are using an outdated API key or a key not associated with that resource.\"},\"429\":{\"content\":{\"application/json\":{\"examples\":{\"Conflict\":{\"value\":{\"canBeRetried\":\"Unknown\",\"correlationId\":\"bc997528a9d7abb9161ef45f05d38599\",\"detailedErrorCode\":0,\"error\":\"You have made too many requests in a given amount of time; please retry later.\",\"service\":\"PublicApi\",\"statusCode\":429}}},\"schema\":{\"definitions\":{\"errorValidation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"},\"errorValidationItem\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"}},\"properties\":{\"canBeRetried\":{\"description\":\"`True` if the error occurred transiently and can be retried.\",\"type\":\"string\"},\"correlationId\":{\"description\":\"Unique identifier used to propagate to all downstream services and determine the source of the error.\",\"type\":\"string\"},\"detailedErrorCode\":{\"description\":\"Machine readable error code used to automate processes based on the code returned.\",\"type\":\"integer\"},\"error\":{\"description\":\"A brief description of the error.\",\"type\":\"string\"},\"service\":{\"description\":\"Codat's service the returned the error.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"The HTTP status code returned by the error.\",\"type\":\"integer\"},\"validation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"}},\"title\":\"Error message\",\"type\":\"object\"}}},\"description\":\"Too many requests were made in a given amount of time. Wait a short period and then try again.\"},\"500\":{\"content\":{\"application/json\":{\"examples\":{\"Conflict\":{\"value\":{\"canBeRetried\":\"Unknown\",\"correlationId\":\"bc997528a9d7abb9161ef45f05d38599\",\"detailedErrorCode\":0,\"error\":\"There is a problem with our server. Please try again later.\",\"service\":\"PublicApi\",\"statusCode\":500}}},\"schema\":{\"definitions\":{\"errorValidation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"},\"errorValidationItem\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"}},\"properties\":{\"canBeRetried\":{\"description\":\"`True` if the error occurred transiently and can be retried.\",\"type\":\"string\"},\"correlationId\":{\"description\":\"Unique identifier used to propagate to all downstream services and determine the source of the error.\",\"type\":\"string\"},\"detailedErrorCode\":{\"description\":\"Machine readable error code used to automate processes based on the code returned.\",\"type\":\"integer\"},\"error\":{\"description\":\"A brief description of the error.\",\"type\":\"string\"},\"service\":{\"description\":\"Codat's service the returned the error.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"The HTTP status code returned by the error.\",\"type\":\"integer\"},\"validation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"}},\"title\":\"Error message\",\"type\":\"object\"}}},\"description\":\"There is a problem with our server. Please try again later.\"},\"503\":{\"content\":{\"application/json\":{\"examples\":{\"Conflict\":{\"value\":{\"canBeRetried\":\"Unknown\",\"correlationId\":\"bc997528a9d7abb9161ef45f05d38599\",\"detailedErrorCode\":0,\"error\":\"The Codat API is temporarily offline for maintenance. Please try again later.\",\"service\":\"PublicApi\",\"statusCode\":500}}},\"schema\":{\"definitions\":{\"errorValidation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"},\"errorValidationItem\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"}},\"properties\":{\"canBeRetried\":{\"description\":\"`True` if the error occurred transiently and can be retried.\",\"type\":\"string\"},\"correlationId\":{\"description\":\"Unique identifier used to propagate to all downstream services and determine the source of the error.\",\"type\":\"string\"},\"detailedErrorCode\":{\"description\":\"Machine readable error code used to automate processes based on the code returned.\",\"type\":\"integer\"},\"error\":{\"description\":\"A brief description of the error.\",\"type\":\"string\"},\"service\":{\"description\":\"Codat's service the returned the error.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"The HTTP status code returned by the error.\",\"type\":\"integer\"},\"validation\":{\"description\":\"A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.\",\"nullable\":true,\"properties\":{\"errors\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"warnings\":{\"items\":{\"properties\":{\"itemId\":{\"description\":\"Unique identifier for a validation item.\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"A message outlining validation item's issue.\",\"nullable\":true,\"type\":\"string\"},\"validatorName\":{\"description\":\"Name of validator.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Validation error item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Validation error\",\"type\":\"object\"}},\"title\":\"Error message\",\"type\":\"object\"}}},\"description\":\"The Codat API is temporarily offline for maintenance. Please try again later.\"}},\"security\":[{\"auth_header\":[]}],\"securitySchemes\":{\"auth_header\":{\"description\":\"The word \\\"Basic\\\" followed by a space and your API key. [API keys](https://docs.codat.io/platform-api#/schemas/ApiKeyDetails) are tokens used to control access to the API. You can get an API key via [the Codat Portal](https://app.codat.io/developers/api-keys), via [the API](https://docs.codat.io/platform-api#/operations/list-api-keys), or [read more](https://docs.codat.io/using-the-api/authentication) about authentication at Codat.\",\"in\":\"header\",\"name\":\"Authorization\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/webhooks/integrationKeys/zapier","segments":[{"lit":"webhooks"},{"lit":"integrationKeys"},{"lit":"zapier"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"webhook_zapier_key","name__orig":"webhook_zapier_key","Name":"WebhookZapierKey","name_":"webhook_zapier_key","name-":"webhook-zapier-key","NAME":"WEBHOOK_ZAPIER_KEY","index$":29}, {"active":true,"entity":"webhook_zapier_key","key$":"BasicWebhookZapierKeyFlow","kind":"basic","name":"BasicWebhookZapierKeyFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"webhook_zapier_key_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'WebhookZapierKey')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhook_zapier_key_ref01_ent = client.WebhookZapierKey()
    let webhook_zapier_key_ref01_data = setup.data.new.webhook_zapier_key['webhook_zapier_key_ref01']

    webhook_zapier_key_ref01_data = (await webhook_zapier_key_ref01_ent.create(webhook_zapier_key_ref01_data)).data()
    assert(null != webhook_zapier_key_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhook_zapier_key/WebhookZapierKeyTestData.json')

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
    ['webhook_zapier_key01','webhook_zapier_key02','webhook_zapier_key03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CODATPLATFORM_TEST_WEBHOOK_ZAPIER_KEY_ENTID': idmap,
    'CODATPLATFORM_TEST_LIVE': 'FALSE',
    'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
    'CODATPLATFORM_APIKEY': '',
  })

  idmap = env['CODATPLATFORM_TEST_WEBHOOK_ZAPIER_KEY_ENTID']

  const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CODATPLATFORM_TEST_WEBHOOK_ZAPIER_KEY_ENTID']
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
  
