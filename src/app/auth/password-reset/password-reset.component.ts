import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Platform} from "@ionic/angular";
import {ApiService} from "../../@shared/services/api.service";
import {ToastService} from "../../@shared/services/toast.service";
import {AlertService} from "../../@shared/services/alert.service";
import {AuthService} from "../../@shared/services/auth.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-password-reset',
    templateUrl: './password-reset.component.html',
    styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent implements OnInit {


    @ViewChild('resetPasswordForm') resetPasswordForm: FormGroup;

    version: string | null = environment.version;
    error: string | undefined;
    isLoading = false;
    environment = environment;

    resetOk = false;
    token: any = null;

    model: any = {
        password: '',
        password_confirmation: '',
        token: ''
    };

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
    }

    ionViewWillEnter() {
        this.resetOk = false;
        this.splitPanel.show.next(false);
        this.token = this.route.snapshot.paramMap.get('token');
        this.findResetPasswordRequest();
    }

    passwordReset() {
      this.model.token = this.token;
        this.api.put('auth/reset-password', this.model)
            .subscribe(
                (res: any) => {
                    this.toast.present(res.message, 'toast-success');
                    this.router.navigateByUrl('/auth/login');
                },
                (err: any) => {
                    this.resetOk = false;
                }
            );
    }

    showPassword(input: any): any {
        const passwordField = document.getElementById(input);
        const passwordButton = document.getElementById(input + '-show');
        passwordField.setAttribute('type', (passwordField.getAttribute('type') === 'password') ? 'text' : 'password');
        passwordButton.setAttribute('name', (passwordButton.getAttribute('name') === 'eye-outline') ? 'eye-off-outline' : 'eye-outline');
    }

    findResetPasswordRequest() {
        this.api.get('auth/reset-password/' + this.token)
            .subscribe(
                (res: any) => {
                    this.toast.present(res.message, 'toast-info');
                    this.resetOk = true;
                },
                (err: any) => {
                    this.resetOk = false;
                }
            );
    }

}
