import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CounMeetingAgendasService} from "../coun-meeting-agendas.service";
import {ActivatedRoute} from "@angular/router";
import {CounMeetingAgenda} from "../coun-meeting-agenda";
import {CounMeetingAgendasFormComponent} from "../coun-meeting-agendas-form/coun-meeting-agendas-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-coun-meeting-agendas-create',
    templateUrl: './coun-meeting-agendas-create.component.html',
    styleUrls: ['./coun-meeting-agendas-create.component.scss']
})
export class CounMeetingAgendasCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('counMeetingAgendaForm') counMeetingAgendaForm: CounMeetingAgendasFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public counMeetingAgendasService: CounMeetingAgendasService,
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
        this.counMeetingAgendaForm.counMeetingAgendasForm.valueChanges.subscribe((data) => {
            this.counMeetingAgendasService.counMeetingAgendasFormValid.next(this.counMeetingAgendaForm.counMeetingAgendasForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.counMeetingAgendasService.createCounMeetingAgenda();
        this.counMeetingAgendasService.counMeetingAgenda = <CounMeetingAgenda>{};
    }

}
