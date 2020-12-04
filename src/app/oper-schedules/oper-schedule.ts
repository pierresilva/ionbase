import { HousUnitArea } from "../hous-unit-areas/hous-unit-area";
import { OperSector } from "../oper-sectors/oper-sector";

export interface OperSchedule {

    id?: any;
    name?: any,
    hous_unit_area_id?: any,
    oper_sector_id?: any,
    hous_unit_area?: HousUnitArea,
    oper_sector?: OperSector,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface OperScheduleLists {

    HousUnitArea?: HousUnitArea[],
    OperSector?: OperSector[],

}
