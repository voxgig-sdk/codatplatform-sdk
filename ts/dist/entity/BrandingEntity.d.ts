import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { Branding, BrandingLoadMatch } from '../CodatplatformTypes';
declare class BrandingEntity extends CodatplatformEntityBase<Branding> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: BrandingEntity): BrandingEntity;
    load(this: any, reqmatch?: BrandingLoadMatch, ctrl?: Control): Promise<BrandingEntity>;
}
export { BrandingEntity };
