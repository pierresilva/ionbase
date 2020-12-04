import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperMovementsPage } from './oper-movements.page';
import {OperMovementsEditComponent} from "./oper-movements-edit/oper-movements-edit.component";
import {OperMovementsCreateComponent} from "./oper-movements-create/oper-movements-create.component";
import {OperMovementsListComponent} from "./oper-movements-list/oper-movements-list.component";

const routes: Routes = [
    {
        path: '',
        component: OperMovementsPage
    },
    {
        path: 'list',
        component: OperMovementsListComponent
    },
    {
      path: 'create',
      component: OperMovementsCreateComponent
    },
    {
        path: ':id/edit',
        component: OperMovementsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperMovementsPageRoutingModule {}
