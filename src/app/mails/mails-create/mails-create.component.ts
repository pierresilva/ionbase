import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MailsService} from "../mails.service";
import {ActivatedRoute} from "@angular/router";
import {Mail} from "../mail";
import {MailsFormComponent} from "../mails-form/mails-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-mails-create',
    templateUrl: './mails-create.component.html',
    styleUrls: ['./mails-create.component.scss']
})
export class MailsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('mailForm') mailForm: MailsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public mailsService: MailsService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.mailForm.mailsForm.valueChanges.subscribe((data) => {
            this.mailsService.mailsFormValid.next(this.mailForm.mailsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.mailsService.createMail();
        this.mailsService.mail = <Mail>{};
    }

}