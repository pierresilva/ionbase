import {Component, OnInit, ViewChild} from '@angular/core';
import { SystRegionsService} from "../syst-regions.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-syst-regions-list',
    templateUrl: './syst-regions-list.component.html',
    styleUrls: ['./syst-regions-list.component.scss'],
})
export class SystRegionsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public systRegionsService: SystRegionsService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.systRegionsService.getSystRegions();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
