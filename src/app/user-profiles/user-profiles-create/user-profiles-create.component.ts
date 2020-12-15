import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserProfilesService} from "../user-profiles.service";
import {ActivatedRoute} from "@angular/router";
import {UserProfile} from "../user-profile";
import {UserProfilesFormComponent} from "../user-profiles-form/user-profiles-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-user-profiles-create',
    templateUrl: './user-profiles-create.component.html',
    styleUrls: ['./user-profiles-create.component.scss']
})
export class UserProfilesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('userProfileForm') userProfileForm: UserProfilesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public userProfilesService: UserProfilesService,
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
        this.userProfileForm.userProfilesForm.valueChanges.subscribe((data) => {
            this.userProfilesService.userProfilesFormValid.next(this.userProfileForm.userProfilesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.userProfilesService.createUserProfile();
        this.userProfilesService.userProfile = <UserProfile>{};
    }

}
