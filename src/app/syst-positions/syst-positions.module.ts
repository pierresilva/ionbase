import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {SystPositionsPageRoutingModule} from './syst-positions-routing.module';

import { SystPositionsPage} from './syst-positions.page';
import { SystPositionsListComponent} from "./syst-positions-list/syst-positions-list.component";
import { SystPositionsCreateComponent} from "./syst-positions-create/syst-positions-create.component";
import { SystPositionsDuplicateComponent} from "./syst-positions-duplicate/syst-positions-duplicate.component";
import { SystPositionsEditComponent} from "./syst-positions-edit/syst-positions-edit.component";
import { SystPositionsFormComponent} from "./syst-positions-form/syst-positions-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        SystPositionsPageRoutingModule
    ],
    declarations: [
        SystPositionsPage,
        SystPositionsListComponent,
        SystPositionsCreateComponent,
        SystPositionsDuplicateComponent,
        SystPositionsEditComponent,
        SystPositionsFormComponent,
    ]
})
export class SystPositionsPageModule {
}

