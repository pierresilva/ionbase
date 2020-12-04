import { HousUnit } from "../hous-units/hous-unit";
import { OperSchedule } from "../oper-schedules/oper-schedule";
import { OperMovement } from "../oper-movements/oper-movement";

export interface OperSector {

    id?: any;
    name?: any,
    code?: any,
    hous_unit_id?: any,
    hous_unit?: HousUnit,
    oper_schedule_ids?: any[],
    oper_schedules?: OperSchedule[],
    oper_movement_ids?: any[],
    oper_movements?: OperMovement[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface OperSectorLists {

    HousUnit?: HousUnit[],
    OperSchedule?: OperSchedule[],
    OperMovement?: OperMovement[],

}
