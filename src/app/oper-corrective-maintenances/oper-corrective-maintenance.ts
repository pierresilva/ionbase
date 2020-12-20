import { OperReason } from "../oper-reasons/oper-reason";
import { HousUnitArea } from "../hous-unit-areas/hous-unit-area";
import { OperItem } from "../oper-items/oper-item";
import { OperMaintenanceRepair } from "../oper-maintenance-repairs/oper-maintenance-repair";

export interface OperCorrectiveMaintenance {
// model generated section
    id?: any;
    name?: any,
    oper_reason_id?: any,
    hous_unit_area_id?: any,
    detail?: any,
    date?: any,
    time?: any,
    reported_by?: any,
    status?: any,
    oper_reason?: OperReason,
    hous_unit_area?: HousUnitArea,
    oper_item_ids?: any[],
    oper_items?: OperItem[],
    oper_maintenance_repair_ids?: any[],
    oper_maintenance_repairs?: OperMaintenanceRepair[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
// end model generated section
}

export interface OperCorrectiveMaintenanceLists {
// lists generated section
    OperReason?: OperReason[],
    HousUnitArea?: HousUnitArea[],
    OperItem?: OperItem[],
    OperMaintenanceRepair?: OperMaintenanceRepair[],
// end lists generated section

}
