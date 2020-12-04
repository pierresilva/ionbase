import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {SystParametersPageRoutingModule} from './syst-parameters-routing.module';

import { SystParametersPage} from './syst-parameters.page';
import { SystParametersListComponent} from "./syst-parameters-list/syst-parameters-list.component";
import { SystParametersCreateComponent} from "./syst-parameters-create/syst-parameters-create.component";
import { SystParametersDuplicateComponent} from "./syst-parameters-duplicate/syst-parameters-duplicate.component";
import { SystParametersEditComponent} from "./syst-parameters-edit/syst-parameters-edit.component";
import { SystParametersFormComponent} from "./syst-parameters-form/syst-parameters-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        SystParametersPageRoutingModule
    ],
    declarations: [
        SystParametersPage,
        SystParametersListComponent,
        SystParametersCreateComponent,
        SystParametersDuplicateComponent,
        SystParametersEditComponent,
        SystParametersFormComponent,
    ]
})
export class SystParametersPageModule {
}

