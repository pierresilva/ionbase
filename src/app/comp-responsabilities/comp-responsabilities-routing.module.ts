import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompResponsabilitiesPage } from './comp-responsabilities.page';
import {CompResponsabilitiesEditComponent} from "./comp-responsabilities-edit/comp-responsabilities-edit.component";
import {CompResponsabilitiesCreateComponent} from "./comp-responsabilities-create/comp-responsabilities-create.component";
import {CompResponsabilitiesListComponent} from "./comp-responsabilities-list/comp-responsabilities-list.component";

const routes: Routes = [
    {
        path: '',
        component: CompResponsabilitiesPage
    },
    {
        path: 'list',
        component: CompResponsabilitiesListComponent
    },
    {
      path: 'create',
      component: CompResponsabilitiesCreateComponent
    },
    {
        path: ':id/edit',
        component: CompResponsabilitiesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CompResponsabilitiesPageRoutingModule {}
