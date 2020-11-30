import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Tag} from "../tag";
import {FormGroup} from "@angular/forms";
import {TagsService} from "../tags.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-tags-form',
    templateUrl: './tags-form.component.html',
    styleUrls: ['./tags-form.component.scss']
})
export class TagsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: Tag = <Tag>{};

    @ViewChild('tagsForm') tagsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'post_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTRADAS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public tagsService: TagsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setPostIds
    setPostIds(event: any) {
        let postIds = null;
        if (event.value.length) {
            postIds = [];
            for (let i = 0; i < event.value.length; i++) {
                postIds.push(event.value[i].id);
            }
        }
        this.tagsService.tag.post_ids = postIds;
    }
    // end setPostIds


}
