import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RegisterConfirmComponent} from "./register-confirm/register-confirm.component";
import {PasswordForgotComponent} from "./password-forgot/password-forgot.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'login/:token',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'register-confirm/:token',
        component: RegisterConfirmComponent
    },
    {
        path: 'password-forgot',
        component: PasswordForgotComponent
    },
    {
        path: 'password-reset/:token',
        component: PasswordResetComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
