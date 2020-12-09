import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {SettingsService} from "../settings.service";

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
})
export class SettingsModalComponent implements OnInit {

  action: string;

  constructor(
      private modalController: ModalController,
      private navParams: NavParams,
      public settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.action = this.navParams.data.action;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
