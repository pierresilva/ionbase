import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { Tag, TagLists } from "./tag";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class TagsService {

    public tagsUrl = 'tags';
    public tagsFormValid = new BehaviorSubject<boolean>(false);

    public tags: Tag[] = [];
    public tag: Tag = <Tag>{};
    public tagLists: TagLists = {};

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

    public getTags(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.tagsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.tags = res.data;
                    this.tagLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editTag(id: any) {
        this.api.get(this.tagsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.tag = res.data.model;
                    this.tagLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateTag() {
        this.api.put(this.tagsUrl + '/' + this.tag.id, {
            model: this.tag,
            pivots: {
                post: this.tag.posts,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getTags(1);
            }
        );
    }

    public createTag() {
        this.api.get(this.tagsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.tag = <Tag>{};
                    this.tagLists = res.lists
                }
            );
    }

    public storeTag() {
        this.api.post(this.tagsUrl, {
            model: this.tag,
            pivots: {
                post: this.tag.posts,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getTags(1);
            }
        );
    }

    public async deleteTag(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.tagsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getTags(1);
                    }
                );
        } else {
            return;
        }
    }

}
