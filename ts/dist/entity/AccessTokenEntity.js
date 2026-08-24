"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenEntity = void 0;
const CodatplatformEntityBase_1 = require("../CodatplatformEntityBase");
// TODO: needs Entity superclass
class AccessTokenEntity extends CodatplatformEntityBase_1.CodatplatformEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'access_token';
        this.name_ = 'access_token';
        this.Name = 'AccessToken';
    }
    make() {
        return new AccessTokenEntity(this._client, this.entopts());
    }
}
exports.AccessTokenEntity = AccessTokenEntity;
//# sourceMappingURL=AccessTokenEntity.js.map