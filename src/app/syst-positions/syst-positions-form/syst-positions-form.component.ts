import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SystPosition} from "../syst-position";
import {FormGroup} from "@angular/forms";
import {SystPositionsService} from "../syst-positions.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-syst-positions-form',
    templateUrl: './syst-positions-form.component.html',
    styleUrls: ['./syst-positions-form.component.scss']
})
export class SystPositionsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: SystPosition = <SystPosition>{};

    @ViewChild('systPositionsForm') systPositionsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'user_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('USUARIOS') + ' es obligatorio.'},
        ],
        'comp_contact_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESAS CONTACTOS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public systPositionsService: SystPositionsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setUserIds
    setUserIds(event: any) {
        let userIds = null;
        if (event.value.length) {
            userIds = [];
            for (let i = 0; i < event.value.length; i++) {
                userIds.push(event.value[i].id);
            }
        }
        this.systPositionsService.systPosition.user_ids = userIds;
    }
    // end setUserIds


    // set setCompContactIds
    setCompContactIds(event: any) {
        let compContactIds = null;
        if (event.value.length) {
            compContactIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compContactIds.push(event.value[i].id);
            }
        }
        this.systPositionsService.systPosition.comp_contact_ids = compContactIds;
    }
    // end setCompContactIds


}
