import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CommentsService} from "../comments.service";
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../comment";
import {CommentsFormComponent} from "../comments-form/comments-form.component";

@Component({
    selector: 'app-comments-create',
    templateUrl: './comments-create.component.html',
    styleUrls: ['./comments-create.component.scss']
})
export class CommentsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('commentForm') commentForm: CommentsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public commentsService: CommentsService,
        public route: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.commentForm.commentsForm.valueChanges.subscribe((data) => {
            this.commentsService.commentsFormValid.next(this.commentForm.commentsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.commentsService.createComment();
        this.commentsService.comment = <Comment>{};
    }

}
