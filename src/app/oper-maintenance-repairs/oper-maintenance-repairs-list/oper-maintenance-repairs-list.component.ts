import {Component, OnInit, ViewChild} from '@angular/core';
import { OperMaintenanceRepairsService} from "../oper-maintenance-repairs.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-maintenance-repairs-list',
    templateUrl: './oper-maintenance-repairs-list.component.html',
    styleUrls: ['./oper-maintenance-repairs-list.component.scss'],
})
export class OperMaintenanceRepairsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public operMaintenanceRepairsService: OperMaintenanceRepairsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.operMaintenanceRepairsService.getOperMaintenanceRepairs();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
