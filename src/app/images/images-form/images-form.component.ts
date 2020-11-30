import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Image} from "../image";
import {FormGroup} from "@angular/forms";
import {ImagesService} from "../images.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-images-form',
    templateUrl: './images-form.component.html',
    styleUrls: ['./images-form.component.scss']
})
export class ImagesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: Image = <Image>{};

    @ViewChild('imagesForm') imagesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'url': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('URL') + ' es obligatorio.'},
        ],
        'post_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTRADAS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public imagesService: ImagesService,
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
        this.imagesService.image.post_ids = postIds;
    }
    // end setPostIds


}
