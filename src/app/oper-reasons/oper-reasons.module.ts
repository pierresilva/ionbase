import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {OperReasonsPageRoutingModule} from './oper-reasons-routing.module';

import { OperReasonsPage} from './oper-reasons.page';
import { OperReasonsListComponent} from "./oper-reasons-list/oper-reasons-list.component";
import { OperReasonsCreateComponent} from "./oper-reasons-create/oper-reasons-create.component";
import { OperReasonsDuplicateComponent} from "./oper-reasons-duplicate/oper-reasons-duplicate.component";
import { OperReasonsEditComponent} from "./oper-reasons-edit/oper-reasons-edit.component";
import { OperReasonsFormComponent} from "./oper-reasons-form/oper-reasons-form.component";

@NgModule({
    imports: [
    // imports generated section
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperReasonsPageRoutingModule
    // end imports generated section
    ],
    declarations: [
    // declarations generated section
        OperReasonsPage,
        OperReasonsListComponent,
        OperReasonsCreateComponent,
        OperReasonsDuplicateComponent,
        OperReasonsEditComponent,
        OperReasonsFormComponent,
    // end declarations generated section
    ]
})
export class OperReasonsPageModule {
}

