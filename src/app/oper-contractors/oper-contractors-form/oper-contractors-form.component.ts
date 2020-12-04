import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OperContractor} from "../oper-contractor";
import {FormGroup} from "@angular/forms";
import {OperContractorsService} from "../oper-contractors.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-oper-contractors-form',
    templateUrl: './oper-contractors-form.component.html',
    styleUrls: ['./oper-contractors-form.component.scss']
})
export class OperContractorsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: OperContractor = <OperContractor>{};

    @ViewChild('operContractorsForm') operContractorsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'document': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DOCUMENTO') + ' es obligatorio.'},
        ],
        'address': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DIRECCIÓN') + ' es obligatorio.'},
        ],
        'phone': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO') + ' es obligatorio.'},
        ],
        'email': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CORREO') + ' es obligatorio.'},
        ],
        'phone_support': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO DE SOPORTE') + ' es obligatorio.'},
        ],
        'email_support': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CORREO DE SOPORTE') + ' es obligatorio.'},
        ],
        'contact': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONTACTO') + ' es obligatorio.'},
        ],
        'business_hour': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORARIO DE ATENCIÓN') + ' es obligatorio.'},
        ],
        'phone_emergency': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO DE EMERGENCIA') + ' es obligatorio.'},
        ],
        'email_emergency': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CORREO DE EMERGENCIA') + ' es obligatorio.'},
        ],
        'oper_movement_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('MOVIMIENTOS OPERATIVOS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public operContractorsService: OperContractorsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setOperMovementIds
    setOperMovementIds(event: any) {
        let operMovementIds = null;
        if (event.value.length) {
            operMovementIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operMovementIds.push(event.value[i].id);
            }
        }
        this.operContractorsService.operContractor.oper_movement_ids = operMovementIds;
    }
    // end setOperMovementIds


}
