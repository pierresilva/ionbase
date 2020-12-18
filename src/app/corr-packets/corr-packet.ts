import {HousUnit} from "../hous-units/hous-unit";

export interface CorrPacket {

    id?: any;
    name?: any,
    hous_unit_id?: any,
    conveyor?: any,
    guide_number?: any,
    received_at?: any,
    received_comment?: any,
    delivered_at?: any,
    delivered_to?: any,
    delivered_signature?: any,
    delivered_comment?: any,
    status?: any,
    hous_unit?: HousUnit,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    files?: any[];
}

export interface CorrPacketLists {

    HousUnit?: HousUnit[],

}
