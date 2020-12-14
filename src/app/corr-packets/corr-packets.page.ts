import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
  selector: 'app-corr-packets',
  templateUrl: './corr-packets.page.html',
  styleUrls: ['./corr-packets.page.scss'],
})
export class CorrPacketsPage implements OnInit {

  constructor(
      public splitPanel: SplitPanelService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

}
