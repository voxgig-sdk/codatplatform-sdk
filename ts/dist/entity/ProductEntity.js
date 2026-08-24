"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
const CodatplatformEntityBase_1 = require("../CodatplatformEntityBase");
// TODO: needs Entity superclass
class ProductEntity extends CodatplatformEntityBase_1.CodatplatformEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'product';
        this.name_ = 'product';
        this.Name = 'Product';
    }
    make() {
        return new ProductEntity(this._client, this.entopts());
    }
}
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=ProductEntity.js.map