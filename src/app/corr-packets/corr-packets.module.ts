import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CorrPacketsPageRoutingModule} from './corr-packets-routing.module';

import { CorrPacketsPage} from './corr-packets.page';
import { CorrPacketsListComponent} from "./corr-packets-list/corr-packets-list.component";
import { CorrPacketsCreateComponent} from "./corr-packets-create/corr-packets-create.component";
import { CorrPacketsDuplicateComponent} from "./corr-packets-duplicate/corr-packets-duplicate.component";
import { CorrPacketsEditComponent} from "./corr-packets-edit/corr-packets-edit.component";
import { CorrPacketsFormComponent} from "./corr-packets-form/corr-packets-form.component";
import {CorrPostboxComponent} from "./corr-postbox/corr-postbox.component";
import {CorrPostboxesComponent} from "./corr-postboxes/corr-postboxes.component";
import {CorrReceiveModalComponent} from "./corr-receive-modal/corr-receive-modal.component";
import {CorrDeliveryModalComponent} from "./corr-delivery-modal/corr-delivery-modal.component";
import {CorrPostboxesItemComponent} from "./corr-postboxes-item/corr-postboxes-item.component";
import {HousUnitsService} from "../hous-units/hous-units.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CorrPacketsPageRoutingModule
    ],
    declarations: [
        CorrPacketsPage,
        CorrPacketsListComponent,
        CorrPacketsCreateComponent,
        CorrPacketsDuplicateComponent,
        CorrPacketsEditComponent,
        CorrPacketsFormComponent,
        CorrPostboxComponent,
        CorrPostboxesComponent,
        CorrReceiveModalComponent,
        CorrDeliveryModalComponent,
        CorrPostboxesItemComponent,
    ],
    providers: [
        HousUnitsService,
    ]
})
export class CorrPacketsPageModule {
}

