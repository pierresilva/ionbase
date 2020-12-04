import {Component, OnInit, ViewChild} from '@angular/core';
import { SystParametersService} from "../syst-parameters.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-syst-parameters-list',
    templateUrl: './syst-parameters-list.component.html',
    styleUrls: ['./syst-parameters-list.component.scss'],
})
export class SystParametersListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public systParametersService: SystParametersService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.systParametersService.getSystParameters();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
