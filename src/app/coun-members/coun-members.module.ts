import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CounMembersPageRoutingModule} from './coun-members-routing.module';

import { CounMembersPage} from './coun-members.page';
import { CounMembersListComponent} from "./coun-members-list/coun-members-list.component";
import { CounMembersCreateComponent} from "./coun-members-create/coun-members-create.component";
import { CounMembersDuplicateComponent} from "./coun-members-duplicate/coun-members-duplicate.component";
import { CounMembersEditComponent} from "./coun-members-edit/coun-members-edit.component";
import { CounMembersFormComponent} from "./coun-members-form/coun-members-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CounMembersPageRoutingModule
    ],
    declarations: [
        CounMembersPage,
        CounMembersListComponent,
        CounMembersCreateComponent,
        CounMembersDuplicateComponent,
        CounMembersEditComponent,
        CounMembersFormComponent,
    ]
})
export class CounMembersPageModule {
}

