import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystCitiesPage } from './syst-cities.page';
import {SystCitiesEditComponent} from "./syst-cities-edit/syst-cities-edit.component";
import {SystCitiesCreateComponent} from "./syst-cities-create/syst-cities-create.component";
import {SystCitiesListComponent} from "./syst-cities-list/syst-cities-list.component";

const routes: Routes = [
    {
        path: '',
        component: SystCitiesPage
    },
    {
        path: 'list',
        component: SystCitiesListComponent
    },
    {
      path: 'create',
      component: SystCitiesCreateComponent
    },
    {
        path: ':id/edit',
        component: SystCitiesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class SystCitiesPageRoutingModule {}
