import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {ImagesPageRoutingModule} from './images-routing.module';

import { ImagesPage} from './images.page';
import { ImagesListComponent} from "./images-list/images-list.component";
import { ImagesCreateComponent} from "./images-create/images-create.component";
import { ImagesDuplicateComponent} from "./images-duplicate/images-duplicate.component";
import { ImagesEditComponent} from "./images-edit/images-edit.component";
import { ImagesFormComponent} from "./images-form/images-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        ImagesPageRoutingModule
    ],
    declarations: [
        ImagesPage,
        ImagesListComponent,
        ImagesCreateComponent,
        ImagesDuplicateComponent,
        ImagesEditComponent,
        ImagesFormComponent,
    ]
})
export class ImagesPageModule {
}

