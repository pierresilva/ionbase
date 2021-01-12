import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { OperCorrectiveMaintenance, OperCorrectiveMaintenanceLists } from "./oper-corrective-maintenance";
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
export class OperCorrectiveMaintenancesService {

    public operCorrectiveMaintenancesUrl = 'oper-corrective-maintenances';
    public operCorrectiveMaintenancesFormValid = new BehaviorSubject<boolean>(false);

    public operCorrectiveMaintenances: OperCorrectiveMaintenance[] = [];
    public operCorrectiveMaintenance: OperCorrectiveMaintenance = <OperCorrectiveMaintenance>{};
    public operCorrectiveMaintenanceLists: OperCorrectiveMaintenanceLists = {};

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
    public getOperCorrectiveMaintenances(page: any = this.page, perPage: any = this.perPage, status = null, from = null, to = null) {

        this.api.get(
            this.operCorrectiveMaintenancesUrl + '?page=' + page +
            '&perPage=' + perPage +
            (status ? '&q[status:eq]=' + status : '') +
            (from ? '&q[operMaintenanceRepairs.date:gt]=' + from : '') +
            (to ? '&q[operMaintenanceRepairs.date:lt]=' + to : '') +
            '&q[name:cont]=' + this.searchValue
        )
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.operCorrectiveMaintenances = res.data;
                    this.operCorrectiveMaintenanceLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editOperCorrectiveMaintenance(id: any) {
        this.api.get(this.operCorrectiveMaintenancesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.operCorrectiveMaintenance = res.data.model;
                    this.operCorrectiveMaintenanceLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateOperCorrectiveMaintenance() {
        this.api.put(this.operCorrectiveMaintenancesUrl + '/' + this.operCorrectiveMaintenance.id, {
            model: this.operCorrectiveMaintenance,
            pivots: {
                oper_item: this.operCorrectiveMaintenance.oper_items,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperCorrectiveMaintenances(1);
            }
        );
    }

    public createOperCorrectiveMaintenance() {
        this.api.get(this.operCorrectiveMaintenancesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.operCorrectiveMaintenance = <OperCorrectiveMaintenance>{};
                    this.operCorrectiveMaintenance.date = moment().format('YYYY-MM-DD');
                    this.operCorrectiveMaintenance.time = moment().format('HH:mm');
                    this.operCorrectiveMaintenance.status = 'pending';
                    this.operCorrectiveMaintenanceLists = res.lists
                }
            );
    }

    public storeOperCorrectiveMaintenance() {
        this.api.post(this.operCorrectiveMaintenancesUrl, {
            model: this.operCorrectiveMaintenance,
            pivots: {
                oper_item: this.operCorrectiveMaintenance.oper_items,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperCorrectiveMaintenances(1);
            }
        );
    }

    public async deleteOperCorrectiveMaintenance(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.operCorrectiveMaintenancesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getOperCorrectiveMaintenances(1);
                    }
                );
        } else {
            return;
        }
    }
// end generated section

}
