import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {OperCorrectiveMaintenancesPageRoutingModule} from './oper-corrective-maintenances-routing.module';

import { OperCorrectiveMaintenancesPage} from './oper-corrective-maintenances.page';
import { OperCorrectiveMaintenancesListComponent} from "./oper-corrective-maintenances-list/oper-corrective-maintenances-list.component";
import { OperCorrectiveMaintenancesCreateComponent} from "./oper-corrective-maintenances-create/oper-corrective-maintenances-create.component";
import { OperCorrectiveMaintenancesDuplicateComponent} from "./oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component";
import { OperCorrectiveMaintenancesEditComponent} from "./oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component";
import { OperCorrectiveMaintenancesFormComponent} from "./oper-corrective-maintenances-form/oper-corrective-maintenances-form.component";

@NgModule({
    imports: [
    // imports generated section
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperCorrectiveMaintenancesPageRoutingModule
    // end imports generated section
    ],
    declarations: [
    // declarations generated section
        OperCorrectiveMaintenancesPage,
        OperCorrectiveMaintenancesListComponent,
        OperCorrectiveMaintenancesCreateComponent,
        OperCorrectiveMaintenancesDuplicateComponent,
        OperCorrectiveMaintenancesEditComponent,
        OperCorrectiveMaintenancesFormComponent,
    // end declarations generated section
    ]
})
export class OperCorrectiveMaintenancesPageModule {
}

