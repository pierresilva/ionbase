import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TagsService} from "../tags.service";
import {ActivatedRoute} from "@angular/router";
import {Tag} from "../tag";
import {TagsFormComponent} from "../tags-form/tags-form.component";

@Component({
    selector: 'app-tags-create',
    templateUrl: './tags-create.component.html',
    styleUrls: ['./tags-create.component.scss']
})
export class TagsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('tagForm') tagForm: TagsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public tagsService: TagsService,
        public route: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.tagForm.tagsForm.valueChanges.subscribe((data) => {
            this.tagsService.tagsFormValid.next(this.tagForm.tagsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.tagsService.createTag();
        this.tagsService.tag = <Tag>{};
    }

}
