import {Component, OnInit, ViewChild} from '@angular/core';
import { OperSchedulesService} from "../oper-schedules.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

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
    ) {
    }

    ngOnInit() {
        this.operSchedulesService.getOperSchedules();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
