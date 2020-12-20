import {Component, OnInit, ViewChild} from '@angular/core';
import { OperSchedulesService} from "../oper-schedules.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-schedules-list',
    templateUrl: './oper-schedules-list.component.html',
    styleUrls: ['./oper-schedules-list.component.scss'],
})
export class OperSchedulesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public operSchedulesService: OperSchedulesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.operSchedulesService.getOperSchedules();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
