import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { CorrPacket, CorrPacketLists } from "./corr-packet";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CorrPacketsService {

    public corrPacketsUrl = 'corr-packets';
    public corrPacketsFormValid = new BehaviorSubject<boolean>(false);

    public corrPackets: CorrPacket[] = [];
    public corrPacket: CorrPacket = <CorrPacket>{};
    public corrPacketLists: CorrPacketLists = {};

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

    public getCorrPackets(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.corrPacketsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.corrPackets = res.data;
                    this.corrPacketLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editCorrPacket(id: any) {
        this.api.get(this.corrPacketsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.corrPacket = res.data.model;
                    this.corrPacketLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateCorrPacket() {
        this.api.put(this.corrPacketsUrl + '/' + this.corrPacket.id, {
            model: this.corrPacket,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCorrPackets(1);
            }
        );
    }

    public createCorrPacket() {
        this.api.get(this.corrPacketsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.corrPacket = <CorrPacket>{};
                    this.corrPacketLists = res.lists
                }
            );
    }

    public storeCorrPacket() {
        this.api.post(this.corrPacketsUrl, {
            model: this.corrPacket,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCorrPackets(1);
            }
        );
    }

    public async deleteCorrPacket(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.corrPacketsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getCorrPackets(1);
                    }
                );
        } else {
            return;
        }
    }

}
