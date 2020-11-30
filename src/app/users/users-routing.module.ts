import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './users.page';
import {UsersEditComponent} from "./users-edit/users-edit.component";
import {UsersCreateComponent} from "./users-create/users-create.component";
import {UsersListComponent} from "./users-list/users-list.component";

const routes: Routes = [
    {
        path: '',
        component: UsersListComponent
    },
    {
      path: 'create',
      component: UsersCreateComponent
    },
    {
        path: ':id/edit',
        component: UsersEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class UsersPageRoutingModule {}
