import {Component, OnInit, ViewChild} from '@angular/core';
import { CounMeetingAgendasService} from "../coun-meeting-agendas.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-coun-meeting-agendas-list',
    templateUrl: './coun-meeting-agendas-list.component.html',
    styleUrls: ['./coun-meeting-agendas-list.component.scss'],
})
export class CounMeetingAgendasListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public counMeetingAgendasService: CounMeetingAgendasService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.counMeetingAgendasService.getCounMeetingAgendas();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
