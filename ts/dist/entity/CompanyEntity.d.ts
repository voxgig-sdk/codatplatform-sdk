import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { Company, CompanyLoadMatch, CompanyListMatch, CompanyCreateData, CompanyUpdateData, CompanyRemoveMatch } from '../CodatplatformTypes';
declare class CompanyEntity extends CodatplatformEntityBase<Company> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: CompanyEntity): CompanyEntity;
    load(this: any, reqmatch?: CompanyLoadMatch, ctrl?: Control): Promise<CompanyEntity>;
    list(this: any, reqmatch?: CompanyListMatch, ctrl?: Control): Promise<CompanyEntity[]>;
    create(this: any, reqdata?: CompanyCreateData, ctrl?: Control): Promise<CompanyEntity>;
    update(this: any, reqdata?: CompanyUpdateData, ctrl?: Control): Promise<CompanyEntity>;
    remove(this: any, reqmatch?: CompanyRemoveMatch, ctrl?: Control): Promise<CompanyEntity>;
}
export { CompanyEntity };
