import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { File, FileLists } from "./file";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class FilesService {

    public filesUrl = 'files';
    public filesFormValid = new BehaviorSubject<boolean>(false);

    public files: File[] = [];
    public file: File = <File>{};
    public fileLists: FileLists = {};

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

    public getFiles(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.filesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.files = res.data;
                    this.fileLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editFile(id: any) {
        this.api.get(this.filesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.file = res.data.model;
                    this.fileLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateFile() {
        this.api.put(this.filesUrl + '/' + this.file.id, {
            model: this.file,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getFiles(1);
            }
        );
    }

    public createFile() {
        this.api.get(this.filesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.file = <File>{};
                    this.fileLists = res.lists
                }
            );
    }

    public storeFile() {
        this.api.post(this.filesUrl, {
            model: this.file,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getFiles(1);
            }
        );
    }

    public async deleteFile(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.filesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getFiles(1);
                    }
                );
        } else {
            return;
        }
    }

}
