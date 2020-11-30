import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CategoriesService} from "../categories.service";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../category";
import {CategoriesFormComponent} from "../categories-form/categories-form.component";

@Component({
    selector: 'app-categories-create',
    templateUrl: './categories-create.component.html',
    styleUrls: ['./categories-create.component.scss']
})
export class CategoriesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('categoryForm') categoryForm: CategoriesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public categoriesService: CategoriesService,
        public route: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.categoryForm.categoriesForm.valueChanges.subscribe((data) => {
            this.categoriesService.categoriesFormValid.next(this.categoryForm.categoriesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.categoriesService.createCategory();
        this.categoriesService.category = <Category>{};
    }

}
