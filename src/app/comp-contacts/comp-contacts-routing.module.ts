import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompContactsPage } from './comp-contacts.page';
import {CompContactsEditComponent} from "./comp-contacts-edit/comp-contacts-edit.component";
import {CompContactsCreateComponent} from "./comp-contacts-create/comp-contacts-create.component";
import {CompContactsListComponent} from "./comp-contacts-list/comp-contacts-list.component";

const routes: Routes = [
    {
        path: '',
        component: CompContactsPage
    },
    {
        path: 'list',
        component: CompContactsListComponent
    },
    {
      path: 'create',
      component: CompContactsCreateComponent
    },
    {
        path: ':id/edit',
        component: CompContactsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CompContactsPageRoutingModule {}
