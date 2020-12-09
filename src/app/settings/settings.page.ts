import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {SettingsService} from "./settings.service";
import {SettingsModalComponent} from "./settings-modal/settings-modal.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  dataReturned: any;

  constructor(
      public settingsService: SettingsService,
      public modalController: ModalController,
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
      component: SettingsModalComponent,
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
