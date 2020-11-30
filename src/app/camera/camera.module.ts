import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CameraPageRoutingModule} from './camera-routing.module';

import {CameraPage} from './camera.page';
import {SharedModule} from '../@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CameraPageRoutingModule
    ],
    declarations: [CameraPage]
})
export class CameraPageModule {
}
