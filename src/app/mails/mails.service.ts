import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { Mail, MailLists } from "./mail";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class MailsService {

    public mailsUrl = 'mails';
    public mailsFormValid = new BehaviorSubject<boolean>(false);

    public mails: Mail[] = [];
    public mail: Mail = <Mail>{};
    public mailLists: MailLists = {};

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

    public getMails(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.mailsUrl + '?page=' + page + '&perPage=' + perPage + '&q[subject:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.mails = res.data;
                    this.mailLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editMail(id: any) {
        this.api.get(this.mailsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.mail = res.data.model;
                    this.mailLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateMail() {
        this.api.put(this.mailsUrl + '/' + this.mail.id, {
            model: this.mail,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getMails(1);
            }
        );
    }

    public createMail() {
        this.api.get(this.mailsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.mail = <Mail>{};
                    this.mailLists = res.lists
                }
            );
    }

    public storeMail() {
        this.api.post(this.mailsUrl, {
            model: this.mail,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getMails(1);
            }
        );
    }

    public async deleteMail(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.mailsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getMails(1);
                    }
                );
        } else {
            return;
        }
    }

}
