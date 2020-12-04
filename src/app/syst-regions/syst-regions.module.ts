import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {SystRegionsPageRoutingModule} from './syst-regions-routing.module';

import { SystRegionsPage} from './syst-regions.page';
import { SystRegionsListComponent} from "./syst-regions-list/syst-regions-list.component";
import { SystRegionsCreateComponent} from "./syst-regions-create/syst-regions-create.component";
import { SystRegionsDuplicateComponent} from "./syst-regions-duplicate/syst-regions-duplicate.component";
import { SystRegionsEditComponent} from "./syst-regions-edit/syst-regions-edit.component";
import { SystRegionsFormComponent} from "./syst-regions-form/syst-regions-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        SystRegionsPageRoutingModule
    ],
    declarations: [
        SystRegionsPage,
        SystRegionsListComponent,
        SystRegionsCreateComponent,
        SystRegionsDuplicateComponent,
        SystRegionsEditComponent,
        SystRegionsFormComponent,
    ]
})
export class SystRegionsPageModule {
}

