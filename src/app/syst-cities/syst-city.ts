import { UserProfile } from "../user-profiles/user-profile";
import { SystRegion } from "../syst-regions/syst-region";
import { CompAddress } from "../comp-addresses/comp-address";

export interface SystCity {

    id?: any;
    name?: any,
    code?: any,
    syst_region_id?: any,
    user_profile_ids?: any[],
    user_profiles?: UserProfile[],
    syst_region?: SystRegion,
    comp_address_ids?: any[],
    comp_addresses?: CompAddress[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface SystCityLists {

    UserProfile?: UserProfile[],
    SystRegion?: SystRegion[],
    CompAddress?: CompAddress[],

}
