import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {ImagesService} from "../images.service";
import {ActivatedRoute} from "@angular/router";
import {Image} from "../image";
import {ImagesFormComponent} from "../images-form/images-form.component";

@Component({
  selector: 'app-images-edit',
  templateUrl: './images-edit.component.html',
  styleUrls: ['./images-edit.component.scss']
})
export class ImagesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('imageForm') imageForm: ImagesFormComponent;

    public id: any = null;
    public model: Image = null;

  constructor(
      public imagesService: ImagesService,
      public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.imagesService.editImage(this.id);
  }

  ngAfterViewInit() {
      this.imageForm.imagesForm.valueChanges.subscribe((data) => {
          this.imagesService.imagesFormValid.next(this.imageForm.imagesForm.valid);
      });
  }

}
