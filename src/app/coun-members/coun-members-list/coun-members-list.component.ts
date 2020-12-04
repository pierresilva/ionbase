import {Component, OnInit, ViewChild} from '@angular/core';
import { CounMembersService} from "../coun-members.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

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
    ) {
    }

    ngOnInit() {
        this.counMembersService.getCounMembers();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
