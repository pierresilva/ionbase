import {Component, OnInit, ViewChild} from '@angular/core';
import { OperCorrectiveMaintenancesService} from "../oper-corrective-maintenances.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-corrective-maintenances-list',
    templateUrl: './oper-corrective-maintenances-list.component.html',
    styleUrls: ['./oper-corrective-maintenances-list.component.scss'],
})
export class OperCorrectiveMaintenancesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public operCorrectiveMaintenancesService: OperCorrectiveMaintenancesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
