import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { OperMachine, OperMachineLists } from "./oper-machine";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class OperMachinesService {

    public operMachinesUrl = 'oper-machines';
    public operMachinesFormValid = new BehaviorSubject<boolean>(false);

    public operMachines: OperMachine[] = [];
    public operMachine: OperMachine = <OperMachine>{};
    public operMachineLists: OperMachineLists = {};

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
    public getOperMachines(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.operMachinesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.operMachines = res.data;
                    this.operMachineLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editOperMachine(id: any) {
        this.api.get(this.operMachinesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.operMachine = res.data.model;
                    this.operMachineLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateOperMachine() {
        this.api.put(this.operMachinesUrl + '/' + this.operMachine.id, {
            model: this.operMachine,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperMachines(1);
            }
        );
    }

    public createOperMachine() {
        this.api.get(this.operMachinesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.operMachine = <OperMachine>{};
                    this.operMachineLists = res.lists
                }
            );
    }

    public storeOperMachine() {
        this.api.post(this.operMachinesUrl, {
            model: this.operMachine,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperMachines(1);
            }
        );
    }

    public async deleteOperMachine(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.operMachinesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getOperMachines(1);
                    }
                );
        } else {
            return;
        }
    }
// end generated section

}
