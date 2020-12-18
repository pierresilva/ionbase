import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {SettingsPageRoutingModule} from './settings-routing.module';

import { SettingsPage} from './settings.page';
import { SettingsListComponent} from "./settings-list/settings-list.component";
import { SettingsCreateComponent} from "./settings-create/settings-create.component";
import { SettingsDuplicateComponent} from "./settings-duplicate/settings-duplicate.component";
import { SettingsEditComponent} from "./settings-edit/settings-edit.component";
import { SettingsFormComponent} from "./settings-form/settings-form.component";
import {SettingsModalComponent} from "./settings-modal/settings-modal.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        SettingsPageRoutingModule
    ],
    declarations: [
        SettingsPage,
        SettingsListComponent,
        SettingsCreateComponent,
        SettingsDuplicateComponent,
        SettingsEditComponent,
        SettingsFormComponent,
        SettingsModalComponent,
    ]
})
export class SettingsPageModule {
}

