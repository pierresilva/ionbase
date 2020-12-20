import { HousUnitArea } from "../hous-unit-areas/hous-unit-area";
import { OperSector } from "../oper-sectors/oper-sector";
import { OperContractor } from "../oper-contractors/oper-contractor";
import { OperMovement } from "../oper-movements/oper-movement";

export interface OperSchedule {
// model generated section
    id?: any;
    name?: any,
    hous_unit_area_id?: any,
    oper_sector_id?: any,
    oper_contractor_id?: any,
    required_time?: any,
    supervisor_email?: any,
    area_phone?: any,
    time_start?: any,
    time_end?: any,
    periodicity?: any,
    repass?: any,
    next?: any,
    hous_unit_area?: HousUnitArea,
    oper_sector?: OperSector,
    oper_contractor?: OperContractor,
    oper_movement_ids?: any[],
    oper_movements?: OperMovement[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
// end model generated section
}

export interface OperScheduleLists {
// lists generated section
    HousUnitArea?: HousUnitArea[],
    OperSector?: OperSector[],
    OperContractor?: OperContractor[],
    OperMovement?: OperMovement[],
// end lists generated section

}
