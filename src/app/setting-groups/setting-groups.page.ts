import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {SettingGroupsModalComponent} from "./setting-groups-modal/setting-groups-modal.component";
import {SettingGroupsService} from "./setting-groups.service";
// import {SettingGroupsService} from "./setting-groups.service";

@Component({
  selector: 'app-setting-groups',
  templateUrl: './setting-groups.page.html',
  styleUrls: ['./setting-groups.page.scss'],
})
export class SettingGroupsPage implements OnInit {

  dataReturned: any;

  constructor(
      public modalController: ModalController,
      public settingGroupsService: SettingGroupsService
  ) { }

  ngOnInit() {

  }

  toggleMenu() {
    const splitPane = document.querySelector('ion-split-pane');
    const windowWidth = window.innerWidth;
    const splitPaneShownAt = 992;
    const when = `(min-width: ${splitPaneShownAt}px)`;
    if (windowWidth >= splitPaneShownAt) {
      // split pane view is visible
      const open = splitPane.when === when;
      splitPane.when = open ? false : when;
    } else {
      // split pane view is not visible
      // toggle menu open
      const menu = splitPane.querySelector('ion-menu');
      return menu.open();
    }
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
        // console.table(dataReturned);
      }
    });

    return await modal.present();
  }

}
