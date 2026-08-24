
const { inspect } = require('node:util')

const { CodatplatformEntityBase } = require('../CodatplatformEntityBase')


// TODO: needs Entity superclass
class DataTypeEntity extends CodatplatformEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'data_type'
    this.name_ = 'data_type'
    this.Name = 'DataType'
  }


  make() {
    return new DataTypeEntity(this._client, this.entopts())
  }







}


module.exports = {
  DataTypeEntity
}
