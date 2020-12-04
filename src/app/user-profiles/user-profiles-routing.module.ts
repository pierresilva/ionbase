import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfilesPage } from './user-profiles.page';
import {UserProfilesEditComponent} from "./user-profiles-edit/user-profiles-edit.component";
import {UserProfilesCreateComponent} from "./user-profiles-create/user-profiles-create.component";
import {UserProfilesListComponent} from "./user-profiles-list/user-profiles-list.component";

const routes: Routes = [
    {
        path: '',
        component: UserProfilesPage
    },
    {
        path: 'list',
        component: UserProfilesListComponent
    },
    {
      path: 'create',
      component: UserProfilesCreateComponent
    },
    {
        path: ':id/edit',
        component: UserProfilesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class UserProfilesPageRoutingModule {}
