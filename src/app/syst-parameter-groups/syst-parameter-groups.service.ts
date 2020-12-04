import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { SystParameterGroup, SystParameterGroupLists } from "./syst-parameter-group";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class SystParameterGroupsService {

    public systParameterGroupsUrl = 'syst-parameter-groups';
    public systParameterGroupsFormValid = new BehaviorSubject<boolean>(false);

    public systParameterGroups: SystParameterGroup[] = [];
    public systParameterGroup: SystParameterGroup = <SystParameterGroup>{};
    public systParameterGroupLists: SystParameterGroupLists = {};

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

    public getSystParameterGroups(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.systParameterGroupsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.systParameterGroups = res.data;
                    this.systParameterGroupLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editSystParameterGroup(id: any) {
        this.api.get(this.systParameterGroupsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.systParameterGroup = res.data.model;
                    this.systParameterGroupLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateSystParameterGroup() {
        this.api.put(this.systParameterGroupsUrl + '/' + this.systParameterGroup.id, {
            model: this.systParameterGroup,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystParameterGroups(1);
            }
        );
    }

    public createSystParameterGroup() {
        this.api.get(this.systParameterGroupsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.systParameterGroup = <SystParameterGroup>{};
                    this.systParameterGroupLists = res.lists
                }
            );
    }

    public storeSystParameterGroup() {
        this.api.post(this.systParameterGroupsUrl, {
            model: this.systParameterGroup,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystParameterGroups(1);
            }
        );
    }

    public async deleteSystParameterGroup(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.systParameterGroupsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getSystParameterGroups(1);
                    }
                );
        } else {
            return;
        }
    }

}
