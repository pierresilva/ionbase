import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {UsersPageRoutingModule} from './users-routing.module';

import { UsersPage} from './users.page';
import { UsersListComponent} from "./users-list/users-list.component";
import { UsersCreateComponent} from "./users-create/users-create.component";
import { UsersDuplicateComponent} from "./users-duplicate/users-duplicate.component";
import { UsersEditComponent} from "./users-edit/users-edit.component";
import { UsersFormComponent} from "./users-form/users-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        UsersPageRoutingModule
    ],
    declarations: [
        UsersPage,
        UsersListComponent,
        UsersCreateComponent,
        UsersDuplicateComponent,
        UsersEditComponent,
        UsersFormComponent,
    ]
})
export class UsersPageModule {
}

