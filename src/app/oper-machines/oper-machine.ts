import { HousUnitArea } from "../hous-unit-areas/hous-unit-area";
import { OperContractor } from "../oper-contractors/oper-contractor";
import { OperPreventiveMaintenance } from "../oper-preventive-maintenances/oper-preventive-maintenance";
import { OperReplacement } from "../oper-replacements/oper-replacement";

export interface OperMachine {
// model generated section
    id?: any;
    name?: any,
    hous_unit_area_id?: any,
    oper_contractor_id?: any,
    contract_expiration_date?: any,
    contract_monthly_price?: any,
    monthly_periodicity?: any,
    hous_unit_area?: HousUnitArea,
    oper_contractor?: OperContractor,
    oper_preventive_maintenance_ids?: any[],
    oper_preventive_maintenances?: OperPreventiveMaintenance[],
    oper_replacement_ids?: any[],
    oper_replacements?: OperReplacement[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    inventory_code?: any;
// end model generated section
}

export interface OperMachineLists {
// lists generated section
    HousUnitArea?: HousUnitArea[],
    OperContractor?: OperContractor[],
    OperPreventiveMaintenance?: OperPreventiveMaintenance[],
    OperReplacement?: OperReplacement[],
// end lists generated section

}
