import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
    selector: 'app-visitors',
    templateUrl: './visitors.component.html',
    styleUrls: ['./visitors.component.scss'],
})
export class VisitorsComponent implements OnInit {

    date: any = moment().format('YYYY-MM-DD');

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
