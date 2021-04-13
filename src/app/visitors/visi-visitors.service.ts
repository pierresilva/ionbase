import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {VisiVisitor, VisiVisitorLists} from "./visi-visitor";
import {Meta} from "../@shared/interfaces/meta";
import {ApiService} from "../@shared/services/api.service";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {Router} from "@angular/router";
import {NavigationService} from "../@shared/services/navigation.service";
import {AuthService} from "../@shared/services/auth.service";
import {HousUnit} from "../hous-units/hous-unit";

@Injectable({
    providedIn: 'root'
})
export class VisiVisitorsService {

    public userHousUnit = new BehaviorSubject(<HousUnit>{});

    public visiVisitorsUrl = 'visi-visitors';
    public visiVisitorsFormValid = new BehaviorSubject<boolean>(false);

    public visiVisitors: BehaviorSubject<VisiVisitor[]> = new BehaviorSubject<VisiVisitor[]>([]);
    public visiVisitor: BehaviorSubject<VisiVisitor> = new BehaviorSubject<VisiVisitor>({});
    public visiVisitorList: BehaviorSubject<VisiVisitorLists> = new BehaviorSubject<VisiVisitorLists>({});

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
        public authService: AuthService
    ) {
        this.getHouseUnit().then((res: any) => {
            if (res.data.length) {
                this.userHousUnit.next(res.data[0]);
            }
        });

        this.userHousUnit.subscribe((data: any) => {
            console.log(data);
            this.visiVisitor.value.hous_unit_id = data.id;
            this.getVisiVisitors(1, this.perPage, this.authService.getUser('id'))
        });

        this.visiVisitor.subscribe(data => {
            console.log('visiVisitor subscribe ', data);
        });
    }

    public getVisiVisitors(page: any = this.page, perPage: any = this.perPage, userId: any = null) {

        let queryString: any = '?page=' + page +
            '&perPage=' + perPage +
            '&q[full_name:cont]=' + this.searchValue +
            '&q[email:cont]=' + this.searchValue +
            '&q[phone:cont]=' + this.searchValue +
            '&q[identification:cont]=' + this.searchValue +
            (this.searchValue ||  userId ? '' : '&q[visiVisitorRegisters.departure_date:null]=null') +
            '&q[s]entry_status=asc';

        if (userId) {
            queryString = queryString + '&q[user_id:eq]=' + userId
        }

        this.api.get(this.visiVisitorsUrl + queryString)
            .subscribe(
                (res: any) => {
                    this.visiVisitor.next(<VisiVisitor>{});
                    this.visiVisitors.next([]);
                    this.visiVisitorList.next({});
                    // @ts-ignore
                    document.getElementById('pages-content').scrollToTop(300);
                    this.visiVisitors.next(res.data);
                    this.visiVisitorList.next(res.lists);
                    this.meta = res.meta;
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public getAllVisiVisitors(page: any = this.page, perPage: any = this.perPage) {

        this.api.get(this.visiVisitorsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue + '&all=tue')
            .subscribe(
                (res: any) => {
                    // @ts-ignore
                    // document.getElementById('pages-content').scrollToTop(300);
                    this.visiVisitors.next(res.data);
                    this.visiVisitorList.next(res.lists);
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public editVisiVisitors(id: any) {
        this.api.get(this.visiVisitorsUrl + '/' + id + '/edit')
            .subscribe(
                (res: any) => {
                    this.visiVisitor.next(res.data.model);
                    this.visiVisitorList.next(res.lists);
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    public updateVisiVisitors() {
        this.api.put(this.visiVisitorsUrl + '/' + this.visiVisitor.value.id, {
            model: this.visiVisitor.value,
            pivots: {}
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getVisiVisitors(1);
            }
        );
    }

    public createVisiVisitors() {
        this.api.get(this.visiVisitorsUrl + '/create')
            .subscribe(
                (res: any) => {
                    this.visiVisitor.next(<VisiVisitor>{});
                    this.visiVisitorList.next(res.lists);
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.navigation.back();
                    this.getVisiVisitors(1);
                }
            );
    }

    public storeVisiVisitor() {
        this.api.post(this.visiVisitorsUrl, {
            model: this.visiVisitor.value,
            pivots: {}
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getVisiVisitors(1);
            }
        );
    }

    public saveVisiVisitors() {
        if (this.visiVisitor.value.id) {
            this.updateVisiVisitors();
        } else {
            this.storeVisiVisitor();
        }
        /*this.api.post(this.visiVisitorsUrl, {
            model: this.visiVisitor,
            pivots: {}
        }).subscribe(
            (res: any) => {
                this.toast.present(res.message, 'toast-success', 'top');
                this.navigation.back();
                this.getVisiVisitors(1);
            }
        );*/
    }

    public async deleteVisiVisitors(id: any) {
        const confirm = await this.alert.confirmation(
            'Desea eliminar el item?'
        );
        if (confirm) {
            this.api.delete(this.visiVisitorsUrl + '/' + id, {})
                .subscribe(
                    (res: any) => {
                        this.toast.present(res.message, 'toast-success', 'top');
                        this.getVisiVisitors(1, 10, this.authService.getUser('id'));
                    }
                );
        } else {
            return;
        }
    }

    clearVisiVisitor() {
        this.visiVisitor.next(<VisiVisitor>{});
    }

    async getVisiVisitor(id: any) {
        return await this.api.get(this.visiVisitorsUrl + '/' + id).toPromise();
    }

    async getHouseUnit() {
        return await this.api.get('hous-units?q[contact_email:eq]=' + this.authService.getUser('email')).toPromise();
    }

}
