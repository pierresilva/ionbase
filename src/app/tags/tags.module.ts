import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {TagsPageRoutingModule} from './tags-routing.module';

import { TagsPage} from './tags.page';
import { TagsListComponent} from "./tags-list/tags-list.component";
import { TagsCreateComponent} from "./tags-create/tags-create.component";
import { TagsDuplicateComponent} from "./tags-duplicate/tags-duplicate.component";
import { TagsEditComponent} from "./tags-edit/tags-edit.component";
import { TagsFormComponent} from "./tags-form/tags-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        TagsPageRoutingModule
    ],
    declarations: [
        TagsPage,
        TagsListComponent,
        TagsCreateComponent,
        TagsDuplicateComponent,
        TagsEditComponent,
        TagsFormComponent,
    ]
})
export class TagsPageModule {
}

