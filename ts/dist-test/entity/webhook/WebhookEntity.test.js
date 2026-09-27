"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WebhookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CODATPLATFORM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CodatplatformSDK.test();
        const ent = testsdk.Webhook();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE;
        for (const op of ['create', 'list', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhook.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "companyTags": { "a": true, "h": "Company Tags", "n": "companyTags", "r": false, "sh": "Company tags provide an additional way to filter messages, independent of event types.", "t": "`$ARRAY`", "key$": "companyTags", "index$": 0 }, "disabled": { "a": true, "h": "Disabled", "n": "disabled", "r": false, "sh": "Flag that enables or disables the endpoint from receiving events.", "t": "`$BOOLEAN`", "key$": "disabled", "index$": 1 }, "eventTypes": { "a": true, "h": "Event Types", "n": "eventTypes", "r": false, "sh": "An array of event types the webhook consumer subscribes to.", "t": "`$ARRAY`", "key$": "eventTypes", "index$": 2 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the webhook consumer.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": false, "sh": "The URL that will consume webhook events dispatched by Codat.", "t": "`$STRING`", "key$": "url", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "webhook", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /webhooks", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/webhooks", "q": {}, "r": {}, "s": [{ "lit": "webhooks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /webhooks", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/webhooks", "q": {}, "r": {}, "s": [{ "lit": "webhooks" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /webhooks/{webhookId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "8a210b68-6988-11ed-a1eb-0242ac120002", "k": "param", "n": "id", "or": "webhook_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/webhooks/{webhookId}", "q": { "exist": ["id"] }, "r": { "param": { "webhookId": "id" } }, "s": [{ "lit": "webhooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "webhook", "name__orig": "webhook", "Name": "Webhook", "name_": "webhook", "name-": "webhook", "NAME": "WEBHOOK", "index$": 19 }, { "active": true, "entity": "webhook", "key$": "BasicWebhookFlow", "kind": "basic", "name": "BasicWebhookFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "webhook_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "webhook_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "webhook_ref01", "suffix": "_rm0" }, "m": { "id": "webhook01" }, "o": "remove", "s": [], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "webhook_ref01" } }], "index$": 3 }] }, 'Webhook', { "POST /webhooks": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "Create webhook consumer", "type": "object", "properties": { "url": { "description": "The URL that will consume webhook events dispatched by Codat.", "format": "uri", "type": "string", "x-ref": "#/components/schemas/WebhookConsumer/properties/url", "key$": "url" }, "disabled": { "default": false, "description": "Flag that enables or disables the endpoint from receiving events. Disabled when set to `true`.", "nullable": true, "type": "boolean", "x-ref": "#/components/schemas/WebhookConsumer/properties/disabled", "key$": "disabled" }, "eventTypes": { "description": "An array of event types the webhook consumer subscribes to.", "items": { "type": "string" }, "type": "array", "x-ref": "#/components/schemas/WebhookConsumer/properties/eventTypes", "key$": "eventTypes" }, "companyTags": { "description": "Company tags provide an additional way to filter messages, independent of event types. Company tags are case-sensitive, and only messages from companies with matching tags will be sent to this endpoint. Use the format `tagKey:tagValue`.", "items": { "maxLength": 128, "type": "string" }, "maxItems": 10, "nullable": true, "type": "array", "x-ref": "#/components/schemas/WebhookConsumer/properties/companyTags", "key$": "companyTags" } }, "x-ref": "#/components/schemas/WebhookConsumer/definitions/webhookConsumerPrototype", "index$": 1 }, "examples": { "Subscribe consumer to one or more event types": { "value": { "url": "https://example.com/webhoook-consumer", "eventTypes": ["DataSyncCompleted", "Dataset data changed"] } }, "Subscribe consumer with disabled endpoint": { "value": { "url": "https://example.com/webhoook-consumer", "eventTypes": ["DataSyncCompleted"], "disabled": true } } } } } }, "parameters": [] }, "GET /webhooks": { "protocol": "http", "parameters": [] }, "DELETE /webhooks/{webhookId}": { "protocol": "http", "parameters": [{ "name": "webhookId", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "example": "8a210b68-6988-11ed-a1eb-0242ac120002", "description": "Unique identifier for the webhook consumer.", "x-ref": "#/components/schemas/WebhookConsumer/properties/id" }, "description": "Unique identifier for the webhook consumer.", "x-ref": "#/components/parameters/webhookId", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const webhook_ref01_ent = client.Webhook();
        let webhook_ref01_data = setup.data.new.webhook['webhook_ref01'];
        webhook_ref01_data = (await webhook_ref01_ent.create(webhook_ref01_data)).data();
        (0, node_assert_1.default)(null != webhook_ref01_data.id);
        // LIST
        const webhook_ref01_match = {};
        const webhook_ref01_list = (await webhook_ref01_ent.list(webhook_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(webhook_ref01_list, { id: webhook_ref01_data.id })));
        // REMOVE
        const webhook_ref01_match_rm0 = { id: webhook_ref01_data.id };
        await webhook_ref01_ent.remove(webhook_ref01_match_rm0);
        // LIST
        const webhook_ref01_match_rt0 = {};
        const webhook_ref01_list_rt0 = (await webhook_ref01_ent.list(webhook_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(webhook_ref01_list_rt0, { id: webhook_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhook/WebhookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CodatplatformSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhook01', 'webhook02', 'webhook03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CODATPLATFORM_TEST_WEBHOOK_ENTID': idmap,
        'CODATPLATFORM_TEST_LIVE': 'FALSE',
        'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
        'CODATPLATFORM_APIKEY': '',
    });
    idmap = env['CODATPLATFORM_TEST_WEBHOOK_ENTID'];
    const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CODATPLATFORM_TEST_WEBHOOK_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CodatplatformSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=WebhookEntity.test.js.map