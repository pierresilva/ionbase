import {Component, OnInit, ViewChild} from '@angular/core';
import { SystParameterGroupsService} from "../syst-parameter-groups.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-syst-parameter-groups-list',
    templateUrl: './syst-parameter-groups-list.component.html',
    styleUrls: ['./syst-parameter-groups-list.component.scss'],
})
export class SystParameterGroupsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public systParameterGroupsService: SystParameterGroupsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.systParameterGroupsService.getSystParameterGroups();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
