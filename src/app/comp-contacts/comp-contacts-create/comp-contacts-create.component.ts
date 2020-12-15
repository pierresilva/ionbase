import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CompContactsService} from "../comp-contacts.service";
import {ActivatedRoute} from "@angular/router";
import {CompContact} from "../comp-contact";
import {CompContactsFormComponent} from "../comp-contacts-form/comp-contacts-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-comp-contacts-create',
    templateUrl: './comp-contacts-create.component.html',
    styleUrls: ['./comp-contacts-create.component.scss']
})
export class CompContactsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('compContactForm') compContactForm: CompContactsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public compContactsService: CompContactsService,
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
        this.compContactForm.compContactsForm.valueChanges.subscribe((data) => {
            this.compContactsService.compContactsFormValid.next(this.compContactForm.compContactsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.compContactsService.createCompContact();
        this.compContactsService.compContact = <CompContact>{};
    }

}
