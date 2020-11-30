import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Category} from "../category";
import {FormGroup} from "@angular/forms";
import {CategoriesService} from "../categories.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-categories-form',
    templateUrl: './categories-form.component.html',
    styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: Category = <Category>{};

    @ViewChild('categoriesForm') categoriesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'post_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTRADAS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public categoriesService: CategoriesService,
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
        this.categoriesService.category.post_ids = postIds;
    }
    // end setPostIds


}
