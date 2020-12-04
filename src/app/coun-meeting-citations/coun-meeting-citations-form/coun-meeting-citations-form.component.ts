import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CounMeetingCitation} from "../coun-meeting-citation";
import {FormGroup} from "@angular/forms";
import {CounMeetingCitationsService} from "../coun-meeting-citations.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-coun-meeting-citations-form',
    templateUrl: './coun-meeting-citations-form.component.html',
    styleUrls: ['./coun-meeting-citations-form.component.scss']
})
export class CounMeetingCitationsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: CounMeetingCitation = <CounMeetingCitation>{};

    @ViewChild('counMeetingCitationsForm') counMeetingCitationsForm: FormGroup;

    public validationMessages = {
        'coun_meeting_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('counMeeting - NAME') + ' es obligatorio.'},
        ],
        'user_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('user - NAME') + ' es obligatorio.'},
        ],
        'coun_member_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('counMember - NAME') + ' es obligatorio.'},
        ],
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'attended': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ASISTIÓ') + ' es obligatorio.'},
        ],
        'signed': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FIRMÓ') + ' es obligatorio.'},
        ],
        'signature': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FIRMA') + ' es obligatorio.'},
        ],
    };

    constructor(
        public counMeetingCitationsService: CounMeetingCitationsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setCounMeetingId

    setCounMeetingId(event: any) {
        this.counMeetingCitationsService.counMeetingCitation.coun_meeting_id = event.value ? event.value.id : null;
    }
    // end setCounMeetingId


    // set setUserId

    setUserId(event: any) {
        this.counMeetingCitationsService.counMeetingCitation.user_id = event.value ? event.value.id : null;
    }
    // end setUserId


    // set setCounMemberId

    setCounMemberId(event: any) {
        this.counMeetingCitationsService.counMeetingCitation.coun_member_id = event.value ? event.value.id : null;
    }
    // end setCounMemberId


}
