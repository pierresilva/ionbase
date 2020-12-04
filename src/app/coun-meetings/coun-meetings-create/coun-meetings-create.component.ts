import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CounMeetingsService} from "../coun-meetings.service";
import {ActivatedRoute} from "@angular/router";
import {CounMeeting} from "../coun-meeting";
import {CounMeetingsFormComponent} from "../coun-meetings-form/coun-meetings-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-coun-meetings-create',
    templateUrl: './coun-meetings-create.component.html',
    styleUrls: ['./coun-meetings-create.component.scss']
})
export class CounMeetingsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('counMeetingForm') counMeetingForm: CounMeetingsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public counMeetingsService: CounMeetingsService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.counMeetingForm.counMeetingsForm.valueChanges.subscribe((data) => {
            this.counMeetingsService.counMeetingsFormValid.next(this.counMeetingForm.counMeetingsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.counMeetingsService.createCounMeeting();
        this.counMeetingsService.counMeeting = <CounMeeting>{};
    }

}
