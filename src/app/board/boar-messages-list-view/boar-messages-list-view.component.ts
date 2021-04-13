import {Component, OnInit} from '@angular/core';
import {BoarMessagesService} from "../boar-messages.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-boar-messages-list-view',
    templateUrl: './boar-messages-list-view.component.html',
    styleUrls: ['./boar-messages-list-view.component.scss'],
})
export class BoarMessagesListViewComponent implements OnInit {

    constructor(
        public boarMessagesService: BoarMessagesService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.boarMessagesService.getBoarMessages();
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);

    }

}
