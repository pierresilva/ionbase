import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SettingsService} from "../settings.service";
import {ActivatedRoute} from "@angular/router";
import {Setting} from "../setting";
import {SettingsFormComponent} from "../settings-form/settings-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-settings-create',
    templateUrl: './settings-create.component.html',
    styleUrls: ['./settings-create.component.scss']
})
export class SettingsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('settingForm') settingForm: SettingsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public settingsService: SettingsService,
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
        this.settingForm.settingsForm.valueChanges.subscribe((data) => {
            this.settingsService.settingsFormValid.next(this.settingForm.settingsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.settingsService.createSetting();
        this.settingsService.setting = <Setting>{};
    }

}
