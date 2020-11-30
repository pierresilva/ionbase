import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {PostsService} from "../posts.service";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../post";
import {PostsFormComponent} from "../posts-form/posts-form.component";

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.scss']
})
export class PostsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('postForm') postForm: PostsFormComponent;

    public id: any = null;
    public model: Post = null;

  constructor(
      public postsService: PostsService,
      public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.postsService.editPost(this.id);
  }

  ngAfterViewInit() {
      this.postForm.postsForm.valueChanges.subscribe((data) => {
          this.postsService.postsFormValid.next(this.postForm.postsForm.valid);
      });
  }

}
