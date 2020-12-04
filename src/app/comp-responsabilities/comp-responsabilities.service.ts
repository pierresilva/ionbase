import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { CompResponsability, CompResponsabilityLists } from "./comp-responsability";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CompResponsabilitiesService {

    public compResponsabilitiesUrl = 'comp-responsabilities';
    public compResponsabilitiesFormValid = new BehaviorSubject<boolean>(false);

    public compResponsabilities: CompResponsability[] = [];
    public compResponsability: CompResponsability = <CompResponsability>{};
    public compResponsabilityLists: CompResponsabilityLists = {};

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

    public getCompResponsabilities(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.compResponsabilitiesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.compResponsabilities = res.data;
                    this.compResponsabilityLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editCompResponsability(id: any) {
        this.api.get(this.compResponsabilitiesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.compResponsability = res.data.model;
                    this.compResponsabilityLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateCompResponsability() {
        this.api.put(this.compResponsabilitiesUrl + '/' + this.compResponsability.id, {
            model: this.compResponsability,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCompResponsabilities(1);
            }
        );
    }

    public createCompResponsability() {
        this.api.get(this.compResponsabilitiesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.compResponsability = <CompResponsability>{};
                    this.compResponsabilityLists = res.lists
                }
            );
    }

    public storeCompResponsability() {
        this.api.post(this.compResponsabilitiesUrl, {
            model: this.compResponsability,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCompResponsabilities(1);
            }
        );
    }

    public async deleteCompResponsability(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.compResponsabilitiesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getCompResponsabilities(1);
                    }
                );
        } else {
            return;
        }
    }

}
