import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {OperMovementsPageRoutingModule} from './oper-movements-routing.module';

import { OperMovementsPage} from './oper-movements.page';
import { OperMovementsListComponent} from "./oper-movements-list/oper-movements-list.component";
import { OperMovementsCreateComponent} from "./oper-movements-create/oper-movements-create.component";
import { OperMovementsDuplicateComponent} from "./oper-movements-duplicate/oper-movements-duplicate.component";
import { OperMovementsEditComponent} from "./oper-movements-edit/oper-movements-edit.component";
import { OperMovementsFormComponent} from "./oper-movements-form/oper-movements-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperMovementsPageRoutingModule
    ],
    declarations: [
        OperMovementsPage,
        OperMovementsListComponent,
        OperMovementsCreateComponent,
        OperMovementsDuplicateComponent,
        OperMovementsEditComponent,
        OperMovementsFormComponent,
    ]
})
export class OperMovementsPageModule {
}

