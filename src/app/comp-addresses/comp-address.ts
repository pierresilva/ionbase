import { Company } from "../companies/company";
import { SystCity } from "../syst-cities/syst-city";

export interface CompAddress {

    id?: any;
    company_id?: any,
    name?: any,
    syst_city_id?: any,
    address?: any,
    main?: any,
    company?: Company,
    syst_city?: SystCity,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface CompAddressLists {

    Company?: Company[],
    SystCity?: SystCity[],

}
