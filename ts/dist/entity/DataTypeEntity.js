"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypeEntity = void 0;
const CodatplatformEntityBase_1 = require("../CodatplatformEntityBase");
// TODO: needs Entity superclass
class DataTypeEntity extends CodatplatformEntityBase_1.CodatplatformEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'data_type';
        this.name_ = 'data_type';
        this.Name = 'DataType';
    }
    make() {
        return new DataTypeEntity(this._client, this.entopts());
    }
}
exports.DataTypeEntity = DataTypeEntity;
//# sourceMappingURL=DataTypeEntity.js.map