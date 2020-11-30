import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {PostsPageRoutingModule} from './posts-routing.module';

import { PostsPage} from './posts.page';
import { PostsListComponent} from "./posts-list/posts-list.component";
import { PostsCreateComponent} from "./posts-create/posts-create.component";
import { PostsDuplicateComponent} from "./posts-duplicate/posts-duplicate.component";
import { PostsEditComponent} from "./posts-edit/posts-edit.component";
import { PostsFormComponent} from "./posts-form/posts-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        PostsPageRoutingModule
    ],
    declarations: [
        PostsPage,
        PostsListComponent,
        PostsCreateComponent,
        PostsDuplicateComponent,
        PostsEditComponent,
        PostsFormComponent,
    ]
})
export class PostsPageModule {
}

