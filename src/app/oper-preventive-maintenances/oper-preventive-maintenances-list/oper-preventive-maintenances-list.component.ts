import {Component, OnInit, ViewChild} from '@angular/core';
import { OperPreventiveMaintenancesService} from "../oper-preventive-maintenances.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-preventive-maintenances-list',
    templateUrl: './oper-preventive-maintenances-list.component.html',
    styleUrls: ['./oper-preventive-maintenances-list.component.scss'],
})
export class OperPreventiveMaintenancesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public operPreventiveMaintenancesService: OperPreventiveMaintenancesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.operPreventiveMaintenancesService.getOperPreventiveMaintenances();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
