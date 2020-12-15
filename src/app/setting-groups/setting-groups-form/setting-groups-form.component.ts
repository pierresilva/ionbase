import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SettingGroup} from "../setting-group";
import {FormGroup} from "@angular/forms";
import {SettingGroupsService} from "../setting-groups.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-setting-groups-form',
    templateUrl: './setting-groups-form.component.html',
    styleUrls: ['./setting-groups-form.component.scss']
})
export class SettingGroupsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: SettingGroup = <SettingGroup>{};

    @ViewChild('settingGroupsForm') settingGroupsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'setting_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('AJUSTES') + ' es obligatorio.'},
        ],
    };

    constructor(
        public settingGroupsService: SettingGroupsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setSettingIds
    setSettingIds(event: any) {
        let settingIds = null;
        if (event.value.length) {
            settingIds = [];
            for (let i = 0; i < event.value.length; i++) {
                settingIds.push(event.value[i].id);
            }
        }
        this.settingGroupsService.settingGroup.setting_ids = settingIds;
    }
    // end setSettingIds


}
