
const { inspect } = require('node:util')

const { CodatplatformEntityBase } = require('../CodatplatformEntityBase')


// TODO: needs Entity superclass
class OptionEntity extends CodatplatformEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'option'
    this.name_ = 'option'
    this.Name = 'Option'
  }


  make() {
    return new OptionEntity(this._client, this.entopts())
  }







}


module.exports = {
  OptionEntity
}
