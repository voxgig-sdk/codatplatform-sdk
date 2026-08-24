import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { History } from '../CodatplatformTypes';
declare class HistoryEntity extends CodatplatformEntityBase<History> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: HistoryEntity): HistoryEntity;
}
export { HistoryEntity };
