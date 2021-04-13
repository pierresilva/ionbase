import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BoardRoutingModule} from './board-routing.module';
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {SharedModule} from "../@shared/shared.module";
import {BoardComponent} from "./board.component";
import {BoardMessagesListComponent} from "./board-messages-list/board-messages-list.component";
import {BoarMessagesFormComponent} from "./boar-messages-form/boar-messages-form.component";
import {BoarMessagesCreateComponent} from "./boar-messages-create/boar-messages-create.component";
import {BoarMessagesEditComponent} from "./boar-messages-edit/boar-messages-edit.component";
import {BoarMessagesListViewComponent} from "./boar-messages-list-view/boar-messages-list-view.component";
import {BoarMessagesShowComponent} from "./boar-messages-show/boar-messages-show.component";


@NgModule({
    declarations: [
        BoardComponent,
        BoardMessagesListComponent,
        BoarMessagesFormComponent,
        BoarMessagesCreateComponent,
        BoarMessagesEditComponent,
        BoarMessagesListViewComponent,
        BoarMessagesShowComponent
    ],
    exports: [
        BoarMessagesListViewComponent
    ],
    imports: [
        CommonModule,
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        BoardRoutingModule
    ]
})
export class BoardModule {
}
