import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperPreventiveMaintenancesService} from "../oper-preventive-maintenances.service";
import {ActivatedRoute} from "@angular/router";
import {OperPreventiveMaintenance} from "../oper-preventive-maintenance";
import {OperPreventiveMaintenancesFormComponent} from "../oper-preventive-maintenances-form/oper-preventive-maintenances-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-preventive-maintenances-create',
    templateUrl: './oper-preventive-maintenances-create.component.html',
    styleUrls: ['./oper-preventive-maintenances-create.component.scss']
})
export class OperPreventiveMaintenancesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('operPreventiveMaintenanceForm') operPreventiveMaintenanceForm: OperPreventiveMaintenancesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public operPreventiveMaintenancesService: OperPreventiveMaintenancesService,
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
        this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valueChanges.subscribe((data) => {
            this.operPreventiveMaintenancesService.operPreventiveMaintenancesFormValid.next(this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.operPreventiveMaintenancesService.createOperPreventiveMaintenance();
        this.operPreventiveMaintenancesService.operPreventiveMaintenance = <OperPreventiveMaintenance>{};
    }

}
