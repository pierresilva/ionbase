import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';
import {SettingsEditComponent} from "./settings-edit/settings-edit.component";
import {SettingsCreateComponent} from "./settings-create/settings-create.component";
import {SettingsListComponent} from "./settings-list/settings-list.component";

const routes: Routes = [
    {
        path: '',
        component: SettingsPage
    },
    {
        path: 'list',
        component: SettingsListComponent
    },
    {
      path: 'create',
      component: SettingsCreateComponent
    },
    {
        path: ':id/edit',
        component: SettingsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class SettingsPageRoutingModule {}
