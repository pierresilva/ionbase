import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Comment} from "../comment";
import {FormGroup} from "@angular/forms";
import {CommentsService} from "../comments.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-comments-form',
    templateUrl: './comments-form.component.html',
    styleUrls: ['./comments-form.component.scss']
})
export class CommentsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: Comment = <Comment>{};

    @ViewChild('commentsForm') commentsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'body': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CUERPO') + ' es obligatorio.'},
        ],
        'post_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTRADA') + ' es obligatorio.'},
        ],
    };

    constructor(
        public commentsService: CommentsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setPostId

    setPostId(event: any) {
        this.commentsService.comment.post_id = event.value ? event.value.id : null;
    }
    // end setPostId


}
