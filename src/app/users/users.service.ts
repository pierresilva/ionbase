import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { User, UserLists } from "./user";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    public usersUrl = 'users';
    public usersFormValid = new BehaviorSubject<boolean>(false);

    public users: User[] = [];
    public user: User = <User>{};
    public userLists: UserLists = {};

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

    public getUsers(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.usersUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.users = res.data;
                    this.userLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editUser(id: any) {
        this.api.get(this.usersUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.user = res.data.model;
                    this.userLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateUser() {
        this.api.put(this.usersUrl + '/' + this.user.id, {
            model: this.user,
            pivots: {
                user_role: this.user.user_roles,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getUsers(1);
            }
        );
    }

    public createUser() {
        this.api.get(this.usersUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.user = <User>{};
                    this.userLists = res.lists
                }
            );
    }

    public storeUser() {
        this.api.post(this.usersUrl, {
            model: this.user,
            pivots: {
                user_role: this.user.user_roles,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getUsers(1);
            }
        );
    }

    public async deleteUser(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.usersUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getUsers(1);
                    }
                );
        } else {
            return;
        }
    }

    public getAll() {
        this.api.get(this.usersUrl + '?all=tue')
            .subscribe(
                (res: any) => {
                    this.users = res.data;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

}
