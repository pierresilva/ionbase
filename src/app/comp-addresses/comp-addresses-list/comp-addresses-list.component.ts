import {Component, OnInit, ViewChild} from '@angular/core';
import { CompAddressesService} from "../comp-addresses.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

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
    ) {
    }

    ngOnInit() {
        this.compAddressesService.getCompAddresses();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
