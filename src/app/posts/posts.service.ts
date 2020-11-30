import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { Post, PostLists } from "./post";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    public postsUrl = 'posts';
    public postsFormValid = new BehaviorSubject<boolean>(false);

    public posts: Post[] = [];
    public post: Post = <Post>{};
    public postLists: PostLists = {};

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

    public getPosts(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.postsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.posts = res.data;
                    this.postLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editPost(id: any) {
        this.api.get(this.postsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.post = res.data.model;
                    this.postLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updatePost() {
        this.api.put(this.postsUrl + '/' + this.post.id, {
            model: this.post,
            pivots: {
                tag: this.post.tags,
                image: this.post.images,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getPosts(1);
            }
        );
    }

    public createPost() {
        this.api.get(this.postsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.post = <Post>{};
                    this.postLists = res.lists
                }
            );
    }

    public storePost() {
        this.api.post(this.postsUrl, {
            model: this.post,
            pivots: {
                tag: this.post.tags,
                image: this.post.images,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getPosts(1);
            }
        );
    }

    public async deletePost(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.postsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getPosts(1);
                    }
                );
        } else {
            return;
        }
    }

}
