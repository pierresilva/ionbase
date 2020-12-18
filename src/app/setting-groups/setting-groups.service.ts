import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { SettingGroup, SettingGroupLists } from "./setting-group";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class SettingGroupsService {

    public settingGroupsUrl = 'setting-groups';
    public settingGroupsFormValid = new BehaviorSubject<boolean>(false);

    public settingGroups: SettingGroup[] = [];
    public settingGroup: SettingGroup = <SettingGroup>{};
    public settingGroupLists: SettingGroupLists = {};

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

    public getSettingGroups(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.settingGroupsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.settingGroups = res.data;
                    this.settingGroupLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editSettingGroup(id: any) {
        this.api.get(this.settingGroupsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.settingGroup = res.data.model;
                    this.settingGroupLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateSettingGroup() {
        this.api.put(this.settingGroupsUrl + '/' + this.settingGroup.id, {
            model: this.settingGroup,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSettingGroups(1);
            }
        );
    }

    public createSettingGroup() {
        this.api.get(this.settingGroupsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.settingGroup = <SettingGroup>{};
                    this.settingGroupLists = res.lists
                }
            );
    }

    public storeSettingGroup() {
        this.api.post(this.settingGroupsUrl, {
            model: this.settingGroup,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSettingGroups(1);
            }
        );
    }

    public async deleteSettingGroup(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.settingGroupsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getSettingGroups(1);
                    }
                );
        } else {
            return;
        }
    }

    saveSettingGroup() {

    }

}
