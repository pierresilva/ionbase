import {HousUnit} from "../hous-units/hous-unit";
import {VisiVisitor} from "./visi-visitor";
import {VisiVehicleType} from "./visi-vehicle-type";
import {VisiRate} from "./visi-rate";
import {VisiParking} from "./visi-parking";

export interface VisiVisitorRegister {
    id?: any,
    visi_visitor_id?: any,
    hous_unit_id?: any,
    entry_date?: any,
    departure_date?: any,
    total_minutes?: any,
    approved_by?: any,
    visi_vehicle_type_id?: any,
    visi_rate_id?: any,
    visi_rate?: VisiRate,
    hous_unit?: HousUnit,
    visi_visitor?: VisiVisitor,
    visi_vehicle_type?: VisiVehicleType,
    license_plate?: any,
    visi_parking_id?: any,
    visi_parking?: VisiParking,
}

export interface VisiVisitorRegisterLists {

    VisiVehicleType?: VisiVehicleType[],
    HousUnit?: HousUnit[],
    VisiRate?: VisiRate[],
    VisiVisitor?: VisiVisitor[],
    VisiParking?: VisiParking[],

}
