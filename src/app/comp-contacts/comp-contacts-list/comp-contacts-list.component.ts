import {Component, OnInit, ViewChild} from '@angular/core';
import { CompContactsService} from "../comp-contacts.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-comp-contacts-list',
    templateUrl: './comp-contacts-list.component.html',
    styleUrls: ['./comp-contacts-list.component.scss'],
})
export class CompContactsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public compContactsService: CompContactsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.compContactsService.getCompContacts();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
