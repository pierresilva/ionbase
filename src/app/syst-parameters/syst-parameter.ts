import { SystParameterGroup } from "../syst-parameter-groups/syst-parameter-group";
import { CompResponsability } from "../comp-responsabilities/comp-responsability";

export interface SystParameter {

    id?: any;
    syst_parameter_group_id?: any,
    name?: any,
    code?: any,
    riched_text?: any,
    value?: any,
    syst_parameter_group?: SystParameterGroup,
    comp_responsability_ids?: any[],
    comp_responsabilities?: CompResponsability[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface SystParameterLists {

    SystParameterGroup?: SystParameterGroup[],
    CompResponsability?: CompResponsability[],

}
