import {Component, OnInit, ViewChild} from '@angular/core';
import { UserPermissionsService} from "../user-permissions.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-user-permissions-list',
    templateUrl: './user-permissions-list.component.html',
    styleUrls: ['./user-permissions-list.component.scss'],
})
export class UserPermissionsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public userPermissionsService: UserPermissionsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.userPermissionsService.getUserPermissions();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
