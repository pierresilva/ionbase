import {Component, OnInit, ViewChild} from '@angular/core';
import { CounMembersService} from "../coun-members.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-coun-members-list',
    templateUrl: './coun-members-list.component.html',
    styleUrls: ['./coun-members-list.component.scss'],
})
export class CounMembersListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public counMembersService: CounMembersService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.counMembersService.getCounMembers();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
