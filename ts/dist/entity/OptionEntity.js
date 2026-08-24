"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionEntity = void 0;
const CodatplatformEntityBase_1 = require("../CodatplatformEntityBase");
// TODO: needs Entity superclass
class OptionEntity extends CodatplatformEntityBase_1.CodatplatformEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'option';
        this.name_ = 'option';
        this.Name = 'Option';
    }
    make() {
        return new OptionEntity(this._client, this.entopts());
    }
}
exports.OptionEntity = OptionEntity;
//# sourceMappingURL=OptionEntity.js.map