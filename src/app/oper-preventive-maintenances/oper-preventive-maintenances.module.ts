import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {OperPreventiveMaintenancesPageRoutingModule} from './oper-preventive-maintenances-routing.module';

import { OperPreventiveMaintenancesPage} from './oper-preventive-maintenances.page';
import { OperPreventiveMaintenancesListComponent} from "./oper-preventive-maintenances-list/oper-preventive-maintenances-list.component";
import { OperPreventiveMaintenancesCreateComponent} from "./oper-preventive-maintenances-create/oper-preventive-maintenances-create.component";
import { OperPreventiveMaintenancesDuplicateComponent} from "./oper-preventive-maintenances-duplicate/oper-preventive-maintenances-duplicate.component";
import { OperPreventiveMaintenancesEditComponent} from "./oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component";
import { OperPreventiveMaintenancesFormComponent} from "./oper-preventive-maintenances-form/oper-preventive-maintenances-form.component";

@NgModule({
    imports: [
    // imports generated section
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperPreventiveMaintenancesPageRoutingModule
    // end imports generated section
    ],
    declarations: [
    // declarations generated section
        OperPreventiveMaintenancesPage,
        OperPreventiveMaintenancesListComponent,
        OperPreventiveMaintenancesCreateComponent,
        OperPreventiveMaintenancesDuplicateComponent,
        OperPreventiveMaintenancesEditComponent,
        OperPreventiveMaintenancesFormComponent,
    // end declarations generated section
    ]
})
export class OperPreventiveMaintenancesPageModule {
}

