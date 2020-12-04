import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { OperContractor, OperContractorLists } from "./oper-contractor";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class OperContractorsService {

    public operContractorsUrl = 'oper-contractors';
    public operContractorsFormValid = new BehaviorSubject<boolean>(false);

    public operContractors: OperContractor[] = [];
    public operContractor: OperContractor = <OperContractor>{};
    public operContractorLists: OperContractorLists = {};

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

    public getOperContractors(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.operContractorsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.operContractors = res.data;
                    this.operContractorLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editOperContractor(id: any) {
        this.api.get(this.operContractorsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.operContractor = res.data.model;
                    this.operContractorLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateOperContractor() {
        this.api.put(this.operContractorsUrl + '/' + this.operContractor.id, {
            model: this.operContractor,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperContractors(1);
            }
        );
    }

    public createOperContractor() {
        this.api.get(this.operContractorsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.operContractor = <OperContractor>{};
                    this.operContractorLists = res.lists
                }
            );
    }

    public storeOperContractor() {
        this.api.post(this.operContractorsUrl, {
            model: this.operContractor,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperContractors(1);
            }
        );
    }

    public async deleteOperContractor(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.operContractorsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getOperContractors(1);
                    }
                );
        } else {
            return;
        }
    }

}
