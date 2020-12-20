import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperMaintenanceRepairsService} from "../oper-maintenance-repairs.service";
import {ActivatedRoute} from "@angular/router";
import {OperMaintenanceRepair} from "../oper-maintenance-repair";
import {OperMaintenanceRepairsFormComponent} from "../oper-maintenance-repairs-form/oper-maintenance-repairs-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-maintenance-repairs-edit',
  templateUrl: './oper-maintenance-repairs-edit.component.html',
  styleUrls: ['./oper-maintenance-repairs-edit.component.scss']
})
export class OperMaintenanceRepairsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('operMaintenanceRepairForm') operMaintenanceRepairForm: OperMaintenanceRepairsFormComponent;

    public id: any = null;
    public model: OperMaintenanceRepair = null;

  constructor(
      public operMaintenanceRepairsService: OperMaintenanceRepairsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operMaintenanceRepairsService.editOperMaintenanceRepair(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.operMaintenanceRepairForm.operMaintenanceRepairsForm.valueChanges.subscribe((data) => {
          this.operMaintenanceRepairsService.operMaintenanceRepairsFormValid.next(this.operMaintenanceRepairForm.operMaintenanceRepairsForm.valid);
      });
  }

}
