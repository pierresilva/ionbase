import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-preventive-maintenances',
  templateUrl: './oper-preventive-maintenances.page.html',
  styleUrls: ['./oper-preventive-maintenances.page.scss'],
})
export class OperPreventiveMaintenancesPage implements OnInit {

  constructor(
    public splitPanel: SplitPanelService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

}
