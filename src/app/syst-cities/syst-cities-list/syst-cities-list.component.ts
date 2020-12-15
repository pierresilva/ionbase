import {Component, OnInit, ViewChild} from '@angular/core';
import { SystCitiesService} from "../syst-cities.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-syst-cities-list',
    templateUrl: './syst-cities-list.component.html',
    styleUrls: ['./syst-cities-list.component.scss'],
})
export class SystCitiesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public systCitiesService: SystCitiesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.systCitiesService.getSystCities();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
