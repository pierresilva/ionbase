import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingGroupsPage } from './setting-groups.page';

const routes: Routes = [
  {
    path: '',
    component: SettingGroupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingGroupsPageRoutingModule {}
