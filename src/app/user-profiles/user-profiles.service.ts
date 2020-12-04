import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { UserProfile, UserProfileLists } from "./user-profile";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class UserProfilesService {

    public userProfilesUrl = 'user-profiles';
    public userProfilesFormValid = new BehaviorSubject<boolean>(false);

    public userProfiles: UserProfile[] = [];
    public userProfile: UserProfile = <UserProfile>{};
    public userProfileLists: UserProfileLists = {};

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

    public getUserProfiles(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.userProfilesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.userProfiles = res.data;
                    this.userProfileLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editUserProfile(id: any) {
        this.api.get(this.userProfilesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.userProfile = res.data.model;
                    this.userProfileLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateUserProfile() {
        this.api.put(this.userProfilesUrl + '/' + this.userProfile.id, {
            model: this.userProfile,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getUserProfiles(1);
            }
        );
    }

    public createUserProfile() {
        this.api.get(this.userProfilesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.userProfile = <UserProfile>{};
                    this.userProfileLists = res.lists
                }
            );
    }

    public storeUserProfile() {
        this.api.post(this.userProfilesUrl, {
            model: this.userProfile,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getUserProfiles(1);
            }
        );
    }

    public async deleteUserProfile(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.userProfilesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getUserProfiles(1);
                    }
                );
        } else {
            return;
        }
    }

}
