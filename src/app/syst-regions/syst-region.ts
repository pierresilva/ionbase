import { UserProfile } from "../user-profiles/user-profile";
import { SystCity } from "../syst-cities/syst-city";
import { SystCountry } from "../syst-countries/syst-country";

export interface SystRegion {

    id?: any;
    name?: any,
    code?: any,
    syst_country_id?: any,
    user_profile_ids?: any[],
    user_profiles?: UserProfile[],
    syst_city_ids?: any[],
    syst_cities?: SystCity[],
    syst_country?: SystCountry,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface SystRegionLists {

    UserProfile?: UserProfile[],
    SystCity?: SystCity[],
    SystCountry?: SystCountry[],

}
