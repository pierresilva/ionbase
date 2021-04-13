import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {BoarMessagesService} from "../boar-messages.service";
import {IonContent} from "@ionic/angular";

@Component({
    selector: 'app-board-messages-list',
    templateUrl: './board-messages-list.component.html',
    styleUrls: ['./board-messages-list.component.scss'],
})
export class BoardMessagesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    constructor(
        public boarMessagesService: BoarMessagesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        // this.boarMessagesService.getBoarMessages();
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.boarMessagesService.getBoarMessages();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
