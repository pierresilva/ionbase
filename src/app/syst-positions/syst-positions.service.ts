import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { SystPosition, SystPositionLists } from "./syst-position";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class SystPositionsService {

    public systPositionsUrl = 'syst-positions';
    public systPositionsFormValid = new BehaviorSubject<boolean>(false);

    public systPositions: SystPosition[] = [];
    public systPosition: SystPosition = <SystPosition>{};
    public systPositionLists: SystPositionLists = {};

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

    public getSystPositions(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.systPositionsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.systPositions = res.data;
                    this.systPositionLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editSystPosition(id: any) {
        this.api.get(this.systPositionsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.systPosition = res.data.model;
                    this.systPositionLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateSystPosition() {
        this.api.put(this.systPositionsUrl + '/' + this.systPosition.id, {
            model: this.systPosition,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystPositions(1);
            }
        );
    }

    public createSystPosition() {
        this.api.get(this.systPositionsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.systPosition = <SystPosition>{};
                    this.systPositionLists = res.lists
                }
            );
    }

    public storeSystPosition() {
        this.api.post(this.systPositionsUrl, {
            model: this.systPosition,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getSystPositions(1);
            }
        );
    }

    public async deleteSystPosition(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.systPositionsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getSystPositions(1);
                    }
                );
        } else {
            return;
        }
    }

}
