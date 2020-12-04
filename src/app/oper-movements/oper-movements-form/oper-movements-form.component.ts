import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OperMovement} from "../oper-movement";
import {FormGroup} from "@angular/forms";
import {OperMovementsService} from "../oper-movements.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-oper-movements-form',
    templateUrl: './oper-movements-form.component.html',
    styleUrls: ['./oper-movements-form.component.scss']
})
export class OperMovementsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: OperMovement = <OperMovement>{};

    @ViewChild('operMovementsForm') operMovementsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'oper_sector_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('SECTOR') + ' es obligatorio.'},
        ],
        'oper_contractor_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONTRATISTA') + ' es obligatorio.'},
        ],
        'date_statr': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA INICIO') + ' es obligatorio.'},
        ],
        'date_end': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA FINAL') + ' es obligatorio.'},
        ],
        'time_start': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA INICIAL') + ' es obligatorio.'},
        ],
        'time_end': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA FINAL') + ' es obligatorio.'},
        ],
        'time_total': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TIEMPO UTILIZADO') + ' es obligatorio.'},
        ],
        'photo': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FOTO DEL AREA INTERVENIDA') + ' es obligatorio.'},
        ],
    };

    constructor(
        public operMovementsService: OperMovementsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setOperSectorId

    setOperSectorId(event: any) {
        this.operMovementsService.operMovement.oper_sector_id = event.value ? event.value.id : null;
    }
    // end setOperSectorId


    // set setOperContractorId

    setOperContractorId(event: any) {
        this.operMovementsService.operMovement.oper_contractor_id = event.value ? event.value.id : null;
    }
    // end setOperContractorId


}
