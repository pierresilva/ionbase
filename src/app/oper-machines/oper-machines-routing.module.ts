import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperMachinesPage } from './oper-machines.page';
import {OperMachinesEditComponent} from "./oper-machines-edit/oper-machines-edit.component";
import {OperMachinesCreateComponent} from "./oper-machines-create/oper-machines-create.component";
import {OperMachinesListComponent} from "./oper-machines-list/oper-machines-list.component";

const routes: Routes = [
// generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD MAQUINARIA',
            roles: ['admin'],
            // permissions: []
        },
        component: OperMachinesPage
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD MAQUINARIA',
            roles: ['admin'],
            // permissions: []
        },
        component: OperMachinesListComponent
    },
    {
      path: 'create',
      data: {
          title: 'OPERATIVIDAD MAQUINARIA',
          roles: ['admin'],
          // permissions: []
      },
      component: OperMachinesCreateComponent
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD MAQUINARIA',
            roles: ['admin'],
            // permissions: []
        },
        component: OperMachinesEditComponent
    },
];
// end generated section

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperMachinesPageRoutingModule {}
