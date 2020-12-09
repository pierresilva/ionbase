import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SettingGroupsPageRoutingModule} from './setting-groups-routing.module';

import {SettingGroupsPage} from './setting-groups.page';
import {SharedModule} from "../@shared/shared.module";
import {SettingGroupsService} from "./setting-groups.service";
import {SettingGroupsListComponent} from "./setting-groups-list/setting-groups-list.component";
import {SettingGroupsFormComponent} from "./setting-groups-form/setting-groups-form.component";
import {SettingGroupsModalComponent} from "./setting-groups-modal/setting-groups-modal.component";
import {SettingsListComponent} from "../settings/settings-list/settings-list.component";
import {SettingsService} from "../settings/settings.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        SettingGroupsPageRoutingModule
    ],
    providers: [
        SettingGroupsService,
        SettingsService,
    ],
    declarations: [
        SettingGroupsPage,
        SettingGroupsListComponent,
        SettingGroupsFormComponent,
        SettingGroupsModalComponent,
        SettingsListComponent,
    ]
})
export class SettingGroupsPageModule {
}
