import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {OperItemsPageRoutingModule} from './oper-items-routing.module';

import { OperItemsPage} from './oper-items.page';
import { OperItemsListComponent} from "./oper-items-list/oper-items-list.component";
import { OperItemsCreateComponent} from "./oper-items-create/oper-items-create.component";
import { OperItemsDuplicateComponent} from "./oper-items-duplicate/oper-items-duplicate.component";
import { OperItemsEditComponent} from "./oper-items-edit/oper-items-edit.component";
import { OperItemsFormComponent} from "./oper-items-form/oper-items-form.component";

@NgModule({
    imports: [
    // imports generated section
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperItemsPageRoutingModule
    // end imports generated section
    ],
    declarations: [
    // declarations generated section
        OperItemsPage,
        OperItemsListComponent,
        OperItemsCreateComponent,
        OperItemsDuplicateComponent,
        OperItemsEditComponent,
        OperItemsFormComponent,
    // end declarations generated section
    ]
})
export class OperItemsPageModule {
}

