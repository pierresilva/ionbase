import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CounMembersService} from "../coun-members.service";
import {ActivatedRoute} from "@angular/router";
import {CounMember} from "../coun-member";
import {CounMembersFormComponent} from "../coun-members-form/coun-members-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-coun-members-edit',
  templateUrl: './coun-members-edit.component.html',
  styleUrls: ['./coun-members-edit.component.scss']
})
export class CounMembersEditComponent implements OnInit, AfterViewInit {

    @ViewChild('counMemberForm') counMemberForm: CounMembersFormComponent;

    public id: any = null;
    public model: CounMember = null;

  constructor(
      public counMembersService: CounMembersService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.counMembersService.editCounMember(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.counMemberForm.counMembersForm.valueChanges.subscribe((data) => {
          this.counMembersService.counMembersFormValid.next(this.counMemberForm.counMembersForm.valid);
      });
  }

}
