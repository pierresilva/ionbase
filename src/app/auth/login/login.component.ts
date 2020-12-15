import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoadingController, Platform} from "@ionic/angular";
import {environment} from "../../../environments/environment";
import {finalize, map} from "rxjs/operators";
import {forkJoin, from} from "rxjs";
import {ApiService} from "../../@shared/services/api.service";
import {ToastService} from "../../@shared/services/toast.service";
import {AlertService} from "../../@shared/services/alert.service";
import {AuthService} from "../../@shared/services/auth.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {StorageLocalService} from "../../@shared/services/storage-local.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    version: string | null = environment.version;
    error: string | undefined;
    isLoading = false;
    environment = environment;

    token: any = null;

    model: any = {
        email: '',
        password: '',
        remember: false
    };

    @ViewChild('loginForm') loginForm: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private platform: Platform,
        private api: ApiService,
        private toast: ToastService,
        private alert: AlertService,
        public auth: AuthService,
        public splitPanel: SplitPanelService,
        public storage: StorageLocalService
    ) {
        // this.createForm();
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.splitPanel.show.next(false);
        if (this.route.snapshot.paramMap.get('token')) {
            this.toast.present('Se verifico tu correo electrónico con éxito!', 'toast-info');
        }

    }

    async login() {
        this.api.syncPost(environment.serverUrl + '/api/auth/login', this.model)
            .then(
                (res: any) => {
                    this.toast.present(res.message, 'toast-success');
                    this.storage.set('token', res.data.access_token);
                    this.api.syncGet(environment.serverUrl + '/api/auth/profile?token=' + res.data.access_token)
                        .then(
                            async (res: any) => {
                                this.storage.set('user', res.data.user);
                                this.storage.set('acl', res.data.acl);
                                if (!this.auth.checkToken) {
                                    this.auth.startCheckExpirationToken();
                                }
                                this.router.navigateByUrl('/');
                            });
                },
                (err: any) => {

                }
            );
    }

    get isWeb(): boolean {
        return !this.platform.is('cordova');
    }
}
