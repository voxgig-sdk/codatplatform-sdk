
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
  Product,
} from '../CodatplatformTypes'

// TODO: needs Entity superclass
class ProductEntity extends CodatplatformEntityBase<Product> {

  constructor(client: CodatplatformSDK, entopts: any) {
    super(client, entopts)
    this.name = 'product'
    this.name_ = 'product'
    this.Name = 'Product'
  }


  make(this: ProductEntity) {
    return new ProductEntity(this._client, this.entopts())
  }







}


export {
  ProductEntity
}
