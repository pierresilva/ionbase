import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { SystParameter, SystParameterLists } from "./syst-parameter";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class SystParametersService {

    public systParametersUrl = 'syst-parameters';
    public systParametersFormValid = new BehaviorSubject<boolean>(false);

    public systParameters: SystParameter[] = [];
    public systParameter: SystParameter = <SystParameter>{};
    public systParameterLists: SystParameterLists = {};

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

    public getSystParameters(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.systParametersUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.systParameters = res.data;
                    this.systParameterLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editSystParameter(id: any) {
        this.api.get(this.systParametersUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.systParameter = res.data.model;
                    this.systParameterLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateSystParameter() {
        this.api.put(this.systParametersUrl + '/' + this.systParameter.id, {
            model: this.systParameter,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystParameters(1);
            }
        );
    }

    public createSystParameter() {
        this.api.get(this.systParametersUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.systParameter = <SystParameter>{};
                    this.systParameterLists = res.lists
                }
            );
    }

    public storeSystParameter() {
        this.api.post(this.systParametersUrl, {
            model: this.systParameter,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystParameters(1);
            }
        );
    }

    public async deleteSystParameter(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.systParametersUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getSystParameters(1);
                    }
                );
        } else {
            return;
        }
    }

}
