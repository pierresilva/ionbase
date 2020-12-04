import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {MailTemplatesPageRoutingModule} from './mail-templates-routing.module';

import { MailTemplatesPage} from './mail-templates.page';
import { MailTemplatesListComponent} from "./mail-templates-list/mail-templates-list.component";
import { MailTemplatesCreateComponent} from "./mail-templates-create/mail-templates-create.component";
import { MailTemplatesDuplicateComponent} from "./mail-templates-duplicate/mail-templates-duplicate.component";
import { MailTemplatesEditComponent} from "./mail-templates-edit/mail-templates-edit.component";
import { MailTemplatesFormComponent} from "./mail-templates-form/mail-templates-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        MailTemplatesPageRoutingModule
    ],
    declarations: [
        MailTemplatesPage,
        MailTemplatesListComponent,
        MailTemplatesCreateComponent,
        MailTemplatesDuplicateComponent,
        MailTemplatesEditComponent,
        MailTemplatesFormComponent,
    ]
})
export class MailTemplatesPageModule {
}

