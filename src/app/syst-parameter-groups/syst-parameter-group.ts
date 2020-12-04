import { SystParameter } from "../syst-parameters/syst-parameter";

export interface SystParameterGroup {

    id?: any;
    name?: any,
    code?: any,
    syst_parameter_ids?: any[],
    syst_parameters?: SystParameter[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface SystParameterGroupLists {

    SystParameter?: SystParameter[],

}
