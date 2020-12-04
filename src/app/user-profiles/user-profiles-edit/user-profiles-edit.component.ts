import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {UserProfilesService} from "../user-profiles.service";
import {ActivatedRoute} from "@angular/router";
import {UserProfile} from "../user-profile";
import {UserProfilesFormComponent} from "../user-profiles-form/user-profiles-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-user-profiles-edit',
  templateUrl: './user-profiles-edit.component.html',
  styleUrls: ['./user-profiles-edit.component.scss']
})
export class UserProfilesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('userProfileForm') userProfileForm: UserProfilesFormComponent;

    public id: any = null;
    public model: UserProfile = null;

  constructor(
      public userProfilesService: UserProfilesService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.userProfilesService.editUserProfile(this.id);
  }

  ngAfterViewInit() {
      this.userProfileForm.userProfilesForm.valueChanges.subscribe((data) => {
          this.userProfilesService.userProfilesFormValid.next(this.userProfileForm.userProfilesForm.valid);
      });
  }

}
