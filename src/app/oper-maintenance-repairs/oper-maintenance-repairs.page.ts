import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-maintenance-repairs',
  templateUrl: './oper-maintenance-repairs.page.html',
  styleUrls: ['./oper-maintenance-repairs.page.scss'],
})
export class OperMaintenanceRepairsPage implements OnInit {

  constructor(
    public splitPanel: SplitPanelService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

}
