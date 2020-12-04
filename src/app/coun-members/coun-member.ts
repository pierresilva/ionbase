import { CounMeetingCitation } from "../coun-meeting-citations/coun-meeting-citation";
import { User } from "../users/user";

export interface CounMember {

    id?: any;
    name?: any,
    user_id?: any,
    coun_meeting_citation_ids?: any[],
    coun_meeting_citations?: CounMeetingCitation[],
    user?: User,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface CounMemberLists {

    CounMeetingCitation?: CounMeetingCitation[],
    User?: User[],

}
