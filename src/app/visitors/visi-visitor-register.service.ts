import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HousUnit} from "../hous-units/hous-unit";
import {VisiVisitor, VisiVisitorLists} from "./visi-visitor";
import {Meta} from "../@shared/interfaces/meta";
import {ApiService} from "../@shared/services/api.service";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {Router} from "@angular/router";
import {NavigationService} from "../@shared/services/navigation.service";
import {AuthService} from "../@shared/services/auth.service";
import {VisiVisitorRegister, VisiVisitorRegisterLists} from "./visi-visitor-register";

@Injectable({
  providedIn: 'root'
})
export class VisiVisitorRegisterService {

    public userHousUnit = new BehaviorSubject(<HousUnit>{});

    public visiVisitorRegistersUrl = 'visi-visitor-registers';
    public visiVisitorRegistersFormValid = new BehaviorSubject<boolean>(false);

    public visiVisitorRegisters: VisiVisitorRegister[] = [];
    public visiVisitor: VisiVisitor = <VisiVisitor>{};
    public visiVisitorRegister: VisiVisitorRegister = <VisiVisitor>{};
    public visiVisitorRegisterList: VisiVisitorRegisterLists = <VisiVisitorRegisterLists>{};

    public searchValue = '';
    public perPage = 1000;

    public meta: Meta = null;

    public page = 1;

    public pagesContent = document.getElementById('pages-content');

    constructor(
        public api: ApiService,
        public alert: AlertService,
        public toast: ToastService,
        public router: Router,
        private navigation: NavigationService,
        public authService: AuthService
    ) {
        this.getHouseUnit().then((res: any) => {
            if (res.data.length) {
                this.userHousUnit.next(res.data[0]);
            }
        });

        this.userHousUnit.subscribe((data: any) => {
            console.log(data);
            this.visiVisitorRegister.hous_unit_id = data.id;
            // this.getVisiVisitorRegisters(1, this.perPage)
        });
    }

    public getVisiVisitorRegisters(page: any = this.page, perPage: any = this.perPage) {

        let queryString: any = '?page=' + page +
            '&perPage=' + perPage +
            '&q[visiVisitor.full_name:cont]=' + this.searchValue +
            '&q[s]=entry_date:desc';

        this.api.get(this.visiVisitorRegistersUrl + queryString)
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    console.log('servicio lists', res.lists);
                    this.visiVisitorRegisters = res.data;
                    this.visiVisitorRegisterList = res.lists;
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public getAllVisiVisitorRegisters(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.visiVisitorRegistersUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue + '&all=tue')
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    // document.getElementById('pages-content').scrollToTop(300);
                    this.visiVisitorRegisterss = res.data;
                    this.visiVisitorRegisterList = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editVisiVisitorRegisters(id: any) {
        this.api.get(this.visiVisitorRegistersUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.visiVisitorRegister = res.data.model;
                    this.visiVisitorRegisterList = res.lists;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateVisiVisitorRegisters() {
        this.api.put(this.visiVisitorRegistersUrl + '/' + this.visiVisitorRegister.id, {
            model: this.visiVisitorRegister,
            pivots: {}
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getVisiVisitorRegisters(1);
            }
        );
    }

    public createVisiVisitorRegisters() {
        this.api.get(this.visiVisitorRegistersUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.visiVisitorRegister = <VisiVisitor>{};
                    this.visiVisitorRegisterList = res.lists;
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.navigation.back();
                    this.getVisiVisitorRegisters(1);
                }
            );
    }

    public storeVisiVisitorRegister() {
        this.api.post(this.visiVisitorRegistersUrl, {
            model: this.visiVisitorRegister,
            pivots: {}
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getVisiVisitorRegisters(1);
            }
        );
    }

    public saveVisiVisitorRegisters() {
        if (this.visiVisitorRegister.id) {
            this.updateVisiVisitorRegisters();
        } else {
            this.storeVisiVisitorRegister();
        }
        /*this.api.post(this.visiVisitorRegistersUrl, {
            model: this.visiVisitorRegister,
            pivots: {}
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getVisiVisitors(1);
            }
        );*/
    }

    public async deleteVisiVisitorRegisters(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.visiVisitorRegistersUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getVisiVisitorRegisters(1);
                    }
                );
        } else {
            return;
        }
    }

    clearVisiVisitorRegister() {
        this.visiVisitorRegister = <VisiVisitorRegister>{};
    }

    async getVisiVisitorRegister(id: any) {
        return await this.api.get(this.visiVisitorRegistersUrl + '/' + id).toPromise();
    }

    async getHouseUnit() {
        return await this.api.get('hous-units?q[contact_email:eq]=' + this.authService.getUser('email')).toPromise();
    }
}
