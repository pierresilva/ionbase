import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperCorrectiveMaintenancesPage } from './oper-corrective-maintenances.page';
import {OperCorrectiveMaintenancesEditComponent} from "./oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component";
import {OperCorrectiveMaintenancesCreateComponent} from "./oper-corrective-maintenances-create/oper-corrective-maintenances-create.component";
import {OperCorrectiveMaintenancesListComponent} from "./oper-corrective-maintenances-list/oper-corrective-maintenances-list.component";

const routes: Routes = [
// generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD MTTO CORRECTIVOS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperCorrectiveMaintenancesPage
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD MTTO CORRECTIVOS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperCorrectiveMaintenancesListComponent
    },
    {
      path: 'create',
      data: {
          title: 'OPERATIVIDAD MTTO CORRECTIVOS',
          roles: ['admin'],
          // permissions: []
      },
      component: OperCorrectiveMaintenancesCreateComponent
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD MTTO CORRECTIVOS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperCorrectiveMaintenancesEditComponent
    },
];
// end generated section

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperCorrectiveMaintenancesPageRoutingModule {}
