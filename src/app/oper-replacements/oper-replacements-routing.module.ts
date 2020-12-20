import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperReplacementsPage } from './oper-replacements.page';
import {OperReplacementsEditComponent} from "./oper-replacements-edit/oper-replacements-edit.component";
import {OperReplacementsCreateComponent} from "./oper-replacements-create/oper-replacements-create.component";
import {OperReplacementsListComponent} from "./oper-replacements-list/oper-replacements-list.component";

const routes: Routes = [
// generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD REPUESTOS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperReplacementsPage
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD REPUESTOS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperReplacementsListComponent
    },
    {
      path: 'create',
      data: {
          title: 'OPERATIVIDAD REPUESTOS',
          roles: ['admin'],
          // permissions: []
      },
      component: OperReplacementsCreateComponent
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD REPUESTOS',
            roles: ['admin'],
            // permissions: []
        },
        component: OperReplacementsEditComponent
    },
];
// end generated section

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperReplacementsPageRoutingModule {}
