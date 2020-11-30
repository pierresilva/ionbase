import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Post} from "../post";
import {FormGroup} from "@angular/forms";
import {PostsService} from "../posts.service";

@Component({
    selector: 'app-posts-form',
    templateUrl: './_posts-form.component.html',
    styleUrls: ['./posts-form.component.scss']
})
export class PostsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: Post = <Post>{};

    @ViewChild('postsForm') postsForm: FormGroup;

    public validationMessages = {
        'comment_ids': [
            {type: 'required', message: 'El campo Comentarios es obligatoorio.'},
        ],
        'user_id': [
            {type: 'required', message: 'El campo Usuario es obligatorio.'}
        ],
        'from_date': [
            {type: 'required', message: 'El campo Desde es obligatorio.'}
        ],
        'accepted': [
            {type: 'required', message: 'El campo Aceptado es obligatorio.'}
        ],
        'promotion_date': [
            {type: 'required', message: 'El campo fecha de promoción es obligatorio.'}
        ],
        'name': [
            {type: 'required', message: 'El campo nombre es obligatorio.'}
        ],
        'code': [
            {type: 'required', message: 'El campo código es obligatorio.'}
        ],
    };

    constructor(
        public postsService: PostsService
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }

    setUserId(event: any) {
        this.postsService.post.user_id = event.value ? event.value.id : null;
    }

    setCategoryId(event: any) {
        this.postsService.post.category_id = event.value ? event.value.id : null;
    }

    setTagIds(event: any) {
        let tagIds = null;
        if (event.value.length) {
            tagIds = [];
            for (let i = 0; i < event.value.length; i++) {
                tagIds.push(event.value[i].id);
            }
        }
        this.postsService.post.tag_ids = tagIds;
    }

    setImageIds(event: any) {
        let imageIds = null;
        if (event.value.length) {
            imageIds = [];
            for (let i = 0; i < event.value.length; i++) {
                imageIds.push(event.value[i].id);
            }
        }
        this.postsService.post.image_ids = imageIds;
    }

    setCommentIds(event: any) {
        let commentIds = null;
        if (event.value.length) {
            commentIds = [];
            for (let i = 0; i < event.value.length; i++) {
                commentIds.push(event.value[i].id);
            }
        }
        this.postsService.post.comment_ids = commentIds;
    }

}
