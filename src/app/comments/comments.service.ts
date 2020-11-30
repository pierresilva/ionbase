import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { Comment, CommentLists } from "./comment";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    public commentsUrl = 'comments';
    public commentsFormValid = new BehaviorSubject<boolean>(false);

    public comments: Comment[] = [];
    public comment: Comment = <Comment>{};
    public commentLists: CommentLists = {};

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

    public getComments(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.commentsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.comments = res.data;
                    this.commentLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editComment(id: any) {
        this.api.get(this.commentsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.comment = res.data.model;
                    this.commentLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateComment() {
        this.api.put(this.commentsUrl + '/' + this.comment.id, {
            model: this.comment,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getComments(1);
            }
        );
    }

    public createComment() {
        this.api.get(this.commentsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.comment = <Comment>{};
                    this.commentLists = res.lists
                }
            );
    }

    public storeComment() {
        this.api.post(this.commentsUrl, {
            model: this.comment,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getComments(1);
            }
        );
    }

    public async deleteComment(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.commentsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getComments(1);
                    }
                );
        } else {
            return;
        }
    }

}
