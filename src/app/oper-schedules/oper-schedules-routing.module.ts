import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperSchedulesPage } from './oper-schedules.page';
import {OperSchedulesEditComponent} from "./oper-schedules-edit/oper-schedules-edit.component";
import {OperSchedulesCreateComponent} from "./oper-schedules-create/oper-schedules-create.component";
import {OperSchedulesListComponent} from "./oper-schedules-list/oper-schedules-list.component";

const routes: Routes = [
    {
        path: '',
        component: OperSchedulesPage
    },
    {
        path: 'list',
        component: OperSchedulesListComponent
    },
    {
      path: 'create',
      component: OperSchedulesCreateComponent
    },
    {
        path: ':id/edit',
        component: OperSchedulesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperSchedulesPageRoutingModule {}
