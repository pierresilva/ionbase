import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ApiService} from './api.service';
import {Router} from '@angular/router';

import {StorageLocalService} from './storage-local.service';
import {ToastService} from "./toast.service";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    /**
     * Save if a user is logged
     */
    public isLoggedSubject = new BehaviorSubject<boolean>(false);
    /**
     * Get the isLoggedSubject value
     */
    public isLogged = this.isLoggedSubject.asObservable();

    public checkToken: any = null;

    constructor(
        private api: ApiService,
        private router: Router,
        // public loading: LoadingService,
        public toast: ToastService,
        public storage: StorageLocalService
    ) {
        this.userIsLogged();
    }

    /**
     * Login a user in the system
     * @param credentials
     * @param redirect
     */
    public async login(credentials: { email: string; password: string, remember_me: boolean | null }, redirect: boolean = true) {
        if (this.userIsLogged()) {
            return;
        }

        // this.loading.isLoading.next(true);
        this.api.syncPost('api/auth/login', credentials)
            .then(
                async (res: any) => {
                    this.storage.set('token', res.data.access_token);
                    await this.api.syncGet('api/auth/profile')
                        .then(
                            async (res: any) => {

                                this.storage.set('user', res.data.user);
                                this.storage.set('acl', res.data.acl);
                                if (!this.checkToken) {
                                    this.startCheckExpirationToken();
                                }
                                if (redirect) {
                                    await this.router.navigateByUrl('/');
                                }
                                // this.toastService.showSuccess(null, 'Ingreso con éxito!');
                            });
                },
                (err: any) => {
                }
            );
    }

    /**
     * Register a new user
     * @param credentials
     */
    public register(credentials: { name: string; email: string; password: string; password_confirmation: string }) {
        return this.api.syncPost('api/auth/register', credentials)
            .then(
                async (res: any) => {
                    await this.login({email: credentials.email, password: credentials.password, remember_me: null});
                },
                (err: any) => {
                }
            );
    }

    /**
     * Logout a user
     */
    public logout(redirect: boolean = true) {
        this.api.syncPost('api/auth/logout', {})
            .then(
                async (res: any) => {
                    this.toast.present('Salio con éxito!', 'toast-success');
                    this.stopCheckExpirationToken();
                },
                (err: any) => {
                }
            );
        this.storage.remove('token');
        this.storage.remove('user');
        this.storage.remove('acl');
        this.isLoggedSubject.next(false);
        if (redirect) {
            this.router.navigateByUrl('/auth/login');
        }

    }

    /**
     * Get the user permissions
     * @private
     */
    public getPermissions() {
        const acl = this.storage.get('acl');
        if (acl) {
            return acl.permissions;
        }
        return null;
    }

    /**
     * Get the user roles
     * @private
     */
    public getRoles() {
        const acl = this.storage.get('acl');
        if (acl) {
            return acl.roles;
        }
        return null;
    }

    /**
     * Check if a user is logged
     */
    public userIsLogged(): boolean {
        const token = this.storage.get('token');
        const user = this.storage.get('user');
        const acl = this.storage.get('acl');

        if (token && user && acl) {
            this.isLoggedSubject.next(true);
            return true;
        }
        this.isLoggedSubject.next(false);
        return false;
    }

    /**
     * Check if the user has a permission
     * @param permissions
     */
    public userCan(permissions: string[]) {
        const userPermissions = this.getPermissions();
        if (userPermissions) {
            for (let i = 0; i < permissions.length; i++) {
                for (let j = 0; j < userPermissions.length; j++) {
                    if (userPermissions[j] === permissions[i]) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * Check if the user has a role
     * @param roles
     */
    public userIs(roles: string[]) {
        const userRoles = this.getRoles();
        if (userRoles) {
            for (let i = 0; i < roles.length; i++) {
                for (let j = 0; j < userRoles.length; j++) {
                    if (userRoles[j] === roles[i]) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * Decode the JWT
     */
    private decodeToken() {
        const token = this.storage.get('token');

        if (token) {
            let jsonPayload = atob(token.split('.')[1]);
            return JSON.parse(jsonPayload);
        }
        return null;
    }

    /**
     * Get item of JWT
     * @param item
     */
    public getTokenItem(item: string) {
        const decodedToken = this.decodeToken();

        if (decodedToken) {
            return decodedToken[item];
        }
        return null;
    }

    /**
     *
     */
    public getToken() {
        const token = this.storage.get('token');
        if (token) {
            return token;
        }

        return null;
    }

    /**
     *
     */
    public refreshToken() {
        this.api.syncPost('api/auth/refresh', {})
            .then(async (res: any) => {
                    this.storage.set('token', res.data.access_token);
                    this.stopCheckExpirationToken();
                    this.startCheckExpirationToken();
                },
                async (err: any) => {
                    this.stopCheckExpirationToken();
                    this.storage.remove('token');
                    this.storage.remove('user');
                    this.storage.remove('acl');
                    this.toast.present('Su sesión expiró!', 'toast-error');
                    await this.router.navigateByUrl('/auth/login');
                });
    }

    /**
     *
     */
    public startCheckExpirationToken() {
        let token = this.storage.get('token');
        if (token) {
            let exp = this.getTokenItem('exp');
            if (exp) {
                this.checkToken = setInterval(() => {
                    if ((new Date((exp * 1000) - 20000) < new Date())) {
                        this.refreshToken();
                    }
                }, 5000);
            }
        }
    }

    /**
     *
     */
    public stopCheckExpirationToken() {

        if (this.checkToken) {
            clearInterval(this.checkToken);
            this.checkToken = null;
        }
    }

    /**
     *
     */
    public getUser(item: string = null) {

        const user = this.storage.get('user');

        if (!item) {
            return user;
        }

        for (const userKey in user) {
            if (userKey === item) {
                return user[item];
            }
        }

        return null;
    }

}
