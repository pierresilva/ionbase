import {Component, OnInit} from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {ModalController, Platform} from "@ionic/angular";
import {BarcodeScannerModalComponent} from "./barcode-scanner-modal/barcode-scanner-modal.component";
import {BarcodeFormat} from "@zxing/library";


@Component({
    selector: 'app-barcode-scanner',
    templateUrl: './barcode-scanner.page.html',
    styleUrls: ['./barcode-scanner.page.scss'],
})
export class BarcodeScannerPage implements OnInit {

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
        private barcodeScanner: BarcodeScanner,
        public platform: Platform,
        public modalController: ModalController
    ) {

    }

    ngOnInit() {
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

    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
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
