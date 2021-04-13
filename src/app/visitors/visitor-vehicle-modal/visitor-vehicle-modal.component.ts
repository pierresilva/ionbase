import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormGroup} from "@angular/forms";
import {VisiVehicleType} from "../visi-vehicle-type";
import {VisiRate} from "../visi-rate";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {VisiVisitorRegisterService} from "../visi-visitor-register.service";
import {VisiVisitorsService} from "../visi-visitors.service";

@Component({
    selector: 'app-visitor-vehicle-modal',
    templateUrl: './visitor-vehicle-modal.component.html',
    styleUrls: ['./visitor-vehicle-modal.component.scss'],
})
export class VisitorVehicleModalComponent implements OnInit {

    @ViewChild('visiVisitorVehicleForm') visiVisitorVehicleForm: FormGroup;
    @Input() visitorId: any;
    @Input() registerId: any = 0;
    @Input() data: any;

    model = {
        visi_visitor_id: null,
        visi_vehicle_type_id: null,
        visi_rate_id: null,
        license_plate: null,
        visi_parking_id: null,
    }

    constructor(
        public modalController: ModalController,
        public http: HttpClient,
        public visiVisitorRegisterService: VisiVisitorRegisterService,
        public visiVisitorsService: VisiVisitorsService
    ) {
    }

    ngOnInit() {
        this.model.visi_visitor_id = this.visitorId;
    }

    dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        }).then(() => {
            this.visiVisitorsService.getVisiVisitors();
        });
    }

    saveEntry() {
        const data = this.visiVisitorVehicleForm.value;

        this.http.post(environment.serverUrl + '/api/visi-visitor-registers/entry/' + this.registerId, this.model)
            .subscribe(
                (res: any) => {
                    console.log(res);
                    this.dismissModal();
                }
            );
    }

    availablesParkings(parkings: any[]) {
        let available = [];

        for (let i = 0; i < parkings.length; i++) {
            if (parkings[i].available) {
                available.push(parkings[i]);
            }
        }

        return available;
    }

}
