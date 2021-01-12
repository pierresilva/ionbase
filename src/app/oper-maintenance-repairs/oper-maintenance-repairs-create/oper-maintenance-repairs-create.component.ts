import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperMaintenanceRepairsService} from "../oper-maintenance-repairs.service";
import {ActivatedRoute} from "@angular/router";
import {OperMaintenanceRepair} from "../oper-maintenance-repair";
import {OperMaintenanceRepairsFormComponent} from "../oper-maintenance-repairs-form/oper-maintenance-repairs-form.component";
import {Platform} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-maintenance-repairs-create',
    templateUrl: './oper-maintenance-repairs-create.component.html',
    styleUrls: ['./oper-maintenance-repairs-create.component.scss']
})
export class OperMaintenanceRepairsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('operMaintenanceRepairForm') operMaintenanceRepairForm: OperMaintenanceRepairsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public operMaintenanceRepairsService: OperMaintenanceRepairsService,
        public route: ActivatedRoute,
        public platform: Platform,
        public splitPanel: SplitPanelService
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);

        this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id = this.route.snapshot.params.mttoId;

        console.log(this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id);

        console.log(this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance);


        if (this.route.snapshot.params.mttoId) {
            for (let i = 0; i < this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance.length; i++) {

                if (this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i].id == this.route.snapshot.params.mttoId) {
                    console.log(this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i]);
                    this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance = this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i];
                    this.operMaintenanceRepairForm.model.oper_corrective_maintenance = this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i];
                    this.operMaintenanceRepairForm.model.oper_corrective_maintenance_id = this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id;
                }
            }
        }

        console.log(this.operMaintenanceRepairForm.model);

    }

    ngAfterViewInit() {
        this.operMaintenanceRepairForm.operMaintenanceRepairsForm.valueChanges.subscribe((data) => {
            this.operMaintenanceRepairsService.operMaintenanceRepairsFormValid.next(this.operMaintenanceRepairForm.operMaintenanceRepairsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.operMaintenanceRepairsService.createOperMaintenanceRepair();
        this.operMaintenanceRepairsService.operMaintenanceRepair = <OperMaintenanceRepair>{};
    }

}
