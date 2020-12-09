import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AuthPageRoutingModule} from './auth-routing.module';

import {AuthPage} from './auth.page';
import {LoginComponent} from "./login/login.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {PasswordForgotComponent} from "./password-forgot/password-forgot.component";
import {RegisterComponent} from "./register/register.component";
import {RegisterConfirmComponent} from "./register-confirm/register-confirm.component";
import {SharedModule} from "../@shared/shared.module";
import {SplitPanelService} from "../@shared/services/split-panel.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        AuthPageRoutingModule
    ],
    declarations: [
        AuthPage,
        LoginComponent,
        PasswordResetComponent,
        PasswordForgotComponent,
        RegisterComponent,
        RegisterConfirmComponent,
    ]
})
export class AuthPageModule {
}
