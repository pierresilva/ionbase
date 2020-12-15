import {Component, OnInit, ViewChild} from '@angular/core';
import { CompPhonesService} from "../comp-phones.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-comp-phones-list',
    templateUrl: './comp-phones-list.component.html',
    styleUrls: ['./comp-phones-list.component.scss'],
})
export class CompPhonesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public compPhonesService: CompPhonesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.compPhonesService.getCompPhones();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
