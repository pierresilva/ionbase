import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ApiService} from "../@shared/services/api.service";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {Router} from "@angular/router";
import {AuthService} from "../@shared/services/auth.service";
import {VisiParking, VisiParkingLists} from "./visi-parking";

@Injectable({
    providedIn: 'root'
})
export class VisiParkingService {

    public loading: boolean = false;

    public apiUrl: string = 'visi-parking'
    public appUrl: string = 'visitors/parking'

    public form: FormGroup = <FormGroup>{};

    public search: string = '';
    public searchQuery: string = '';
    public sortQuery: string = '';

    public fields: any[] = [
        'name',
        'code',
        'available',
    ];

    public meta = null;
    public items: VisiParking[] = [];
    public item: VisiParking = <VisiParking>{};
    public lists: VisiParkingLists = <VisiParkingLists>{};

    constructor(
        public api: ApiService,
        public alert: AlertService,
        public toast: ToastService,
        public router: Router,
        public authService: AuthService,
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
     * @param lists
     */
    public setItems(items: VisiParking[] = [], meta: any = {}, lists: VisiParkingLists = {}) {
        this.items = items.length ? items : [];
        this.meta = meta;
        this.lists = lists;
    }

    /**
     *
     * @param item
     * @param lists
     */
    public setItem(item: VisiParking = <VisiParking>{}, lists: VisiParking[] = []) {
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

        this.loading = true;

        this.setSearchQuery(fields ? fields : this.fields, this.search);
        this.setSortQuery(sort.field, sort.direction);
        this.setItem({});
        this.setItems([]);

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
        this.setItem();
        if (id && id != 0) {
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
            this.api.get(this.apiUrl + '/create')
                .subscribe(
                    (res: any) => {
                        this.setItem(<VisiParking>{}, res.lists)
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
        this.api.put(this.apiUrl + '/' + id, {model: data})
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
        this.alert.confirmation('Eliminar item?')
            .then((res: boolean) => {
                if (res) {
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
                return;
            });
    }

}
