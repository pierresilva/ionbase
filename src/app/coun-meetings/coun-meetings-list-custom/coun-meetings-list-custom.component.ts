import {Component, OnInit, ViewChild} from '@angular/core';
import {CounMeetingsService} from "../coun-meetings.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from "@ionic/angular";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-coun-meetings-list-custom',
    templateUrl: './coun-meetings-list-custom.component.html',
    styleUrls: ['./coun-meetings-list-custom.component.scss'],
})
export class CounMeetingsListCustomComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    environment = environment;

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

    public openAct(url) {
        window.open(url, '_blank');
    }


}
