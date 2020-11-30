import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from "./components/loading/loading.component";
import {SharedModule} from "../@shared/shared.module";


@NgModule({
    declarations: [
        LoadingComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        LoadingComponent
    ]
})
export class LayoutsModule {
}
