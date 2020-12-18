import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounMeetingCitationsPage } from './coun-meeting-citations.page';
import {CounMeetingCitationsEditComponent} from "./coun-meeting-citations-edit/coun-meeting-citations-edit.component";
import {CounMeetingCitationsCreateComponent} from "./coun-meeting-citations-create/coun-meeting-citations-create.component";
import {CounMeetingCitationsListComponent} from "./coun-meeting-citations-list/coun-meeting-citations-list.component";
import {CounMeetingCitationSignComponent} from "./coun-meeting-citation-sign/coun-meeting-citation-sign.component";

const routes: Routes = [
    {
        path: '',
        component: CounMeetingCitationsPage
    },
    {
        path: 'list',
        component: CounMeetingCitationsListComponent
    },
    {
      path: 'create',
      component: CounMeetingCitationsCreateComponent
    },
    {
        path: ':id/edit',
        component: CounMeetingCitationsEditComponent
    },
    {
        path: ':id/sign',
        component: CounMeetingCitationSignComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CounMeetingCitationsPageRoutingModule {}
