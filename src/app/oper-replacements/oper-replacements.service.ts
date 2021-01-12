import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { OperReplacement, OperReplacementLists } from "./oper-replacement";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class OperReplacementsService {

    public operReplacementsUrl = 'oper-replacements';
    public operReplacementsFormValid = new BehaviorSubject<boolean>(false);

    public operReplacements: OperReplacement[] = [];
    public operReplacement: OperReplacement = <OperReplacement>{};
    public operReplacementLists: OperReplacementLists = {};

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
    public getOperReplacements(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.operReplacementsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.operReplacements = res.data;
                    this.operReplacementLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editOperReplacement(id: any) {
        this.api.get(this.operReplacementsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.operReplacement = res.data.model;
                    this.operReplacementLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateOperReplacement() {
        this.api.put(this.operReplacementsUrl + '/' + this.operReplacement.id, {
            model: this.operReplacement,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperReplacements(1);
            }
        );
    }

    public createOperReplacement() {
        this.api.get(this.operReplacementsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.operReplacement = <OperReplacement>{};
                    this.operReplacement.time = moment().format('HH:mm');
                    this.operReplacement.date = moment().format('YYYY-MM-DD');
                    this.operReplacementLists = res.lists
                }
            );
    }

    public storeOperReplacement() {
        this.api.post(this.operReplacementsUrl, {
            model: this.operReplacement,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperReplacements(1);
            }
        );
    }

    public async deleteOperReplacement(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.operReplacementsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getOperReplacements(1);
                    }
                );
        } else {
            return;
        }
    }
// end generated section

}
