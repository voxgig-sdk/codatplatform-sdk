
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
  DataType,
} from '../CodatplatformTypes'

// TODO: needs Entity superclass
class DataTypeEntity extends CodatplatformEntityBase<DataType> {

  constructor(client: CodatplatformSDK, entopts: any) {
    super(client, entopts)
    this.name = 'data_type'
    this.name_ = 'data_type'
    this.Name = 'DataType'
  }


  make(this: DataTypeEntity) {
    return new DataTypeEntity(this._client, this.entopts())
  }







}


export {
  DataTypeEntity
}
