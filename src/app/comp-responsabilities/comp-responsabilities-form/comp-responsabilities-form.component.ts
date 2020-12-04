import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CompResponsability} from "../comp-responsability";
import {FormGroup} from "@angular/forms";
import {CompResponsabilitiesService} from "../comp-responsabilities.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-comp-responsabilities-form',
    templateUrl: './comp-responsabilities-form.component.html',
    styleUrls: ['./comp-responsabilities-form.component.scss']
})
export class CompResponsabilitiesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: CompResponsability = <CompResponsability>{};

    @ViewChild('compResponsabilitiesForm') compResponsabilitiesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'company_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('company - NAME') + ' es obligatorio.'},
        ],
        'syst_parameter_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('RESPONSABILIDAD LEGAL') + ' es obligatorio.'},
        ],
    };

    constructor(
        public compResponsabilitiesService: CompResponsabilitiesService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setCompanyId

    setCompanyId(event: any) {
        this.compResponsabilitiesService.compResponsability.company_id = event.value ? event.value.id : null;
    }
    // end setCompanyId


    // set setSystParameterId

    setSystParameterId(event: any) {
        this.compResponsabilitiesService.compResponsability.syst_parameter_id = event.value ? event.value.id : null;
    }
    // end setSystParameterId


}
