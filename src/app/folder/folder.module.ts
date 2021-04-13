import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../@shared/shared.module';

import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FolderPageRoutingModule} from './folder-routing.module';
import {FolderPage} from './folder.page';
import {BoardModule} from "../board/board.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        IonicModule,
        FolderPageRoutingModule,
        BoardModule
    ],
    declarations: [FolderPage]
})
export class FolderPageModule {
}
