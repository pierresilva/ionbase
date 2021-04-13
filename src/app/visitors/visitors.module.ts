import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VisitorsRoutingModule} from './visitors-routing.module';
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {SharedModule} from "../@shared/shared.module";
import {VisitorsComponent} from "./visitors.component";
import {VisiVisitorsCreateComponent} from "./visi-visitors-create/visi-visitors-create.component";
import {VisiVisitorsEditComponent} from "./visi-visitors-edit/visi-visitors-edit.component";
import {VisiVisitorsFormComponent} from "./visi-visitors-form/visi-visitors-form.component";
import {VisiVisitorsListComponent} from "./visi-visitors-list/visi-visitors-list.component";
import {VisiVisitorsUserListComponent} from "./visi-visitors-user-list/visi-visitors-user-list.component";
import {VisiVisitorsUserSendComponent} from "./visi-visitors-user-send/visi-visitors-user-send.component";
import {VisiVisitorsUserRegisterComponent} from "./visi-visitors-user-register/visi-visitors-user-register.component";
import {VisitorVehicleModalComponent} from "./visitor-vehicle-modal/visitor-vehicle-modal.component";
import {VisitorModalComponent} from "./visitor-modal/visitor-modal.component";
import {VisiInvoiceModalComponent} from "./visi-invoice-modal/visi-invoice-modal.component";
import {VisiParkingListComponent} from "./visi-parking-list/visi-parking-list.component";
import {VisiVisitorRegistersListComponent} from "./visi-visitor-registers-list/visi-visitor-registers-list.component";


@NgModule({
    declarations: [
        VisitorsComponent,
        VisiVisitorsCreateComponent,
        VisiVisitorsEditComponent,
        VisiVisitorsFormComponent,
        VisiVisitorsListComponent,
        VisiVisitorsUserListComponent,
        VisiVisitorsUserSendComponent,
        VisiVisitorsUserRegisterComponent,
        VisitorVehicleModalComponent,
        VisitorModalComponent,
        VisiInvoiceModalComponent,
        VisiParkingListComponent,
        VisiVisitorRegistersListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        VisitorsRoutingModule
    ]
})
export class VisitorsModule {
}
