import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OperMaintenanceRepair} from "../oper-maintenance-repair";
import {FormGroup} from "@angular/forms";
import {OperMaintenanceRepairsService} from "../oper-maintenance-repairs.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-oper-maintenance-repairs-form',
    templateUrl: './oper-maintenance-repairs-form.component.html',
    styleUrls: ['./oper-maintenance-repairs-form.component.scss']
})
export class OperMaintenanceRepairsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: OperMaintenanceRepair = <OperMaintenanceRepair>{};

    @ViewChild('operMaintenanceRepairsForm') operMaintenanceRepairsForm: FormGroup;

    public validationMessages = {
        'oper_corrective_maintenance_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('operCorrectiveMaintenance - NAME') + ' es obligatorio.'},
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
        'completed_by': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('REPORTADO POR') + ' es obligatorio.'},
        ],
    };

    constructor(
        public operMaintenanceRepairsService: OperMaintenanceRepairsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setOperCorrectiveMaintenanceId

    setOperCorrectiveMaintenanceId(event: any) {
        this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id = event.value ? event.value.id : null;
    }
    // end setOperCorrectiveMaintenanceId


}
