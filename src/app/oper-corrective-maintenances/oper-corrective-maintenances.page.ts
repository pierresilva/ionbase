import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-corrective-maintenances',
  templateUrl: './oper-corrective-maintenances.page.html',
  styleUrls: ['./oper-corrective-maintenances.page.scss'],
})
export class OperCorrectiveMaintenancesPage implements OnInit {

  constructor(
    public splitPanel: SplitPanelService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

}
