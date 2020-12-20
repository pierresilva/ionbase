import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperCorrectiveMaintenancesService} from "../oper-corrective-maintenances.service";
import {ActivatedRoute} from "@angular/router";
import {OperCorrectiveMaintenance} from "../oper-corrective-maintenance";
import {OperCorrectiveMaintenancesFormComponent} from "../oper-corrective-maintenances-form/oper-corrective-maintenances-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-corrective-maintenances-edit',
  templateUrl: './oper-corrective-maintenances-edit.component.html',
  styleUrls: ['./oper-corrective-maintenances-edit.component.scss']
})
export class OperCorrectiveMaintenancesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('operCorrectiveMaintenanceForm') operCorrectiveMaintenanceForm: OperCorrectiveMaintenancesFormComponent;

    public id: any = null;
    public model: OperCorrectiveMaintenance = null;

  constructor(
      public operCorrectiveMaintenancesService: OperCorrectiveMaintenancesService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operCorrectiveMaintenancesService.editOperCorrectiveMaintenance(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valueChanges.subscribe((data) => {
          this.operCorrectiveMaintenancesService.operCorrectiveMaintenancesFormValid.next(this.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valid);
      });
  }

}
