import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MailTemplate} from "../mail-template";
import {FormGroup} from "@angular/forms";
import {MailTemplatesService} from "../mail-templates.service";
import {TitleCasePipe} from "@angular/common";
import {SummernoteConfigs} from "../../@shared/classes/summernote-configs";

@Component({
    selector: 'app-mail-templates-form',
    templateUrl: './mail-templates-form.component.html',
    styleUrls: ['./mail-templates-form.component.scss']
})
export class MailTemplatesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: MailTemplate = <MailTemplate>{};

    @ViewChild('mailTemplatesForm') mailTemplatesForm: FormGroup;

    public validationMessages = {
        'subject': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ASUNTO') + ' es obligatorio.'},
        ],
        'mailable': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CLASE') + ' es obligatorio.'},
        ],
        'html_template': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HTML') + ' es obligatorio.'},
        ],
        'text_template': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TEXTO') + ' es obligatorio.'},
        ],
        'mail_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CORREOS') + ' es obligatorio.'},
        ],
    };

    summernote: any = new SummernoteConfigs();

    summernoteConfig: any;

    constructor(
        public mailTemplatesService: MailTemplatesService,
        private toTitlecase: TitleCasePipe,
    ) {

    }

    ngOnInit(): void {

    }

    ngAfterViewInit() {

    }


    // set setMailIds
    setMailIds(event: any) {
        let mailIds = null;
        if (event.value.length) {
            mailIds = [];
            for (let i = 0; i < event.value.length; i++) {
                mailIds.push(event.value[i].id);
            }
        }
        this.mailTemplatesService.mailTemplate.mail_ids = mailIds;
    }
    // end setMailIds


}
