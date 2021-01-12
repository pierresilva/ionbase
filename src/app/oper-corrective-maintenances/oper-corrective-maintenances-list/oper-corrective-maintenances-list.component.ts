import {Component, OnInit, ViewChild} from '@angular/core';
import {OperCorrectiveMaintenancesService} from "../oper-corrective-maintenances.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {CalendarModal, CalendarComponentOptions, CalendarModalOptions, CalendarResult} from "ion2-calendar";
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-oper-corrective-maintenances-list',
    templateUrl: './oper-corrective-maintenances-list.component.html',
    styleUrls: ['./oper-corrective-maintenances-list.component.scss'],
})
export class OperCorrectiveMaintenancesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    resolved: any = null;

    dateRange: { from: string; to: string; };
    optionsRange: CalendarComponentOptions = {
        pickMode: 'range'
    };
    dateRangeType: 'string';

    constructor(
        public operCorrectiveMaintenancesService: OperCorrectiveMaintenancesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
        public modal: ModalController
    ) {
    }

    ngOnInit() {
        // this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances();
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

    segmentChanged(event: any) {
        console.log(event.detail.value);
        if (event.detail.value == 'resolved') {
            this.resolved = true;
        } else {
            this.resolved = false;

        }
        this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances(
            this.operCorrectiveMaintenancesService.page,
            this.operCorrectiveMaintenancesService.perPage,
            event.detail.value
        );

    }

    async openCalendar() {
        const options: CalendarModalOptions = {
            title: 'Filtro por fechas',
            pickMode: 'range',
            closeLabel: 'Cancelar',
            doneLabel: 'OK',
            clearLabel: 'Limpiar',
            weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            monthFormat: 'MM YYYY',
            canBackwardsSelected: true
        };

        let calendar =  await this.modal.create({
            component: CalendarModal,
            componentProps: { options },
        });

        calendar.present();

        const event: any = await calendar.onDidDismiss();
        const date = event.data;
        const from: CalendarResult = date.from;
        const to: CalendarResult = date.to;

        this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances(
            this.operCorrectiveMaintenancesService.page,
            this.operCorrectiveMaintenancesService.perPage,
            this.resolved ? 'resolved' : null,
            from.string,
            to.string
        );

        console.log(date, from.string, to.string);
    }

}
