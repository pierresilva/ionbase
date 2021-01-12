import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperSchedulesPage } from './oper-schedules.page';
import {OperSchedulesEditComponent} from "./oper-schedules-edit/oper-schedules-edit.component";
import {OperSchedulesCreateComponent} from "./oper-schedules-create/oper-schedules-create.component";
import {OperSchedulesListComponent} from "./oper-schedules-list/oper-schedules-list.component";
import {OperScheduleContractorIoComponent} from "./oper-schedule-contractor-io/oper-schedule-contractor-io.component";
import {OperScheduleContractorListComponent} from "./oper-schedule-contractor-list/oper-schedule-contractor-list.component";

const routes: Routes = [
// generated section
    {
        path: '',
        data: {
            title: 'OPERATRIVIDAD AGENDAS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperSchedulesPage
    },
    {
        path: 'list',
        data: {
            title: 'OPERATRIVIDAD AGENDAS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperSchedulesListComponent
    },
    {
      path: 'create',
      data: {
          title: 'OPERATRIVIDAD AGENDAS',
          roles: ['admin'],
          // permissions: []
      },
      component: OperSchedulesCreateComponent
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATRIVIDAD AGENDAS',
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
    },
    {
        path: 'own',
        data: {
            title: 'Mi Agenda'
        },
        component: OperScheduleContractorListComponent,
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
