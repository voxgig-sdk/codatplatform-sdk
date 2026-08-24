"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryEntity = void 0;
const CodatplatformEntityBase_1 = require("../CodatplatformEntityBase");
// TODO: needs Entity superclass
class HistoryEntity extends CodatplatformEntityBase_1.CodatplatformEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'history';
        this.name_ = 'history';
        this.Name = 'History';
    }
    make() {
        return new HistoryEntity(this._client, this.entopts());
    }
}
exports.HistoryEntity = HistoryEntity;
//# sourceMappingURL=HistoryEntity.js.map