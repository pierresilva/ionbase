import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { SystCity, SystCityLists } from "./syst-city";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class SystCitiesService {

    public systCitiesUrl = 'syst-cities';
    public systCitiesFormValid = new BehaviorSubject<boolean>(false);

    public systCities: SystCity[] = [];
    public systCity: SystCity = <SystCity>{};
    public systCityLists: SystCityLists = {};

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

    public getSystCities(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.systCitiesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.systCities = res.data;
                    this.systCityLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editSystCity(id: any) {
        this.api.get(this.systCitiesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.systCity = res.data.model;
                    this.systCityLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateSystCity() {
        this.api.put(this.systCitiesUrl + '/' + this.systCity.id, {
            model: this.systCity,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystCities(1);
            }
        );
    }

    public createSystCity() {
        this.api.get(this.systCitiesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.systCity = <SystCity>{};
                    this.systCityLists = res.lists
                }
            );
    }

    public storeSystCity() {
        this.api.post(this.systCitiesUrl, {
            model: this.systCity,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystCities(1);
            }
        );
    }

    public async deleteSystCity(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.systCitiesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getSystCities(1);
                    }
                );
        } else {
            return;
        }
    }

}
