import { HousUnitArea } from "../hous-unit-areas/hous-unit-area";
import { OperSector } from "../oper-sectors/oper-sector";
import { CorrPacket } from "../corr-packets/corr-packet";

export interface HousUnit {

    id?: any;
    hous_unit_id?: any,
    name?: any,
    code?: any,
    hous_unit_area_ids?: any[],
    hous_unit_areas?: HousUnitArea[],
    oper_sector_ids?: any[],
    oper_sectors?: OperSector[],
    corr_packet_ids?: any[],
    corr_packets?: CorrPacket[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface HousUnitLists {

    HousUnitArea?: HousUnitArea[],
    OperSector?: OperSector[],
    CorrPacket?: CorrPacket[],

}
