import {Component, OnInit, ViewChild} from '@angular/core';
import { HousUnitAreasService} from "../hous-unit-areas.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-hous-unit-areas-list',
    templateUrl: './hous-unit-areas-list.component.html',
    styleUrls: ['./hous-unit-areas-list.component.scss'],
})
export class HousUnitAreasListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public housUnitAreasService: HousUnitAreasService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.housUnitAreasService.getHousUnitAreas();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
