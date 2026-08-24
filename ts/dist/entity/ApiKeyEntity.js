"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyEntity = void 0;
const CodatplatformEntityBase_1 = require("../CodatplatformEntityBase");
// TODO: needs Entity superclass
class ApiKeyEntity extends CodatplatformEntityBase_1.CodatplatformEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'api_key';
        this.name_ = 'api_key';
        this.Name = 'ApiKey';
    }
    make() {
        return new ApiKeyEntity(this._client, this.entopts());
    }
}
exports.ApiKeyEntity = ApiKeyEntity;
//# sourceMappingURL=ApiKeyEntity.js.map