import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {MailsPageRoutingModule} from './mails-routing.module';

import { MailsPage} from './mails.page';
import { MailsListComponent} from "./mails-list/mails-list.component";
import { MailsCreateComponent} from "./mails-create/mails-create.component";
import { MailsDuplicateComponent} from "./mails-duplicate/mails-duplicate.component";
import { MailsEditComponent} from "./mails-edit/mails-edit.component";
import { MailsFormComponent} from "./mails-form/mails-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        MailsPageRoutingModule
    ],
    declarations: [
        MailsPage,
        MailsListComponent,
        MailsCreateComponent,
        MailsDuplicateComponent,
        MailsEditComponent,
        MailsFormComponent,
    ]
})
export class MailsPageModule {
}

