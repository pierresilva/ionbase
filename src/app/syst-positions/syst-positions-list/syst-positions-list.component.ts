import {Component, OnInit, ViewChild} from '@angular/core';
import { SystPositionsService} from "../syst-positions.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-syst-positions-list',
    templateUrl: './syst-positions-list.component.html',
    styleUrls: ['./syst-positions-list.component.scss'],
})
export class SystPositionsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public systPositionsService: SystPositionsService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.systPositionsService.getSystPositions();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
