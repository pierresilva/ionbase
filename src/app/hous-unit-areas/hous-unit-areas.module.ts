import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {HousUnitAreasPageRoutingModule} from './hous-unit-areas-routing.module';

import { HousUnitAreasPage} from './hous-unit-areas.page';
import { HousUnitAreasListComponent} from "./hous-unit-areas-list/hous-unit-areas-list.component";
import { HousUnitAreasCreateComponent} from "./hous-unit-areas-create/hous-unit-areas-create.component";
import { HousUnitAreasDuplicateComponent} from "./hous-unit-areas-duplicate/hous-unit-areas-duplicate.component";
import { HousUnitAreasEditComponent} from "./hous-unit-areas-edit/hous-unit-areas-edit.component";
import { HousUnitAreasFormComponent} from "./hous-unit-areas-form/hous-unit-areas-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        HousUnitAreasPageRoutingModule
    ],
    declarations: [
        HousUnitAreasPage,
        HousUnitAreasListComponent,
        HousUnitAreasCreateComponent,
        HousUnitAreasDuplicateComponent,
        HousUnitAreasEditComponent,
        HousUnitAreasFormComponent,
    ]
})
export class HousUnitAreasPageModule {
}

