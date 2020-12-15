import {Component, OnInit, ViewChild} from '@angular/core';
import { SystCountriesService} from "../syst-countries.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-syst-countries-list',
    templateUrl: './syst-countries-list.component.html',
    styleUrls: ['./syst-countries-list.component.scss'],
})
export class SystCountriesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public systCountriesService: SystCountriesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.systCountriesService.getSystCountries();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
