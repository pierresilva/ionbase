import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SettingsPageRoutingModule} from './settings-routing.module';

import {SettingsPage} from './settings.page';
import {SharedModule} from "../@shared/shared.module";
import {SettingsListComponent} from "./settings-list/settings-list.component";
import {SettingsFormComponent} from "./settings-form/settings-form.component";
import {SettingsModalComponent} from "./settings-modal/settings-modal.component";
import {SettingsService} from "./settings.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        SettingsPageRoutingModule,
    ],
    declarations: [
        SettingsPage,
        SettingsListComponent,
        SettingsFormComponent,
        SettingsModalComponent,
    ],
    providers: [
        SettingsService,
    ]
})
export class SettingsPageModule {
}
