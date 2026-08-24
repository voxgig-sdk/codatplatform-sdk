import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { Profile, ProfileListMatch, ProfileUpdateData } from '../CodatplatformTypes';
declare class ProfileEntity extends CodatplatformEntityBase<Profile> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: ProfileEntity): ProfileEntity;
    list(this: any, reqmatch?: ProfileListMatch, ctrl?: Control): Promise<ProfileEntity[]>;
    update(this: any, reqdata?: ProfileUpdateData, ctrl?: Control): Promise<ProfileEntity>;
}
export { ProfileEntity };
