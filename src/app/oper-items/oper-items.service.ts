import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { OperItem, OperItemLists } from "./oper-item";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class OperItemsService {

    public operItemsUrl = 'oper-items';
    public operItemsFormValid = new BehaviorSubject<boolean>(false);

    public operItems: OperItem[] = [];
    public operItem: OperItem = <OperItem>{};
    public operItemLists: OperItemLists = {};

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
// generated section
    public getOperItems(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.operItemsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.operItems = res.data;
                    this.operItemLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editOperItem(id: any) {
        this.api.get(this.operItemsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.operItem = res.data.model;
                    this.operItemLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateOperItem() {
        this.api.put(this.operItemsUrl + '/' + this.operItem.id, {
            model: this.operItem,
            pivots: {
                oper_corrective_maintenance: this.operItem.oper_corrective_maintenances,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperItems(1);
            }
        );
    }

    public createOperItem() {
        this.api.get(this.operItemsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.operItem = <OperItem>{};
                    this.operItemLists = res.lists
                }
            );
    }

    public storeOperItem() {
        this.api.post(this.operItemsUrl, {
            model: this.operItem,
            pivots: {
                oper_corrective_maintenance: this.operItem.oper_corrective_maintenances,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperItems(1);
            }
        );
    }

    public async deleteOperItem(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.operItemsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getOperItems(1);
                    }
                );
        } else {
            return;
        }
    }
// end generated section

}
