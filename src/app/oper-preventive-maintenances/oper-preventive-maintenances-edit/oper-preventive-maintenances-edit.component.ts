import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperPreventiveMaintenancesService} from "../oper-preventive-maintenances.service";
import {ActivatedRoute} from "@angular/router";
import {OperPreventiveMaintenance} from "../oper-preventive-maintenance";
import {OperPreventiveMaintenancesFormComponent} from "../oper-preventive-maintenances-form/oper-preventive-maintenances-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-preventive-maintenances-edit',
  templateUrl: './oper-preventive-maintenances-edit.component.html',
  styleUrls: ['./oper-preventive-maintenances-edit.component.scss']
})
export class OperPreventiveMaintenancesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('operPreventiveMaintenanceForm') operPreventiveMaintenanceForm: OperPreventiveMaintenancesFormComponent;

    public id: any = null;
    public model: OperPreventiveMaintenance = null;

  constructor(
      public operPreventiveMaintenancesService: OperPreventiveMaintenancesService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operPreventiveMaintenancesService.editOperPreventiveMaintenance(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valueChanges.subscribe((data) => {
          this.operPreventiveMaintenancesService.operPreventiveMaintenancesFormValid.next(this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valid);
      });
  }

}
