
const { inspect } = require('node:util')

const { CodatplatformEntityBase } = require('../CodatplatformEntityBase')


// TODO: needs Entity superclass
class AllEntity extends CodatplatformEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'all'
    this.name_ = 'all'
    this.Name = 'All'
  }


  make() {
    return new AllEntity(this._client, this.entopts())
  }







}


module.exports = {
  AllEntity
}
