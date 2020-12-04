import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesPage } from './companies.page';
import {CompaniesEditComponent} from "./companies-edit/companies-edit.component";
import {CompaniesCreateComponent} from "./companies-create/companies-create.component";
import {CompaniesListComponent} from "./companies-list/companies-list.component";

const routes: Routes = [
    {
        path: '',
        component: CompaniesPage
    },
    {
        path: 'list',
        component: CompaniesListComponent
    },
    {
      path: 'create',
      component: CompaniesCreateComponent
    },
    {
        path: ':id/edit',
        component: CompaniesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CompaniesPageRoutingModule {}
