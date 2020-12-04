import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {UserProfilesPageRoutingModule} from './user-profiles-routing.module';

import { UserProfilesPage} from './user-profiles.page';
import { UserProfilesListComponent} from "./user-profiles-list/user-profiles-list.component";
import { UserProfilesCreateComponent} from "./user-profiles-create/user-profiles-create.component";
import { UserProfilesDuplicateComponent} from "./user-profiles-duplicate/user-profiles-duplicate.component";
import { UserProfilesEditComponent} from "./user-profiles-edit/user-profiles-edit.component";
import { UserProfilesFormComponent} from "./user-profiles-form/user-profiles-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        UserProfilesPageRoutingModule
    ],
    declarations: [
        UserProfilesPage,
        UserProfilesListComponent,
        UserProfilesCreateComponent,
        UserProfilesDuplicateComponent,
        UserProfilesEditComponent,
        UserProfilesFormComponent,
    ]
})
export class UserProfilesPageModule {
}

