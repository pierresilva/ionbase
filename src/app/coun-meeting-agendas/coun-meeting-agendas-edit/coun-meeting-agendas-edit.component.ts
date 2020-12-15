import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CounMeetingAgendasService} from "../coun-meeting-agendas.service";
import {ActivatedRoute} from "@angular/router";
import {CounMeetingAgenda} from "../coun-meeting-agenda";
import {CounMeetingAgendasFormComponent} from "../coun-meeting-agendas-form/coun-meeting-agendas-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-coun-meeting-agendas-edit',
  templateUrl: './coun-meeting-agendas-edit.component.html',
  styleUrls: ['./coun-meeting-agendas-edit.component.scss']
})
export class CounMeetingAgendasEditComponent implements OnInit, AfterViewInit {

    @ViewChild('counMeetingAgendaForm') counMeetingAgendaForm: CounMeetingAgendasFormComponent;

    public id: any = null;
    public model: CounMeetingAgenda = null;

  constructor(
      public counMeetingAgendasService: CounMeetingAgendasService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.counMeetingAgendasService.editCounMeetingAgenda(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.counMeetingAgendaForm.counMeetingAgendasForm.valueChanges.subscribe((data) => {
          this.counMeetingAgendasService.counMeetingAgendasFormValid.next(this.counMeetingAgendaForm.counMeetingAgendasForm.valid);
      });
  }

}
