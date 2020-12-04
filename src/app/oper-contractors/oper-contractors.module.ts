import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {OperContractorsPageRoutingModule} from './oper-contractors-routing.module';

import { OperContractorsPage} from './oper-contractors.page';
import { OperContractorsListComponent} from "./oper-contractors-list/oper-contractors-list.component";
import { OperContractorsCreateComponent} from "./oper-contractors-create/oper-contractors-create.component";
import { OperContractorsDuplicateComponent} from "./oper-contractors-duplicate/oper-contractors-duplicate.component";
import { OperContractorsEditComponent} from "./oper-contractors-edit/oper-contractors-edit.component";
import { OperContractorsFormComponent} from "./oper-contractors-form/oper-contractors-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperContractorsPageRoutingModule
    ],
    declarations: [
        OperContractorsPage,
        OperContractorsListComponent,
        OperContractorsCreateComponent,
        OperContractorsDuplicateComponent,
        OperContractorsEditComponent,
        OperContractorsFormComponent,
    ]
})
export class OperContractorsPageModule {
}

