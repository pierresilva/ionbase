import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { Setting, SettingLists } from "./setting";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    public settingsUrl = 'settings';
    public settingsFormValid = new BehaviorSubject<boolean>(false);

    public settings: Setting[] = [];
    public setting: Setting = <Setting>{};
    public settingLists: SettingLists = {};

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

    public getSettings(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.settingsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.settings = res.data;
                    this.settingLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editSetting(id: any) {
        this.api.get(this.settingsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.setting = res.data.model;
                    this.settingLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateSetting() {
        this.api.put(this.settingsUrl + '/' + this.setting.id, {
            model: this.setting,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSettings(1);
            }
        );
    }

    public createSetting() {
        this.api.get(this.settingsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.setting = <Setting>{};
                    this.settingLists = res.lists
                }
            );
    }

    public storeSetting() {
        this.api.post(this.settingsUrl, {
            model: this.setting,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSettings(1);
            }
        );
    }

    public async deleteSetting(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.settingsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getSettings(1);
                    }
                );
        } else {
            return;
        }
    }


    saveSetting() {}

}
