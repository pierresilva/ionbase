import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {SystParameterGroupsPageRoutingModule} from './syst-parameter-groups-routing.module';

import { SystParameterGroupsPage} from './syst-parameter-groups.page';
import { SystParameterGroupsListComponent} from "./syst-parameter-groups-list/syst-parameter-groups-list.component";
import { SystParameterGroupsCreateComponent} from "./syst-parameter-groups-create/syst-parameter-groups-create.component";
import { SystParameterGroupsDuplicateComponent} from "./syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component";
import { SystParameterGroupsEditComponent} from "./syst-parameter-groups-edit/syst-parameter-groups-edit.component";
import { SystParameterGroupsFormComponent} from "./syst-parameter-groups-form/syst-parameter-groups-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        SystParameterGroupsPageRoutingModule
    ],
    declarations: [
        SystParameterGroupsPage,
        SystParameterGroupsListComponent,
        SystParameterGroupsCreateComponent,
        SystParameterGroupsDuplicateComponent,
        SystParameterGroupsEditComponent,
        SystParameterGroupsFormComponent,
    ]
})
export class SystParameterGroupsPageModule {
}

