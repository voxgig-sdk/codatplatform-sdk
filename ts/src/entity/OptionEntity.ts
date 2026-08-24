
import { inspect } from 'node:util'

import { CodatplatformEntityBase } from '../CodatplatformEntityBase'

import type {
  CodatplatformSDK,
} from '../CodatplatformSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  Option,
} from '../CodatplatformTypes'

// TODO: needs Entity superclass
class OptionEntity extends CodatplatformEntityBase<Option> {

  constructor(client: CodatplatformSDK, entopts: any) {
    super(client, entopts)
    this.name = 'option'
    this.name_ = 'option'
    this.Name = 'Option'
  }


  make(this: OptionEntity) {
    return new OptionEntity(this._client, this.entopts())
  }







}


export {
  OptionEntity
}
