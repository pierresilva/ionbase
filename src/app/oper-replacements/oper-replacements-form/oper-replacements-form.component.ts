import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OperReplacement} from "../oper-replacement";
import {FormGroup} from "@angular/forms";
import {OperReplacementsService} from "../oper-replacements.service";
import {TitleCasePipe} from "@angular/common";
import * as moment from 'moment';

@Component({
    selector: 'app-oper-replacements-form',
    templateUrl: './oper-replacements-form.component.html',
    styleUrls: ['./oper-replacements-form.component.scss']
})
export class OperReplacementsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: OperReplacement = <OperReplacement>{};

    @ViewChild('operReplacementsForm') operReplacementsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'oper_machine_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('MAQUINA') + ' es obligatorio.'},
        ],
        'oper_contractor_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONTRATISTA') + ' es obligatorio.'},
        ],
        'date': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.'},
        ],
        'time': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.'},
        ],
        'warranty': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('GARANTIA') + ' es obligatorio.'},
        ],
    };

    constructor(
        public operReplacementsService: OperReplacementsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ionViewWillEnter() {

    }

    ngAfterViewInit() {
    }


    // set setOperMachineId

    setOperMachineId(event: any) {
        this.operReplacementsService.operReplacement.oper_machine_id = event.value ? event.value.id : null;
    }
    // end setOperMachineId


    // set setOperContractorId

    setOperContractorId(event: any) {
        this.operReplacementsService.operReplacement.oper_contractor_id = event.value ? event.value.id : null;
    }
    // end setOperContractorId


}
