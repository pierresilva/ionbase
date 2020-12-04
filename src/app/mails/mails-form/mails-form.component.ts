import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Mail} from "../mail";
import {FormGroup} from "@angular/forms";
import {MailsService} from "../mails.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-mails-form',
    templateUrl: './mails-form.component.html',
    styleUrls: ['./mails-form.component.scss']
})
export class MailsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: Mail = <Mail>{};

    @ViewChild('mailsForm') mailsForm: FormGroup;

    public validationMessages = {
        'mail_template_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('mailTemplate - NAME') + ' es obligatorio.'},
        ],
        'subject': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ASUNTO') + ' es obligatorio.'},
        ],
        'receiver': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PARA') + ' es obligatorio.'},
        ],
        'html': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HTML') + ' es obligatorio.'},
        ],
        'text': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TEXTO') + ' es obligatorio.'},
        ],
    };

    constructor(
        public mailsService: MailsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setMailTemplateId

    setMailTemplateId(event: any) {
        this.mailsService.mail.mail_template_id = event.value ? event.value.id : null;
    }
    // end setMailTemplateId


}
