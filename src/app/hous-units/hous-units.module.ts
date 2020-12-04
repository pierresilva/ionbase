import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {HousUnitsPageRoutingModule} from './hous-units-routing.module';

import { HousUnitsPage} from './hous-units.page';
import { HousUnitsListComponent} from "./hous-units-list/hous-units-list.component";
import { HousUnitsCreateComponent} from "./hous-units-create/hous-units-create.component";
import { HousUnitsDuplicateComponent} from "./hous-units-duplicate/hous-units-duplicate.component";
import { HousUnitsEditComponent} from "./hous-units-edit/hous-units-edit.component";
import { HousUnitsFormComponent} from "./hous-units-form/hous-units-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        HousUnitsPageRoutingModule
    ],
    declarations: [
        HousUnitsPage,
        HousUnitsListComponent,
        HousUnitsCreateComponent,
        HousUnitsDuplicateComponent,
        HousUnitsEditComponent,
        HousUnitsFormComponent,
    ]
})
export class HousUnitsPageModule {
}

