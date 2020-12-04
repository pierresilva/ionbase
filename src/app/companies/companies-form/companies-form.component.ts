import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Company} from "../company";
import {FormGroup} from "@angular/forms";
import {CompaniesService} from "../companies.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-companies-form',
    templateUrl: './companies-form.component.html',
    styleUrls: ['./companies-form.component.scss']
})
export class CompaniesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: Company = <Company>{};

    @ViewChild('companiesForm') companiesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'nit': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NIT') + ' es obligatorio.'},
        ],
        'manager_name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE REPRESENTANTE LEGAL') + ' es obligatorio.'},
        ],
        'manager_document': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÉDULA REPRESENTANTE LEGAL') + ' es obligatorio.'},
        ],
        'logo': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('LOGOTIPO') + ' es obligatorio.'},
        ],
        'main': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PRINCIPAL') + ' es obligatorio.'},
        ],
        'comp_phone_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONOS DE EMPRESAS') + ' es obligatorio.'},
        ],
        'comp_address_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESAS DIRECCIONES') + ' es obligatorio.'},
        ],
        'comp_contact_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESAS CONTACTOS') + ' es obligatorio.'},
        ],
        'comp_responsability_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESAS RESPONSABILIDADES LEGALES') + ' es obligatorio.'},
        ],
    };

    constructor(
        public companiesService: CompaniesService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setCompPhoneIds
    setCompPhoneIds(event: any) {
        let compPhoneIds = null;
        if (event.value.length) {
            compPhoneIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compPhoneIds.push(event.value[i].id);
            }
        }
        this.companiesService.company.comp_phone_ids = compPhoneIds;
    }
    // end setCompPhoneIds


    // set setCompAddressIds
    setCompAddressIds(event: any) {
        let compAddressIds = null;
        if (event.value.length) {
            compAddressIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compAddressIds.push(event.value[i].id);
            }
        }
        this.companiesService.company.comp_address_ids = compAddressIds;
    }
    // end setCompAddressIds


    // set setCompContactIds
    setCompContactIds(event: any) {
        let compContactIds = null;
        if (event.value.length) {
            compContactIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compContactIds.push(event.value[i].id);
            }
        }
        this.companiesService.company.comp_contact_ids = compContactIds;
    }
    // end setCompContactIds


    // set setCompResponsabilityIds
    setCompResponsabilityIds(event: any) {
        let compResponsabilityIds = null;
        if (event.value.length) {
            compResponsabilityIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compResponsabilityIds.push(event.value[i].id);
            }
        }
        this.companiesService.company.comp_responsability_ids = compResponsabilityIds;
    }
    // end setCompResponsabilityIds


}
