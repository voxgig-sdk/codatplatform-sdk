import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { DataType } from '../CodatplatformTypes';
declare class DataTypeEntity extends CodatplatformEntityBase<DataType> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: DataTypeEntity): DataTypeEntity;
}
export { DataTypeEntity };
