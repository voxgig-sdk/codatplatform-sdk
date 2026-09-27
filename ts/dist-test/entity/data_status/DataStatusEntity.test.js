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
(0, node_test_1.describe)('DataStatusEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CODATPLATFORM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CODATPLATFORM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CodatplatformSDK.test();
        const ent = testsdk.DataStatus();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CODATPLATFORM_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'data_status.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "accountTransactions": { "a": true, "h": "Account Transactions", "n": "accountTransactions", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "accountTransactions", "index$": 0 }, "balanceSheet": { "a": true, "h": "Balance Sheet", "n": "balanceSheet", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "balanceSheet", "index$": 1 }, "bankAccounts": { "a": true, "h": "Bank Accounts", "n": "bankAccounts", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "bankAccounts", "index$": 2 }, "bankTransactions": { "a": true, "h": "Bank Transactions", "n": "bankTransactions", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "bankTransactions", "index$": 3 }, "bankingaccountBalances": { "a": true, "h": "Bankingaccount Balances", "n": "bankingaccountBalances", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "bankingaccountBalances", "index$": 4 }, "bankingaccounts": { "a": true, "h": "Bankingaccounts", "n": "bankingaccounts", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "bankingaccounts", "index$": 5 }, "bankingtransactionCategories": { "a": true, "h": "Bankingtransaction Categories", "n": "bankingtransactionCategories", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "bankingtransactionCategories", "index$": 6 }, "bankingtransactions": { "a": true, "h": "Bankingtransactions", "n": "bankingtransactions", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "bankingtransactions", "index$": 7 }, "billCreditNotes": { "a": true, "h": "Bill Credit Notes", "n": "billCreditNotes", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "billCreditNotes", "index$": 8 }, "billPayments": { "a": true, "h": "Bill Payments", "n": "billPayments", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "billPayments", "index$": 9 }, "bills": { "a": true, "h": "Bills", "n": "bills", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "bills", "index$": 10 }, "cashFlowStatement": { "a": true, "h": "Cash Flow Statement", "n": "cashFlowStatement", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "cashFlowStatement", "index$": 11 }, "chartOfAccounts": { "a": true, "h": "Chart Of Accounts", "n": "chartOfAccounts", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "chartOfAccounts", "index$": 12 }, "commercecompanyInfo": { "a": true, "h": "Commercecompany Info", "n": "commercecompanyInfo", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "commercecompanyInfo", "index$": 13 }, "commercecustomers": { "a": true, "h": "Commercecustomers", "n": "commercecustomers", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "commercecustomers", "index$": 14 }, "commercedisputes": { "a": true, "h": "Commercedisputes", "n": "commercedisputes", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "commercedisputes", "index$": 15 }, "commercelocations": { "a": true, "h": "Commercelocations", "n": "commercelocations", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "commercelocations", "index$": 16 }, "commerceorders": { "a": true, "h": "Commerceorders", "n": "commerceorders", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "commerceorders", "index$": 17 }, "commercepaymentMethods": { "a": true, "h": "Commercepayment Methods", "n": "commercepaymentMethods", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "commercepaymentMethods", "index$": 18 }, "commercepayments": { "a": true, "h": "Commercepayments", "n": "commercepayments", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "commercepayments", "index$": 19 }, "commerceproductCategories": { "a": true, "h": "Commerceproduct Categories", "n": "commerceproductCategories", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "commerceproductCategories", "index$": 20 }, "commerceproducts": { "a": true, "h": "Commerceproducts", "n": "commerceproducts", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "commerceproducts", "index$": 21 }, "commercetaxComponents": { "a": true, "h": "Commercetax Components", "n": "commercetaxComponents", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "commercetaxComponents", "index$": 22 }, "commercetransactions": { "a": true, "h": "Commercetransactions", "n": "commercetransactions", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "commercetransactions", "index$": 23 }, "company": { "a": true, "h": "Company", "n": "company", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "company", "index$": 24 }, "creditNotes": { "a": true, "h": "Credit Notes", "n": "creditNotes", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "creditNotes", "index$": 25 }, "customers": { "a": true, "h": "Customers", "n": "customers", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "customers", "index$": 26 }, "directCosts": { "a": true, "h": "Direct Costs", "n": "directCosts", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "directCosts", "index$": 27 }, "directIncomes": { "a": true, "h": "Direct Incomes", "n": "directIncomes", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "directIncomes", "index$": 28 }, "invoices": { "a": true, "h": "Invoices", "n": "invoices", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "invoices", "index$": 29 }, "itemReceipts": { "a": true, "h": "Item Receipts", "n": "itemReceipts", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "itemReceipts", "index$": 30 }, "items": { "a": true, "h": "Items", "n": "items", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "items", "index$": 31 }, "journalEntries": { "a": true, "h": "Journal Entries", "n": "journalEntries", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "journalEntries", "index$": 32 }, "journals": { "a": true, "h": "Journals", "n": "journals", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "journals", "index$": 33 }, "paymentMethods": { "a": true, "h": "Payment Methods", "n": "paymentMethods", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "paymentMethods", "index$": 34 }, "payments": { "a": true, "h": "Payments", "n": "payments", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "payments", "index$": 35 }, "profitAndLoss": { "a": true, "h": "Profit And Loss", "n": "profitAndLoss", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "profitAndLoss", "index$": 36 }, "purchaseOrders": { "a": true, "h": "Purchase Orders", "n": "purchaseOrders", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "purchaseOrders", "index$": 37 }, "salesOrders": { "a": true, "h": "Sales Orders", "n": "salesOrders", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "salesOrders", "index$": 38 }, "suppliers": { "a": true, "h": "Suppliers", "n": "suppliers", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "suppliers", "index$": 39 }, "taxRates": { "a": true, "h": "Tax Rates", "n": "taxRates", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "taxRates", "index$": 40 }, "trackingCategories": { "a": true, "h": "Tracking Categories", "n": "trackingCategories", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "trackingCategories", "index$": 41 }, "transfers": { "a": true, "h": "Transfers", "n": "transfers", "r": true, "sh": "Describes the state of data in the Codat cache for a company and data type", "t": "`$OBJECT`", "key$": "transfers", "index$": 42 } }, "name": "data_status", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /companies/{companyId}/dataStatus", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "8a210b68-6988-11ed-a1eb-0242ac120002", "k": "param", "n": "company_id", "or": "company_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/companies/{companyId}/dataStatus", "q": { "exist": ["company_id"] }, "r": { "param": { "companyId": "company_id" } }, "s": [{ "lit": "companies" }, { "var": "company_id" }, { "lit": "dataStatus" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.company"]] }, "key$": "data_status", "name__orig": "data_status", "Name": "DataStatus", "name_": "data_status", "name-": "data-status", "NAME": "DATA_STATUS", "index$": 7 }, { "active": true, "entity": "data_status", "key$": "BasicDataStatusFlow", "kind": "basic", "name": "BasicDataStatusFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "data_status_ref01", "srcdatavar": "data_status_ref01_data", "suffix": "_dt0" }, "m": { "id": "data_status01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-data_status_ref01" } }], "index$": 0 }] }, 'DataStatus', { "GET /companies/{companyId}/dataStatus": { "protocol": "http", "parameters": [{ "name": "companyId", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "example": "8a210b68-6988-11ed-a1eb-0242ac120002", "description": "Unique identifier for your SMB in Codat." }, "description": "Unique identifier for a company.", "x-ref": "#/components/parameters/companyId", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let data_status_ref01_data = Object.values(setup.data.existing.data_status)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const data_status_ref01_ent = client.DataStatus();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/data_status/DataStatusTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CodatplatformSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['data_status01', 'data_status02', 'data_status03', 'company01', 'company02', 'company03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CODATPLATFORM_TEST_DATA_STATUS_ENTID': idmap,
        'CODATPLATFORM_TEST_LIVE': 'FALSE',
        'CODATPLATFORM_TEST_EXPLAIN': 'FALSE',
        'CODATPLATFORM_APIKEY': '',
    });
    idmap = env['CODATPLATFORM_TEST_DATA_STATUS_ENTID'];
    const live = 'TRUE' === env.CODATPLATFORM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CODATPLATFORM_TEST_DATA_STATUS_ENTID'];
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
//# sourceMappingURL=DataStatusEntity.test.js.map