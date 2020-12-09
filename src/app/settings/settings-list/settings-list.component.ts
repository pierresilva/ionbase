import {Component, OnInit, ViewChild} from '@angular/core';
import {SettingsService} from "../settings.service";
import {SettingsPage} from "../settings.page";
import {ModalController} from "@ionic/angular";
import {SettingsModalComponent} from "../settings-modal/settings-modal.component";

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss'],
})
export class SettingsListComponent implements OnInit {

  @ViewChild('settingsPage') settingsPage: SettingsPage

  dataReturned: any;

  constructor(
      public settingsService: SettingsService,
      public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.settingsService.getSettings();
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
        console.table(dataReturned);
      }
    });

    return await modal.present();
  }

}
