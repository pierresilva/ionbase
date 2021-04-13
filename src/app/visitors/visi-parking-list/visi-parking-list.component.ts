import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {ModalController, Platform} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {VisiParking} from "../visi-parking";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-visi-parking-list',
    templateUrl: './visi-parking-list.component.html',
    styleUrls: ['./visi-parking-list.component.scss'],
})
export class VisiParkingListComponent implements OnInit {

    public parkings: VisiParking[] = [];

    constructor(
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
        public modalController: ModalController,
        public platform: Platform,
        public http: HttpClient,
    ) {
    }

    ngOnInit() {
        this.getParkings();
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.getParkings();
    }

    // TODO: Crear CRUD Servicio
    public getParkings() {
        console.log('Get parkings');
        this.loading.isLoading.next(true);
        this.http.get(environment.serverUrl + '/api/visi-parking?perPage=100&q[s]=id:desc')
            .subscribe(
                (res: any) => {
                    this.parkings = [];
                    this.parkings = res.data;
                    this.loading.isLoading.next(false);
                },
                (err: any) => {
                    this.loading.isLoading.next(false);
                }
            );
    }

}
