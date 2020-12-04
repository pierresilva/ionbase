import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailsPage } from './mails.page';
import {MailsEditComponent} from "./mails-edit/mails-edit.component";
import {MailsCreateComponent} from "./mails-create/mails-create.component";
import {MailsListComponent} from "./mails-list/mails-list.component";

const routes: Routes = [
    {
        path: '',
        component: MailsPage
    },
    {
        path: 'list',
        component: MailsListComponent
    },
    {
      path: 'create',
      component: MailsCreateComponent
    },
    {
        path: ':id/edit',
        component: MailsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class MailsPageRoutingModule {}
