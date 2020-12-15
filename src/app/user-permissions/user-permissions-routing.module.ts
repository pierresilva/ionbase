import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPermissionsPage } from './user-permissions.page';
import {UserPermissionsEditComponent} from "./user-permissions-edit/user-permissions-edit.component";
import {UserPermissionsCreateComponent} from "./user-permissions-create/user-permissions-create.component";
import {UserPermissionsListComponent} from "./user-permissions-list/user-permissions-list.component";

const routes: Routes = [
    {
        path: '',
        component: UserPermissionsPage
    },
    {
        path: 'list',
        component: UserPermissionsListComponent
    },
    {
      path: 'create',
      component: UserPermissionsCreateComponent
    },
    {
        path: ':id/edit',
        component: UserPermissionsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class UserPermissionsPageRoutingModule {}
