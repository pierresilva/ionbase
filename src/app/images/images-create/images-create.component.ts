import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ImagesService} from "../images.service";
import {ActivatedRoute} from "@angular/router";
import {Image} from "../image";
import {ImagesFormComponent} from "../images-form/images-form.component";

@Component({
    selector: 'app-images-create',
    templateUrl: './images-create.component.html',
    styleUrls: ['./images-create.component.scss']
})
export class ImagesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('imageForm') imageForm: ImagesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public imagesService: ImagesService,
        public route: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.imageForm.imagesForm.valueChanges.subscribe((data) => {
            this.imagesService.imagesFormValid.next(this.imageForm.imagesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.imagesService.createImage();
        this.imagesService.image = <Image>{};
    }

}
