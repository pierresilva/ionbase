import { User } from "../users/user";
import { SystCity } from "../syst-cities/syst-city";
import { SystRegion } from "../syst-regions/syst-region";
import { SystCountry } from "../syst-countries/syst-country";

export interface UserProfile {

    id?: any;
    name?: any,
    user_id?: any,
    syst_city_id?: any,
    syst_region_id?: any,
    syst_country_id?: any,
    address?: any,
    phone?: any,
    avatar?: any,
    user?: User,
    syst_city?: SystCity,
    syst_region?: SystRegion,
    syst_country?: SystCountry,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface UserProfileLists {

    User?: User[],
    SystCity?: SystCity[],
    SystRegion?: SystRegion[],
    SystCountry?: SystCountry[],

}
