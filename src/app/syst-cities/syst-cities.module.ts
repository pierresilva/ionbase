import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {SystCitiesPageRoutingModule} from './syst-cities-routing.module';

import { SystCitiesPage} from './syst-cities.page';
import { SystCitiesListComponent} from "./syst-cities-list/syst-cities-list.component";
import { SystCitiesCreateComponent} from "./syst-cities-create/syst-cities-create.component";
import { SystCitiesDuplicateComponent} from "./syst-cities-duplicate/syst-cities-duplicate.component";
import { SystCitiesEditComponent} from "./syst-cities-edit/syst-cities-edit.component";
import { SystCitiesFormComponent} from "./syst-cities-form/syst-cities-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        SystCitiesPageRoutingModule
    ],
    declarations: [
        SystCitiesPage,
        SystCitiesListComponent,
        SystCitiesCreateComponent,
        SystCitiesDuplicateComponent,
        SystCitiesEditComponent,
        SystCitiesFormComponent,
    ]
})
export class SystCitiesPageModule {
}

