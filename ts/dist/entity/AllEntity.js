"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllEntity = void 0;
const CodatplatformEntityBase_1 = require("../CodatplatformEntityBase");
// TODO: needs Entity superclass
class AllEntity extends CodatplatformEntityBase_1.CodatplatformEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'all';
        this.name_ = 'all';
        this.Name = 'All';
    }
    make() {
        return new AllEntity(this._client, this.entopts());
    }
}
exports.AllEntity = AllEntity;
//# sourceMappingURL=AllEntity.js.map