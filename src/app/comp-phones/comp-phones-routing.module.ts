import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompPhonesPage } from './comp-phones.page';
import {CompPhonesEditComponent} from "./comp-phones-edit/comp-phones-edit.component";
import {CompPhonesCreateComponent} from "./comp-phones-create/comp-phones-create.component";
import {CompPhonesListComponent} from "./comp-phones-list/comp-phones-list.component";

const routes: Routes = [
    {
        path: '',
        component: CompPhonesPage
    },
    {
        path: 'list',
        component: CompPhonesListComponent
    },
    {
      path: 'create',
      component: CompPhonesCreateComponent
    },
    {
        path: ':id/edit',
        component: CompPhonesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CompPhonesPageRoutingModule {}
