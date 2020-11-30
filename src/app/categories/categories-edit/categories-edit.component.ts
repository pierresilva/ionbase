import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CategoriesService} from "../categories.service";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../category";
import {CategoriesFormComponent} from "../categories-form/categories-form.component";

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.scss']
})
export class CategoriesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('categoryForm') categoryForm: CategoriesFormComponent;

    public id: any = null;
    public model: Category = null;

  constructor(
      public categoriesService: CategoriesService,
      public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.categoriesService.editCategory(this.id);
  }

  ngAfterViewInit() {
      this.categoryForm.categoriesForm.valueChanges.subscribe((data) => {
          this.categoriesService.categoriesFormValid.next(this.categoryForm.categoriesForm.valid);
      });
  }

}
