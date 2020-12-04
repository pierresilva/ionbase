import { Company } from "../companies/company";
import { SystParameter } from "../syst-parameters/syst-parameter";

export interface CompResponsability {

    id?: any;
    name?: any,
    company_id?: any,
    syst_parameter_id?: any,
    company?: Company,
    syst_parameter?: SystParameter,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface CompResponsabilityLists {

    Company?: Company[],
    SystParameter?: SystParameter[],

}
