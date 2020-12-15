import { Component, OnInit } from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";

@Component({
  selector: 'app-coun-meeting-agendas',
  templateUrl: './coun-meeting-agendas.page.html',
  styleUrls: ['./coun-meeting-agendas.page.scss'],
})
export class CounMeetingAgendasPage implements OnInit {

  constructor(
    public splitPanel: SplitPanelService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

}
