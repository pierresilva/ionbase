import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CounMeetingCitationsService} from "../coun-meeting-citations.service";
import {ActivatedRoute} from "@angular/router";
import {CounMeetingCitation} from "../coun-meeting-citation";
import {CounMeetingCitationsFormComponent} from "../coun-meeting-citations-form/coun-meeting-citations-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-coun-meeting-citations-create',
    templateUrl: './coun-meeting-citations-create.component.html',
    styleUrls: ['./coun-meeting-citations-create.component.scss']
})
export class CounMeetingCitationsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('counMeetingCitationForm') counMeetingCitationForm: CounMeetingCitationsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public counMeetingCitationsService: CounMeetingCitationsService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.counMeetingCitationForm.counMeetingCitationsForm.valueChanges.subscribe((data) => {
            this.counMeetingCitationsService.counMeetingCitationsFormValid.next(this.counMeetingCitationForm.counMeetingCitationsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.counMeetingCitationsService.createCounMeetingCitation();
        this.counMeetingCitationsService.counMeetingCitation = <CounMeetingCitation>{};
    }

}
