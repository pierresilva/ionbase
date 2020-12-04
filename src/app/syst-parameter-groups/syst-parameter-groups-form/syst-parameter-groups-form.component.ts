import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SystParameterGroup} from "../syst-parameter-group";
import {FormGroup} from "@angular/forms";
import {SystParameterGroupsService} from "../syst-parameter-groups.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-syst-parameter-groups-form',
    templateUrl: './syst-parameter-groups-form.component.html',
    styleUrls: ['./syst-parameter-groups-form.component.scss']
})
export class SystParameterGroupsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: SystParameterGroup = <SystParameterGroup>{};

    @ViewChild('systParameterGroupsForm') systParameterGroupsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'syst_parameter_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PARAMETROS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public systParameterGroupsService: SystParameterGroupsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setSystParameterIds
    setSystParameterIds(event: any) {
        let systParameterIds = null;
        if (event.value.length) {
            systParameterIds = [];
            for (let i = 0; i < event.value.length; i++) {
                systParameterIds.push(event.value[i].id);
            }
        }
        this.systParameterGroupsService.systParameterGroup.syst_parameter_ids = systParameterIds;
    }
    // end setSystParameterIds


}
