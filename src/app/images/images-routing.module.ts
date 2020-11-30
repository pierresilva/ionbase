import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagesPage } from './images.page';
import {ImagesEditComponent} from "./images-edit/images-edit.component";
import {ImagesCreateComponent} from "./images-create/images-create.component";
import {ImagesListComponent} from "./images-list/images-list.component";

const routes: Routes = [
    {
        path: '',
        component: ImagesListComponent
    },
    {
      path: 'create',
      component: ImagesCreateComponent
    },
    {
        path: ':id/edit',
        component: ImagesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class ImagesPageRoutingModule {}
