import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SettingGroupsService} from "../setting-groups.service";
import {ActivatedRoute} from "@angular/router";
import {SettingGroup} from "../setting-group";
import {SettingGroupsFormComponent} from "../setting-groups-form/setting-groups-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-setting-groups-create',
    templateUrl: './setting-groups-create.component.html',
    styleUrls: ['./setting-groups-create.component.scss']
})
export class SettingGroupsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('settingGroupForm') settingGroupForm: SettingGroupsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public settingGroupsService: SettingGroupsService,
        public route: ActivatedRoute,
        public platform: Platform,
        public splitPanel: SplitPanelService
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ionViewWillEnter() {
       this.splitPanel.show.next(true);
    }

    ngAfterViewInit() {
        this.settingGroupForm.settingGroupsForm.valueChanges.subscribe((data) => {
            this.settingGroupsService.settingGroupsFormValid.next(this.settingGroupForm.settingGroupsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.settingGroupsService.createSettingGroup();
        this.settingGroupsService.settingGroup = <SettingGroup>{};
    }

}
