import {Component, OnInit, ViewChild} from '@angular/core';
import { OperContractorsService} from "../oper-contractors.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-contractors-list',
    templateUrl: './oper-contractors-list.component.html',
    styleUrls: ['./oper-contractors-list.component.scss'],
})
export class OperContractorsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public operContractorsService: OperContractorsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.operContractorsService.getOperContractors();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
