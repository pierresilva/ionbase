import {Component, OnInit, ViewChild} from '@angular/core';
import { CompContactsService} from "../comp-contacts.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

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
    ) {
    }

    ngOnInit() {
        this.compContactsService.getCompContacts();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
