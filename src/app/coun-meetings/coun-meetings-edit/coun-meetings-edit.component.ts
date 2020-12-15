import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CounMeetingsService} from "../coun-meetings.service";
import {ActivatedRoute} from "@angular/router";
import {CounMeeting} from "../coun-meeting";
import {CounMeetingsFormComponent} from "../coun-meetings-form/coun-meetings-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-coun-meetings-edit',
  templateUrl: './coun-meetings-edit.component.html',
  styleUrls: ['./coun-meetings-edit.component.scss']
})
export class CounMeetingsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('counMeetingForm') counMeetingForm: CounMeetingsFormComponent;

    public id: any = null;
    public model: CounMeeting = null;

  constructor(
      public counMeetingsService: CounMeetingsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.counMeetingsService.editCounMeeting(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.counMeetingForm.counMeetingsForm.valueChanges.subscribe((data) => {
          this.counMeetingsService.counMeetingsFormValid.next(this.counMeetingForm.counMeetingsForm.valid);
      });
  }

}
