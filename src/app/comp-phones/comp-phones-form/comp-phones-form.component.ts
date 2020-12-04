import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CompPhone} from "../comp-phone";
import {FormGroup} from "@angular/forms";
import {CompPhonesService} from "../comp-phones.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-comp-phones-form',
    templateUrl: './comp-phones-form.component.html',
    styleUrls: ['./comp-phones-form.component.scss']
})
export class CompPhonesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: CompPhone = <CompPhone>{};

    @ViewChild('compPhonesForm') compPhonesForm: FormGroup;

    public validationMessages = {
        'company_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESA') + ' es obligatorio.'},
        ],
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'number': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NÚMERO') + ' es obligatorio.'},
        ],
        'main': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PRINCIPAL') + ' es obligatorio.'},
        ],
    };

    constructor(
        public compPhonesService: CompPhonesService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setCompanyId

    setCompanyId(event: any) {
        this.compPhonesService.compPhone.company_id = event.value ? event.value.id : null;
    }
    // end setCompanyId


}
