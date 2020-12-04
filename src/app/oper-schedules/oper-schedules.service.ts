import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { OperSchedule, OperScheduleLists } from "./oper-schedule";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class OperSchedulesService {

    public operSchedulesUrl = 'oper-schedules';
    public operSchedulesFormValid = new BehaviorSubject<boolean>(false);

    public operSchedules: OperSchedule[] = [];
    public operSchedule: OperSchedule = <OperSchedule>{};
    public operScheduleLists: OperScheduleLists = {};

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

    public getOperSchedules(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.operSchedulesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.operSchedules = res.data;
                    this.operScheduleLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editOperSchedule(id: any) {
        this.api.get(this.operSchedulesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.operSchedule = res.data.model;
                    this.operScheduleLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateOperSchedule() {
        this.api.put(this.operSchedulesUrl + '/' + this.operSchedule.id, {
            model: this.operSchedule,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperSchedules(1);
            }
        );
    }

    public createOperSchedule() {
        this.api.get(this.operSchedulesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.operSchedule = <OperSchedule>{};
                    this.operScheduleLists = res.lists
                }
            );
    }

    public storeOperSchedule() {
        this.api.post(this.operSchedulesUrl, {
            model: this.operSchedule,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperSchedules(1);
            }
        );
    }

    public async deleteOperSchedule(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.operSchedulesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getOperSchedules(1);
                    }
                );
        } else {
            return;
        }
    }

}
