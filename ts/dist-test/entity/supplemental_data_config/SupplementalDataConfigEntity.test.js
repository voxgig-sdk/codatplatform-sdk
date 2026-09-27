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
(0, node_test_1.describe)('SupplementalDataConfigEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CODATPLATFORM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CodatplatformSDK.test();
        const ent = testsdk.SupplementalDataConfig();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'supplemental_data_config.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "dataSource": { "a": true, "h": "Data Source", "n": "dataSource", "r": false, "sh": "The underlying endpoint of the source system which the configuration is targeting.", "t": "`$STRING`", "key$": "dataSource", "index$": 0 }, "pullData": { "a": true, "h": "Pull Data", "n": "pullData", "r": false, "sh": "The additional properties that are required when pulling records.", "t": "`$OBJECT`", "key$": "pullData", "index$": 1 }, "pushData": { "a": true, "h": "Push Data", "n": "pushData", "r": false, "sh": "The additional properties that are required to create and/or update records.", "t": "`$OBJECT`", "key$": "pushData", "index$": 2 } }, "name": "supplemental_data_config", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "invoices", "k": "param", "n": "data_type_id", "or": "data_type", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "gbol", "k": "param", "n": "platform_key", "or": "platform_key", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig", "q": { "exist": ["data_type_id", "platform_key"] }, "r": { "param": { "dataType": "data_type_id", "platformKey": "platform_key" } }, "s": [{ "lit": "integrations" }, { "var": "platform_key" }, { "lit": "dataTypes" }, { "var": "data_type_id" }, { "lit": "supplementalDataConfig" }], "t": { "req": "`reqdata`", "res": "`body.supplementalDataConfig`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.integration"]] }, "key$": "supplemental_data_config", "name__orig": "supplemental_data_config", "Name": "SupplementalDataConfig", "name_": "supplemental_data_config", "name-": "supplemental-data-config", "NAME": "SUPPLEMENTAL_DATA_CONFIG", "index$": 16 }, { "active": true, "entity": "supplemental_data_config", "key$": "BasicSupplementalDataConfigFlow", "kind": "basic", "name": "BasicSupplementalDataConfigFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "supplemental_data_config_ref01", "srcdatavar": "supplemental_data_config_ref01_data", "suffix": "_dt0" }, "m": { "id": "supplemental_data_config01", "platform_key": "platform_key01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-supplemental_data_config_ref01" } }], "index$": 0 }] }, 'SupplementalDataConfig', { "GET /integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig": { "protocol": "http", "parameters": [{ "name": "platformKey", "in": "path", "required": true, "schema": { "type": "string", "minLength": 4, "maxLength": 4, "pattern": "[a-z]{4}", "example": "gbol", "description": "A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys." }, "description": "A unique 4-letter key to represent a platform in each integration.", "x-ref": "#/components/parameters/platformKey", "index$": 0 }, { "name": "dataType", "in": "path", "required": true, "description": "Supported supplemental data data type.", "schema": { "x-internal": true, "type": "string", "description": "Data types that support supplemental data", "enum": ["chartOfAccounts", "bills", "company", "creditNotes", "customers", "invoices", "items", "journalEntries", "suppliers", "taxRates", "commerce-companyInfo", "commerce-customers", "commerce-disputes", "commerce-locations", "commerce-orders", "commerce-payments", "commerce-paymentMethods", "commerce-products", "commerce-productCategories", "commerce-taxComponents", "commerce-transactions"], "example": "invoices" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let supplemental_data_config_ref01_data = Object.values(setup.data.existing.supplemental_data_config)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const supplemental_data_config_ref01_ent = client.SupplementalDataConfig();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/supplemental_data_config/SupplementalDataConfigTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CodatplatformSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['supplemental_data_config01', 'supplemental_data_config02', 'supplemental_data_config03', 'integration01', 'integration02', 'integration03', 'platform_key01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CODATPLATFORM_TEST_SUPPLEMENTAL_DATA_CONFIG_ENTID': idmap,
        'CODATPLATFORM_TEST_LIVE': 'FALSE',
        'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
        'CODATPLATFORM_APIKEY': '',
    });
    idmap = env['CODATPLATFORM_TEST_SUPPLEMENTAL_DATA_CONFIG_ENTID'];
    const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CODATPLATFORM_TEST_SUPPLEMENTAL_DATA_CONFIG_ENTID'];
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
//# sourceMappingURL=SupplementalDataConfigEntity.test.js.map