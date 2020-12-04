import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CounMeetingAgendasPageRoutingModule} from './coun-meeting-agendas-routing.module';

import { CounMeetingAgendasPage} from './coun-meeting-agendas.page';
import { CounMeetingAgendasListComponent} from "./coun-meeting-agendas-list/coun-meeting-agendas-list.component";
import { CounMeetingAgendasCreateComponent} from "./coun-meeting-agendas-create/coun-meeting-agendas-create.component";
import { CounMeetingAgendasDuplicateComponent} from "./coun-meeting-agendas-duplicate/coun-meeting-agendas-duplicate.component";
import { CounMeetingAgendasEditComponent} from "./coun-meeting-agendas-edit/coun-meeting-agendas-edit.component";
import { CounMeetingAgendasFormComponent} from "./coun-meeting-agendas-form/coun-meeting-agendas-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CounMeetingAgendasPageRoutingModule
    ],
    declarations: [
        CounMeetingAgendasPage,
        CounMeetingAgendasListComponent,
        CounMeetingAgendasCreateComponent,
        CounMeetingAgendasDuplicateComponent,
        CounMeetingAgendasEditComponent,
        CounMeetingAgendasFormComponent,
    ]
})
export class CounMeetingAgendasPageModule {
}

