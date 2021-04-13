import {Component, OnInit} from '@angular/core';
import {VisiVisitorRegisterService} from "../visi-visitor-register.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {VisitorVehicleModalComponent} from "../visitor-vehicle-modal/visitor-vehicle-modal.component";
import {ModalController, Platform} from "@ionic/angular";
import {VisitorModalComponent} from "../visitor-modal/visitor-modal.component";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {VisiInvoiceModalComponent} from "../visi-invoice-modal/visi-invoice-modal.component";
import {VisiVisitorsService} from "../visi-visitors.service";

@Component({
    selector: 'app-visi-visitors-list',
    templateUrl: './visi-visitors-list.component.html',
    styleUrls: ['./visi-visitors-list.component.scss'],
})
export class VisiVisitorsListComponent implements OnInit {

    constructor(
        public visiVisitorRegisterService: VisiVisitorRegisterService,
        public visiVisitorsService: VisiVisitorsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
        public modalController: ModalController,
        public platform: Platform,
        public http: HttpClient,
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        // this.visiVisitorRegisterService.getVisiVisitorRegisters();
        this.visiVisitorsService.getVisiVisitors(1, 1000);
    }

    async presentVisitorVehicleModal(visitorId: any, register: any = null) {

        const modal = await this.modalController.create({
            component: VisitorVehicleModalComponent,
            componentProps: {
                'visitorId': visitorId,
                'registerId': register ? register.id : 0,
                'data': this.visiVisitorsService.visiVisitorList.value,
            }
        });
        // const { data } = await modal.onWillDismiss();
        // console.log(data);
        return await modal.present();
    }

    async presentVisitorModal() {
        const modal = await this.modalController.create({
            component: VisitorModalComponent,
            componentProps: {
                data: this.visiVisitorsService.visiVisitorList.value
            }
        });
        // const { data } = await modal.onWillDismiss();
        // console.log(data);
        return await modal.present();
    }

    async presentInvoiceModal(invoice: any) {
        console.log('open visitors modal');
        const modal = await this.modalController.create({
            component: VisiInvoiceModalComponent,
            componentProps: {
                invoice: invoice,
            }
        });
        // const { data } = await modal.onWillDismiss();
        // console.log(data);
        return await modal.present();
    }

    markDeparture(registerId: any) {
        this.http.post(environment.serverUrl + '/api/visi-visitor-registers/exit/' + registerId, {})
            .subscribe(
                (res: any) => {
                    if (res.data.total) {
                        this.presentInvoiceModal(res.data);
                        this.visiVisitorsService.getVisiVisitors();
                    } else {
                        this.visiVisitorsService.getVisiVisitors();
                    }
                }
            );
    }

}
