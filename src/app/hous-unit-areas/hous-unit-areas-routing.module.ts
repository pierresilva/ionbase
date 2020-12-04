import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HousUnitAreasPage } from './hous-unit-areas.page';
import {HousUnitAreasEditComponent} from "./hous-unit-areas-edit/hous-unit-areas-edit.component";
import {HousUnitAreasCreateComponent} from "./hous-unit-areas-create/hous-unit-areas-create.component";
import {HousUnitAreasListComponent} from "./hous-unit-areas-list/hous-unit-areas-list.component";

const routes: Routes = [
    {
        path: '',
        component: HousUnitAreasPage
    },
    {
        path: 'list',
        component: HousUnitAreasListComponent
    },
    {
      path: 'create',
      component: HousUnitAreasCreateComponent
    },
    {
        path: ':id/edit',
        component: HousUnitAreasEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class HousUnitAreasPageRoutingModule {}
