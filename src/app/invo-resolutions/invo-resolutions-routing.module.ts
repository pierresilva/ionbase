import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoResolutionsFormComponent} from "./invo-resolutions-form/invo-resolutions-form.component";
import {InvoResolutionsListComponent} from "./invo-resolutions-list/invo-resolutions-list.component";

const routes: Routes = [
    {
        path: '',
        component: InvoResolutionsListComponent
    },
    {
        path: ':id',
        component: InvoResolutionsFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoResolutionsRoutingModule { }
