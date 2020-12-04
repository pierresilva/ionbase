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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperSchedulesPageRoutingModule
    ],
    declarations: [
        OperSchedulesPage,
        OperSchedulesListComponent,
        OperSchedulesCreateComponent,
        OperSchedulesDuplicateComponent,
        OperSchedulesEditComponent,
        OperSchedulesFormComponent,
    ]
})
export class OperSchedulesPageModule {
}

