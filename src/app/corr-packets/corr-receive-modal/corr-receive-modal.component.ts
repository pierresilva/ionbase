import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-corr-receive-modal',
  templateUrl: './corr-receive-modal.component.html',
  styleUrls: ['./corr-receive-modal.component.scss'],
})
export class CorrReceiveModalComponent implements OnInit {

  action: string;

  constructor(
      private modalController: ModalController,
      private navParams: NavParams,
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.action = this.navParams.data.action;
  }

  async closeModal() {
    const onClosedData: any = null;
    await this.modalController.dismiss(onClosedData);
  }

}
