import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Post} from "../post";
import {FormGroup} from "@angular/forms";
import {PostsService} from "../posts.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-posts-form',
    templateUrl: './posts-form.component.html',
    styleUrls: ['./posts-form.component.scss']
})
export class PostsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: Post = <Post>{};

    @ViewChild('postsForm') postsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'summary': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('RESUMEN') + ' es obligatorio.'},
        ],
        'user_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('USUARIO') + ' es obligatorio.'},
        ],
        'category_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CATEGORÍA') + ' es obligatorio.'},
        ],
        'published': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('PUBLICADO') + ' es obligatorio.'},
        ],
        'from_date': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DESDE') + ' es obligatorio.'},
        ],
        'to_date': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HASTA') + ' es obligatorio.'},
        ],
        'accepted': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ACEPTADO') + ' es obligatorio.'},
        ],
        'promotion_date': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA DE PROMICIÓN') + ' es obligatorio.'},
        ],
        'promotion_image': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('IMÁGEN PROMOCIÓN') + ' es obligatorio.'},
        ],
        'content': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONTENIDO') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'status': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.'},
        ],
        'tag_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ETIQUETAS') + ' es obligatorio.'},
        ],
        'comment_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('COMENTARIOS') + ' es obligatorio.'},
        ],
        'image_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('IMÁGENES') + ' es obligatorio.'},
        ],
    };

    constructor(
        public postsService: PostsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setUserId

    setUserId(event: any) {
        this.postsService.post.user_id = event.value ? event.value.id : null;
    }
    // end setUserId


    // set setCategoryId

    setCategoryId(event: any) {
        this.postsService.post.category_id = event.value ? event.value.id : null;
    }
    // end setCategoryId


    // set setTagIds
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
    // end setTagIds


    // set setCommentIds
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
    // end setCommentIds


    // set setImageIds
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
    // end setImageIds


}
