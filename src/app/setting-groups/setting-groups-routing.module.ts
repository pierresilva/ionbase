import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingGroupsPage } from './setting-groups.page';
import {SettingGroupsEditComponent} from "./setting-groups-edit/setting-groups-edit.component";
import {SettingGroupsCreateComponent} from "./setting-groups-create/setting-groups-create.component";
import {SettingGroupsListComponent} from "./setting-groups-list/setting-groups-list.component";

const routes: Routes = [
    {
        path: '',
        component: SettingGroupsPage
    },
    {
        path: 'list',
        component: SettingGroupsListComponent
    },
    {
      path: 'create',
      component: SettingGroupsCreateComponent
    },
    {
        path: ':id/edit',
        component: SettingGroupsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class SettingGroupsPageRoutingModule {}
