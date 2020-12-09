import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {SettingGroupsFormComponent} from "../setting-groups-form/setting-groups-form.component";
import {SettingGroupsService} from "../setting-groups.service";

@Component({
  selector: 'app-setting-groups-modal',
  templateUrl: './setting-groups-modal.component.html',
  styleUrls: ['./setting-groups-modal.component.scss'],
})
export class SettingGroupsModalComponent implements OnInit, AfterViewInit {

  @ViewChild('settingGroupsFormComponent') settingGroupsFormComponent: SettingGroupsFormComponent;

  action: string;

  constructor(
      private modalController: ModalController,
      private navParams: NavParams,
      public settingGroupsService: SettingGroupsService
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.action = this.navParams.data.action;
  }

  ngAfterViewInit() {

  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
