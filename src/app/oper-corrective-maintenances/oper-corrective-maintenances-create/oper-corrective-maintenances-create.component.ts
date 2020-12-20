import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperCorrectiveMaintenancesService} from "../oper-corrective-maintenances.service";
import {ActivatedRoute} from "@angular/router";
import {OperCorrectiveMaintenance} from "../oper-corrective-maintenance";
import {OperCorrectiveMaintenancesFormComponent} from "../oper-corrective-maintenances-form/oper-corrective-maintenances-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-corrective-maintenances-create',
    templateUrl: './oper-corrective-maintenances-create.component.html',
    styleUrls: ['./oper-corrective-maintenances-create.component.scss']
})
export class OperCorrectiveMaintenancesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('operCorrectiveMaintenanceForm') operCorrectiveMaintenanceForm: OperCorrectiveMaintenancesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public operCorrectiveMaintenancesService: OperCorrectiveMaintenancesService,
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
        this.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valueChanges.subscribe((data) => {
            this.operCorrectiveMaintenancesService.operCorrectiveMaintenancesFormValid.next(this.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.operCorrectiveMaintenancesService.createOperCorrectiveMaintenance();
        this.operCorrectiveMaintenancesService.operCorrectiveMaintenance = <OperCorrectiveMaintenance>{};
    }

}
