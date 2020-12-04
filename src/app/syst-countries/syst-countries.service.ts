import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { SystCountry, SystCountryLists } from "./syst-country";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class SystCountriesService {

    public systCountriesUrl = 'syst-countries';
    public systCountriesFormValid = new BehaviorSubject<boolean>(false);

    public systCountries: SystCountry[] = [];
    public systCountry: SystCountry = <SystCountry>{};
    public systCountryLists: SystCountryLists = {};

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

    public getSystCountries(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.systCountriesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.systCountries = res.data;
                    this.systCountryLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editSystCountry(id: any) {
        this.api.get(this.systCountriesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.systCountry = res.data.model;
                    this.systCountryLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateSystCountry() {
        this.api.put(this.systCountriesUrl + '/' + this.systCountry.id, {
            model: this.systCountry,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystCountries(1);
            }
        );
    }

    public createSystCountry() {
        this.api.get(this.systCountriesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.systCountry = <SystCountry>{};
                    this.systCountryLists = res.lists
                }
            );
    }

    public storeSystCountry() {
        this.api.post(this.systCountriesUrl, {
            model: this.systCountry,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystCountries(1);
            }
        );
    }

    public async deleteSystCountry(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.systCountriesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getSystCountries(1);
                    }
                );
        } else {
            return;
        }
    }

}
