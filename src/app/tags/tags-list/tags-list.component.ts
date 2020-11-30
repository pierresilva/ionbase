import {Component, OnInit, ViewChild} from '@angular/core';
import { TagsService} from "../tags.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-tags-list',
    templateUrl: './tags-list.component.html',
    styleUrls: ['./tags-list.component.scss'],
})
export class TagsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public tagsService: TagsService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.tagsService.getTags();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
