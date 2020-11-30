import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CategoriesPageRoutingModule} from './categories-routing.module';

import { CategoriesPage} from './categories.page';
import { CategoriesListComponent} from "./categories-list/categories-list.component";
import { CategoriesCreateComponent} from "./categories-create/categories-create.component";
import { CategoriesDuplicateComponent} from "./categories-duplicate/categories-duplicate.component";
import { CategoriesEditComponent} from "./categories-edit/categories-edit.component";
import { CategoriesFormComponent} from "./categories-form/categories-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CategoriesPageRoutingModule
    ],
    declarations: [
        CategoriesPage,
        CategoriesListComponent,
        CategoriesCreateComponent,
        CategoriesDuplicateComponent,
        CategoriesEditComponent,
        CategoriesFormComponent,
    ]
})
export class CategoriesPageModule {
}

