import {Component, OnInit, ViewChild} from '@angular/core';
import { CategoriesService} from "../categories.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-categories-list',
    templateUrl: './categories-list.component.html',
    styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public categoriesService: CategoriesService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.categoriesService.getCategories();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
