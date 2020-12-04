import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {SystCountriesPageRoutingModule} from './syst-countries-routing.module';

import { SystCountriesPage} from './syst-countries.page';
import { SystCountriesListComponent} from "./syst-countries-list/syst-countries-list.component";
import { SystCountriesCreateComponent} from "./syst-countries-create/syst-countries-create.component";
import { SystCountriesDuplicateComponent} from "./syst-countries-duplicate/syst-countries-duplicate.component";
import { SystCountriesEditComponent} from "./syst-countries-edit/syst-countries-edit.component";
import { SystCountriesFormComponent} from "./syst-countries-form/syst-countries-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        SystCountriesPageRoutingModule
    ],
    declarations: [
        SystCountriesPage,
        SystCountriesListComponent,
        SystCountriesCreateComponent,
        SystCountriesDuplicateComponent,
        SystCountriesEditComponent,
        SystCountriesFormComponent,
    ]
})
export class SystCountriesPageModule {
}

