import {Component, OnInit, ViewChild} from '@angular/core';
import { CompaniesService} from "../companies.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-companies-list',
    templateUrl: './companies-list.component.html',
    styleUrls: ['./companies-list.component.scss'],
})
export class CompaniesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public companiesService: CompaniesService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.companiesService.getCompanies();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
