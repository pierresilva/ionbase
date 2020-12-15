import {Component, OnInit, ViewChild} from '@angular/core';
import { MailTemplatesService} from "../mail-templates.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-mail-templates-list',
    templateUrl: './mail-templates-list.component.html',
    styleUrls: ['./mail-templates-list.component.scss'],
})
export class MailTemplatesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public mailTemplatesService: MailTemplatesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.mailTemplatesService.getMailTemplates();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
