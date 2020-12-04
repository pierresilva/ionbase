import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystCountriesPage } from './syst-countries.page';
import {SystCountriesEditComponent} from "./syst-countries-edit/syst-countries-edit.component";
import {SystCountriesCreateComponent} from "./syst-countries-create/syst-countries-create.component";
import {SystCountriesListComponent} from "./syst-countries-list/syst-countries-list.component";

const routes: Routes = [
    {
        path: '',
        component: SystCountriesPage
    },
    {
        path: 'list',
        component: SystCountriesListComponent
    },
    {
      path: 'create',
      component: SystCountriesCreateComponent
    },
    {
        path: ':id/edit',
        component: SystCountriesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class SystCountriesPageRoutingModule {}
