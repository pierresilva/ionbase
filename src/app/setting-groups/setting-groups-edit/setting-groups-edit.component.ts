import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {SettingGroupsService} from "../setting-groups.service";
import {ActivatedRoute} from "@angular/router";
import {SettingGroup} from "../setting-group";
import {SettingGroupsFormComponent} from "../setting-groups-form/setting-groups-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-setting-groups-edit',
  templateUrl: './setting-groups-edit.component.html',
  styleUrls: ['./setting-groups-edit.component.scss']
})
export class SettingGroupsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('settingGroupForm') settingGroupForm: SettingGroupsFormComponent;

    public id: any = null;
    public model: SettingGroup = null;

  constructor(
      public settingGroupsService: SettingGroupsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.settingGroupsService.editSettingGroup(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.settingGroupForm.settingGroupsForm.valueChanges.subscribe((data) => {
          this.settingGroupsService.settingGroupsFormValid.next(this.settingGroupForm.settingGroupsForm.valid);
      });
  }

}
