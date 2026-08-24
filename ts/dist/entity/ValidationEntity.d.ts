import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { Validation, ValidationListMatch } from '../CodatplatformTypes';
declare class ValidationEntity extends CodatplatformEntityBase<Validation> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: ValidationEntity): ValidationEntity;
    list(this: any, reqmatch?: ValidationListMatch, ctrl?: Control): Promise<ValidationEntity[]>;
}
export { ValidationEntity };
