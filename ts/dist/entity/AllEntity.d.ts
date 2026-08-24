import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { All } from '../CodatplatformTypes';
declare class AllEntity extends CodatplatformEntityBase<All> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: AllEntity): AllEntity;
}
export { AllEntity };
