import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PostsService} from "../posts.service";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../post";
import {PostsFormComponent} from "../posts-form/posts-form.component";

@Component({
    selector: 'app-posts-create',
    templateUrl: './posts-create.component.html',
    styleUrls: ['./posts-create.component.scss']
})
export class PostsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('postForm') postForm: PostsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public postsService: PostsService,
        public route: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.postForm.postsForm.valueChanges.subscribe((data) => {
            this.postsService.postsFormValid.next(this.postForm.postsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.postsService.createPost();
        this.postsService.post = <Post>{};
    }

}
