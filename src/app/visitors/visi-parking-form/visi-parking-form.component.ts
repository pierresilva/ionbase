import {Component, OnInit, ViewChild} from '@angular/core';
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {ModalController, Platform} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../@shared/services/auth.service";
import {FormGroup} from "@angular/forms";
import * as moment from "moment";
import {ActivatedRoute} from "@angular/router";
import {VisiParkingService} from "../visi-parking.service";

@Component({
  selector: 'app-visi-parking-form',
  templateUrl: './visi-parking-form.component.html',
  styleUrls: ['./visi-parking-form.component.scss'],
})
export class VisiParkingFormComponent implements OnInit {

    @ViewChild('visiParkingForm') visiParkingForm: FormGroup;

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
      public visiParkingService: VisiParkingService,
  ) { }

  ngOnInit() {}

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.id = this.route.snapshot.paramMap.get('id');
        this.visiParkingService.getItem(this.id);
        this.visiParkingService.form = this.visiParkingForm;
    }

}
