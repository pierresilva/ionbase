import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from "../user";
import {FormGroup} from "@angular/forms";
import {UsersService} from "../users.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-users-form',
    templateUrl: './users-form.component.html',
    styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: User = <User>{};

    @ViewChild('usersForm') usersForm: FormGroup;

    public validationMessages = {
        'syst_position_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CARGO') + ' es obligatorio.'},
        ],
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'email': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMAIL') + ' es obligatorio.'},
        ],
        'password': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONTRASEÑA') + ' es obligatorio.'},
        ],
        'first_name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'last_name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('APELLIDOS') + ' es obligatorio.'},
        ],
        'accept_terms_condition': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('') + ' es obligatorio.'},
        ],
        'user_profile_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PERFILES DE USUARIOS') + ' es obligatorio.'},
        ],
        'coun_meeting_citation_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('JUNTAS CITACIONES') + ' es obligatorio.'},
        ],
        'coun_member_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('JUNTAS MIEMBROS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public usersService: UsersService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setSystPositionId

    setSystPositionId(event: any) {
        this.usersService.user.syst_position_id = event.value ? event.value.id : null;
    }
    // end setSystPositionId


    // set setUserProfileIds
    setUserProfileIds(event: any) {
        let userProfileIds = null;
        if (event.value.length) {
            userProfileIds = [];
            for (let i = 0; i < event.value.length; i++) {
                userProfileIds.push(event.value[i].id);
            }
        }
        this.usersService.user.user_profile_ids = userProfileIds;
    }
    // end setUserProfileIds


    // set setCounMeetingCitationIds
    setCounMeetingCitationIds(event: any) {
        let counMeetingCitationIds = null;
        if (event.value.length) {
            counMeetingCitationIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMeetingCitationIds.push(event.value[i].id);
            }
        }
        this.usersService.user.coun_meeting_citation_ids = counMeetingCitationIds;
    }
    // end setCounMeetingCitationIds


    // set setCounMemberIds
    setCounMemberIds(event: any) {
        let counMemberIds = null;
        if (event.value.length) {
            counMemberIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMemberIds.push(event.value[i].id);
            }
        }
        this.usersService.user.coun_member_ids = counMemberIds;
    }
    // end setCounMemberIds


}
