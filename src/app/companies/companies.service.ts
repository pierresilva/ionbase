import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { Company, CompanyLists } from "./company";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CompaniesService {

    public companiesUrl = 'companies';
    public companiesFormValid = new BehaviorSubject<boolean>(false);

    public companies: Company[] = [];
    public company: Company = <Company>{};
    public companyLists: CompanyLists = {};

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

    public getCompanies(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.companiesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.companies = res.data;
                    this.companyLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editCompany(id: any) {
        this.api.get(this.companiesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.company = res.data.model;
                    this.companyLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateCompany() {
        this.api.put(this.companiesUrl + '/' + this.company.id, {
            model: this.company,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCompanies(1);
            }
        );
    }

    public createCompany() {
        this.api.get(this.companiesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.company = <Company>{};
                    this.companyLists = res.lists
                }
            );
    }

    public storeCompany() {
        this.api.post(this.companiesUrl, {
            model: this.company,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCompanies(1);
            }
        );
    }

    public async deleteCompany(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.companiesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getCompanies(1);
                    }
                );
        } else {
            return;
        }
    }

}
