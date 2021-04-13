import {Component, OnInit} from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
    selector: 'app-invo-invoices',
    templateUrl: './invo-invoices.component.html',
    styleUrls: ['./invo-invoices.component.scss'],
})
export class InvoInvoicesComponent implements OnInit {

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
