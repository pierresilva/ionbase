import { User } from "../users/user";
import { CompContact } from "../comp-contacts/comp-contact";

export interface SystPosition {

    id?: any;
    name?: any,
    code?: any,
    user_ids?: any[],
    users?: User[],
    comp_contact_ids?: any[],
    comp_contacts?: CompContact[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface SystPositionLists {

    User?: User[],
    CompContact?: CompContact[],

}
