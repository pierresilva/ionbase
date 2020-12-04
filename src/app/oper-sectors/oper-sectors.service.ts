import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { OperSector, OperSectorLists } from "./oper-sector";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class OperSectorsService {

    public operSectorsUrl = 'oper-sectors';
    public operSectorsFormValid = new BehaviorSubject<boolean>(false);

    public operSectors: OperSector[] = [];
    public operSector: OperSector = <OperSector>{};
    public operSectorLists: OperSectorLists = {};

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

    public getOperSectors(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.operSectorsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.operSectors = res.data;
                    this.operSectorLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editOperSector(id: any) {
        this.api.get(this.operSectorsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.operSector = res.data.model;
                    this.operSectorLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateOperSector() {
        this.api.put(this.operSectorsUrl + '/' + this.operSector.id, {
            model: this.operSector,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperSectors(1);
            }
        );
    }

    public createOperSector() {
        this.api.get(this.operSectorsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.operSector = <OperSector>{};
                    this.operSectorLists = res.lists
                }
            );
    }

    public storeOperSector() {
        this.api.post(this.operSectorsUrl, {
            model: this.operSector,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getOperSectors(1);
            }
        );
    }

    public async deleteOperSector(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.operSectorsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getOperSectors(1);
                    }
                );
        } else {
            return;
        }
    }

}
