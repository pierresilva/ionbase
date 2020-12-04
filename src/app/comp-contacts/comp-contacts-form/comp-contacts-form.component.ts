import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CompContact} from "../comp-contact";
import {FormGroup} from "@angular/forms";
import {CompContactsService} from "../comp-contacts.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-comp-contacts-form',
    templateUrl: './comp-contacts-form.component.html',
    styleUrls: ['./comp-contacts-form.component.scss']
})
export class CompContactsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: CompContact = <CompContact>{};

    @ViewChild('compContactsForm') compContactsForm: FormGroup;

    public validationMessages = {
        'company_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESA') + ' es obligatorio.'},
        ],
        'syst_position_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CARGO') + ' es obligatorio.'},
        ],
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'phone': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO') + ' es obligatorio.'},
        ],
        'email': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CORREO') + ' es obligatorio.'},
        ],
        'main': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PRINCIPAL') + ' es obligatorio.'},
        ],
    };

    constructor(
        public compContactsService: CompContactsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setCompanyId

    setCompanyId(event: any) {
        this.compContactsService.compContact.company_id = event.value ? event.value.id : null;
    }
    // end setCompanyId


    // set setSystPositionId

    setSystPositionId(event: any) {
        this.compContactsService.compContact.syst_position_id = event.value ? event.value.id : null;
    }
    // end setSystPositionId


}
