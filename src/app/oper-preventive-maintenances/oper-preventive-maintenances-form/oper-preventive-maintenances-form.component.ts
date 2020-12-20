import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OperPreventiveMaintenance} from "../oper-preventive-maintenance";
import {FormGroup} from "@angular/forms";
import {OperPreventiveMaintenancesService} from "../oper-preventive-maintenances.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-oper-preventive-maintenances-form',
    templateUrl: './oper-preventive-maintenances-form.component.html',
    styleUrls: ['./oper-preventive-maintenances-form.component.scss']
})
export class OperPreventiveMaintenancesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: OperPreventiveMaintenance = <OperPreventiveMaintenance>{};

    @ViewChild('operPreventiveMaintenancesForm') operPreventiveMaintenancesForm: FormGroup;

    public validationMessages = {
        'oper_machine_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('MAQUINA') + ' es obligatorio.'},
        ],
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'date': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.'},
        ],
        'time': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.'},
        ],
        'next': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('SIGUIENTE EN') + ' es obligatorio.'},
        ],
    };

    constructor(
        public operPreventiveMaintenancesService: OperPreventiveMaintenancesService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setOperMachineId

    setOperMachineId(event: any) {
        this.operPreventiveMaintenancesService.operPreventiveMaintenance.oper_machine_id = event.value ? event.value.id : null;
    }
    // end setOperMachineId


}
