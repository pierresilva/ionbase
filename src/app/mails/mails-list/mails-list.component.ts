import {Component, OnInit, ViewChild} from '@angular/core';
import { MailsService} from "../mails.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-mails-list',
    templateUrl: './mails-list.component.html',
    styleUrls: ['./mails-list.component.scss'],
})
export class MailsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public mailsService: MailsService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.mailsService.getMails();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
