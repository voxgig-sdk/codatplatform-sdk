
const { inspect } = require('node:util')

const { CodatplatformEntityBase } = require('../CodatplatformEntityBase')


// TODO: needs Entity superclass
class ProductEntity extends CodatplatformEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'product'
    this.name_ = 'product'
    this.Name = 'Product'
  }


  make() {
    return new ProductEntity(this._client, this.entopts())
  }







}


module.exports = {
  ProductEntity
}
