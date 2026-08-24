import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { Setting, SettingListMatch, SettingCreateData, SettingRemoveMatch } from '../CodatplatformTypes';
declare class SettingEntity extends CodatplatformEntityBase<Setting> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: SettingEntity): SettingEntity;
    list(this: any, reqmatch?: SettingListMatch, ctrl?: Control): Promise<SettingEntity[]>;
    create(this: any, reqdata?: SettingCreateData, ctrl?: Control): Promise<SettingEntity>;
    remove(this: any, reqmatch?: SettingRemoveMatch, ctrl?: Control): Promise<SettingEntity>;
}
export { SettingEntity };
