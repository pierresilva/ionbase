import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';
import {CategoriesEditComponent} from "./categories-edit/categories-edit.component";
import {CategoriesCreateComponent} from "./categories-create/categories-create.component";
import {CategoriesListComponent} from "./categories-list/categories-list.component";

const routes: Routes = [
    {
        path: '',
        component: CategoriesListComponent
    },
    {
      path: 'create',
      component: CategoriesCreateComponent
    },
    {
        path: ':id/edit',
        component: CategoriesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CategoriesPageRoutingModule {}
