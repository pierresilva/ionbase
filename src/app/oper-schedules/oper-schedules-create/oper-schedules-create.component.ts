import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperSchedulesService} from "../oper-schedules.service";
import {ActivatedRoute} from "@angular/router";
import {OperSchedule} from "../oper-schedule";
import {OperSchedulesFormComponent} from "../oper-schedules-form/oper-schedules-form.component";
import { Platform } from '@ionic/angular';

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
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
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
