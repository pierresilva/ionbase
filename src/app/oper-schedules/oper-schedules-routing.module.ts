import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperSchedulesPage } from './oper-schedules.page';
import {OperSchedulesEditComponent} from "./oper-schedules-edit/oper-schedules-edit.component";
import {OperSchedulesCreateComponent} from "./oper-schedules-create/oper-schedules-create.component";
import {OperSchedulesListComponent} from "./oper-schedules-list/oper-schedules-list.component";
import {OperScheduleContractorIoComponent} from "./oper-schedule-contractor-io/oper-schedule-contractor-io.component";

const routes: Routes = [
// generated section
    {
        path: '',
        data: {
            title: 'OPERATRIVIDAD AJENDAS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperSchedulesPage
    },
    {
        path: 'list',
        data: {
            title: 'OPERATRIVIDAD AJENDAS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperSchedulesListComponent
    },
    {
      path: 'create',
      data: {
          title: 'OPERATRIVIDAD AJENDAS',
          roles: ['admin'],
          // permissions: []
      },
      component: OperSchedulesCreateComponent
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATRIVIDAD AJENDAS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperSchedulesEditComponent
    },
    {
        path: 'movement',
        data: {
            title: 'Movimientos operativos'
        },
        component: OperScheduleContractorIoComponent,
    }
];
// end generated section

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperSchedulesPageRoutingModule {}
