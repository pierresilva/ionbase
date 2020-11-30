import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../@shared/shared.module';

import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FolderPageRoutingModule} from './folder-routing.module';
import {FolderPage} from './folder.page';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        IonicModule,
        FolderPageRoutingModule
    ],
    declarations: [FolderPage]
})
export class FolderPageModule {
}
