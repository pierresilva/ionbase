import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OperMachine} from "../oper-machine";
import {FormGroup} from "@angular/forms";
import {OperMachinesService} from "../oper-machines.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-oper-machines-form',
    templateUrl: './oper-machines-form.component.html',
    styleUrls: ['./oper-machines-form.component.scss']
})
export class OperMachinesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: OperMachine = <OperMachine>{};

    @ViewChild('operMachinesForm') operMachinesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'hous_unit_area_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('AREA') + ' es obligatorio.'},
        ],
        'oper_contractor_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONTRATISTA') + ' es obligatorio.'},
        ],
        'contract_expiration_date': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA VENCIMIENTO CONTRATO') + ' es obligatorio.'},
        ],
        'contract_monthly_price': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('VALOR MENSUAL') + ' es obligatorio.'},
        ],
        'monthly_periodicity': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PERIODICIDAD MENSUAL') + ' es obligatorio.'},
        ],
        'oper_preventive_maintenance_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD MTTO PREVENTIVOS') + ' es obligatorio.'},
        ],
        'oper_replacement_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD REPUESTOS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public operMachinesService: OperMachinesService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setHousUnitAreaId

    setHousUnitAreaId(event: any) {
        this.operMachinesService.operMachine.hous_unit_area_id = event.value ? event.value.id : null;
    }
    // end setHousUnitAreaId


    // set setOperContractorId

    setOperContractorId(event: any) {
        this.operMachinesService.operMachine.oper_contractor_id = event.value ? event.value.id : null;
    }
    // end setOperContractorId


    // set setOperPreventiveMaintenanceIds
    setOperPreventiveMaintenanceIds(event: any) {
        let operPreventiveMaintenanceIds = null;
        if (event.value.length) {
            operPreventiveMaintenanceIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operPreventiveMaintenanceIds.push(event.value[i].id);
            }
        }
        this.operMachinesService.operMachine.oper_preventive_maintenance_ids = operPreventiveMaintenanceIds;
    }
    // end setOperPreventiveMaintenanceIds


    // set setOperReplacementIds
    setOperReplacementIds(event: any) {
        let operReplacementIds = null;
        if (event.value.length) {
            operReplacementIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operReplacementIds.push(event.value[i].id);
            }
        }
        this.operMachinesService.operMachine.oper_replacement_ids = operReplacementIds;
    }
    // end setOperReplacementIds


}
