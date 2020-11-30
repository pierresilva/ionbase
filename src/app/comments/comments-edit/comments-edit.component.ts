import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CommentsService} from "../comments.service";
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../comment";
import {CommentsFormComponent} from "../comments-form/comments-form.component";

@Component({
  selector: 'app-comments-edit',
  templateUrl: './comments-edit.component.html',
  styleUrls: ['./comments-edit.component.scss']
})
export class CommentsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('commentForm') commentForm: CommentsFormComponent;

    public id: any = null;
    public model: Comment = null;

  constructor(
      public commentsService: CommentsService,
      public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.commentsService.editComment(this.id);
  }

  ngAfterViewInit() {
      this.commentForm.commentsForm.valueChanges.subscribe((data) => {
          this.commentsService.commentsFormValid.next(this.commentForm.commentsForm.valid);
      });
  }

}
