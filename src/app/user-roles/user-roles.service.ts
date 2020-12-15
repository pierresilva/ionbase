import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { UserRole, UserRoleLists } from "./user-role";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class UserRolesService {

    public userRolesUrl = 'user-roles';
    public userRolesFormValid = new BehaviorSubject<boolean>(false);

    public userRoles: UserRole[] = [];
    public userRole: UserRole = <UserRole>{};
    public userRoleLists: UserRoleLists = {};

    public searchValue = '';
    public perPage = 10;

    public meta: Meta = null;

    public page = 1;

    public pagesContent = document.getElementById('pages-content');

    constructor(
        public api: ApiService,
        public alert: AlertService,
        public toast: ToastService,
        public router: Router,
        private navigation: NavigationService,
    ) {
    }

    public getUserRoles(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.userRolesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.userRoles = res.data;
                    this.userRoleLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editUserRole(id: any) {
        this.api.get(this.userRolesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.userRole = res.data.model;
                    this.userRoleLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateUserRole() {
        this.api.put(this.userRolesUrl + '/' + this.userRole.id, {
            model: this.userRole,
            pivots: {
                user: this.userRole.users,
                user_permission: this.userRole.user_permissions,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getUserRoles(1);
            }
        );
    }

    public createUserRole() {
        this.api.get(this.userRolesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.userRole = <UserRole>{};
                    this.userRoleLists = res.lists
                }
            );
    }

    public storeUserRole() {
        this.api.post(this.userRolesUrl, {
            model: this.userRole,
            pivots: {
                user: this.userRole.users,
                user_permission: this.userRole.user_permissions,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getUserRoles(1);
            }
        );
    }

    public async deleteUserRole(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.userRolesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getUserRoles(1);
                    }
                );
        } else {
            return;
        }
    }

}
