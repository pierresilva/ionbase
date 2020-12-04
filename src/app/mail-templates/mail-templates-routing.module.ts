import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailTemplatesPage } from './mail-templates.page';
import {MailTemplatesEditComponent} from "./mail-templates-edit/mail-templates-edit.component";
import {MailTemplatesCreateComponent} from "./mail-templates-create/mail-templates-create.component";
import {MailTemplatesListComponent} from "./mail-templates-list/mail-templates-list.component";

const routes: Routes = [
    {
        path: '',
        component: MailTemplatesPage
    },
    {
        path: 'list',
        component: MailTemplatesListComponent
    },
    {
      path: 'create',
      component: MailTemplatesCreateComponent
    },
    {
        path: ':id/edit',
        component: MailTemplatesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class MailTemplatesPageRoutingModule {}
