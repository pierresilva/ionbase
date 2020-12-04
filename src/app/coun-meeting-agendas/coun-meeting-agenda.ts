import { CounMeeting } from "../coun-meetings/coun-meeting";

export interface CounMeetingAgenda {

    id?: any;
    name?: any,
    order?: any,
    coun_meeting_id?: any,
    content?: any,
    coun_meeting?: CounMeeting,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface CounMeetingAgendaLists {

    CounMeeting?: CounMeeting[],

}
