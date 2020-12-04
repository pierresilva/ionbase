import { OperMovement } from "../oper-movements/oper-movement";

export interface OperContractor {

    id?: any;
    name?: any,
    document?: any,
    address?: any,
    phone?: any,
    email?: any,
    phone_support?: any,
    email_support?: any,
    contact?: any,
    business_hour?: any,
    phone_emergency?: any,
    email_emergency?: any,
    oper_movement_ids?: any[],
    oper_movements?: OperMovement[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface OperContractorLists {

    OperMovement?: OperMovement[],

}
