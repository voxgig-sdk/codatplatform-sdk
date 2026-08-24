import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { RefreshData, RefreshDataCreateData } from '../CodatplatformTypes';
declare class RefreshDataEntity extends CodatplatformEntityBase<RefreshData> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: RefreshDataEntity): RefreshDataEntity;
    create(this: any, reqdata?: RefreshDataCreateData, ctrl?: Control): Promise<RefreshDataEntity>;
}
export { RefreshDataEntity };
