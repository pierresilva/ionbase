import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
  selector: 'app-coun-meetings',
  templateUrl: './coun-meetings.page.html',
  styleUrls: ['./coun-meetings.page.scss'],
})
export class CounMeetingsPage implements OnInit {

  constructor(
    public splitPanel: SplitPanelService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

}
