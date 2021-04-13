import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {VisiVisitorsService} from "../visi-visitors.service";
import {IonContent} from "@ionic/angular";
import {VisiVisitorRegisterService} from "../visi-visitor-register.service";

@Component({
    selector: 'app-visi-visitors-user-list',
    templateUrl: './visi-visitors-user-list.component.html',
    styleUrls: ['./visi-visitors-user-list.component.scss'],
})
export class VisiVisitorsUserListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    constructor(
        public visiVisitorsService: VisiVisitorsService,
        public visiVisitorRegisterService: VisiVisitorRegisterService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.visiVisitorsService.getVisiVisitors(1, 10, this.visiVisitorsService.authService.getUser('id'));
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
