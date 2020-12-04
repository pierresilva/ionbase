import {Component, OnInit, ViewChild} from '@angular/core';
import { CounMeetingsService} from "../coun-meetings.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

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
    ) {
    }

    ngOnInit() {
        this.counMeetingsService.getCounMeetings();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
