import {Component, OnInit, ViewChild} from '@angular/core';
import { OperItemsService} from "../oper-items.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-items-list',
    templateUrl: './oper-items-list.component.html',
    styleUrls: ['./oper-items-list.component.scss'],
})
export class OperItemsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public operItemsService: OperItemsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.operItemsService.getOperItems();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
