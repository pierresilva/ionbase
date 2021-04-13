import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InvoInvoicesRoutingModule} from './invo-invoices-routing.module';
import {SharedModule} from "../@shared/shared.module";
import {InvoInvoicesComponent} from "./invo-invoices.component";
import {InvoInvoicesListComponent} from "./invo-invoices-list/invo-invoices-list.component";
import {InvoInvoicesFormComponent} from "./invo-invoices-form/invo-invoices-form.component";
import {IonicModule} from "@ionic/angular";
import {InvoInvoiceModalComponent} from "./invo-invoice-modal/invo-invoice-modal.component";


@NgModule({
    declarations: [
        InvoInvoicesComponent,
        InvoInvoicesListComponent,
        InvoInvoicesFormComponent,
        InvoInvoiceModalComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        InvoInvoicesRoutingModule,
    ]
})
export class InvoInvoicesModule {
}
