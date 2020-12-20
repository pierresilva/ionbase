import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {OperMachinesPageRoutingModule} from './oper-machines-routing.module';

import { OperMachinesPage} from './oper-machines.page';
import { OperMachinesListComponent} from "./oper-machines-list/oper-machines-list.component";
import { OperMachinesCreateComponent} from "./oper-machines-create/oper-machines-create.component";
import { OperMachinesDuplicateComponent} from "./oper-machines-duplicate/oper-machines-duplicate.component";
import { OperMachinesEditComponent} from "./oper-machines-edit/oper-machines-edit.component";
import { OperMachinesFormComponent} from "./oper-machines-form/oper-machines-form.component";

@NgModule({
    imports: [
    // imports generated section
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperMachinesPageRoutingModule
    // end imports generated section
    ],
    declarations: [
    // declarations generated section
        OperMachinesPage,
        OperMachinesListComponent,
        OperMachinesCreateComponent,
        OperMachinesDuplicateComponent,
        OperMachinesEditComponent,
        OperMachinesFormComponent,
    // end declarations generated section
    ]
})
export class OperMachinesPageModule {
}

