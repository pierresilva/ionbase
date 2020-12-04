import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SystRegion} from "../syst-region";
import {FormGroup} from "@angular/forms";
import {SystRegionsService} from "../syst-regions.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-syst-regions-form',
    templateUrl: './syst-regions-form.component.html',
    styleUrls: ['./syst-regions-form.component.scss']
})
export class SystRegionsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: SystRegion = <SystRegion>{};

    @ViewChild('systRegionsForm') systRegionsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NAME') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'syst_country_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PAÍS') + ' es obligatorio.'},
        ],
        'user_profile_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PERFILES DE USUARIOS') + ' es obligatorio.'},
        ],
        'syst_city_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CIUDADES') + ' es obligatorio.'},
        ],
    };

    constructor(
        public systRegionsService: SystRegionsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setUserProfileIds
    setUserProfileIds(event: any) {
        let userProfileIds = null;
        if (event.value.length) {
            userProfileIds = [];
            for (let i = 0; i < event.value.length; i++) {
                userProfileIds.push(event.value[i].id);
            }
        }
        this.systRegionsService.systRegion.user_profile_ids = userProfileIds;
    }
    // end setUserProfileIds


    // set setSystCityIds
    setSystCityIds(event: any) {
        let systCityIds = null;
        if (event.value.length) {
            systCityIds = [];
            for (let i = 0; i < event.value.length; i++) {
                systCityIds.push(event.value[i].id);
            }
        }
        this.systRegionsService.systRegion.syst_city_ids = systCityIds;
    }
    // end setSystCityIds


    // set setSystCountryId

    setSystCountryId(event: any) {
        this.systRegionsService.systRegion.syst_country_id = event.value ? event.value.id : null;
    }
    // end setSystCountryId


}
