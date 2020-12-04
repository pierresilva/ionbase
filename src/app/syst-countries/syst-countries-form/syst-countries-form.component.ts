import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SystCountry} from "../syst-country";
import {FormGroup} from "@angular/forms";
import {SystCountriesService} from "../syst-countries.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-syst-countries-form',
    templateUrl: './syst-countries-form.component.html',
    styleUrls: ['./syst-countries-form.component.scss']
})
export class SystCountriesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: SystCountry = <SystCountry>{};

    @ViewChild('systCountriesForm') systCountriesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'user_profile_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PERFILES DE USUARIOS') + ' es obligatorio.'},
        ],
        'syst_region_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DEPARTAMENTOS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public systCountriesService: SystCountriesService,
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
        this.systCountriesService.systCountry.user_profile_ids = userProfileIds;
    }
    // end setUserProfileIds


    // set setSystRegionIds
    setSystRegionIds(event: any) {
        let systRegionIds = null;
        if (event.value.length) {
            systRegionIds = [];
            for (let i = 0; i < event.value.length; i++) {
                systRegionIds.push(event.value[i].id);
            }
        }
        this.systCountriesService.systCountry.syst_region_ids = systRegionIds;
    }
    // end setSystRegionIds


}
