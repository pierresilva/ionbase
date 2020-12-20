import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperSchedulesService} from "../oper-schedules.service";
import {ActivatedRoute} from "@angular/router";
import {OperSchedule} from "../oper-schedule";
import {OperSchedulesFormComponent} from "../oper-schedules-form/oper-schedules-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-schedules-edit',
  templateUrl: './oper-schedules-edit.component.html',
  styleUrls: ['./oper-schedules-edit.component.scss']
})
export class OperSchedulesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('operScheduleForm') operScheduleForm: OperSchedulesFormComponent;

    public id: any = null;
    public model: OperSchedule = null;

  constructor(
      public operSchedulesService: OperSchedulesService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operSchedulesService.editOperSchedule(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.operScheduleForm.operSchedulesForm.valueChanges.subscribe((data) => {
          this.operSchedulesService.operSchedulesFormValid.next(this.operScheduleForm.operSchedulesForm.valid);
      });
  }

}
