import {Component, OnInit, ViewChild} from '@angular/core';
import { ImagesService} from "../images.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-images-list',
    templateUrl: './images-list.component.html',
    styleUrls: ['./images-list.component.scss'],
})
export class ImagesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public imagesService: ImagesService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.imagesService.getImages();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
