import { CounMeeting } from "../coun-meetings/coun-meeting";
import { User } from "../users/user";
import { CounMember } from "../coun-members/coun-member";

export interface CounMeetingCitation {

    id?: any;
    coun_meeting_id?: any,
    user_id?: any,
    coun_member_id?: any,
    name?: any,
    attended?: any,
    signed?: any,
    signature?: any,
    coun_meeting?: CounMeeting,
    user?: User,
    coun_member?: CounMember,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface CounMeetingCitationLists {

    CounMeeting?: CounMeeting[],
    User?: User[],
    CounMember?: CounMember[],

}
