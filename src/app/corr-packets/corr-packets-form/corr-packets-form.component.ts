import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CorrPacket} from "../corr-packet";
import {FormGroup} from "@angular/forms";
import {CorrPacketsService} from "../corr-packets.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-corr-packets-form',
    templateUrl: './corr-packets-form.component.html',
    styleUrls: ['./corr-packets-form.component.scss']
})
export class CorrPacketsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: CorrPacket = <CorrPacket>{};

    @ViewChild('corrPacketsForm') corrPacketsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'hous_unit_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('housUnit - NAME') + ' es obligatorio.'},
        ],
        'conveyor': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TRANPORTADOR') + ' es obligatorio.'},
        ],
        'guide_number': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NÚMERO DE GUIA') + ' es obligatorio.'},
        ],
        'received_at': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('RECIBIDO') + ' es obligatorio.'},
        ],
        'received_comment': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('COMENTARIO RECIBIDO') + ' es obligatorio.'},
        ],
        'delivered_at': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTREGADO') + ' es obligatorio.'},
        ],
        'delivered_to': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTREGADO A') + ' es obligatorio.'},
        ],
        'delivered_signature': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FIRMA DE ENTREGADO') + ' es obligatorio.'},
        ],
        'delivered_comment': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('COMENTARIO ENTREGADO') + ' es obligatorio.'},
        ],
        'status': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.'},
        ],
    };

    constructor(
        public corrPacketsService: CorrPacketsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setHousUnitId

    setHousUnitId(event: any) {
        this.corrPacketsService.corrPacket.hous_unit_id = event.value ? event.value.id : null;
    }
    // end setHousUnitId


}
