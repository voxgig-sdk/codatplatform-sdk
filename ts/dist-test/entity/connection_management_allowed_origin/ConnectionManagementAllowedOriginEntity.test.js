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
(0, node_test_1.describe)('ConnectionManagementAllowedOriginEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CODATPLATFORM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CodatplatformSDK.test();
        const ent = testsdk.ConnectionManagementAllowedOrigin();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'connection_management_allowed_origin.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allowedOrigins": { "a": true, "h": "Allowed Origins", "n": "allowedOrigins", "r": false, "sh": "An array of allowed origins (i.e.", "t": "`$ARRAY`", "key$": "allowedOrigins", "index$": 0 } }, "name": "connection_management_allowed_origin", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /connectionManagement/corsSettings", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/connectionManagement/corsSettings", "q": {}, "r": {}, "s": [{ "lit": "connectionManagement" }, { "lit": "corsSettings" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /corsSettings", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/corsSettings", "q": {}, "r": {}, "s": [{ "lit": "corsSettings" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /connectionManagement/corsSettings", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/connectionManagement/corsSettings", "q": {}, "r": {}, "s": [{ "lit": "connectionManagement" }, { "lit": "corsSettings" }], "t": { "req": "`reqdata`", "res": "`body.allowedOrigins`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /corsSettings", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/corsSettings", "q": {}, "r": {}, "s": [{ "lit": "corsSettings" }], "t": { "req": "`reqdata`", "res": "`body.allowedOrigins`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "connection_management_allowed_origin", "name__orig": "connection_management_allowed_origin", "Name": "ConnectionManagementAllowedOrigin", "name_": "connection_management_allowed_origin", "name-": "connection-management-allowed-origin", "NAME": "CONNECTION_MANAGEMENT_ALLOWED_ORIGIN", "index$": 5 }, { "active": true, "entity": "connection_management_allowed_origin", "key$": "BasicConnectionManagementAllowedOriginFlow", "kind": "basic", "name": "BasicConnectionManagementAllowedOriginFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "connection_management_allowed_origin_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "connection_management_allowed_origin_ref01" } }], "index$": 1 }] }, 'ConnectionManagementAllowedOrigin', { "POST /connectionManagement/corsSettings": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "Allowed origins", "type": "object", "properties": { "allowedOrigins": { "description": "An array of allowed origins (i.e. your domains) to permit cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).n resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).", "items": { "description": "A domain you want to allow CORS with Codat.", "format": "uri", "type": "string" }, "key$": "allowedOrigins", "type": "array" } }, "example": { "allowedOrigins": ["https://www.bank-of-dave.com"] }, "x-ref": "#/components/schemas/ConnectionManagementAllowedOrigins", "index$": 1 }, "examples": { "Allowed origins": { "value": { "allowedOrigins": ["https://www.bank-of-dave.com"] }, "x-ref": "#/components/examples/connectionManagementAllowedOriginsResponse" } } } } }, "parameters": [] }, "POST /corsSettings": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "Allowed origins", "type": "object", "properties": { "allowedOrigins": { "description": "An array of allowed origins (i.e. your domains) to permit cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).n resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).", "items": { "description": "A domain you want to allow CORS with Codat.", "format": "uri", "type": "string" }, "key$": "allowedOrigins", "type": "array" } }, "example": { "allowedOrigins": ["https://www.bank-of-dave.com"] }, "x-ref": "#/components/schemas/ConnectionManagementAllowedOrigins", "index$": 1 }, "examples": { "Allowed origins": { "value": { "allowedOrigins": ["https://www.bank-of-dave.com"] }, "x-ref": "#/components/examples/connectionManagementAllowedOriginsResponse" } } } } }, "parameters": [] }, "GET /connectionManagement/corsSettings": { "protocol": "http", "parameters": [] }, "GET /corsSettings": { "protocol": "http", "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const connection_management_allowed_origin_ref01_ent = client.ConnectionManagementAllowedOrigin();
        let connection_management_allowed_origin_ref01_data = setup.data.new.connection_management_allowed_origin['connection_management_allowed_origin_ref01'];
        connection_management_allowed_origin_ref01_data = (await connection_management_allowed_origin_ref01_ent.create(connection_management_allowed_origin_ref01_data)).data();
        (0, node_assert_1.default)(null != connection_management_allowed_origin_ref01_data);
        // LIST
        const connection_management_allowed_origin_ref01_match = {};
        const connection_management_allowed_origin_ref01_list = (await connection_management_allowed_origin_ref01_ent.list(connection_management_allowed_origin_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/connection_management_allowed_origin/ConnectionManagementAllowedOriginTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CodatplatformSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['connection_management_allowed_origin01', 'connection_management_allowed_origin02', 'connection_management_allowed_origin03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ALLOWED_ORIGIN_ENTID': idmap,
        'CODATPLATFORM_TEST_LIVE': 'FALSE',
        'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
        'CODATPLATFORM_APIKEY': '',
    });
    idmap = env['CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ALLOWED_ORIGIN_ENTID'];
    const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CODATPLATFORM_TEST_CONNECTION_MANAGEMENT_ALLOWED_ORIGIN_ENTID'];
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
//# sourceMappingURL=ConnectionManagementAllowedOriginEntity.test.js.map