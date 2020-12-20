import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {OperMaintenanceRepairsPageRoutingModule} from './oper-maintenance-repairs-routing.module';

import { OperMaintenanceRepairsPage} from './oper-maintenance-repairs.page';
import { OperMaintenanceRepairsListComponent} from "./oper-maintenance-repairs-list/oper-maintenance-repairs-list.component";
import { OperMaintenanceRepairsCreateComponent} from "./oper-maintenance-repairs-create/oper-maintenance-repairs-create.component";
import { OperMaintenanceRepairsDuplicateComponent} from "./oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component";
import { OperMaintenanceRepairsEditComponent} from "./oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component";
import { OperMaintenanceRepairsFormComponent} from "./oper-maintenance-repairs-form/oper-maintenance-repairs-form.component";

@NgModule({
    imports: [
    // imports generated section
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperMaintenanceRepairsPageRoutingModule
    // end imports generated section
    ],
    declarations: [
    // declarations generated section
        OperMaintenanceRepairsPage,
        OperMaintenanceRepairsListComponent,
        OperMaintenanceRepairsCreateComponent,
        OperMaintenanceRepairsDuplicateComponent,
        OperMaintenanceRepairsEditComponent,
        OperMaintenanceRepairsFormComponent,
    // end declarations generated section
    ]
})
export class OperMaintenanceRepairsPageModule {
}

