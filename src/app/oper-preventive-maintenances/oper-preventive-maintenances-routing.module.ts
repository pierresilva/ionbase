import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperPreventiveMaintenancesPage } from './oper-preventive-maintenances.page';
import {OperPreventiveMaintenancesEditComponent} from "./oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component";
import {OperPreventiveMaintenancesCreateComponent} from "./oper-preventive-maintenances-create/oper-preventive-maintenances-create.component";
import {OperPreventiveMaintenancesListComponent} from "./oper-preventive-maintenances-list/oper-preventive-maintenances-list.component";

const routes: Routes = [
// generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD MTTO PREVENTIVOS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperPreventiveMaintenancesPage
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD MTTO PREVENTIVOS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperPreventiveMaintenancesListComponent
    },
    {
      path: 'create',
      data: {
          title: 'OPERATIVIDAD MTTO PREVENTIVOS',
          roles: ['admin'],
          // permissions: []
      },
      component: OperPreventiveMaintenancesCreateComponent
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD MTTO PREVENTIVOS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperPreventiveMaintenancesEditComponent
    },
];
// end generated section

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperPreventiveMaintenancesPageRoutingModule {}
