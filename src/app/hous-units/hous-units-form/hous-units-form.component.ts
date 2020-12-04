import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {HousUnit} from "../hous-unit";
import {FormGroup} from "@angular/forms";
import {HousUnitsService} from "../hous-units.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-hous-units-form',
    templateUrl: './hous-units-form.component.html',
    styleUrls: ['./hous-units-form.component.scss']
})
export class HousUnitsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: HousUnit = <HousUnit>{};

    @ViewChild('housUnitsForm') housUnitsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'hous_unit_area_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('AREAS DE UNIDADES HABITACIONALES') + ' es obligatorio.'},
        ],
        'oper_sector_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('SECTORES OPERATIVOS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public housUnitsService: HousUnitsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setHousUnitAreaIds
    setHousUnitAreaIds(event: any) {
        let housUnitAreaIds = null;
        if (event.value.length) {
            housUnitAreaIds = [];
            for (let i = 0; i < event.value.length; i++) {
                housUnitAreaIds.push(event.value[i].id);
            }
        }
        this.housUnitsService.housUnit.hous_unit_area_ids = housUnitAreaIds;
    }
    // end setHousUnitAreaIds


    // set setOperSectorIds
    setOperSectorIds(event: any) {
        let operSectorIds = null;
        if (event.value.length) {
            operSectorIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operSectorIds.push(event.value[i].id);
            }
        }
        this.housUnitsService.housUnit.oper_sector_ids = operSectorIds;
    }
    // end setOperSectorIds


}
