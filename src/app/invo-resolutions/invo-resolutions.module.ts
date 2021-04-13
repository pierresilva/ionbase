import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InvoResolutionsRoutingModule} from './invo-resolutions-routing.module';
import {SharedModule} from "../@shared/shared.module";
import {InvoResolutionsComponent} from "./invo-resolutions.component";
import {InvoResolutionsListComponent} from "./invo-resolutions-list/invo-resolutions-list.component";
import {InvoResolutionsFormComponent} from "./invo-resolutions-form/invo-resolutions-form.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
    declarations: [
        InvoResolutionsComponent,
        InvoResolutionsListComponent,
        InvoResolutionsFormComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        IonicModule,
        InvoResolutionsRoutingModule
    ]
})
export class InvoResolutionsModule {
}
