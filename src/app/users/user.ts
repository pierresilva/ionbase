import { SystPosition } from "../syst-positions/syst-position";
import { UserProfile } from "../user-profiles/user-profile";
import { CounMeetingCitation } from "../coun-meeting-citations/coun-meeting-citation";
import { CounMember } from "../coun-members/coun-member";

export interface User {

    id?: any;
    syst_position_id?: any,
    name?: any,
    email?: any,
    password?: any,
    first_name?: any,
    last_name?: any,
    accept_terms_condition?: any,
    syst_position?: SystPosition,
    user_profile_ids?: any[],
    user_profiles?: UserProfile[],
    coun_meeting_citation_ids?: any[],
    coun_meeting_citations?: CounMeetingCitation[],
    coun_member_ids?: any[],
    coun_members?: CounMember[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface UserLists {

    SystPosition?: SystPosition[],
    UserProfile?: UserProfile[],
    CounMeetingCitation?: CounMeetingCitation[],
    CounMember?: CounMember[],

}
