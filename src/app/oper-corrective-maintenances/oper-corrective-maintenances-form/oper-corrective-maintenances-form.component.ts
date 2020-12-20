import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OperCorrectiveMaintenance} from "../oper-corrective-maintenance";
import {FormGroup} from "@angular/forms";
import {OperCorrectiveMaintenancesService} from "../oper-corrective-maintenances.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-oper-corrective-maintenances-form',
    templateUrl: './oper-corrective-maintenances-form.component.html',
    styleUrls: ['./oper-corrective-maintenances-form.component.scss']
})
export class OperCorrectiveMaintenancesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: OperCorrectiveMaintenance = <OperCorrectiveMaintenance>{};

    @ViewChild('operCorrectiveMaintenancesForm') operCorrectiveMaintenancesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'oper_reason_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('MOTIVO') + ' es obligatorio.'},
        ],
        'hous_unit_area_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ÁREA') + ' es obligatorio.'},
        ],
        'detail': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DETALLE') + ' es obligatorio.'},
        ],
        'date': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.'},
        ],
        'time': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.'},
        ],
        'reported_by': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('REPORTADO POR') + ' es obligatorio.'},
        ],
        'status': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.'},
        ],
        'oper_item_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD ITEMS MTTO CORRECTIVO') + ' es obligatorio.'},
        ],
        'oper_maintenance_repair_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD REPARACIONES') + ' es obligatorio.'},
        ],
    };

    constructor(
        public operCorrectiveMaintenancesService: OperCorrectiveMaintenancesService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setOperReasonId

    setOperReasonId(event: any) {
        this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.oper_reason_id = event.value ? event.value.id : null;
    }
    // end setOperReasonId


    // set setHousUnitAreaId

    setHousUnitAreaId(event: any) {
        this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.hous_unit_area_id = event.value ? event.value.id : null;
    }
    // end setHousUnitAreaId


    // set setOperItemIds
    setOperItemIds(event: any) {
        let operItemIds = null;
        if (event.value.length) {
            operItemIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operItemIds.push(event.value[i].id);
            }
        }
        this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.oper_item_ids = operItemIds;
    }
    // end setOperItemIds


    // set setOperMaintenanceRepairIds
    setOperMaintenanceRepairIds(event: any) {
        let operMaintenanceRepairIds = null;
        if (event.value.length) {
            operMaintenanceRepairIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operMaintenanceRepairIds.push(event.value[i].id);
            }
        }
        this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.oper_maintenance_repair_ids = operMaintenanceRepairIds;
    }
    // end setOperMaintenanceRepairIds


}
