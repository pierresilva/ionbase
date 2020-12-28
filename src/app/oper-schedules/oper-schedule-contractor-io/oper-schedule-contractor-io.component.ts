import { Component, OnInit } from '@angular/core';
import {OperSchedulesService} from "../oper-schedules.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-schedule-contractor-io',
  templateUrl: './oper-schedule-contractor-io.component.html',
  styleUrls: ['./oper-schedule-contractor-io.component.scss'],
})
export class OperScheduleContractorIoComponent implements OnInit {

  constructor(
      public operSchedulesService: OperSchedulesService,
      public api: ApiService,
      public loading: LoadingService,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

}
