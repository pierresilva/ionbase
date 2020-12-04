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


}
