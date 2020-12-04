import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CompAddressesPageRoutingModule} from './comp-addresses-routing.module';

import { CompAddressesPage} from './comp-addresses.page';
import { CompAddressesListComponent} from "./comp-addresses-list/comp-addresses-list.component";
import { CompAddressesCreateComponent} from "./comp-addresses-create/comp-addresses-create.component";
import { CompAddressesDuplicateComponent} from "./comp-addresses-duplicate/comp-addresses-duplicate.component";
import { CompAddressesEditComponent} from "./comp-addresses-edit/comp-addresses-edit.component";
import { CompAddressesFormComponent} from "./comp-addresses-form/comp-addresses-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CompAddressesPageRoutingModule
    ],
    declarations: [
        CompAddressesPage,
        CompAddressesListComponent,
        CompAddressesCreateComponent,
        CompAddressesDuplicateComponent,
        CompAddressesEditComponent,
        CompAddressesFormComponent,
    ]
})
export class CompAddressesPageModule {
}

