import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { DataStatus, DataStatusLoadMatch } from '../CodatplatformTypes';
declare class DataStatusEntity extends CodatplatformEntityBase<DataStatus> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: DataStatusEntity): DataStatusEntity;
    load(this: any, reqmatch?: DataStatusLoadMatch, ctrl?: Control): Promise<DataStatusEntity>;
}
export { DataStatusEntity };
