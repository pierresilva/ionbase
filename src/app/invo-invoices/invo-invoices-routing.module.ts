import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoInvoicesComponent} from "./invo-invoices.component";
import {InvoInvoicesListComponent} from "./invo-invoices-list/invo-invoices-list.component";

const routes: Routes = [
    {
        path: '',
        component: InvoInvoicesListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoInvoicesRoutingModule { }
