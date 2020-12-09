import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FilesService} from "../files.service";
import {ActivatedRoute} from "@angular/router";
import {File} from "../file";
import {FilesFormComponent} from "../files-form/files-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-files-create',
    templateUrl: './files-create.component.html',
    styleUrls: ['./files-create.component.scss']
})
export class FilesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('fileForm') fileForm: FilesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public filesService: FilesService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.fileForm.filesForm.valueChanges.subscribe((data) => {
            this.filesService.filesFormValid.next(this.fileForm.filesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.filesService.createFile();
        this.filesService.file = <File>{};
    }

}
