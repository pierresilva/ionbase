import {Component, OnInit, ViewChild} from '@angular/core';
import { PostsService} from "../posts.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public postsService: PostsService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.postsService.getPosts();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
