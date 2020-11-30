import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentsPage } from './comments.page';
import {CommentsEditComponent} from "./comments-edit/comments-edit.component";
import {CommentsCreateComponent} from "./comments-create/comments-create.component";
import {CommentsListComponent} from "./comments-list/comments-list.component";

const routes: Routes = [
    {
        path: '',
        component: CommentsListComponent
    },
    {
      path: 'create',
      component: CommentsCreateComponent
    },
    {
        path: ':id/edit',
        component: CommentsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CommentsPageRoutingModule {}
