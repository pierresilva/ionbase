import {Component, OnInit, ViewChild} from '@angular/core';
import { CompAddressesService} from "../comp-addresses.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-comp-addresses-list',
    templateUrl: './comp-addresses-list.component.html',
    styleUrls: ['./comp-addresses-list.component.scss'],
})
export class CompAddressesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public compAddressesService: CompAddressesService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.compAddressesService.getCompAddresses();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
