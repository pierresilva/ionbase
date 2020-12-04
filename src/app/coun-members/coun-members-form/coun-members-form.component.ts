import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CounMember} from "../coun-member";
import {FormGroup} from "@angular/forms";
import {CounMembersService} from "../coun-members.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-coun-members-form',
    templateUrl: './coun-members-form.component.html',
    styleUrls: ['./coun-members-form.component.scss']
})
export class CounMembersFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: CounMember = <CounMember>{};

    @ViewChild('counMembersForm') counMembersForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'user_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('user - NAME') + ' es obligatorio.'},
        ],
        'coun_meeting_citation_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('JUNTAS CITACIONES') + ' es obligatorio.'},
        ],
    };

    constructor(
        public counMembersService: CounMembersService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setCounMeetingCitationIds
    setCounMeetingCitationIds(event: any) {
        let counMeetingCitationIds = null;
        if (event.value.length) {
            counMeetingCitationIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMeetingCitationIds.push(event.value[i].id);
            }
        }
        this.counMembersService.counMember.coun_meeting_citation_ids = counMeetingCitationIds;
    }
    // end setCounMeetingCitationIds


    // set setUserId

    setUserId(event: any) {
        this.counMembersService.counMember.user_id = event.value ? event.value.id : null;
    }
    // end setUserId


}
