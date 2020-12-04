import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounMeetingAgendasPage } from './coun-meeting-agendas.page';
import {CounMeetingAgendasEditComponent} from "./coun-meeting-agendas-edit/coun-meeting-agendas-edit.component";
import {CounMeetingAgendasCreateComponent} from "./coun-meeting-agendas-create/coun-meeting-agendas-create.component";
import {CounMeetingAgendasListComponent} from "./coun-meeting-agendas-list/coun-meeting-agendas-list.component";

const routes: Routes = [
    {
        path: '',
        component: CounMeetingAgendasPage
    },
    {
        path: 'list',
        component: CounMeetingAgendasListComponent
    },
    {
      path: 'create',
      component: CounMeetingAgendasCreateComponent
    },
    {
        path: ':id/edit',
        component: CounMeetingAgendasEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CounMeetingAgendasPageRoutingModule {}
