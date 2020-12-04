import {Component, OnInit, ViewChild} from '@angular/core';
import { CounMeetingCitationsService} from "../coun-meeting-citations.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

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
    ) {
    }

    ngOnInit() {
        this.counMeetingCitationsService.getCounMeetingCitations();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
