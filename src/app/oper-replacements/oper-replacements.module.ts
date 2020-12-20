import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {OperReplacementsPageRoutingModule} from './oper-replacements-routing.module';

import { OperReplacementsPage} from './oper-replacements.page';
import { OperReplacementsListComponent} from "./oper-replacements-list/oper-replacements-list.component";
import { OperReplacementsCreateComponent} from "./oper-replacements-create/oper-replacements-create.component";
import { OperReplacementsDuplicateComponent} from "./oper-replacements-duplicate/oper-replacements-duplicate.component";
import { OperReplacementsEditComponent} from "./oper-replacements-edit/oper-replacements-edit.component";
import { OperReplacementsFormComponent} from "./oper-replacements-form/oper-replacements-form.component";

@NgModule({
    imports: [
    // imports generated section
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperReplacementsPageRoutingModule
    // end imports generated section
    ],
    declarations: [
    // declarations generated section
        OperReplacementsPage,
        OperReplacementsListComponent,
        OperReplacementsCreateComponent,
        OperReplacementsDuplicateComponent,
        OperReplacementsEditComponent,
        OperReplacementsFormComponent,
    // end declarations generated section
    ]
})
export class OperReplacementsPageModule {
}

