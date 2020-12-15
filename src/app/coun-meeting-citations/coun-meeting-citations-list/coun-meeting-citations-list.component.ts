import {Component, OnInit, ViewChild} from '@angular/core';
import { CounMeetingCitationsService} from "../coun-meeting-citations.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-coun-meeting-citations-list',
    templateUrl: './coun-meeting-citations-list.component.html',
    styleUrls: ['./coun-meeting-citations-list.component.scss'],
})
export class CounMeetingCitationsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public counMeetingCitationsService: CounMeetingCitationsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.counMeetingCitationsService.getCounMeetingCitations();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
