import { Company } from "../companies/company";

export interface CompPhone {

    id?: any;
    company_id?: any,
    name?: any,
    number?: any,
    main?: any,
    company?: Company,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface CompPhoneLists {

    Company?: Company[],

}
