import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CounMeeting} from "../coun-meeting";
import {FormGroup} from "@angular/forms";
import {CounMeetingsService} from "../coun-meetings.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-coun-meetings-form',
    templateUrl: './coun-meetings-form.component.html',
    styleUrls: ['./coun-meetings-form.component.scss']
})
export class CounMeetingsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: CounMeeting = <CounMeeting>{};

    @ViewChild('counMeetingsForm') counMeetingsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'description': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DESCRIPCIÓN') + ' es obligatorio.'},
        ],
        'date': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.'},
        ],
        'hour': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.'},
        ],
        'place': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('LUGAR') + ' es obligatorio.'},
        ],
        'url': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DIRECCIÓN REUNIÓN VIRTUAL') + ' es obligatorio.'},
        ],
        'act': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ACTA') + ' es obligatorio.'},
        ],
        'coun_meeting_agenda_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('JUNTAS AGENDAS') + ' es obligatorio.'},
        ],
        'coun_meeting_citation_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('JUNTAS CITACIONES') + ' es obligatorio.'},
        ],
    };

    constructor(
        public counMeetingsService: CounMeetingsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setCounMeetingAgendaIds
    setCounMeetingAgendaIds(event: any) {
        let counMeetingAgendaIds = null;
        if (event.value.length) {
            counMeetingAgendaIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMeetingAgendaIds.push(event.value[i].id);
            }
        }
        this.counMeetingsService.counMeeting.coun_meeting_agenda_ids = counMeetingAgendaIds;
    }
    // end setCounMeetingAgendaIds


    // set setCounMeetingCitationIds
    setCounMeetingCitationIds(event: any) {
        let counMeetingCitationIds = null;
        if (event.value.length) {
            counMeetingCitationIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMeetingCitationIds.push(event.value[i].id);
            }
        }
        this.counMeetingsService.counMeeting.coun_meeting_citation_ids = counMeetingCitationIds;
    }
    // end setCounMeetingCitationIds


}
