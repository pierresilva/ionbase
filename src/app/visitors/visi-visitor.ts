import {HousUnit} from "../hous-units/hous-unit";
import {User} from "../users/user";
import {VisiVisitorRegister} from "./visi-visitor-register";
import {VisiParking} from "./visi-parking";
import {VisiVehicleType} from "./visi-vehicle-type";
import {VisiRate} from "./visi-rate";

export interface VisiVisitor {
    id?: any;
    identification?: any;
    full_name?: any;
    phone?: any;
    email?: any;
    is_permanent?: any;
    charge_parking?: any;
    user_id?: any;
    hous_unit_id?: any;
    entry_status?: any;
    photo?: any;
    created_at?: any;
    updated_at?: any;
    house_unit?: HousUnit,
    user?: User,
    visi_visitor_registers?: VisiVisitorRegister[],
}
export interface VisiVisitorLists {
    VisiVehicleType?: VisiVehicleType[],
    HousUnit?: HousUnit[],
    VisiRate?: VisiRate[],
    User?: User[],
    VisiParking?: VisiParking[],
}
