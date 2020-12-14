import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CorrPacket} from "../corr-packet";
import {FormGroup} from "@angular/forms";
import {CorrPacketsService} from "../corr-packets.service";
import {TitleCasePipe} from "@angular/common";
import {HousUnitsService} from "../../hous-units/hous-units.service";
import * as moment from "moment";
import {CameraService} from "../../@shared/services/camera.service";
import {ViewerModalComponent} from "ngx-ionic-image-viewer";
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'app-corr-packets-form',
    templateUrl: './corr-packets-form.component.html',
    styleUrls: ['./corr-packets-form.component.scss']
})
export class CorrPacketsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: CorrPacket = <CorrPacket>{};
    @Input('type') type: string = null;

    @Input() set housUnitId(data) {
        if (data) {

            this.housUnitsService.getHouseUnit(data)
                .then((res: any) => {
                    if (this.type == 'Recibir') {
                        this.clear();
                        this.corrPacketsService.corrPacket.received_at = moment().format('YYYY-MM-DD HH:mm');
                        this.corrPacketsService.corrPacket.status = 'received';
                    }

                    if (this.type == 'Entregar') {
                        this.corrPacketsService.corrPacket.delivered_at = moment().format('YYYY-MM-DD HH:mm');
                        this.corrPacketsService.corrPacket.status = 'delivered';
                    }
                    this.corrPacketsService.corrPacket.hous_unit = res.data;
                    this.corrPacketsService.corrPacket.hous_unit_id = parseInt(data);
                });

        }
    };

    @ViewChild('corrPacketsForm') corrPacketsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'hous_unit_id': [
            {
                type: 'required',
                message: 'El campo ' + this.toTitlecase.transform('housUnit - NAME') + ' es obligatorio.'
            },
        ],
        'conveyor': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TRANPORTADOR') + ' es obligatorio.'},
        ],
        'guide_number': [
            {
                type: 'required',
                message: 'El campo ' + this.toTitlecase.transform('NÚMERO DE GUIA') + ' es obligatorio.'
            },
        ],
        'received_at': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('RECIBIDO') + ' es obligatorio.'},
        ],
        'received_comment': [
            {
                type: 'required',
                message: 'El campo ' + this.toTitlecase.transform('COMENTARIO RECIBIDO') + ' es obligatorio.'
            },
        ],
        'delivered_at': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTREGADO') + ' es obligatorio.'},
        ],
        'delivered_to': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTREGADO A') + ' es obligatorio.'},
        ],
        'delivered_signature': [
            {
                type: 'required',
                message: 'El campo ' + this.toTitlecase.transform('FIRMA DE ENTREGADO') + ' es obligatorio.'
            },
        ],
        'delivered_comment': [
            {
                type: 'required',
                message: 'El campo ' + this.toTitlecase.transform('COMENTARIO ENTREGADO') + ' es obligatorio.'
            },
        ],
        'status': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.'},
        ],
    };

    now: any = moment().format('YYYY-MM-DD HH:mm')

    constructor(
        public corrPacketsService: CorrPacketsService,
        private toTitlecase: TitleCasePipe,
        public housUnitsService: HousUnitsService,
        public camera: CameraService,
        public modalController: ModalController
    ) {

    }

    ngOnInit(): void {

    }

    ngAfterViewInit() {

    }

    async openViewer(url) {
        const modal = await this.modalController.create({
            component: ViewerModalComponent,
            componentProps: {
                src: url
            },
            cssClass: 'ion-img-viewer',
            keyboardClose: true,
            showBackdrop: true
        });

        return await modal.present();
    }

    clear() {
        // this.corrPacketsService.createCorrPacket();
        this.corrPacketsService.corrPacket = <CorrPacket>{};
    }


    // set setHousUnitId

    setHousUnitId(event: any) {
        this.corrPacketsService.corrPacket.hous_unit_id = event.value ? event.value.id : null;
    }

    // end setHousUnitId

    async uploadPhoto() {
        this.camera.addNewToGallery(this.model.hous_unit_id, 'CorrPacket', (this.type == 'Recibir' ? 'received' : 'delivered'))
            .then(res => {
                if (!this.model.files) {
                    this.model.files = [];
                }
                this.model.files.push(res.data);
            });
    }


}
