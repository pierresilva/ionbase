import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CompPhonesPageRoutingModule} from './comp-phones-routing.module';

import { CompPhonesPage} from './comp-phones.page';
import { CompPhonesListComponent} from "./comp-phones-list/comp-phones-list.component";
import { CompPhonesCreateComponent} from "./comp-phones-create/comp-phones-create.component";
import { CompPhonesDuplicateComponent} from "./comp-phones-duplicate/comp-phones-duplicate.component";
import { CompPhonesEditComponent} from "./comp-phones-edit/comp-phones-edit.component";
import { CompPhonesFormComponent} from "./comp-phones-form/comp-phones-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CompPhonesPageRoutingModule
    ],
    declarations: [
        CompPhonesPage,
        CompPhonesListComponent,
        CompPhonesCreateComponent,
        CompPhonesDuplicateComponent,
        CompPhonesEditComponent,
        CompPhonesFormComponent,
    ]
})
export class CompPhonesPageModule {
}

