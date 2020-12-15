import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperSchedulesService} from "../oper-schedules.service";
import {ActivatedRoute} from "@angular/router";
import {OperSchedule} from "../oper-schedule";
import {OperSchedulesFormComponent} from "../oper-schedules-form/oper-schedules-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-schedules-create',
    templateUrl: './oper-schedules-create.component.html',
    styleUrls: ['./oper-schedules-create.component.scss']
})
export class OperSchedulesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('operScheduleForm') operScheduleForm: OperSchedulesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public operSchedulesService: OperSchedulesService,
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
        this.operScheduleForm.operSchedulesForm.valueChanges.subscribe((data) => {
            this.operSchedulesService.operSchedulesFormValid.next(this.operScheduleForm.operSchedulesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.operSchedulesService.createOperSchedule();
        this.operSchedulesService.operSchedule = <OperSchedule>{};
    }

}
