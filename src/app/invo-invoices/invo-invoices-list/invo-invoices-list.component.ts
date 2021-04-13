import {Component, OnInit} from '@angular/core';
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {InvoInvoicesService} from "../invo-invoices.service";
import {VisiInvoiceModalComponent} from "../../visitors/visi-invoice-modal/visi-invoice-modal.component";
import {ModalController} from "@ionic/angular";
import {InvoInvoiceModalComponent} from "../invo-invoice-modal/invo-invoice-modal.component";

@Component({
    selector: 'app-invo-invoices-list',
    templateUrl: './invo-invoices-list.component.html',
    styleUrls: ['./invo-invoices-list.component.scss'],
})
export class InvoInvoicesListComponent implements OnInit {

    constructor(
        public splitPanel: SplitPanelService,
        public invoInvoicesService: InvoInvoicesService,
        public modalController: ModalController,
    ) {
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.invoInvoicesService.getItems();

    }

    async openModal(invoice: any) {
        console.log('open visitors modal');
        const modal = await this.modalController.create({
            component: InvoInvoiceModalComponent,
            componentProps: {
                invoice: invoice,
            }
        });
        // const { data } = await modal.onWillDismiss();
        // console.log(data);
        return await modal.present();
    }

}
