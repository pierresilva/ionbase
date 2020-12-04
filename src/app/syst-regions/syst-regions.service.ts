import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { SystRegion, SystRegionLists } from "./syst-region";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class SystRegionsService {

    public systRegionsUrl = 'syst-regions';
    public systRegionsFormValid = new BehaviorSubject<boolean>(false);

    public systRegions: SystRegion[] = [];
    public systRegion: SystRegion = <SystRegion>{};
    public systRegionLists: SystRegionLists = {};

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

    public getSystRegions(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.systRegionsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.systRegions = res.data;
                    this.systRegionLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editSystRegion(id: any) {
        this.api.get(this.systRegionsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.systRegion = res.data.model;
                    this.systRegionLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateSystRegion() {
        this.api.put(this.systRegionsUrl + '/' + this.systRegion.id, {
            model: this.systRegion,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystRegions(1);
            }
        );
    }

    public createSystRegion() {
        this.api.get(this.systRegionsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.systRegion = <SystRegion>{};
                    this.systRegionLists = res.lists
                }
            );
    }

    public storeSystRegion() {
        this.api.post(this.systRegionsUrl, {
            model: this.systRegion,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystRegions(1);
            }
        );
    }

    public async deleteSystRegion(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.systRegionsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getSystRegions(1);
                    }
                );
        } else {
            return;
        }
    }

}
