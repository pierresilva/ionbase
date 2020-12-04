import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SystCity} from "../syst-city";
import {FormGroup} from "@angular/forms";
import {SystCitiesService} from "../syst-cities.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-syst-cities-form',
    templateUrl: './syst-cities-form.component.html',
    styleUrls: ['./syst-cities-form.component.scss']
})
export class SystCitiesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: SystCity = <SystCity>{};

    @ViewChild('systCitiesForm') systCitiesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'syst_region_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DEPARTAMENTO') + ' es obligatorio.'},
        ],
        'user_profile_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PERFILES DE USUARIOS') + ' es obligatorio.'},
        ],
        'comp_address_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESAS DIRECCIONES') + ' es obligatorio.'},
        ],
    };

    constructor(
        public systCitiesService: SystCitiesService,
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
        this.systCitiesService.systCity.user_profile_ids = userProfileIds;
    }
    // end setUserProfileIds


    // set setSystRegionId

    setSystRegionId(event: any) {
        this.systCitiesService.systCity.syst_region_id = event.value ? event.value.id : null;
    }
    // end setSystRegionId


    // set setCompAddressIds
    setCompAddressIds(event: any) {
        let compAddressIds = null;
        if (event.value.length) {
            compAddressIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compAddressIds.push(event.value[i].id);
            }
        }
        this.systCitiesService.systCity.comp_address_ids = compAddressIds;
    }
    // end setCompAddressIds


}
