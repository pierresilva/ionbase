import {Component, OnInit} from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

    constructor(
        public splitPanel: SplitPanelService
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }

}
