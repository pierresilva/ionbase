import { OperSector } from "../oper-sectors/oper-sector";
import { OperContractor } from "../oper-contractors/oper-contractor";

export interface OperMovement {

    id?: any;
    name?: any,
    oper_sector_id?: any,
    oper_contractor_id?: any,
    date_statr?: any,
    date_end?: any,
    time_start?: any,
    time_end?: any,
    time_total?: any,
    photo?: any,
    oper_sector?: OperSector,
    oper_contractor?: OperContractor,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    oper_schedule_if?: any;
    completed?: any;
}

export interface OperMovementLists {

    OperSector?: OperSector[],
    OperContractor?: OperContractor[],

}
