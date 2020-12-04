import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CounMembersService} from "../coun-members.service";
import {ActivatedRoute} from "@angular/router";
import {CounMember} from "../coun-member";
import {CounMembersFormComponent} from "../coun-members-form/coun-members-form.component";
import { Platform } from '@ionic/angular';

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
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.counMembersService.editCounMember(this.id);
  }

  ngAfterViewInit() {
      this.counMemberForm.counMembersForm.valueChanges.subscribe((data) => {
          this.counMembersService.counMembersFormValid.next(this.counMemberForm.counMembersForm.valid);
      });
  }

}
