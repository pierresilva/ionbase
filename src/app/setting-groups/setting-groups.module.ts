import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {SettingGroupsPageRoutingModule} from './setting-groups-routing.module';

import { SettingGroupsPage} from './setting-groups.page';
import { SettingGroupsListComponent} from "./setting-groups-list/setting-groups-list.component";
import { SettingGroupsCreateComponent} from "./setting-groups-create/setting-groups-create.component";
import { SettingGroupsDuplicateComponent} from "./setting-groups-duplicate/setting-groups-duplicate.component";
import { SettingGroupsEditComponent} from "./setting-groups-edit/setting-groups-edit.component";
import { SettingGroupsFormComponent} from "./setting-groups-form/setting-groups-form.component";
import {SettingGroupsModalComponent} from "./setting-groups-modal/setting-groups-modal.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        SettingGroupsPageRoutingModule
    ],
    declarations: [
        SettingGroupsPage,
        SettingGroupsListComponent,
        SettingGroupsCreateComponent,
        SettingGroupsDuplicateComponent,
        SettingGroupsEditComponent,
        SettingGroupsFormComponent,
        SettingGroupsModalComponent,
    ]
})
export class SettingGroupsPageModule {
}

