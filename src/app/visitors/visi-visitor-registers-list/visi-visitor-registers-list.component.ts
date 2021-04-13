import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {ModalController, Platform} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {VisiVisitorRegister} from "../visi-visitor-register";
import {environment} from "../../../environments/environment";
import * as moment from 'moment';

@Component({
    selector: 'app-visi-visitor-registers-list',
    templateUrl: './visi-visitor-registers-list.component.html',
    styleUrls: ['./visi-visitor-registers-list.component.scss'],
})
export class VisiVisitorRegistersListComponent implements OnInit {

    public registers: VisiVisitorRegister[] = [];
    public searchString: string = null;
    public meta: any = null;

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
        // this.getRegisters();
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.getRegisters();
    }

    // TODO: Crear CRUD Servicio
    public getRegisters(page: any = 1) {
        this.loading.isLoading.next(true);
        let searchString = '';

        if (this.searchString) {

            let isDate = moment(this.searchString.split('T')[0], "YYYY-MM-DD", true).isValid();

            if (isDate) {
                this.searchString = this.searchString.split('T')[0];
                searchString = '&q[entry_date:cont]=' + this.searchString.split('T')[0];
            } else {
                searchString = '&q[visiVisitor.full_name:cont]=' + this.searchString +
                    '&q[visiVisitor.identification:cont]=' + this.searchString +
                    '&q[license_plate:cont]=' + this.searchString +
                    '&q[visiVehicleType.name:cont]=' + this.searchString +
                    '&q[visiParking.name:cont]=' + this.searchString;
            }
        }

        this.http.get(environment.serverUrl + '/api/visi-visitor-registers?page=' + page + '&perPage=20&q[s]=id:desc' + searchString)
            .subscribe(
                (res: any) => {
                    this.registers = [];
                    this.registers = res.data;
                    this.meta = res.meta;
                    this.loading.isLoading.next(false);
                },
                (err: any) => {
                    this.loading.isLoading.next(false);
                }
            );
    }

}
