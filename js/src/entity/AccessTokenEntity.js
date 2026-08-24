
const { inspect } = require('node:util')

const { CodatplatformEntityBase } = require('../CodatplatformEntityBase')


// TODO: needs Entity superclass
class AccessTokenEntity extends CodatplatformEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'access_token'
    this.name_ = 'access_token'
    this.Name = 'AccessToken'
  }


  make() {
    return new AccessTokenEntity(this._client, this.entopts())
  }







}


module.exports = {
  AccessTokenEntity
}
