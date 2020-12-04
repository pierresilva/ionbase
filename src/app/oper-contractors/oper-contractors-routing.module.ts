import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperContractorsPage } from './oper-contractors.page';
import {OperContractorsEditComponent} from "./oper-contractors-edit/oper-contractors-edit.component";
import {OperContractorsCreateComponent} from "./oper-contractors-create/oper-contractors-create.component";
import {OperContractorsListComponent} from "./oper-contractors-list/oper-contractors-list.component";

const routes: Routes = [
    {
        path: '',
        component: OperContractorsPage
    },
    {
        path: 'list',
        component: OperContractorsListComponent
    },
    {
      path: 'create',
      component: OperContractorsCreateComponent
    },
    {
        path: ':id/edit',
        component: OperContractorsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperContractorsPageRoutingModule {}
