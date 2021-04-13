import {Component, OnInit} from '@angular/core';
import {BoarMessage} from "../boar-message";
import {BoarMessagesService} from "../boar-messages.service";
import {ActivatedRoute} from "@angular/router";
import {Platform} from "@ionic/angular";
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-boar-messages-show',
    templateUrl: './boar-messages-show.component.html',
    styleUrls: ['./boar-messages-show.component.scss'],
})
export class BoarMessagesShowComponent implements OnInit {

    public id: any = null;
    public model: BoarMessage = null;

    constructor(
        public boarMessagesService: BoarMessagesService,
        public route: ActivatedRoute,
        public platform: Platform,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.boarMessagesService.editBoarMessage(this.id);
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }

}
