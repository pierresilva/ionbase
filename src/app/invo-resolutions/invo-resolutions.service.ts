import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ApiService} from "../@shared/services/api.service";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {Router} from "@angular/router";
import {AuthService} from "../@shared/services/auth.service";
import {NavigationService} from "../@shared/services/navigation.service";
import {InvoResolution, InvoResolutionLists} from "./invo-resolution";

@Injectable({
  providedIn: 'root'
})
export class InvoResolutionsService {

    public loading: boolean = false;

    public apiUrl: string = 'invo-resolutions'
    public appUrl: string = 'invoicing/resolutions'

    public form: FormGroup = <FormGroup>{};

    public search: string = '';
    public searchQuery: string = '';
    public sortQuery: string = '';

    public fields: any[] = [
        'type',
        'number',
        'date_from',
        'date_to',
        'months',
        'initial',
        'final',
    ];

    public meta = null;
    public items: InvoResolution[] = [];
    public item: InvoResolution = <InvoResolution>{};
    public lists: InvoResolutionLists = <InvoResolutionLists>{};

  constructor(
      public api: ApiService,
      public alert: AlertService,
      public toast: ToastService,
      public router: Router,
      public authService: AuthService,
      private navigation: NavigationService,
  ) { }

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
     * @param lists
     */
    public setItems(items: InvoResolution[] = [], meta: any = {}, lists: InvoResolutionLists = {}) {
        this.items = items.length ? items : [];
        this.meta = meta;
        this.lists = lists;
    }

    /**
     *
     * @param item
     * @param lists
     */
    public setItem(item: InvoResolution = <InvoResolution>{}, lists: InvoResolution[] = []) {
        this.item = item;
        this.lists = lists;
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
                    this.setItems(res.data, res.meta, res.lists);
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
        if (id && id != 0) {
            this.setItem();
            this.api.get(this.apiUrl + '/' + id)
                .subscribe(
                    (res: any) => {
                        this.setItem(res.data, res.lists);
                        this.loading = false;
                    },
                    (err: any) => {
                        console.log(err);
                        this.loading = false;
                    },
                );
        } else {
            this.setItem();
            this.api.get(this.apiUrl + '/create')
                .subscribe(
                    (res: any) => {
                        this.setItem(<InvoResolution>{}, res.lists)
                        this.loading = false;
                    },
                    (err: any) => {
                        console.log(err);
                        this.loading = false;
                    },
                );
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
        this.api.post(this.apiUrl, {model: data})
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
        this.api.post(this.apiUrl + '/' + id, {model: data})
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
