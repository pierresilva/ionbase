import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodeScannerPageRoutingModule } from './barcode-scanner-routing.module';

import { BarcodeScannerPage } from './barcode-scanner.page';
import {SharedModule} from '../@shared/shared.module';
import {BarcodeScannerModalComponent} from "./barcode-scanner-modal/barcode-scanner-modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodeScannerPageRoutingModule,
    SharedModule,
  ],
  declarations: [
      BarcodeScannerPage,
      BarcodeScannerModalComponent,
  ]
})
export class BarcodeScannerPageModule {}
