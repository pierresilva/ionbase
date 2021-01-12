import { Component, OnInit } from '@angular/core';
import {OperSchedulesService} from "../oper-schedules.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {AuthService} from "../../@shared/services/auth.service";

import * as moment from 'moment';

@Component({
  selector: 'app-oper-schedule-contractor-list',
  templateUrl: './oper-schedule-contractor-list.component.html',
  styleUrls: ['./oper-schedule-contractor-list.component.scss'],
})
export class OperScheduleContractorListComponent implements OnInit {

  userId: any = null;

  date: any = moment().format('YYYY-MM-DD');

  constructor(
      public operSchedulesService: OperSchedulesService,
      public api: ApiService,
      public loading: LoadingService,
      public splitPanel: SplitPanelService,
      public auth: AuthService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.splitPanel.show.next(true);

    this.userId = this.auth.getUser('id');

    console.log(this.userId);

    this.operSchedulesService.getOperSchedules(this.operSchedulesService.page, this.operSchedulesService.perPage, this.userId, this.date);

  }

}
