import { CompPhone } from "../comp-phones/comp-phone";
import { CompAddress } from "../comp-addresses/comp-address";
import { CompContact } from "../comp-contacts/comp-contact";
import { CompResponsability } from "../comp-responsabilities/comp-responsability";

export interface Company {

    id?: any;
    name?: any,
    code?: any,
    nit?: any,
    manager_name?: any,
    manager_document?: any,
    logo?: any,
    main?: any,
    comp_phone_ids?: any[],
    comp_phones?: CompPhone[],
    comp_address_ids?: any[],
    comp_addresses?: CompAddress[],
    comp_contact_ids?: any[],
    comp_contacts?: CompContact[],
    comp_responsability_ids?: any[],
    comp_responsabilities?: CompResponsability[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface CompanyLists {

    CompPhone?: CompPhone[],
    CompAddress?: CompAddress[],
    CompContact?: CompContact[],
    CompResponsability?: CompResponsability[],

}
