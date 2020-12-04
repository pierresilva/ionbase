import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SystParameter} from "../syst-parameter";
import {FormGroup} from "@angular/forms";
import {SystParametersService} from "../syst-parameters.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-syst-parameters-form',
    templateUrl: './syst-parameters-form.component.html',
    styleUrls: ['./syst-parameters-form.component.scss']
})
export class SystParametersFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: SystParameter = <SystParameter>{};

    @ViewChild('systParametersForm') systParametersForm: FormGroup;

    public validationMessages = {
        'syst_parameter_group_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('GRUPO') + ' es obligatorio.'},
        ],
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'riched_text': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TEXTO ENRIQUECIDO') + ' es obligatorio.'},
        ],
        'value': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('VALOR') + ' es obligatorio.'},
        ],
        'comp_responsability_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESAS RESPONSABILIDADES LEGALES') + ' es obligatorio.'},
        ],
    };

    constructor(
        public systParametersService: SystParametersService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setSystParameterGroupId

    setSystParameterGroupId(event: any) {
        this.systParametersService.systParameter.syst_parameter_group_id = event.value ? event.value.id : null;
    }
    // end setSystParameterGroupId


    // set setCompResponsabilityIds
    setCompResponsabilityIds(event: any) {
        let compResponsabilityIds = null;
        if (event.value.length) {
            compResponsabilityIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compResponsabilityIds.push(event.value[i].id);
            }
        }
        this.systParametersService.systParameter.comp_responsability_ids = compResponsabilityIds;
    }
    // end setCompResponsabilityIds


}
