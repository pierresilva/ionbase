import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CounMembersService} from "../coun-members.service";
import {ActivatedRoute} from "@angular/router";
import {CounMember} from "../coun-member";
import {CounMembersFormComponent} from "../coun-members-form/coun-members-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-coun-members-create',
    templateUrl: './coun-members-create.component.html',
    styleUrls: ['./coun-members-create.component.scss']
})
export class CounMembersCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('counMemberForm') counMemberForm: CounMembersFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public counMembersService: CounMembersService,
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
        this.counMemberForm.counMembersForm.valueChanges.subscribe((data) => {
            this.counMembersService.counMembersFormValid.next(this.counMemberForm.counMembersForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.counMembersService.createCounMember();
        this.counMembersService.counMember = <CounMember>{};
    }

}
