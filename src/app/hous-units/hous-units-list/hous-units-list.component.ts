import {Component, OnInit, ViewChild} from '@angular/core';
import { HousUnitsService} from "../hous-units.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-hous-units-list',
    templateUrl: './hous-units-list.component.html',
    styleUrls: ['./hous-units-list.component.scss'],
})
export class HousUnitsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public housUnitsService: HousUnitsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.housUnitsService.getHousUnits();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
