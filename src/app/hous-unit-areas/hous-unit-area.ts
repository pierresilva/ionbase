import { HousUnit } from "../hous-units/hous-unit";
import { OperSchedule } from "../oper-schedules/oper-schedule";

export interface HousUnitArea {

    id?: any;
    hous_unit_id?: any,
    name?: any,
    code?: any,
    hous_unit?: HousUnit,
    oper_schedule_ids?: any[],
    oper_schedules?: OperSchedule[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface HousUnitAreaLists {

    HousUnit?: HousUnit[],
    OperSchedule?: OperSchedule[],

}
