import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystRegionsPage } from './syst-regions.page';
import {SystRegionsEditComponent} from "./syst-regions-edit/syst-regions-edit.component";
import {SystRegionsCreateComponent} from "./syst-regions-create/syst-regions-create.component";
import {SystRegionsListComponent} from "./syst-regions-list/syst-regions-list.component";

const routes: Routes = [
    {
        path: '',
        component: SystRegionsPage
    },
    {
        path: 'list',
        component: SystRegionsListComponent
    },
    {
      path: 'create',
      component: SystRegionsCreateComponent
    },
    {
        path: ':id/edit',
        component: SystRegionsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class SystRegionsPageRoutingModule {}
