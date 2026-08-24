import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Option } from '../CodatplatformTypes';
declare class OptionEntity extends CodatplatformEntityBase<Option> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: OptionEntity): OptionEntity;
}
export { OptionEntity };
