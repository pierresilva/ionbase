import {Component, OnInit, ViewChild} from '@angular/core';
import { SettingGroupsService} from "../setting-groups.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-setting-groups-list',
    templateUrl: './setting-groups-list.component.html',
    styleUrls: ['./setting-groups-list.component.scss'],
})
export class SettingGroupsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public settingGroupsService: SettingGroupsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.settingGroupsService.getSettingGroups();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
