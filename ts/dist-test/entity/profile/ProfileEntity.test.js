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
(0, node_test_1.describe)('ProfileEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CODATPLATFORM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CodatplatformSDK.test();
        const ent = testsdk.Profile();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'profile.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "apiKey": { "a": true, "de": true, "h": "Api Key", "n": "apiKey", "r": false, "sh": "The API key for this Codat instance.", "t": "`$STRING`", "key$": "apiKey", "index$": 0 }, "confirmCompanyName": { "a": true, "de": true, "h": "Confirm Company Name", "n": "confirmCompanyName", "r": false, "sh": "`True` if the company name has been confirmed.", "t": "`$BOOLEAN`", "key$": "confirmCompanyName", "index$": 1 }, "iconUrl": { "a": true, "h": "Icon Url", "n": "iconUrl", "r": false, "sh": "Static url to your organization's icon.", "t": "`$STRING`", "key$": "iconUrl", "index$": 2 }, "logoUrl": { "a": true, "h": "Logo Url", "n": "logoUrl", "r": false, "sh": "Static url to your organization's logo.", "t": "`$STRING`", "key$": "logoUrl", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The name given to the instance.", "t": "`$STRING`", "key$": "name", "index$": 4 }, "redirectUrl": { "a": true, "h": "Redirect Url", "n": "redirectUrl", "r": true, "sh": "The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB.", "t": "`$STRING`", "key$": "redirectUrl", "index$": 5 }, "whiteListUrls": { "a": true, "h": "White List Urls", "n": "whiteListUrls", "r": false, "sh": "A list of urls that are allowed to communicate with Codat.", "t": "`$ARRAY`", "key$": "whiteListUrls", "index$": 6 } }, "name": "profile", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /profile", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/profile", "q": {}, "r": {}, "s": [{ "lit": "profile" }], "t": { "req": "`reqdata`", "res": "`body.whiteListUrls`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /profile", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PUT", "o": "/profile", "q": {}, "r": {}, "s": [{ "lit": "profile" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "profile", "name__orig": "profile", "Name": "Profile", "name_": "profile", "name-": "profile", "NAME": "PROFILE", "index$": 9 }, { "active": true, "entity": "profile", "key$": "BasicProfileFlow", "kind": "basic", "name": "BasicProfileFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "profile_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "profile_ref01", "srcdatavar": "profile_ref01_data", "suffix": "_up0", "textfield": "apiKey" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-profile_ref01" } }], "v": [], "index$": 1 }] }, 'Profile', { "GET /profile": { "protocol": "http", "parameters": [] }, "PUT /profile": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "Profile", "description": "Describes your Codat client instance", "examples": [{ "name": "Bob's Burgers", "logoUrl": "https://client-images.codat.io/logo/042399f5-d104-4f38-9ce8-cac3524f4e88_5806cb1f-7342-4c0e-a0a8-99bfbc47b0ff.png", "iconUrl": "https://client-images.codat.io/icon/042399f5-d104-4f38-9ce8-cac3524f4e88_3f5623af-d992-4c22-bc08-e58c520a8526.ico", "redirectUrl": "https://bobs-burgers.{countrySuffix}/{companyId}", "whiteListUrls": ["https://bobs-burgers.com", "https://bobs-burgers.co.uk"], "confirmCompanyName": true }], "type": "object", "properties": { "name": { "description": "The name given to the instance.", "example": "Bob's Burgers", "key$": "name", "type": "string" }, "logoUrl": { "description": "Static url to your organization's logo.", "example": "https://client-images.codat.io/logo/042399f5-d104-4f38-9ce8-cac3524f4e88_5806cb1f-7342-4c0e-a0a8-99bfbc47b0ff.png", "key$": "logoUrl", "type": "string" }, "iconUrl": { "description": "Static url to your organization's icon.", "example": "https://client-images.codat.io/icon/042399f5-d104-4f38-9ce8-cac3524f4e88_3f5623af-d992-4c22-bc08-e58c520a8526.ico", "key$": "iconUrl", "type": "string" }, "redirectUrl": { "description": "The redirect URL pasted on to the SMB once Codat's [Hosted Link](https://docs.codat.io/auth-flow/authorize-hosted-link) has been completed by the SMB.", "example": "https://bobs-burgers.{countrySuffix}/{companyId}", "key$": "redirectUrl", "type": "string" }, "whiteListUrls": { "description": "A list of urls that are allowed to communicate with Codat. If empty any url is allowed to communicate with Codat.", "items": { "description": "A url that is allowed to communicate with Codat.", "example": "https://bobs-burgers.com", "format": "uri", "type": "string" }, "key$": "whiteListUrls", "type": "array" }, "apiKey": { "deprecated": true, "description": "The API key for this Codat instance.", "example": "sartANTjHAkLdbyDfaynoTQb7pkmj6hXHmnQKMrB", "key$": "apiKey", "type": "string" }, "confirmCompanyName": { "deprecated": true, "description": "`True` if the company name has been confirmed.", "key$": "confirmCompanyName", "type": "boolean" } }, "required": ["name", "redirectUrl"], "x-stoplight": { "id": "b1fyq05edangf" }, "x-ref": "#/components/schemas/Profile", "index$": 1 }, "examples": {} } }, "description": "All fields should be included when updating your profile." }, "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let profile_ref01_data = Object.values(setup.data.existing.profile)[0];
        // LIST
        const profile_ref01_ent = client.Profile();
        const profile_ref01_match = {};
        const profile_ref01_list = (await profile_ref01_ent.list(profile_ref01_match)).map((e) => e.data());
        // UPDATE
        const profile_ref01_data_up0 = {};
        const profile_ref01_markdef_up0 = { name: 'apiKey', value: 'Mark01-profile_ref01_' + setup.now };
        profile_ref01_data_up0[profile_ref01_markdef_up0.name] = profile_ref01_markdef_up0.value;
        const profile_ref01_resdata_up0 = (await profile_ref01_ent.update(profile_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != profile_ref01_resdata_up0);
        (0, node_assert_1.default)(profile_ref01_resdata_up0[profile_ref01_markdef_up0.name] === profile_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/profile/ProfileTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CodatplatformSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['profile01', 'profile02', 'profile03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CODATPLATFORM_TEST_PROFILE_ENTID': idmap,
        'CODATPLATFORM_TEST_LIVE': 'FALSE',
        'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
        'CODATPLATFORM_APIKEY': '',
    });
    idmap = env['CODATPLATFORM_TEST_PROFILE_ENTID'];
    const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CODATPLATFORM_TEST_PROFILE_ENTID'];
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
//# sourceMappingURL=ProfileEntity.test.js.map