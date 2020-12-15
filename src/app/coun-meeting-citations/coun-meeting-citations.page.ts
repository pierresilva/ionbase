import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
  selector: 'app-coun-meeting-citations',
  templateUrl: './coun-meeting-citations.page.html',
  styleUrls: ['./coun-meeting-citations.page.scss'],
})
export class CounMeetingCitationsPage implements OnInit {

  constructor(
    public splitPanel: SplitPanelService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

}
