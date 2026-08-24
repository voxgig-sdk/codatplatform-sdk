"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueEntity = void 0;
const CodatplatformEntityBase_1 = require("../CodatplatformEntityBase");
// TODO: needs Entity superclass
class QueueEntity extends CodatplatformEntityBase_1.CodatplatformEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'queue';
        this.name_ = 'queue';
        this.Name = 'Queue';
    }
    make() {
        return new QueueEntity(this._client, this.entopts());
    }
}
exports.QueueEntity = QueueEntity;
//# sourceMappingURL=QueueEntity.js.map