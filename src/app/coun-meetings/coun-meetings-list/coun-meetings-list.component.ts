import {Component, OnInit, ViewChild} from '@angular/core';
import { CounMeetingsService} from "../coun-meetings.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-coun-meetings-list',
    templateUrl: './coun-meetings-list.component.html',
    styleUrls: ['./coun-meetings-list.component.scss'],
})
export class CounMeetingsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public counMeetingsService: CounMeetingsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.counMeetingsService.getCounMeetings();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
