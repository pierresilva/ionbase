import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Meta} from "../@shared/interfaces/meta";
import {BoarMessage, BoarMessageLists} from "./boar-message";
import {ApiService} from "../@shared/services/api.service";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {Router} from "@angular/router";
import {NavigationService} from "../@shared/services/navigation.service";

@Injectable({
  providedIn: 'root'
})
export class BoarMessagesService {
    public boarMessagesUrl = 'boar-messages';
    public boarMessagesFormValid = new BehaviorSubject<boolean>(false);

    public boarMessages: BoarMessage[] = [];
    public boarMessage: BoarMessage = <BoarMessage>{};
    public boarMessagesLists: BoarMessageLists = {};

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
  ) { }

    public getBoarMessages(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.boarMessagesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    this.boarMessages = res.data;
                    this.boarMessagesLists = res.lists;
                    this.meta = res.meta;
                    // document.getElementById('pages-content').scrollToTop(300);
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editBoarMessage(id: any) {
        this.api.get(this.boarMessagesUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.boarMessage = res.data.model;
                    this.boarMessagesLists = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateBoarMessage() {
        this.api.put(this.boarMessagesUrl + '/' + this.boarMessage.id, {
            model: this.boarMessage,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getBoarMessages(1);
            }
        );
    }

    public createBoarMessage() {
        this.api.get(this.boarMessagesUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.boarMessage = <BoarMessage>{};
                    this.boarMessagesLists = res.lists
                }
            );
    }

    public storeBoarMessage() {
        this.api.post(this.boarMessagesUrl, {
            model: this.boarMessage,
            pivots: {
            }
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getBoarMessages(1);
            }
        );
    }

    public async deleteBoardMessage(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.boarMessagesUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getBoarMessages(1);
                    }
                );
        } else {
            return;
        }
    }
}
