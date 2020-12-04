import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OperSector} from "../oper-sector";
import {FormGroup} from "@angular/forms";
import {OperSectorsService} from "../oper-sectors.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-oper-sectors-form',
    templateUrl: './oper-sectors-form.component.html',
    styleUrls: ['./oper-sectors-form.component.scss']
})
export class OperSectorsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: OperSector = <OperSector>{};

    @ViewChild('operSectorsForm') operSectorsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NAME') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'hous_unit_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('housUnit - NAME') + ' es obligatorio.'},
        ],
        'oper_schedule_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('AGENDA DE OPERACIONES') + ' es obligatorio.'},
        ],
        'oper_movement_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('MOVIMIENTOS OPERATIVOS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public operSectorsService: OperSectorsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setHousUnitId

    setHousUnitId(event: any) {
        this.operSectorsService.operSector.hous_unit_id = event.value ? event.value.id : null;
    }
    // end setHousUnitId


    // set setOperScheduleIds
    setOperScheduleIds(event: any) {
        let operScheduleIds = null;
        if (event.value.length) {
            operScheduleIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operScheduleIds.push(event.value[i].id);
            }
        }
        this.operSectorsService.operSector.oper_schedule_ids = operScheduleIds;
    }
    // end setOperScheduleIds


    // set setOperMovementIds
    setOperMovementIds(event: any) {
        let operMovementIds = null;
        if (event.value.length) {
            operMovementIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operMovementIds.push(event.value[i].id);
            }
        }
        this.operSectorsService.operSector.oper_movement_ids = operMovementIds;
    }
    // end setOperMovementIds


}
