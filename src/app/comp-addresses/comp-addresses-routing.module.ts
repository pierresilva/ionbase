import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompAddressesPage } from './comp-addresses.page';
import {CompAddressesEditComponent} from "./comp-addresses-edit/comp-addresses-edit.component";
import {CompAddressesCreateComponent} from "./comp-addresses-create/comp-addresses-create.component";
import {CompAddressesListComponent} from "./comp-addresses-list/comp-addresses-list.component";

const routes: Routes = [
    {
        path: '',
        component: CompAddressesPage
    },
    {
        path: 'list',
        component: CompAddressesListComponent
    },
    {
      path: 'create',
      component: CompAddressesCreateComponent
    },
    {
        path: ':id/edit',
        component: CompAddressesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CompAddressesPageRoutingModule {}
