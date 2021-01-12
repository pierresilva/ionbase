import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { OperPreventiveMaintenance, OperPreventiveMaintenanceLists } from "./oper-preventive-maintenance";
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
export class OperPreventiveMaintenancesService {

    public operPreventiveMaintenancesUrl = 'oper-preventive-maintenances';
    public operPreventiveMaintenancesFormValid = new BehaviorSubject<boolean>(false);

    public operPreventiveMaintenances: OperPreventiveMaintenance[] = [];
    public operPreventiveMaintenance: OperPreventiveMaintenance = <OperPreventiveMaintenance>{};
    public operPreventiveMaintenanceLists: OperPreventiveMaintenanceLists = {};

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
    public getOperPreventiveMaintenances(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.operPreventiveMaintenancesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.operPreventiveMaintenances = res.data;
                    this.operPreventiveMaintenanceLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editOperPreventiveMaintenance(id: any) {
        this.api.get(this.operPreventiveMaintenancesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.operPreventiveMaintenance = res.data.model;
                    this.operPreventiveMaintenanceLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateOperPreventiveMaintenance() {
        this.api.put(this.operPreventiveMaintenancesUrl + '/' + this.operPreventiveMaintenance.id, {
            model: this.operPreventiveMaintenance,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperPreventiveMaintenances(1);
            }
        );
    }

    public createOperPreventiveMaintenance() {
        this.api.get(this.operPreventiveMaintenancesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.operPreventiveMaintenance = <OperPreventiveMaintenance>{};
                    this.operPreventiveMaintenance.time = moment().format('HH:mm');
                    this.operPreventiveMaintenance.date = moment().format('YYYY-MM-DD');
                    this.operPreventiveMaintenanceLists = res.lists
                }
            );
    }

    public storeOperPreventiveMaintenance() {
        this.api.post(this.operPreventiveMaintenancesUrl, {
            model: this.operPreventiveMaintenance,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperPreventiveMaintenances(1);
            }
        );
    }

    public async deleteOperPreventiveMaintenance(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.operPreventiveMaintenancesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getOperPreventiveMaintenances(1);
                    }
                );
        } else {
            return;
        }
    }
// end generated section

}
