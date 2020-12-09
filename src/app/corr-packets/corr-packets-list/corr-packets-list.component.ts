import {Component, OnInit, ViewChild} from '@angular/core';
import { CorrPacketsService} from "../corr-packets.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

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
    ) {
    }

    ngOnInit() {
        this.corrPacketsService.getCorrPackets();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
