import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { OperMovement, OperMovementLists } from "./oper-movement";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class OperMovementsService {

    public operMovementsUrl = 'oper-movements';
    public operMovementsFormValid = new BehaviorSubject<boolean>(false);

    public operMovements: OperMovement[] = [];
    public operMovement: OperMovement = <OperMovement>{};
    public operMovementLists: OperMovementLists = {};

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

    public getOperMovements(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.operMovementsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.operMovements = res.data;
                    this.operMovementLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editOperMovement(id: any) {
        this.api.get(this.operMovementsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.operMovement = res.data.model;
                    this.operMovementLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateOperMovement() {
        this.api.put(this.operMovementsUrl + '/' + this.operMovement.id, {
            model: this.operMovement,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperMovements(1);
            }
        );
    }

    public createOperMovement() {
        this.api.get(this.operMovementsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.operMovement = <OperMovement>{};
                    this.operMovementLists = res.lists
                }
            );
    }

    public storeOperMovement() {
        this.api.post(this.operMovementsUrl, {
            model: this.operMovement,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperMovements(1);
            }
        );
    }

    public async deleteOperMovement(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.operMovementsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getOperMovements(1);
                    }
                );
        } else {
            return;
        }
    }

}
