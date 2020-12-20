import { OperCorrectiveMaintenance } from "../oper-corrective-maintenances/oper-corrective-maintenance";

export interface OperReason {
// model generated section
    id?: any;
    name?: any,
    oper_corrective_maintenance_ids?: any[],
    oper_corrective_maintenances?: OperCorrectiveMaintenance[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
// end model generated section
}

export interface OperReasonLists {
// lists generated section
    OperCorrectiveMaintenance?: OperCorrectiveMaintenance[],
// end lists generated section

}
