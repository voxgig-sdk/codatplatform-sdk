import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { SyncSetting, SyncSettingListMatch } from '../CodatplatformTypes';
declare class SyncSettingEntity extends CodatplatformEntityBase<SyncSetting> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: SyncSettingEntity): SyncSettingEntity;
    list(this: any, reqmatch?: SyncSettingListMatch, ctrl?: Control): Promise<SyncSettingEntity[]>;
}
export { SyncSettingEntity };
