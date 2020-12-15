import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Setting} from "../setting";
import {FormGroup} from "@angular/forms";
import {SettingsService} from "../settings.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-settings-form',
    templateUrl: './settings-form.component.html',
    styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: Setting = <Setting>{};

    @ViewChild('settingsForm') settingsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'value': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('VALOR') + ' es obligatorio.'},
        ],
        'rich_text': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('TEXTO ENRIQUECIDO') + ' es obligatorio.'},
        ],
        'setting_group_id': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('GRUPO') + ' es obligatorio.'},
        ],
    };

    constructor(
        public settingsService: SettingsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setSettingGroupId

    setSettingGroupId(event: any) {
        this.settingsService.setting.setting_group_id = event.value ? event.value.id : null;
    }
    // end setSettingGroupId


}
