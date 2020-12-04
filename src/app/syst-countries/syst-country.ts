import { UserProfile } from "../user-profiles/user-profile";
import { SystRegion } from "../syst-regions/syst-region";

export interface SystCountry {

    id?: any;
    name?: any,
    code?: any,
    user_profile_ids?: any[],
    user_profiles?: UserProfile[],
    syst_region_ids?: any[],
    syst_regions?: SystRegion[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface SystCountryLists {

    UserProfile?: UserProfile[],
    SystRegion?: SystRegion[],

}
