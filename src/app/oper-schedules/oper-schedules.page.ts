import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-schedules',
  templateUrl: './oper-schedules.page.html',
  styleUrls: ['./oper-schedules.page.scss'],
})
export class OperSchedulesPage implements OnInit {

  constructor(
    public splitPanel: SplitPanelService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

}
