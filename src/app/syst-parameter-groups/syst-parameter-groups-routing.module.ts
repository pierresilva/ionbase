import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystParameterGroupsPage } from './syst-parameter-groups.page';
import {SystParameterGroupsEditComponent} from "./syst-parameter-groups-edit/syst-parameter-groups-edit.component";
import {SystParameterGroupsCreateComponent} from "./syst-parameter-groups-create/syst-parameter-groups-create.component";
import {SystParameterGroupsListComponent} from "./syst-parameter-groups-list/syst-parameter-groups-list.component";

const routes: Routes = [
    {
        path: '',
        component: SystParameterGroupsPage
    },
    {
        path: 'list',
        component: SystParameterGroupsListComponent
    },
    {
      path: 'create',
      component: SystParameterGroupsCreateComponent
    },
    {
        path: ':id/edit',
        component: SystParameterGroupsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class SystParameterGroupsPageRoutingModule {}
