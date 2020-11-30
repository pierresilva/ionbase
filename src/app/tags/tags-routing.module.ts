import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagsPage } from './tags.page';
import {TagsEditComponent} from "./tags-edit/tags-edit.component";
import {TagsCreateComponent} from "./tags-create/tags-create.component";
import {TagsListComponent} from "./tags-list/tags-list.component";

const routes: Routes = [
    {
        path: '',
        component: TagsListComponent
    },
    {
      path: 'create',
      component: TagsCreateComponent
    },
    {
        path: ':id/edit',
        component: TagsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class TagsPageRoutingModule {}
