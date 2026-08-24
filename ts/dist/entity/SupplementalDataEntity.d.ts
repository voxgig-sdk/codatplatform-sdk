import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { SupplementalData, SupplementalDataUpdateData } from '../CodatplatformTypes';
declare class SupplementalDataEntity extends CodatplatformEntityBase<SupplementalData> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: SupplementalDataEntity): SupplementalDataEntity;
    update(this: any, reqdata?: SupplementalDataUpdateData, ctrl?: Control): Promise<SupplementalDataEntity>;
}
export { SupplementalDataEntity };
