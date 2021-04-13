import {Injectable} from '@angular/core';
import {ApiService} from "../@shared/services/api.service";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {Router} from "@angular/router";
import {NavigationService} from "../@shared/services/navigation.service";
import {AuthService} from "../@shared/services/auth.service";
import {InvoInvoice} from "./invo-invoice";
import {FormGroup} from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class InvoInvoicesService {

    public loading: boolean = false;

    public apiUrl: string = 'invo-invoices'
    public appUrl: string = 'invoicing/invoices'

    public form: FormGroup = <FormGroup>{};

    public search: string = '';
    public searchQuery: string = '';
    public sortQuery: string = '';

    public fields: any[] = [
        'invo_resolution_id',
        'visi_visitor_id',
        'visi_visitor_register_id',
        'firstname',
        'lastname',
        'document_type',
        'document',
        'date',
        'total',
        'IVA',
        'observations',
        'number',
    ];

    public meta = null;
    public items: InvoInvoice[] = [];
    public item: InvoInvoice = <InvoInvoice>{};

    constructor(
        public api: ApiService,
        public alert: AlertService,
        public toast: ToastService,
        public router: Router,
        public authService: AuthService,
        private navigation: NavigationService,
    ) {
    }

    /**
     *
     * @param field
     * @param direction
     */
    public setSortQuery(field: string = 'id', direction: string = 'desc') {
        this.sortQuery = '&q[s]=' + field + ':' + direction;
        return this.sortQuery;
    }

    /**
     *
     * @param fields
     * @param value
     * @param operator
     */
    public setSearchQuery(fields: any[] = this.fields, value: any = this.search, operator: string = 'cont') {
        let searchQuery = '';
        if (fields && fields.length) {
            for (let i = 0; i < fields.length; i++) {
                if (this.search) {
                    searchQuery = searchQuery + '&q[' + fields[i] + ':' + operator + ']=' + value
                }
            }
        }

        this.searchQuery = searchQuery;
        return this.searchQuery;
    }

    /**
     *
     * @param items
     * @param meta
     */
    public setItems(items: InvoInvoice[] = [], meta: any = {}) {
        this.items = items.length ? items : [];
        this.meta = meta;
    }

    /**
     *
     * @param item
     */
    public setItem(item: InvoInvoice = <InvoInvoice>{}) {
        this.item = item;
    }

    /**
     *
     * @param page
     * @param perPage
     * @param fields
     * @param sort
     */
    public getItems(
        page: any = 1,
        perPage: any = 10,
        fields: string[] = null,
        sort: any = {
            field: 'id',
            direction: 'desc'
        }
    ) {

        console.log('hello there');

        this.loading = true;

        this.setSearchQuery(fields ? fields : this.fields, this.search);
        this.setSortQuery(sort.field, sort.direction);
        this.setItem();

        this.api.get(this.apiUrl + '?page=' + page + this.sortQuery + this.searchQuery)
            .subscribe(
                (res: any) => {
                    this.setItems(res.data, res.meta);
                    this.loading = false;
                },
                (err: any) => {
                    console.log(err);
                    this.loading = false;
                }
            );

    }

    /**
     *
     * @param id
     */
    public getItem(id: number | null = null) {
        this.loading = true;
        if (id) {
            this.setItem();
            this.api.get(this.apiUrl)
                .subscribe(
                    (res: any) => {
                        this.setItem(res.data);
                        this.loading = false;
                    },
                    (err: any) => {
                        console.log(err);
                        this.loading = false;
                    },
                );
        } else {
            this.setItem();
        }
    }

    /**
     *
     * @param data
     * @param redirect
     */
    public saveItem(data: any, redirect: boolean = false) {
        if (data.id) {
            this.updateItem(data.id, data, redirect);
        } else {
            this.storeItem(data, redirect);
        }
    }

    /**
     *
     * @param data
     * @param redirect
     */
    public storeItem(data: any, redirect: boolean = false) {
        this.loading = true;
        this.setItem();
        this.api.post(this.apiUrl, data)
            .subscribe(
                (res: any) => {
                    this.setItem(res.data);
                    this.loading = false;
                    this.getItems();
                    if (redirect) {
                        this.router.navigateByUrl('/' + this.appUrl)
                    }
                },
                (err: any) => {
                    console.log(err);
                    this.loading = false;
                },
            );
    }

    /**
     *
     * @param id
     * @param data
     * @param redirect
     */
    public updateItem(id: number, data: any, redirect: boolean = false) {
        this.loading = true;
        this.setItem();
        this.api.post(this.apiUrl + '/' + id, data)
            .subscribe(
                (res: any) => {
                    this.setItem(res.data);
                    this.loading = false;
                    this.getItems();
                    if (redirect) {
                        this.router.navigateByUrl('/' + this.appUrl)
                    }
                },
                (err: any) => {
                    console.log(err);
                    this.loading = false;
                },
            );
    }

    /**
     *
     * @param id
     * @param redirect
     */
    public deleteItem(id: number, redirect: any = true) {
        this.loading = true;
        this.api.delete(this.apiUrl + '/' + id, {})
            .subscribe(
                (res: any) => {
                    this.setItem();
                    this.loading = false;
                    this.getItems();
                    if (redirect) {
                        this.router.navigateByUrl('/' + this.appUrl)
                    }
                },
                (err: any) => {
                    console.log(err);
                    this.loading = false;
                },
            );
    }
}
