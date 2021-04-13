import {Component, OnInit} from '@angular/core';
import {OperSchedulesService} from "../oper-schedules.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {Platform} from "@ionic/angular";
import {BarcodeFormat} from "@zxing/library";
import {HttpClient} from "@angular/common/http";
import {OperSchedule} from "../oper-schedule";
import {Router} from "@angular/router";
import {CameraService} from "../../@shared/services/camera.service";
import {AuthService} from "../../@shared/services/auth.service";

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

    public operSchedules: OperSchedule[] = [];
    public files: any[] = [];
    public movements: any[] = [];
    public isAdmin = false;

    constructor(
        public operSchedulesService: OperSchedulesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
        private barcodeScanner: BarcodeScanner,
        public platform: Platform,
        public http: HttpClient,
        public router: Router,
        public camera: CameraService,
        public auth: AuthService,
    ) {
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.getMovements();
    }

    getMovements() {
        this.isAdmin = false;
        for (let i = 0; i < this.auth.getRoles().length; i++) {
            if (this.auth.getRoles()[i] == 'admin') {
                this.isAdmin = true;
            }
        }

        if (!this.isAdmin) {
            const userId = this.auth.getUser().id;
            this.api.get('oper-contractors?q[user_id:eq]=' + userId)
                .subscribe(
                    (res: any) => {
                        console.log(res.data);
                        this.api.get('oper-movements/list?oper_contractor_id=' + res.data[0].id)
                            .subscribe((resMovements: any) => {
                                this.movements = resMovements.data;
                            });
                    }
                );
        }

        console.log('isAdmin ' + this.isAdmin);

        if (this.isAdmin) {
            this.api.get('oper-movements/list')
                .subscribe((res: any) => {
                    console.log(res.data);
                    this.movements = res.data;
                });
        }
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

        this.movementCheck(resultString);

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

    movementCheck(operSectorId: any) {

        this.api.post('oper-movements/check', {
            oper_sector_id: operSectorId
        })
            .subscribe(
                (res: any) => {
                    console.log(res);
                    this.operSchedules = res.data;
                },
                (err: any) => {
                    console.log(err.status);
                    if (err.status == 401) {
                        this.router.navigateByUrl('/auth/logout');
                    }
                }
            );
    }

    movementStart(operScheduleId: any) {
        this.api.post('oper-movements/start', {
            oper_schedule_id: operScheduleId,
            oper_sector_id: this.barcodeData.text
        })
            .subscribe(
                (res: any) => {
                    console.log(res);
                    this.movementCheck(this.barcodeData.text);
                },
                (err: any) => {
                    console.log(err);
                }
            );
    }

    movementEnd(operMovementId: any) {
        this.uploadPhoto(operMovementId).then((cameraRes: any) => {
            this.api.post('oper-movements/end', {
                oper_movement_id: operMovementId,
                photo: cameraRes.data.url,
            })
                .subscribe(
                    (res: any) => {
                        console.log(res);
                        this.movementCheck(this.barcodeData.text);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                );
        });

    }

    async uploadPhoto(operMovementId: any) {
        return await this.camera.addNewToGallery(operMovementId, 'OperMovement', 'complete');
    }

}
