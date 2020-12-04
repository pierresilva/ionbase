import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { CompPhone, CompPhoneLists } from "./comp-phone";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CompPhonesService {

    public compPhonesUrl = 'comp-phones';
    public compPhonesFormValid = new BehaviorSubject<boolean>(false);

    public compPhones: CompPhone[] = [];
    public compPhone: CompPhone = <CompPhone>{};
    public compPhoneLists: CompPhoneLists = {};

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

    public getCompPhones(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.compPhonesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.compPhones = res.data;
                    this.compPhoneLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editCompPhone(id: any) {
        this.api.get(this.compPhonesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.compPhone = res.data.model;
                    this.compPhoneLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateCompPhone() {
        this.api.put(this.compPhonesUrl + '/' + this.compPhone.id, {
            model: this.compPhone,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCompPhones(1);
            }
        );
    }

    public createCompPhone() {
        this.api.get(this.compPhonesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.compPhone = <CompPhone>{};
                    this.compPhoneLists = res.lists
                }
            );
    }

    public storeCompPhone() {
        this.api.post(this.compPhonesUrl, {
            model: this.compPhone,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCompPhones(1);
            }
        );
    }

    public async deleteCompPhone(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.compPhonesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getCompPhones(1);
                    }
                );
        } else {
            return;
        }
    }

}
