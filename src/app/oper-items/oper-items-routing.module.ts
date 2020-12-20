import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperItemsPage } from './oper-items.page';
import {OperItemsEditComponent} from "./oper-items-edit/oper-items-edit.component";
import {OperItemsCreateComponent} from "./oper-items-create/oper-items-create.component";
import {OperItemsListComponent} from "./oper-items-list/oper-items-list.component";

const routes: Routes = [
// generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
            roles: ['admin'],
            // permissions: []
        },
        component: OperItemsPage
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
            roles: ['admin'],
            // permissions: []
        },
        component: OperItemsListComponent
    },
    {
      path: 'create',
      data: {
          title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
          roles: ['admin'],
          // permissions: []
      },
      component: OperItemsCreateComponent
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
            roles: ['admin'],
            // permissions: []
        },
        component: OperItemsEditComponent
    },
];
// end generated section

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperItemsPageRoutingModule {}
