
const { inspect } = require('node:util')

const { CodatplatformEntityBase } = require('../CodatplatformEntityBase')


// TODO: needs Entity superclass
class ApiKeyEntity extends CodatplatformEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'api_key'
    this.name_ = 'api_key'
    this.Name = 'ApiKey'
  }


  make() {
    return new ApiKeyEntity(this._client, this.entopts())
  }







}


module.exports = {
  ApiKeyEntity
}
