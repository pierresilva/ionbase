import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { CounMeeting, CounMeetingLists } from "./coun-meeting";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CounMeetingsService {

    public counMeetingsUrl = 'coun-meetings';
    public counMeetingsFormValid = new BehaviorSubject<boolean>(false);

    public counMeetings: CounMeeting[] = [];
    public counMeeting: CounMeeting = <CounMeeting>{};
    public counMeetingLists: CounMeetingLists = {};

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

    public getCounMeetings(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.counMeetingsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.counMeetings = res.data;
                    this.counMeetingLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editCounMeeting(id: any) {
        this.api.get(this.counMeetingsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.counMeeting = res.data.model;
                    this.counMeetingLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateCounMeeting() {
        this.api.put(this.counMeetingsUrl + '/' + this.counMeeting.id, {
            model: this.counMeeting,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCounMeetings(1);
            }
        );
    }

    public createCounMeeting() {
        this.api.get(this.counMeetingsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.counMeeting = <CounMeeting>{};
                    this.counMeetingLists = res.lists
                }
            );
    }

    public storeCounMeeting() {
        this.api.post(this.counMeetingsUrl, {
            model: this.counMeeting,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCounMeetings(1);
            }
        );
    }

    public async deleteCounMeeting(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.counMeetingsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getCounMeetings(1);
                    }
                );
        } else {
            return;
        }
    }

}
