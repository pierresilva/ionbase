import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsPage } from './posts.page';
import {PostsEditComponent} from "./posts-edit/posts-edit.component";
import {PostsCreateComponent} from "./posts-create/posts-create.component";
import {PostsListComponent} from "./posts-list/posts-list.component";

const routes: Routes = [
    {
        path: '',
        component: PostsListComponent
    },
    {
      path: 'create',
      component: PostsCreateComponent
    },
    {
        path: ':id/edit',
        component: PostsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class PostsPageRoutingModule {}
