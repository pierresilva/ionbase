import {Component, OnInit, ViewChild} from '@angular/core';
import { OperMachinesService} from "../oper-machines.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-machines-list',
    templateUrl: './oper-machines-list.component.html',
    styleUrls: ['./oper-machines-list.component.scss'],
})
export class OperMachinesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public operMachinesService: OperMachinesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.operMachinesService.getOperMachines();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
