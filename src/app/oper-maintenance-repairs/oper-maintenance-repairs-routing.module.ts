import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperMaintenanceRepairsPage } from './oper-maintenance-repairs.page';
import {OperMaintenanceRepairsEditComponent} from "./oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component";
import {OperMaintenanceRepairsCreateComponent} from "./oper-maintenance-repairs-create/oper-maintenance-repairs-create.component";
import {OperMaintenanceRepairsListComponent} from "./oper-maintenance-repairs-list/oper-maintenance-repairs-list.component";

const routes: Routes = [
// generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD REPARACIONES',
            roles: ['admin'],
            // permissions: []
        },
        component: OperMaintenanceRepairsPage
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD REPARACIONES',
            roles: ['admin'],
            // permissions: []
        },
        component: OperMaintenanceRepairsListComponent
    },
    {
      path: 'create',
      data: {
          title: 'OPERATIVIDAD REPARACIONES',
          roles: ['admin'],
          // permissions: []
      },
      component: OperMaintenanceRepairsCreateComponent
    },
    {
        path: 'create/:mttoId',
        data: {
            title: 'OPERATIVIDAD REPARACIONES',
            roles: ['admin'],
            // permissions: []
        },
        component: OperMaintenanceRepairsCreateComponent
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD REPARACIONES',
            roles: ['admin'],
            // permissions: []
        },
        component: OperMaintenanceRepairsEditComponent
    },
];
// end generated section

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperMaintenanceRepairsPageRoutingModule {}
