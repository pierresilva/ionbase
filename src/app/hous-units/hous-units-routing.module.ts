import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HousUnitsPage } from './hous-units.page';
import {HousUnitsEditComponent} from "./hous-units-edit/hous-units-edit.component";
import {HousUnitsCreateComponent} from "./hous-units-create/hous-units-create.component";
import {HousUnitsListComponent} from "./hous-units-list/hous-units-list.component";

const routes: Routes = [
    {
        path: '',
        component: HousUnitsPage
    },
    {
        path: 'list',
        component: HousUnitsListComponent
    },
    {
      path: 'create',
      component: HousUnitsCreateComponent
    },
    {
        path: ':id/edit',
        component: HousUnitsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class HousUnitsPageRoutingModule {}
