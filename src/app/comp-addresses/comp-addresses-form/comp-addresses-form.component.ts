import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CompAddress} from "../comp-address";
import {FormGroup} from "@angular/forms";
import {CompAddressesService} from "../comp-addresses.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-comp-addresses-form',
    templateUrl: './comp-addresses-form.component.html',
    styleUrls: ['./comp-addresses-form.component.scss']
})
export class CompAddressesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: CompAddress = <CompAddress>{};

    @ViewChild('compAddressesForm') compAddressesForm: FormGroup;

    public validationMessages = {
        'company_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESA') + ' es obligatorio.'},
        ],
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'syst_city_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CIUDAD') + ' es obligatorio.'},
        ],
        'address': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DIRECCIÓN') + ' es obligatorio.'},
        ],
        'main': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PRINCIPAL') + ' es obligatorio.'},
        ],
    };

    constructor(
        public compAddressesService: CompAddressesService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setCompanyId

    setCompanyId(event: any) {
        this.compAddressesService.compAddress.company_id = event.value ? event.value.id : null;
    }
    // end setCompanyId


    // set setSystCityId

    setSystCityId(event: any) {
        this.compAddressesService.compAddress.syst_city_id = event.value ? event.value.id : null;
    }
    // end setSystCityId


}
