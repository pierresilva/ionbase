import { OperMachine } from "../oper-machines/oper-machine";

export interface OperPreventiveMaintenance {
// model generated section
    id?: any;
    oper_machine_id?: any,
    name?: any,
    date?: any,
    time?: any,
    next?: any,
    oper_machine?: OperMachine,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
// end model generated section
}

export interface OperPreventiveMaintenanceLists {
// lists generated section
    OperMachine?: OperMachine[],
// end lists generated section

}
