import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {CorrReceiveModalComponent} from "../corr-receive-modal/corr-receive-modal.component";
import {CorrPacketsService} from "../corr-packets.service";
import {HousUnitsService} from "../../hous-units/hous-units.service";

@Component({
  selector: 'app-corr-postbox',
  templateUrl: './corr-postbox.component.html',
  styleUrls: ['./corr-postbox.component.scss'],
})
export class CorrPostboxComponent implements OnInit {

  dataReturned: any = null;

  constructor(
      public splitPanel: SplitPanelService,
      public router: Router,
      public route: ActivatedRoute,
      public modalController: ModalController,
      public corrPacketsService: CorrPacketsService,
      public housUnitsService: HousUnitsService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.splitPanel.show.next(true);

    this.housUnitsService.editHousUnit(this.route.snapshot.paramMap.get('id'));
  }

  async openReceiveModal(action = null) {
    this.housUnitsService.getHousUnits();
    const modal = await this.modalController.create({
      component: CorrReceiveModalComponent,
      componentProps: {
        action: action ?? '',
        hous_unit_id: this.route.snapshot.paramMap.get('id')
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        // console.table(dataReturned);
      }
    });

    return await modal.present();
  }

}
