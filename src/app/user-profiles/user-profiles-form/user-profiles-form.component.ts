import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserProfile} from "../user-profile";
import {FormGroup} from "@angular/forms";
import {UserProfilesService} from "../user-profiles.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-user-profiles-form',
    templateUrl: './user-profiles-form.component.html',
    styleUrls: ['./user-profiles-form.component.scss']
})
export class UserProfilesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: UserProfile = <UserProfile>{};

    @ViewChild('userProfilesForm') userProfilesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'user_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('USUARIO') + ' es obligatorio.'},
        ],
        'syst_city_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CIUDAD') + ' es obligatorio.'},
        ],
        'syst_region_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DEPARTAMENTO') + ' es obligatorio.'},
        ],
        'syst_country_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PAÍS') + ' es obligatorio.'},
        ],
        'address': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DORECCIÓN') + ' es obligatorio.'},
        ],
        'phone': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO') + ' es obligatorio.'},
        ],
        'avatar': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('AVATAR') + ' es obligatorio.'},
        ],
    };

    constructor(
        public userProfilesService: UserProfilesService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setUserId

    setUserId(event: any) {
        this.userProfilesService.userProfile.user_id = event.value ? event.value.id : null;
    }
    // end setUserId


    // set setSystCityId

    setSystCityId(event: any) {
        this.userProfilesService.userProfile.syst_city_id = event.value ? event.value.id : null;
    }
    // end setSystCityId


    // set setSystRegionId

    setSystRegionId(event: any) {
        this.userProfilesService.userProfile.syst_region_id = event.value ? event.value.id : null;
    }
    // end setSystRegionId


    // set setSystCountryId

    setSystCountryId(event: any) {
        this.userProfilesService.userProfile.syst_country_id = event.value ? event.value.id : null;
    }
    // end setSystCountryId


}
