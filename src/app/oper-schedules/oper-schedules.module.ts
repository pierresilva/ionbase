import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {OperSchedulesPageRoutingModule} from './oper-schedules-routing.module';

import { OperSchedulesPage} from './oper-schedules.page';
import { OperSchedulesListComponent} from "./oper-schedules-list/oper-schedules-list.component";
import { OperSchedulesCreateComponent} from "./oper-schedules-create/oper-schedules-create.component";
import { OperSchedulesDuplicateComponent} from "./oper-schedules-duplicate/oper-schedules-duplicate.component";
import { OperSchedulesEditComponent} from "./oper-schedules-edit/oper-schedules-edit.component";
import { OperSchedulesFormComponent} from "./oper-schedules-form/oper-schedules-form.component";
import {OperScheduleContractorIoComponent} from "./oper-schedule-contractor-io/oper-schedule-contractor-io.component";
import {OperScheduleContractorListComponent} from "./oper-schedule-contractor-list/oper-schedule-contractor-list.component";

@NgModule({
    imports: [
    // imports generated section
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperSchedulesPageRoutingModule
    // end imports generated section
    ],
    declarations: [
    // declarations generated section
        OperSchedulesPage,
        OperSchedulesListComponent,
        OperSchedulesCreateComponent,
        OperSchedulesDuplicateComponent,
        OperSchedulesEditComponent,
        OperSchedulesFormComponent,
    // end declarations generated section
        OperScheduleContractorIoComponent,
        OperScheduleContractorListComponent,
    ]
})
export class OperSchedulesPageModule {
}

