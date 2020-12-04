import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CounMeetingAgenda} from "../coun-meeting-agenda";
import {FormGroup} from "@angular/forms";
import {CounMeetingAgendasService} from "../coun-meeting-agendas.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-coun-meeting-agendas-form',
    templateUrl: './coun-meeting-agendas-form.component.html',
    styleUrls: ['./coun-meeting-agendas-form.component.scss']
})
export class CounMeetingAgendasFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: CounMeetingAgenda = <CounMeetingAgenda>{};

    @ViewChild('counMeetingAgendasForm') counMeetingAgendasForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'order': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ORDEN') + ' es obligatorio.'},
        ],
        'coun_meeting_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('counMeeting - NAME') + ' es obligatorio.'},
        ],
        'content': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONTENIDO') + ' es obligatorio.'},
        ],
    };

    constructor(
        public counMeetingAgendasService: CounMeetingAgendasService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setCounMeetingId

    setCounMeetingId(event: any) {
        this.counMeetingAgendasService.counMeetingAgenda.coun_meeting_id = event.value ? event.value.id : null;
    }
    // end setCounMeetingId


}
