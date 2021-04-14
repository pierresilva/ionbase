import {VisiVisitorRegister} from "./visi-visitor-register";

export interface VisiParking {
    id?: any;
    name?: any;
    code?: any;
    available?: any;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    visi_visitor_registers?: VisiVisitorRegister[]
}

export interface VisiParkingLists {

}
