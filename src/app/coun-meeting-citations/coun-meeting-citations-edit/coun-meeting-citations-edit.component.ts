import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CounMeetingCitationsService} from "../coun-meeting-citations.service";
import {ActivatedRoute} from "@angular/router";
import {CounMeetingCitation} from "../coun-meeting-citation";
import {CounMeetingCitationsFormComponent} from "../coun-meeting-citations-form/coun-meeting-citations-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-coun-meeting-citations-edit',
  templateUrl: './coun-meeting-citations-edit.component.html',
  styleUrls: ['./coun-meeting-citations-edit.component.scss']
})
export class CounMeetingCitationsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('counMeetingCitationForm') counMeetingCitationForm: CounMeetingCitationsFormComponent;

    public id: any = null;
    public model: CounMeetingCitation = null;

  constructor(
      public counMeetingCitationsService: CounMeetingCitationsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.counMeetingCitationsService.editCounMeetingCitation(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.counMeetingCitationForm.counMeetingCitationsForm.valueChanges.subscribe((data) => {
          this.counMeetingCitationsService.counMeetingCitationsFormValid.next(this.counMeetingCitationForm.counMeetingCitationsForm.valid);
      });
  }

}
