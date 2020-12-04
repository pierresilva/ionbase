import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CounMeetingCitationsPageRoutingModule} from './coun-meeting-citations-routing.module';

import { CounMeetingCitationsPage} from './coun-meeting-citations.page';
import { CounMeetingCitationsListComponent} from "./coun-meeting-citations-list/coun-meeting-citations-list.component";
import { CounMeetingCitationsCreateComponent} from "./coun-meeting-citations-create/coun-meeting-citations-create.component";
import { CounMeetingCitationsDuplicateComponent} from "./coun-meeting-citations-duplicate/coun-meeting-citations-duplicate.component";
import { CounMeetingCitationsEditComponent} from "./coun-meeting-citations-edit/coun-meeting-citations-edit.component";
import { CounMeetingCitationsFormComponent} from "./coun-meeting-citations-form/coun-meeting-citations-form.component";
import {CounMeetingCitationSignComponent} from "./coun-meeting-citation-sign/coun-meeting-citation-sign.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CounMeetingCitationsPageRoutingModule
    ],
    declarations: [
        CounMeetingCitationsPage,
        CounMeetingCitationsListComponent,
        CounMeetingCitationsCreateComponent,
        CounMeetingCitationsDuplicateComponent,
        CounMeetingCitationsEditComponent,
        CounMeetingCitationsFormComponent,
        CounMeetingCitationSignComponent,
    ]
})
export class CounMeetingCitationsPageModule {
}

