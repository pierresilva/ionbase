import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CounMeetingsPageRoutingModule} from './coun-meetings-routing.module';

import { CounMeetingsPage} from './coun-meetings.page';
import { CounMeetingsListComponent} from "./coun-meetings-list/coun-meetings-list.component";
import { CounMeetingsCreateComponent} from "./coun-meetings-create/coun-meetings-create.component";
import { CounMeetingsDuplicateComponent} from "./coun-meetings-duplicate/coun-meetings-duplicate.component";
import { CounMeetingsEditComponent} from "./coun-meetings-edit/coun-meetings-edit.component";
import { CounMeetingsFormComponent} from "./coun-meetings-form/coun-meetings-form.component";
import {CounMeetingsCreateCustomComponent} from "./coun-meetings-create-custom/coun-meetings-create-custom.component";
import {CounMeetingsListCustomComponent} from "./coun-meetings-list-custom/coun-meetings-list-custom.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CounMeetingsPageRoutingModule
    ],
    declarations: [
        CounMeetingsPage,
        CounMeetingsListComponent,
        CounMeetingsCreateComponent,
        CounMeetingsDuplicateComponent,
        CounMeetingsEditComponent,
        CounMeetingsFormComponent,
        CounMeetingsCreateCustomComponent,
        CounMeetingsListCustomComponent,
    ]
})
export class CounMeetingsPageModule {
}

