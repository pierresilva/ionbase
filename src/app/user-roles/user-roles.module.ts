import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {UserRolesPageRoutingModule} from './user-roles-routing.module';

import { UserRolesPage} from './user-roles.page';
import { UserRolesListComponent} from "./user-roles-list/user-roles-list.component";
import { UserRolesCreateComponent} from "./user-roles-create/user-roles-create.component";
import { UserRolesDuplicateComponent} from "./user-roles-duplicate/user-roles-duplicate.component";
import { UserRolesEditComponent} from "./user-roles-edit/user-roles-edit.component";
import { UserRolesFormComponent} from "./user-roles-form/user-roles-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        UserRolesPageRoutingModule
    ],
    declarations: [
        UserRolesPage,
        UserRolesListComponent,
        UserRolesCreateComponent,
        UserRolesDuplicateComponent,
        UserRolesEditComponent,
        UserRolesFormComponent,
    ]
})
export class UserRolesPageModule {
}

