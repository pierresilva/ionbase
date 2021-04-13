import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {TitleCasePipe} from "@angular/common";
import {VisiVisitorsService} from "../visi-visitors.service";
import {FormGroup} from "@angular/forms";
import {VisiVisitor} from "../visi-visitor";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-visitor-modal',
    templateUrl: './visitor-modal.component.html',
    styleUrls: ['./visitor-modal.component.scss'],
})
export class VisitorModalComponent implements OnInit {

    @Input('data') data: any = {};
    @ViewChild('visiVisitorsForm') visiVisitorsForm: FormGroup;
    public id: any = null;

    public model: any = {
        visitor_full_name: null,
        visitor_document: null,
        visitor_phone: null,
        visitor_email: null,
        register_vehicle_type_id: null,
        register_license_plate: null,
        register_visi_parking_id: null,
        register_hous_unit_id: null,
        register_visi_rate_id: null,
    };

    public validationMessages = {
        'full_name': [
            {type: 'required', message: 'El campo ' + this.toTitleCase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'identification': [
            {
                type: 'required',
                message: 'El campo ' + this.toTitleCase.transform('IDENTIFICACIÓN') + ' es obligatorio.'
            },
        ],
        'email': [
            {type: 'required', message: 'El campo ' + this.toTitleCase.transform('EMAIL') + ' es obligatorio.'},
        ],
        'hous_unit': [
            {
                type: 'required',
                message: 'El campo ' + this.toTitleCase.transform('Unidad habitacional') + ' es obligatorio.'
            },
        ],
        'phone': [
            {type: 'required', message: 'El campo ' + this.toTitleCase.transform('TELÉFONO') + ' es obligatorio.'},
        ],
    };

    constructor(
        private toTitleCase: TitleCasePipe,
        public visiVisitorsService: VisiVisitorsService,
        public modalController: ModalController,
        public http: HttpClient,
    ) {
    }

    ngOnInit() {
    }

    dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.visiVisitorsService.getVisiVisitors();
        this.modalController.dismiss({
            'dismissed': true
        });
    }

    availableParkings(parkings: any[]) {
        let available = [];

        for (let i = 0; i < parkings.length; i++) {
            if (parkings[i].available) {
                available.push(parkings[i]);
            }
        }

        return available;
    }

    saveVisitorRegister() {
        this.http.post(environment.serverUrl + '/api/visi-visitor-registers/new', this.visiVisitorsForm.value)
            .subscribe(
                (res: any) => {
                    this.dismissModal();
                },
                (err: any) => {
                },
            );
    }

}
