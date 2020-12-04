import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { HousUnitArea, HousUnitAreaLists } from "./hous-unit-area";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class HousUnitAreasService {

    public housUnitAreasUrl = 'hous-unit-areas';
    public housUnitAreasFormValid = new BehaviorSubject<boolean>(false);

    public housUnitAreas: HousUnitArea[] = [];
    public housUnitArea: HousUnitArea = <HousUnitArea>{};
    public housUnitAreaLists: HousUnitAreaLists = {};

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

    public getHousUnitAreas(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.housUnitAreasUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.housUnitAreas = res.data;
                    this.housUnitAreaLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editHousUnitArea(id: any) {
        this.api.get(this.housUnitAreasUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.housUnitArea = res.data.model;
                    this.housUnitAreaLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateHousUnitArea() {
        this.api.put(this.housUnitAreasUrl + '/' + this.housUnitArea.id, {
            model: this.housUnitArea,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getHousUnitAreas(1);
            }
        );
    }

    public createHousUnitArea() {
        this.api.get(this.housUnitAreasUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.housUnitArea = <HousUnitArea>{};
                    this.housUnitAreaLists = res.lists
                }
            );
    }

    public storeHousUnitArea() {
        this.api.post(this.housUnitAreasUrl, {
            model: this.housUnitArea,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getHousUnitAreas(1);
            }
        );
    }

    public async deleteHousUnitArea(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.housUnitAreasUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getHousUnitAreas(1);
                    }
                );
        } else {
            return;
        }
    }

}
