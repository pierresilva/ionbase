import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {CompaniesPageRoutingModule} from './companies-routing.module';

import { CompaniesPage} from './companies.page';
import { CompaniesListComponent} from "./companies-list/companies-list.component";
import { CompaniesCreateComponent} from "./companies-create/companies-create.component";
import { CompaniesDuplicateComponent} from "./companies-duplicate/companies-duplicate.component";
import { CompaniesEditComponent} from "./companies-edit/companies-edit.component";
import { CompaniesFormComponent} from "./companies-form/companies-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        CompaniesPageRoutingModule
    ],
    declarations: [
        CompaniesPage,
        CompaniesListComponent,
        CompaniesCreateComponent,
        CompaniesDuplicateComponent,
        CompaniesEditComponent,
        CompaniesFormComponent,
    ]
})
export class CompaniesPageModule {
}

