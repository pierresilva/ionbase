import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { UserPermission, UserPermissionLists } from "./user-permission";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class UserPermissionsService {

    public userPermissionsUrl = 'user-permissions';
    public userPermissionsFormValid = new BehaviorSubject<boolean>(false);

    public userPermissions: UserPermission[] = [];
    public userPermission: UserPermission = <UserPermission>{};
    public userPermissionLists: UserPermissionLists = {};

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

    public getUserPermissions(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.userPermissionsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.userPermissions = res.data;
                    this.userPermissionLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editUserPermission(id: any) {
        this.api.get(this.userPermissionsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.userPermission = res.data.model;
                    this.userPermissionLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateUserPermission() {
        this.api.put(this.userPermissionsUrl + '/' + this.userPermission.id, {
            model: this.userPermission,
            pivots: {
                user_role: this.userPermission.user_roles,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getUserPermissions(1);
            }
        );
    }

    public createUserPermission() {
        this.api.get(this.userPermissionsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.userPermission = <UserPermission>{};
                    this.userPermissionLists = res.lists
                }
            );
    }

    public storeUserPermission() {
        this.api.post(this.userPermissionsUrl, {
            model: this.userPermission,
            pivots: {
                user_role: this.userPermission.user_roles,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getUserPermissions(1);
            }
        );
    }

    public async deleteUserPermission(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.userPermissionsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getUserPermissions(1);
                    }
                );
        } else {
            return;
        }
    }

}
