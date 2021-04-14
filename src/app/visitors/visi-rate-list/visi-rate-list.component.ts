import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {ModalController, Platform} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../@shared/services/auth.service";
import {VisiRatesService} from "../visi-visitor-rates.service";

@Component({
    selector: 'app-visi-rate-list',
    templateUrl: './visi-rate-list.component.html',
    styleUrls: ['./visi-rate-list.component.scss'],
})
export class VisiRateListComponent implements OnInit {

    constructor(
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
        public modalController: ModalController,
        public platform: Platform,
        public http: HttpClient,
        public auth: AuthService,
        public visiRatesService: VisiRatesService
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.visiRatesService.getItems();
    }

}
