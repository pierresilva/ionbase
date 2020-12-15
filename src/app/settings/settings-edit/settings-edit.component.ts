import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {SettingsService} from "../settings.service";
import {ActivatedRoute} from "@angular/router";
import {Setting} from "../setting";
import {SettingsFormComponent} from "../settings-form/settings-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-settings-edit',
  templateUrl: './settings-edit.component.html',
  styleUrls: ['./settings-edit.component.scss']
})
export class SettingsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('settingForm') settingForm: SettingsFormComponent;

    public id: any = null;
    public model: Setting = null;

  constructor(
      public settingsService: SettingsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.settingsService.editSetting(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.settingForm.settingsForm.valueChanges.subscribe((data) => {
          this.settingsService.settingsFormValid.next(this.settingForm.settingsForm.valid);
      });
  }

}
