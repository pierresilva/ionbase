import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { HousUnit, HousUnitLists } from "./hous-unit";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class HousUnitsService {

    public housUnitsUrl = 'hous-units';
    public housUnitsFormValid = new BehaviorSubject<boolean>(false);

    public housUnits: HousUnit[] = [];
    public housUnit: HousUnit = <HousUnit>{};
    public housUnitLists: HousUnitLists = {};

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

    public getHousUnits(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.housUnitsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.housUnits = res.data;
                    this.housUnitLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editHousUnit(id: any) {
        this.api.get(this.housUnitsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.housUnit = res.data.model;
                    this.housUnitLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateHousUnit() {
        this.api.put(this.housUnitsUrl + '/' + this.housUnit.id, {
            model: this.housUnit,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getHousUnits(1);
            }
        );
    }

    public createHousUnit() {
        this.api.get(this.housUnitsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.housUnit = <HousUnit>{};
                    this.housUnitLists = res.lists
                }
            );
    }

    public storeHousUnit() {
        this.api.post(this.housUnitsUrl, {
            model: this.housUnit,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getHousUnits(1);
            }
        );
    }

    public async deleteHousUnit(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.housUnitsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getHousUnits(1);
                    }
                );
        } else {
            return;
        }
    }

}
