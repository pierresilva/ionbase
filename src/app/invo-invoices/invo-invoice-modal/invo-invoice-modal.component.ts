import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {PrintService} from "../../@shared/services/print.service";
import {InvoInvoice} from "../invo-invoice";

@Component({
    selector: 'app-invo-invoice-modal',
    templateUrl: './invo-invoice-modal.component.html',
    styleUrls: ['./invo-invoice-modal.component.scss'],
})
export class InvoInvoiceModalComponent implements OnInit {
    @Input() invoice: InvoInvoice = <InvoInvoice>{};

    constructor(
        public modalController: ModalController,
        public http: HttpClient,
        public print: PrintService,
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
        });
    }

    toPrint(component) {
        const domComponent = document.getElementById(component);
        console.log(domComponent);
        this.print.print(domComponent);

    }

}
