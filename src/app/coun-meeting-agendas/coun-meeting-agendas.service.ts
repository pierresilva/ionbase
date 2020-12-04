import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { CounMeetingAgenda, CounMeetingAgendaLists } from "./coun-meeting-agenda";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CounMeetingAgendasService {

    public counMeetingAgendasUrl = 'coun-meeting-agendas';
    public counMeetingAgendasFormValid = new BehaviorSubject<boolean>(false);

    public counMeetingAgendas: CounMeetingAgenda[] = [];
    public counMeetingAgenda: CounMeetingAgenda = <CounMeetingAgenda>{};
    public counMeetingAgendaLists: CounMeetingAgendaLists = {};

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

    public getCounMeetingAgendas(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.counMeetingAgendasUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.counMeetingAgendas = res.data;
                    this.counMeetingAgendaLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editCounMeetingAgenda(id: any) {
        this.api.get(this.counMeetingAgendasUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.counMeetingAgenda = res.data.model;
                    this.counMeetingAgendaLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateCounMeetingAgenda() {
        this.api.put(this.counMeetingAgendasUrl + '/' + this.counMeetingAgenda.id, {
            model: this.counMeetingAgenda,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCounMeetingAgendas(1);
            }
        );
    }

    public createCounMeetingAgenda() {
        this.api.get(this.counMeetingAgendasUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.counMeetingAgenda = <CounMeetingAgenda>{};
                    this.counMeetingAgendaLists = res.lists
                }
            );
    }

    public storeCounMeetingAgenda() {
        this.api.post(this.counMeetingAgendasUrl, {
            model: this.counMeetingAgenda,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCounMeetingAgendas(1);
            }
        );
    }

    public async deleteCounMeetingAgenda(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.counMeetingAgendasUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getCounMeetingAgendas(1);
                    }
                );
        } else {
            return;
        }
    }

}
