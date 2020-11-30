import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { Image, ImageLists } from "./image";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class ImagesService {

    public imagesUrl = 'images';
    public imagesFormValid = new BehaviorSubject<boolean>(false);

    public images: Image[] = [];
    public image: Image = <Image>{};
    public imageLists: ImageLists = {};

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

    public getImages(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.imagesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.images = res.data;
                    this.imageLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editImage(id: any) {
        this.api.get(this.imagesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.image = res.data.model;
                    this.imageLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateImage() {
        this.api.put(this.imagesUrl + '/' + this.image.id, {
            model: this.image,
            pivots: {
                post: this.image.posts,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getImages(1);
            }
        );
    }

    public createImage() {
        this.api.get(this.imagesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.image = <Image>{};
                    this.imageLists = res.lists
                }
            );
    }

    public storeImage() {
        this.api.post(this.imagesUrl, {
            model: this.image,
            pivots: {
                post: this.image.posts,
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getImages(1);
            }
        );
    }

    public async deleteImage(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.imagesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getImages(1);
                    }
                );
        } else {
            return;
        }
    }

}
