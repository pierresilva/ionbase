import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounMembersPage } from './coun-members.page';
import {CounMembersEditComponent} from "./coun-members-edit/coun-members-edit.component";
import {CounMembersCreateComponent} from "./coun-members-create/coun-members-create.component";
import {CounMembersListComponent} from "./coun-members-list/coun-members-list.component";

const routes: Routes = [
    {
        path: '',
        component: CounMembersPage
    },
    {
        path: 'list',
        component: CounMembersListComponent
    },
    {
      path: 'create',
      component: CounMembersCreateComponent
    },
    {
        path: ':id/edit',
        component: CounMembersEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CounMembersPageRoutingModule {}
