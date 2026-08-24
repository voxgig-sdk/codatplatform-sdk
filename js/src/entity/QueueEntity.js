
const { inspect } = require('node:util')

const { CodatplatformEntityBase } = require('../CodatplatformEntityBase')


// TODO: needs Entity superclass
class QueueEntity extends CodatplatformEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'queue'
    this.name_ = 'queue'
    this.Name = 'Queue'
  }


  make() {
    return new QueueEntity(this._client, this.entopts())
  }







}


module.exports = {
  QueueEntity
}
