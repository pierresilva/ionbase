import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CompPhonesService} from "../comp-phones.service";
import {ActivatedRoute} from "@angular/router";
import {CompPhone} from "../comp-phone";
import {CompPhonesFormComponent} from "../comp-phones-form/comp-phones-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-comp-phones-create',
    templateUrl: './comp-phones-create.component.html',
    styleUrls: ['./comp-phones-create.component.scss']
})
export class CompPhonesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('compPhoneForm') compPhoneForm: CompPhonesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public compPhonesService: CompPhonesService,
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
        this.compPhoneForm.compPhonesForm.valueChanges.subscribe((data) => {
            this.compPhonesService.compPhonesFormValid.next(this.compPhoneForm.compPhonesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.compPhonesService.createCompPhone();
        this.compPhonesService.compPhone = <CompPhone>{};
    }

}
