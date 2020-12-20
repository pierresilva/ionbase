import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OperSchedule} from "../oper-schedule";
import {FormGroup} from "@angular/forms";
import {OperSchedulesService} from "../oper-schedules.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-oper-schedules-form',
    templateUrl: './oper-schedules-form.component.html',
    styleUrls: ['./oper-schedules-form.component.scss']
})
export class OperSchedulesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: OperSchedule = <OperSchedule>{};

    @ViewChild('operSchedulesForm') operSchedulesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'hous_unit_area_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('housUnitArea - NAME') + ' es obligatorio.'},
        ],
        'oper_sector_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('SECTOR') + ' es obligatorio.'},
        ],
        'oper_contractor_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('operContractor - NAME') + ' es obligatorio.'},
        ],
        'required_time': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TIEMPO REQUERIDO') + ' es obligatorio.'},
        ],
        'supervisor_email': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMAIL DEL SUPOERVISOR') + ' es obligatorio.'},
        ],
        'area_phone': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO DEL AREA') + ' es obligatorio.'},
        ],
        'time_start': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA INICIAL') + ' es obligatorio.'},
        ],
        'time_end': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA FINAL') + ' es obligatorio.'},
        ],
        'periodicity': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PERIODICIDAD') + ' es obligatorio.'},
        ],
        'repass': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('REQUIERE REPASAR') + ' es obligatorio.'},
        ],
        'next': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('SIGUIENTE EN') + ' es obligatorio.'},
        ],
        'oper_movement_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('MOVIMIENTOS OPERATIVOS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public operSchedulesService: OperSchedulesService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setHousUnitAreaId

    setHousUnitAreaId(event: any) {
        this.operSchedulesService.operSchedule.hous_unit_area_id = event.value ? event.value.id : null;
    }
    // end setHousUnitAreaId


    // set setOperSectorId

    setOperSectorId(event: any) {
        this.operSchedulesService.operSchedule.oper_sector_id = event.value ? event.value.id : null;
    }
    // end setOperSectorId


    // set setOperContractorId

    setOperContractorId(event: any) {
        this.operSchedulesService.operSchedule.oper_contractor_id = event.value ? event.value.id : null;
    }
    // end setOperContractorId


    // set setOperMovementIds
    setOperMovementIds(event: any) {
        let operMovementIds = null;
        if (event.value.length) {
            operMovementIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operMovementIds.push(event.value[i].id);
            }
        }
        this.operSchedulesService.operSchedule.oper_movement_ids = operMovementIds;
    }
    // end setOperMovementIds


}
