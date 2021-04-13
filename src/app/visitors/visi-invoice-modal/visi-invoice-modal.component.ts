import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {VisiVisitorRegisterService} from "../visi-visitor-register.service";
import {PrintService} from "../../@shared/services/print.service";

@Component({
    selector: 'app-visi-invoice-modal',
    templateUrl: './visi-invoice-modal.component.html',
    styleUrls: ['./visi-invoice-modal.component.scss'],
})
export class VisiInvoiceModalComponent implements OnInit {

    @Input() invoice: any = null;

    constructor(
        public modalController: ModalController,
        public http: HttpClient,
        public print: PrintService,
        public visiVisitorRegisterService: VisiVisitorRegisterService,
    ) {
    }

    ngOnInit() {

    }

    dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        }).then(() => {
            this.visiVisitorRegisterService.getVisiVisitorRegisters();
        });
    }

    toPrint(component) {
        const domComponent = document.getElementById(component);
        console.log(domComponent);
        this.print.print(domComponent);

    }

}
