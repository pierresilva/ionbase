import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRolesPage } from './user-roles.page';
import {UserRolesEditComponent} from "./user-roles-edit/user-roles-edit.component";
import {UserRolesCreateComponent} from "./user-roles-create/user-roles-create.component";
import {UserRolesListComponent} from "./user-roles-list/user-roles-list.component";

const routes: Routes = [
    {
        path: '',
        component: UserRolesPage
    },
    {
        path: 'list',
        component: UserRolesListComponent
    },
    {
      path: 'create',
      component: UserRolesCreateComponent
    },
    {
        path: ':id/edit',
        component: UserRolesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class UserRolesPageRoutingModule {}
