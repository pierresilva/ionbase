import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { CompContact, CompContactLists } from "./comp-contact";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CompContactsService {

    public compContactsUrl = 'comp-contacts';
    public compContactsFormValid = new BehaviorSubject<boolean>(false);

    public compContacts: CompContact[] = [];
    public compContact: CompContact = <CompContact>{};
    public compContactLists: CompContactLists = {};

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

    public getCompContacts(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.compContactsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.compContacts = res.data;
                    this.compContactLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editCompContact(id: any) {
        this.api.get(this.compContactsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.compContact = res.data.model;
                    this.compContactLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateCompContact() {
        this.api.put(this.compContactsUrl + '/' + this.compContact.id, {
            model: this.compContact,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCompContacts(1);
            }
        );
    }

    public createCompContact() {
        this.api.get(this.compContactsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.compContact = <CompContact>{};
                    this.compContactLists = res.lists
                }
            );
    }

    public storeCompContact() {
        this.api.post(this.compContactsUrl, {
            model: this.compContact,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCompContacts(1);
            }
        );
    }

    public async deleteCompContact(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.compContactsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getCompContacts(1);
                    }
                );
        } else {
            return;
        }
    }

}
