import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystParametersPage } from './syst-parameters.page';
import {SystParametersEditComponent} from "./syst-parameters-edit/syst-parameters-edit.component";
import {SystParametersCreateComponent} from "./syst-parameters-create/syst-parameters-create.component";
import {SystParametersListComponent} from "./syst-parameters-list/syst-parameters-list.component";

const routes: Routes = [
    {
        path: '',
        component: SystParametersPage
    },
    {
        path: 'list',
        component: SystParametersListComponent
    },
    {
      path: 'create',
      component: SystParametersCreateComponent
    },
    {
        path: ':id/edit',
        component: SystParametersEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class SystParametersPageRoutingModule {}
