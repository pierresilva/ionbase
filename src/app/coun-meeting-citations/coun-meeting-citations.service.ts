import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { CounMeetingCitation, CounMeetingCitationLists } from "./coun-meeting-citation";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CounMeetingCitationsService {

    public counMeetingCitationsUrl = 'coun-meeting-citations';
    public counMeetingCitationsFormValid = new BehaviorSubject<boolean>(false);

    public counMeetingCitations: CounMeetingCitation[] = [];
    public counMeetingCitation: CounMeetingCitation = <CounMeetingCitation>{};
    public counMeetingCitationLists: CounMeetingCitationLists = {};

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

    public getCounMeetingCitations(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.counMeetingCitationsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.counMeetingCitations = res.data;
                    this.counMeetingCitationLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editCounMeetingCitation(id: any) {
        this.api.get(this.counMeetingCitationsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.counMeetingCitation = res.data.model;
                    this.counMeetingCitationLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateCounMeetingCitation() {
        this.api.put(this.counMeetingCitationsUrl + '/' + this.counMeetingCitation.id, {
            model: this.counMeetingCitation,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCounMeetingCitations(1);
            }
        );
    }

    public createCounMeetingCitation() {
        this.api.get(this.counMeetingCitationsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.counMeetingCitation = <CounMeetingCitation>{};
                    this.counMeetingCitationLists = res.lists
                }
            );
    }

    public storeCounMeetingCitation() {
        this.api.post(this.counMeetingCitationsUrl, {
            model: this.counMeetingCitation,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCounMeetingCitations(1);
            }
        );
    }

    public async deleteCounMeetingCitation(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.counMeetingCitationsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getCounMeetingCitations(1);
                    }
                );
        } else {
            return;
        }
    }

}
