import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {Platform} from "@ionic/angular";
import {ApiService} from "../../@shared/services/api.service";
import {ToastService} from "../../@shared/services/toast.service";
import {AlertService} from "../../@shared/services/alert.service";
import {AuthService} from "../../@shared/services/auth.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-password-forgot',
    templateUrl: './password-forgot.component.html',
    styleUrls: ['./password-forgot.component.scss'],
})
export class PasswordForgotComponent implements OnInit {

    @ViewChild('forgotForm') forgotForm: FormGroup;

    version: string | null = environment.version;
    error: string | undefined;
    isLoading = false;
    environment = environment;

    model: any = {
        email: '',
    };

    resetOk = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private platform: Platform,
        private api: ApiService,
        private toast: ToastService,
        private alert: AlertService,
        public auth: AuthService,
        public splitPanel: SplitPanelService
    ) {
    }

    ngOnInit() {
        this.splitPanel.show.next(false);
    }

    get isWeb(): boolean {
        return !this.platform.is('cordova');
    }

    passwordRecoverRequest() {
        this.api.post('auth/reset-password', {email: this.model.email})
            .subscribe(
                (res: any) => {
                    this.toast.present(res.message, 'toast-success');
                    this.resetOk = true;
                },
                (err: any) => {
                    this.resetOk = false;
                }
            );
    }

}
