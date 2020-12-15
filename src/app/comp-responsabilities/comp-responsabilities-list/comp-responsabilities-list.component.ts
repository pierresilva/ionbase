import {Component, OnInit, ViewChild} from '@angular/core';
import { CompResponsabilitiesService} from "../comp-responsabilities.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-comp-responsabilities-list',
    templateUrl: './comp-responsabilities-list.component.html',
    styleUrls: ['./comp-responsabilities-list.component.scss'],
})
export class CompResponsabilitiesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public compResponsabilitiesService: CompResponsabilitiesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.compResponsabilitiesService.getCompResponsabilities();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
