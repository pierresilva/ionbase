import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilesPage } from './files.page';
import {FilesEditComponent} from "./files-edit/files-edit.component";
import {FilesCreateComponent} from "./files-create/files-create.component";
import {FilesListComponent} from "./files-list/files-list.component";

const routes: Routes = [
    {
        path: '',
        component: FilesPage
    },
    {
        path: 'list',
        component: FilesListComponent
    },
    {
      path: 'create',
      component: FilesCreateComponent
    },
    {
        path: ':id/edit',
        component: FilesEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class FilesPageRoutingModule {}
