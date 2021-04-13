import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BoarMessage} from "../boar-message";
import {TitleCasePipe} from "@angular/common";
import {BoarMessagesService} from "../boar-messages.service";

@Component({
    selector: 'app-boar-messages-form',
    templateUrl: './boar-messages-form.component.html',
    styleUrls: ['./boar-messages-form.component.scss'],
})
export class BoarMessagesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: BoarMessage = <BoarMessage>{};

    @ViewChild('boarMessagesForm') boarMessagesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'body': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CUERPO') + ' es obligatorio.'},
        ],
        'status': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.'},
        ],
        'notify_to_users': [

        ],
         'notify_to_house_units': [

         ]
    };

    constructor(
        public boarMessagesService: BoarMessagesService,
        private toTitlecase: TitleCasePipe
    ) {
        this.model = <BoarMessage>{};
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }



}
