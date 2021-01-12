import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { OperMaintenanceRepair, OperMaintenanceRepairLists } from "./oper-maintenance-repair";
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
export class OperMaintenanceRepairsService {

    public operMaintenanceRepairsUrl = 'oper-maintenance-repairs';
    public operMaintenanceRepairsFormValid = new BehaviorSubject<boolean>(false);

    public operMaintenanceRepairs: OperMaintenanceRepair[] = [];
    public operMaintenanceRepair: OperMaintenanceRepair = <OperMaintenanceRepair>{};
    public operMaintenanceRepairLists: OperMaintenanceRepairLists = {};

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
    public getOperMaintenanceRepairs(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.operMaintenanceRepairsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.operMaintenanceRepairs = res.data;
                    this.operMaintenanceRepairLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editOperMaintenanceRepair(id: any) {
        this.api.get(this.operMaintenanceRepairsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.operMaintenanceRepair = res.data.model;
                    this.operMaintenanceRepairLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateOperMaintenanceRepair() {
        this.api.put(this.operMaintenanceRepairsUrl + '/' + this.operMaintenanceRepair.id, {
            model: this.operMaintenanceRepair,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperMaintenanceRepairs(1);
            }
        );
    }

    public createOperMaintenanceRepair() {
        this.api.get(this.operMaintenanceRepairsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.operMaintenanceRepair = <OperMaintenanceRepair>{};
                    this.operMaintenanceRepair.time = moment().format('YYYY-MM-DD HH:mm');
                    this.operMaintenanceRepair.date = moment().format('YYYY-MM-DD HH:mm');
                    this.operMaintenanceRepairLists = res.lists
                }
            );
    }

    public storeOperMaintenanceRepair() {
        this.api.post(this.operMaintenanceRepairsUrl, {
            model: this.operMaintenanceRepair,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperMaintenanceRepairs(1);
            }
        );
    }

    public async deleteOperMaintenanceRepair(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.operMaintenanceRepairsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getOperMaintenanceRepairs(1);
                    }
                );
        } else {
            return;
        }
    }
// end generated section

}
