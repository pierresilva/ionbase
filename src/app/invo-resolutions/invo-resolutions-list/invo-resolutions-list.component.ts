import {Component, OnInit} from '@angular/core';
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {InvoResolutionsService} from "../invo-resolutions.service";

@Component({
    selector: 'app-invo-resolutions-list',
    templateUrl: './invo-resolutions-list.component.html',
    styleUrls: ['./invo-resolutions-list.component.scss'],
})
export class InvoResolutionsListComponent implements OnInit {

    constructor(
        public splitPanel: SplitPanelService,
        public invoResolutionsService: InvoResolutionsService
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.invoResolutionsService.getItems();
    }

}
