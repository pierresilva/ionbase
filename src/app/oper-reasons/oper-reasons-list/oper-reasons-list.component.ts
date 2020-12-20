import {Component, OnInit, ViewChild} from '@angular/core';
import { OperReasonsService} from "../oper-reasons.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-reasons-list',
    templateUrl: './oper-reasons-list.component.html',
    styleUrls: ['./oper-reasons-list.component.scss'],
})
export class OperReasonsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public operReasonsService: OperReasonsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.operReasonsService.getOperReasons();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
