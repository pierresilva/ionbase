import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CompContactsPageRoutingModule} from './comp-contacts-routing.module';

import { CompContactsPage} from './comp-contacts.page';
import { CompContactsListComponent} from "./comp-contacts-list/comp-contacts-list.component";
import { CompContactsCreateComponent} from "./comp-contacts-create/comp-contacts-create.component";
import { CompContactsDuplicateComponent} from "./comp-contacts-duplicate/comp-contacts-duplicate.component";
import { CompContactsEditComponent} from "./comp-contacts-edit/comp-contacts-edit.component";
import { CompContactsFormComponent} from "./comp-contacts-form/comp-contacts-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CompContactsPageRoutingModule
    ],
    declarations: [
        CompContactsPage,
        CompContactsListComponent,
        CompContactsCreateComponent,
        CompContactsDuplicateComponent,
        CompContactsEditComponent,
        CompContactsFormComponent,
    ]
})
export class CompContactsPageModule {
}

