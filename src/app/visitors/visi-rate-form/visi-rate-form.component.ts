import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {ModalController, Platform} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../@shared/services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {VisiRatesService} from "../visi-visitor-rates.service";

@Component({
    selector: 'app-visi-rate-form',
    templateUrl: './visi-rate-form.component.html',
    styleUrls: ['./visi-rate-form.component.scss'],
})
export class VisiRateFormComponent implements OnInit {
    @ViewChild('visiRateForm') visiRateForm: FormGroup;
    public id: any = 0;

    constructor(
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
        public modalController: ModalController,
        public platform: Platform,
        public http: HttpClient,
        public auth: AuthService,
        public route: ActivatedRoute,
        public visiRatesService: VisiRatesService,
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.id = this.route.snapshot.paramMap.get('id');
        this.visiRatesService.getItem(this.id);
        this.visiRatesService.form = this.visiRateForm;
    }

}
