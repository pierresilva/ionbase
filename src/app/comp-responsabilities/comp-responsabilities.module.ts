import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CompResponsabilitiesPageRoutingModule} from './comp-responsabilities-routing.module';

import { CompResponsabilitiesPage} from './comp-responsabilities.page';
import { CompResponsabilitiesListComponent} from "./comp-responsabilities-list/comp-responsabilities-list.component";
import { CompResponsabilitiesCreateComponent} from "./comp-responsabilities-create/comp-responsabilities-create.component";
import { CompResponsabilitiesDuplicateComponent} from "./comp-responsabilities-duplicate/comp-responsabilities-duplicate.component";
import { CompResponsabilitiesEditComponent} from "./comp-responsabilities-edit/comp-responsabilities-edit.component";
import { CompResponsabilitiesFormComponent} from "./comp-responsabilities-form/comp-responsabilities-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CompResponsabilitiesPageRoutingModule
    ],
    declarations: [
        CompResponsabilitiesPage,
        CompResponsabilitiesListComponent,
        CompResponsabilitiesCreateComponent,
        CompResponsabilitiesDuplicateComponent,
        CompResponsabilitiesEditComponent,
        CompResponsabilitiesFormComponent,
    ]
})
export class CompResponsabilitiesPageModule {
}

