import { OperCorrectiveMaintenance } from "../oper-corrective-maintenances/oper-corrective-maintenance";

export interface OperMaintenanceRepair {
// model generated section
    id?: any;
    oper_corrective_maintenance_id?: any,
    name?: any,
    date?: any,
    time?: any,
    completed_by?: any,
    oper_corrective_maintenance?: OperCorrectiveMaintenance,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
// end model generated section
}

export interface OperMaintenanceRepairLists {
// lists generated section
    OperCorrectiveMaintenance?: OperCorrectiveMaintenance[],
// end lists generated section

}
