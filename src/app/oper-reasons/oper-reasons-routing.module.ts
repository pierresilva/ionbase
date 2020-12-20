import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperReasonsPage } from './oper-reasons.page';
import {OperReasonsEditComponent} from "./oper-reasons-edit/oper-reasons-edit.component";
import {OperReasonsCreateComponent} from "./oper-reasons-create/oper-reasons-create.component";
import {OperReasonsListComponent} from "./oper-reasons-list/oper-reasons-list.component";

const routes: Routes = [
// generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
            roles: ['admin'],
            // permissions: []
        },
        component: OperReasonsPage
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
            roles: ['admin'],
            // permissions: []
        },
        component: OperReasonsListComponent
    },
    {
      path: 'create',
      data: {
          title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
          roles: ['admin'],
          // permissions: []
      },
      component: OperReasonsCreateComponent
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
            roles: ['admin'],
            // permissions: []
        },
        component: OperReasonsEditComponent
    },
];
// end generated section

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperReasonsPageRoutingModule {}
