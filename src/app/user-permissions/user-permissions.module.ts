import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {UserPermissionsPageRoutingModule} from './user-permissions-routing.module';

import { UserPermissionsPage} from './user-permissions.page';
import { UserPermissionsListComponent} from "./user-permissions-list/user-permissions-list.component";
import { UserPermissionsCreateComponent} from "./user-permissions-create/user-permissions-create.component";
import { UserPermissionsDuplicateComponent} from "./user-permissions-duplicate/user-permissions-duplicate.component";
import { UserPermissionsEditComponent} from "./user-permissions-edit/user-permissions-edit.component";
import { UserPermissionsFormComponent} from "./user-permissions-form/user-permissions-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        UserPermissionsPageRoutingModule
    ],
    declarations: [
        UserPermissionsPage,
        UserPermissionsListComponent,
        UserPermissionsCreateComponent,
        UserPermissionsDuplicateComponent,
        UserPermissionsEditComponent,
        UserPermissionsFormComponent,
    ]
})
export class UserPermissionsPageModule {
}

