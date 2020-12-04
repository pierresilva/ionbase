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
    status?: any,
    start_content?: any,
    end_content?: any,
    consecutive?: any,
    type?: any,
    coun_meeting_agenda_ids?: any[],
    coun_meeting_agendas?: CounMeetingAgenda[],
    coun_meeting_citation_ids?: any[],
    coun_meeting_citations?: CounMeetingCitation[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface CounMeetingLists {

    CounMeetingAgenda?: CounMeetingAgenda[],
    CounMeetingCitation?: CounMeetingCitation[],

}
