import {Component, OnInit, ViewChild} from '@angular/core';
import { UserProfilesService} from "../user-profiles.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-user-profiles-list',
    templateUrl: './user-profiles-list.component.html',
    styleUrls: ['./user-profiles-list.component.scss'],
})
export class UserProfilesListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public userProfilesService: UserProfilesService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.userProfilesService.getUserProfiles();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
