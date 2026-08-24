
const { inspect } = require('node:util')

const { CodatplatformEntityBase } = require('../CodatplatformEntityBase')


// TODO: needs Entity superclass
class SyncEntity extends CodatplatformEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'sync'
    this.name_ = 'sync'
    this.Name = 'Sync'
  }


  make() {
    return new SyncEntity(this._client, this.entopts())
  }







}


module.exports = {
  SyncEntity
}
