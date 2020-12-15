import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
  selector: 'app-syst-parameter-groups',
  templateUrl: './syst-parameter-groups.page.html',
  styleUrls: ['./syst-parameter-groups.page.scss'],
})
export class SystParameterGroupsPage implements OnInit {

  constructor(
    public splitPanel: SplitPanelService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

}
