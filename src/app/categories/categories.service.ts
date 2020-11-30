import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { Category, CategoryLists } from "./category";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    public categoriesUrl = 'categories';
    public categoriesFormValid = new BehaviorSubject<boolean>(false);

    public categories: Category[] = [];
    public category: Category = <Category>{};
    public categoryLists: CategoryLists = {};

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

    public getCategories(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.categoriesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.categories = res.data;
                    this.categoryLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editCategory(id: any) {
        this.api.get(this.categoriesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.category = res.data.model;
                    this.categoryLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateCategory() {
        this.api.put(this.categoriesUrl + '/' + this.category.id, {
            model: this.category,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCategories(1);
            }
        );
    }

    public createCategory() {
        this.api.get(this.categoriesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.category = <Category>{};
                    this.categoryLists = res.lists
                }
            );
    }

    public storeCategory() {
        this.api.post(this.categoriesUrl, {
            model: this.category,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCategories(1);
            }
        );
    }

    public async deleteCategory(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.categoriesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getCategories(1);
                    }
                );
        } else {
            return;
        }
    }

}
