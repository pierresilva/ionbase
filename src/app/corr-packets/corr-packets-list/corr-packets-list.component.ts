import {Component, OnInit, ViewChild} from '@angular/core';
import { CorrPacketsService} from "../corr-packets.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-corr-packets-list',
    templateUrl: './corr-packets-list.component.html',
    styleUrls: ['./corr-packets-list.component.scss'],
})
export class CorrPacketsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public corrPacketsService: CorrPacketsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.corrPacketsService.getCorrPackets();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
