import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {FilesPageRoutingModule} from './files-routing.module';

import { FilesPage} from './files.page';
import { FilesListComponent} from "./files-list/files-list.component";
import { FilesCreateComponent} from "./files-create/files-create.component";
import { FilesDuplicateComponent} from "./files-duplicate/files-duplicate.component";
import { FilesEditComponent} from "./files-edit/files-edit.component";
import { FilesFormComponent} from "./files-form/files-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        FilesPageRoutingModule
    ],
    declarations: [
        FilesPage,
        FilesListComponent,
        FilesCreateComponent,
        FilesDuplicateComponent,
        FilesEditComponent,
        FilesFormComponent,
    ]
})
export class FilesPageModule {
}

