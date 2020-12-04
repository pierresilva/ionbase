import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { CompAddress, CompAddressLists } from "./comp-address";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CompAddressesService {

    public compAddressesUrl = 'comp-addresses';
    public compAddressesFormValid = new BehaviorSubject<boolean>(false);

    public compAddresses: CompAddress[] = [];
    public compAddress: CompAddress = <CompAddress>{};
    public compAddressLists: CompAddressLists = {};

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

    public getCompAddresses(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.compAddressesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.compAddresses = res.data;
                    this.compAddressLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editCompAddress(id: any) {
        this.api.get(this.compAddressesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.compAddress = res.data.model;
                    this.compAddressLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateCompAddress() {
        this.api.put(this.compAddressesUrl + '/' + this.compAddress.id, {
            model: this.compAddress,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCompAddresses(1);
            }
        );
    }

    public createCompAddress() {
        this.api.get(this.compAddressesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.compAddress = <CompAddress>{};
                    this.compAddressLists = res.lists
                }
            );
    }

    public storeCompAddress() {
        this.api.post(this.compAddressesUrl, {
            model: this.compAddress,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCompAddresses(1);
            }
        );
    }

    public async deleteCompAddress(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.compAddressesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getCompAddresses(1);
                    }
                );
        } else {
            return;
        }
    }

}
