import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
  selector: 'app-hous-unit-areas',
  templateUrl: './hous-unit-areas.page.html',
  styleUrls: ['./hous-unit-areas.page.scss'],
})
export class HousUnitAreasPage implements OnInit {

  constructor(
    public splitPanel: SplitPanelService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

}
