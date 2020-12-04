import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MailTemplatesService} from "../mail-templates.service";
import {ActivatedRoute} from "@angular/router";
import {MailTemplate} from "../mail-template";
import {MailTemplatesFormComponent} from "../mail-templates-form/mail-templates-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-mail-templates-create',
    templateUrl: './mail-templates-create.component.html',
    styleUrls: ['./mail-templates-create.component.scss']
})
export class MailTemplatesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('mailTemplateForm') mailTemplateForm: MailTemplatesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public mailTemplatesService: MailTemplatesService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.mailTemplateForm.mailTemplatesForm.valueChanges.subscribe((data) => {
            this.mailTemplatesService.mailTemplatesFormValid.next(this.mailTemplateForm.mailTemplatesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.mailTemplatesService.createMailTemplate();
        this.mailTemplatesService.mailTemplate = <MailTemplate>{};
    }

}
