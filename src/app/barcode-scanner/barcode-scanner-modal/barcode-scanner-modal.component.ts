import {Component, OnInit, ViewChild} from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-barcode-scanner-modal',
    templateUrl: './barcode-scanner-modal.component.html',
    styleUrls: ['./barcode-scanner-modal.component.scss'],
})
export class BarcodeScannerModalComponent implements OnInit {

    availableDevices: MediaDeviceInfo[];
    currentDevice: MediaDeviceInfo = null;

    formatsEnabled: BarcodeFormat[] = [
        BarcodeFormat.CODE_128,
        BarcodeFormat.DATA_MATRIX,
        BarcodeFormat.EAN_13,
        BarcodeFormat.QR_CODE,
        BarcodeFormat.PDF_417,
    ];

    hasDevices: boolean;
    hasPermission: boolean;

    qrResultString: string;

    torchEnabled = false;
    torchAvailable$ = new BehaviorSubject<boolean>(false);
    tryHarder = false;

    qrScanned = false;

    constructor() {
    }

    ngOnInit() {
    }

    clearResult(): void {
        this.qrResultString = null;
    }

    onCamerasFound(devices: MediaDeviceInfo[]): void {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
    }

    onCodeResult(resultString: string) {
        console.log(resultString, this.qrResultString, this.qrScanned);
    }

    onDeviceSelectChange(selected: any) {
        const device = this.availableDevices.find(x => x.deviceId === selected.target.value);
        this.currentDevice = device || null;
    }

    onHasPermission(has: boolean) {
        this.hasPermission = has;
    }

    onTorchCompatible(isCompatible: boolean): void {
        this.torchAvailable$.next(isCompatible || false);
    }

    toggleTorch(): void {
        this.torchEnabled = !this.torchEnabled;
    }

    toggleTryHarder(): void {
        this.tryHarder = !this.tryHarder;
    }

}
