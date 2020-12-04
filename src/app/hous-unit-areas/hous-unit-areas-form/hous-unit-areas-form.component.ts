import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {HousUnitArea} from "../hous-unit-area";
import {FormGroup} from "@angular/forms";
import {HousUnitAreasService} from "../hous-unit-areas.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-hous-unit-areas-form',
    templateUrl: './hous-unit-areas-form.component.html',
    styleUrls: ['./hous-unit-areas-form.component.scss']
})
export class HousUnitAreasFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: HousUnitArea = <HousUnitArea>{};

    @ViewChild('housUnitAreasForm') housUnitAreasForm: FormGroup;

    public validationMessages = {
        'hous_unit_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('housUnit - NAME') + ' es obligatorio.'},
        ],
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'oper_schedule_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('AGENDA DE OPERACIONES') + ' es obligatorio.'},
        ],
    };

    constructor(
        public housUnitAreasService: HousUnitAreasService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setHousUnitId

    setHousUnitId(event: any) {
        this.housUnitAreasService.housUnitArea.hous_unit_id = event.value ? event.value.id : null;
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
        this.housUnitAreasService.housUnitArea.oper_schedule_ids = operScheduleIds;
    }
    // end setOperScheduleIds


}
