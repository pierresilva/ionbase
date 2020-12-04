import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../@shared/services/api.service";
import { CounMember, CounMemberLists } from "./coun-member";
import {Meta} from "../@shared/interfaces/meta";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {NavigationService} from '../@shared/services/navigation.service'
import {BehaviorSubject} from "rxjs";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class CounMembersService {

    public counMembersUrl = 'coun-members';
    public counMembersFormValid = new BehaviorSubject<boolean>(false);

    public counMembers: CounMember[] = [];
    public counMember: CounMember = <CounMember>{};
    public counMemberLists: CounMemberLists = {};

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

    public getCounMembers(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.counMembersUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.counMembers = res.data;
                    this.counMemberLists = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editCounMember(id: any) {
        this.api.get(this.counMembersUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.counMember = res.data.model;
                    this.counMemberLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateCounMember() {
        this.api.put(this.counMembersUrl + '/' + this.counMember.id, {
            model: this.counMember,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCounMembers(1);
            }
        );
    }

    public createCounMember() {
        this.api.get(this.counMembersUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.counMember = <CounMember>{};
                    this.counMemberLists = res.lists
                }
            );
    }

    public storeCounMember() {
        this.api.post(this.counMembersUrl, {
            model: this.counMember,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getCounMembers(1);
            }
        );
    }

    public async deleteCounMember(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.counMembersUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getCounMembers(1);
                    }
                );
        } else {
            return;
        }
    }

}
