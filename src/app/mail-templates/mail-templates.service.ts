import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { MailTemplate, MailTemplateLists } from "./mail-template";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class MailTemplatesService {

    public mailTemplatesUrl = 'mail-templates';
    public mailTemplatesFormValid = new BehaviorSubject<boolean>(false);

    public mailTemplates: MailTemplate[] = [];
    public mailTemplate: MailTemplate = <MailTemplate>{};
    public mailTemplateLists: MailTemplateLists = {};

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

    public getMailTemplates(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.mailTemplatesUrl + '?page=' + page + '&perPage=' + perPage + '&q[subject:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.mailTemplates = res.data;
                    this.mailTemplateLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editMailTemplate(id: any) {
        this.api.get(this.mailTemplatesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.mailTemplate = res.data.model;
                    this.mailTemplateLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateMailTemplate() {
        this.api.put(this.mailTemplatesUrl + '/' + this.mailTemplate.id, {
            model: this.mailTemplate,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getMailTemplates(1);
            }
        );
    }

    public createMailTemplate() {
        this.api.get(this.mailTemplatesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.mailTemplate = <MailTemplate>{};
                    this.mailTemplateLists = res.lists
                }
            );
    }

    public storeMailTemplate() {
        this.api.post(this.mailTemplatesUrl, {
            model: this.mailTemplate,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getMailTemplates(1);
            }
        );
    }

    public async deleteMailTemplate(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.mailTemplatesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getMailTemplates(1);
                    }
                );
        } else {
            return;
        }
    }

}
