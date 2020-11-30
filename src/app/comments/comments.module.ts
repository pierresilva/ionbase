import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CommentsPageRoutingModule} from './comments-routing.module';

import { CommentsPage} from './comments.page';
import { CommentsListComponent} from "./comments-list/comments-list.component";
import { CommentsCreateComponent} from "./comments-create/comments-create.component";
import { CommentsDuplicateComponent} from "./comments-duplicate/comments-duplicate.component";
import { CommentsEditComponent} from "./comments-edit/comments-edit.component";
import { CommentsFormComponent} from "./comments-form/comments-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CommentsPageRoutingModule
    ],
    declarations: [
        CommentsPage,
        CommentsListComponent,
        CommentsCreateComponent,
        CommentsDuplicateComponent,
        CommentsEditComponent,
        CommentsFormComponent,
    ]
})
export class CommentsPageModule {
}

