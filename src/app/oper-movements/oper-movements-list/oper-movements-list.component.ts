import {Component, OnInit, ViewChild} from '@angular/core';
import { OperMovementsService} from "../oper-movements.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-oper-movements-list',
    templateUrl: './oper-movements-list.component.html',
    styleUrls: ['./oper-movements-list.component.scss'],
})
export class OperMovementsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public operMovementsService: OperMovementsService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.operMovementsService.getOperMovements();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
