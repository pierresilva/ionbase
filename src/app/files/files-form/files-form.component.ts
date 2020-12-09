import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {File} from "../file";
import {FormGroup} from "@angular/forms";
import {FilesService} from "../files.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-files-form',
    templateUrl: './files-form.component.html',
    styleUrls: ['./files-form.component.scss']
})
export class FilesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: File = <File>{};

    @ViewChild('filesForm') filesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'file': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ARCHIVO') + ' es obligatorio.'},
        ],
        'extension': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EXTENSION') + ' es obligatorio.'},
        ],
        'mime': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('MIME') + ' es obligatorio.'},
        ],
        'url': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('URL') + ' es obligatorio.'},
        ],
        'fileable_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ARCHIVABLE ID') + ' es obligatorio.'},
        ],
        'fileable_type': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ARCHIVABLE TIPO') + ' es obligatorio.'},
        ],
    };

    constructor(
        public filesService: FilesService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


}
