import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Product } from '../CodatplatformTypes';
declare class ProductEntity extends CodatplatformEntityBase<Product> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: ProductEntity): ProductEntity;
}
export { ProductEntity };
