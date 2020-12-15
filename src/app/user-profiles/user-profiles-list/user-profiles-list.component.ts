import {Component, OnInit, ViewChild} from '@angular/core';
import { UserProfilesService} from "../user-profiles.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

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
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.userProfilesService.getUserProfiles();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
