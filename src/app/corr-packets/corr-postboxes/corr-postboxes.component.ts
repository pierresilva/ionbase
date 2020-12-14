import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {Router} from "@angular/router";
import {HousUnitsService} from "../../hous-units/hous-units.service";

@Component({
  selector: 'app-corr-postboxes',
  templateUrl: './corr-postboxes.component.html',
  styleUrls: ['./corr-postboxes.component.scss'],
})
export class CorrPostboxesComponent implements OnInit {

  constructor(
      public splitPanel: SplitPanelService,
      public router: Router,
      public housUnitsService: HousUnitsService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
    this.housUnitsService.getAllHousUnits();
  }

  openBox(id) {
    this.router.navigateByUrl('/corr-packets/postbox/' + id);
  }

}
