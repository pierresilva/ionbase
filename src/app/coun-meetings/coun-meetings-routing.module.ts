import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounMeetingsPage } from './coun-meetings.page';
import {CounMeetingsEditComponent} from "./coun-meetings-edit/coun-meetings-edit.component";
import {CounMeetingsCreateComponent} from "./coun-meetings-create/coun-meetings-create.component";
import {CounMeetingsListComponent} from "./coun-meetings-list/coun-meetings-list.component";
import {CounMeetingsCreateCustomComponent} from "./coun-meetings-create-custom/coun-meetings-create-custom.component";
import {CounMeetingsListCustomComponent} from "./coun-meetings-list-custom/coun-meetings-list-custom.component";

const routes: Routes = [
    {
        path: '',
        component: CounMeetingsPage
    },
    {
        path: 'list',
        component: CounMeetingsListComponent
    },
    {
        path: 'list/custom',
        component: CounMeetingsListCustomComponent
    },
    {
      path: 'create',
      component: CounMeetingsCreateComponent
    },
    {
        path: ':id/edit',
        component: CounMeetingsEditComponent
    },
    {
        path: 'create/custom',
        component: CounMeetingsCreateCustomComponent
    },
    {
        path: 'create/custom/:id',
        component: CounMeetingsCreateCustomComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CounMeetingsPageRoutingModule {}
