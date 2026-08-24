import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { CompanyAccessToken, CompanyAccessTokenLoadMatch } from '../CodatplatformTypes';
declare class CompanyAccessTokenEntity extends CodatplatformEntityBase<CompanyAccessToken> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: CompanyAccessTokenEntity): CompanyAccessTokenEntity;
    load(this: any, reqmatch?: CompanyAccessTokenLoadMatch, ctrl?: Control): Promise<CompanyAccessTokenEntity>;
}
export { CompanyAccessTokenEntity };
