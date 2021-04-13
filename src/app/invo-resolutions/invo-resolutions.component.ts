import {Component, OnInit} from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
    selector: 'app-invo-resolutions',
    templateUrl: './invo-resolutions.component.html',
    styleUrls: ['./invo-resolutions.component.scss'],
})
export class InvoResolutionsComponent implements OnInit {

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
