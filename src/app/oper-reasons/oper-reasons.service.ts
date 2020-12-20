import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { OperReason, OperReasonLists } from "./oper-reason";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class OperReasonsService {

    public operReasonsUrl = 'oper-reasons';
    public operReasonsFormValid = new BehaviorSubject<boolean>(false);

    public operReasons: OperReason[] = [];
    public operReason: OperReason = <OperReason>{};
    public operReasonLists: OperReasonLists = {};

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
    public getOperReasons(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.operReasonsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.operReasons = res.data;
                    this.operReasonLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editOperReason(id: any) {
        this.api.get(this.operReasonsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.operReason = res.data.model;
                    this.operReasonLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateOperReason() {
        this.api.put(this.operReasonsUrl + '/' + this.operReason.id, {
            model: this.operReason,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperReasons(1);
            }
        );
    }

    public createOperReason() {
        this.api.get(this.operReasonsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.operReason = <OperReason>{};
                    this.operReasonLists = res.lists
                }
            );
    }

    public storeOperReason() {
        this.api.post(this.operReasonsUrl, {
            model: this.operReason,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperReasons(1);
            }
        );
    }

    public async deleteOperReason(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.operReasonsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getOperReasons(1);
                    }
                );
        } else {
            return;
        }
    }
// end generated section

}
