import { Component, OnInit } from '@angular/core';
import {OperSchedulesService} from "../oper-schedules.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {Platform} from "@ionic/angular";
import {BarcodeFormat} from "@zxing/library";

@Component({
  selector: 'app-oper-schedule-contractor-io',
  templateUrl: './oper-schedule-contractor-io.component.html',
  styleUrls: ['./oper-schedule-contractor-io.component.scss'],
})
export class OperScheduleContractorIoComponent implements OnInit {

  public barcodeData: any;
  public browserScanner = false;
  public currentDevice: MediaDeviceInfo = null;
  public formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.PDF_417,
  ];

  constructor(
      public operSchedulesService: OperSchedulesService,
      public api: ApiService,
      public loading: LoadingService,
      public splitPanel: SplitPanelService,
      private barcodeScanner: BarcodeScanner,
      public platform: Platform,
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  scan() {
    if (this.platform.is('desktop')) {
      this.desktopScan();
    }
    if (this.platform.is('mobile')) {
      this.mobileScan();
    }
  }

  mobileScan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.barcodeData = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  desktopScan() {
    this.browserScanner = true;
  }

  onCodeResult(resultString: string) {
    this.barcodeData = {
      canceled: null,
      text: resultString,
      format: null,
    }
    this.browserScanner = false;
    console.log(this.barcodeData);
  }

  onCodeError(err: any = null) {
    this.barcodeData = {
      canceled: null,
      text: null,
      format: null,
    }
    this.browserScanner = false;
    console.log(err);
  }

}
