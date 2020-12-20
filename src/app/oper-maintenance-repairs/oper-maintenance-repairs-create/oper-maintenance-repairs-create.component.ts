import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperMaintenanceRepairsService} from "../oper-maintenance-repairs.service";
import {ActivatedRoute} from "@angular/router";
import {OperMaintenanceRepair} from "../oper-maintenance-repair";
import {OperMaintenanceRepairsFormComponent} from "../oper-maintenance-repairs-form/oper-maintenance-repairs-form.component";
import { Platform } from '@ionic/angular';
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
