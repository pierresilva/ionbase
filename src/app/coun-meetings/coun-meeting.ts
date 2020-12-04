import { CounMeetingAgenda } from "../coun-meeting-agendas/coun-meeting-agenda";
import { CounMeetingCitation } from "../coun-meeting-citations/coun-meeting-citation";

export interface CounMeeting {

    id?: any;
    name?: any,
    description?: any,
    date?: any,
    hour?: any,
    place?: any,
    url?: any,
    act?: any,
    coun_meeting_agenda_ids?: any[],
    coun_meeting_agendas?: CounMeetingAgenda[],
    coun_meeting_citation_ids?: any[],
    coun_meeting_citations?: CounMeetingCitation[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    status?: any;
}

export interface CounMeetingLists {

    CounMeetingAgenda?: CounMeetingAgenda[],
    CounMeetingCitation?: CounMeetingCitation[],

}
