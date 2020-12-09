import {Component, OnInit, ViewChild} from '@angular/core';
import {SettingGroupsService} from "../setting-groups.service";
import {SettingGroupsPage} from "../setting-groups.page";
import {SettingGroupsModalComponent} from "../setting-groups-modal/setting-groups-modal.component";
import {ModalController} from "@ionic/angular";


@Component({
  selector: 'app-setting-groups-list',
  templateUrl: './setting-groups-list.component.html',
  styleUrls: ['./setting-groups-list.component.scss'],
})
export class SettingGroupsListComponent implements OnInit {

  @ViewChild('settingGroupsPage') settingGroupsPage: SettingGroupsPage

  dataReturned: any;

  constructor(
      public settingGroupsService: SettingGroupsService,
      public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.settingGroupsService.getSettingGroups();
  }

  async openModal(action = null) {
    const modal = await this.modalController.create({
      component: SettingGroupsModalComponent,
      componentProps: {
        action: action ?? ''
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.table(dataReturned);
      }
    });

    return await modal.present();
  }

}
