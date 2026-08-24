
const { inspect } = require('node:util')

const { CodatplatformEntityBase } = require('../CodatplatformEntityBase')


// TODO: needs Entity superclass
class HistoryEntity extends CodatplatformEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'history'
    this.name_ = 'history'
    this.Name = 'History'
  }


  make() {
    return new HistoryEntity(this._client, this.entopts())
  }







}


module.exports = {
  HistoryEntity
}
