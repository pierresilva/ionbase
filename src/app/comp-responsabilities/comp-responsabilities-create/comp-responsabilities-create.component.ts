import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CompResponsabilitiesService} from "../comp-responsabilities.service";
import {ActivatedRoute} from "@angular/router";
import {CompResponsability} from "../comp-responsability";
import {CompResponsabilitiesFormComponent} from "../comp-responsabilities-form/comp-responsabilities-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-comp-responsabilities-create',
    templateUrl: './comp-responsabilities-create.component.html',
    styleUrls: ['./comp-responsabilities-create.component.scss']
})
export class CompResponsabilitiesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('compResponsabilityForm') compResponsabilityForm: CompResponsabilitiesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public compResponsabilitiesService: CompResponsabilitiesService,
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
        this.compResponsabilityForm.compResponsabilitiesForm.valueChanges.subscribe((data) => {
            this.compResponsabilitiesService.compResponsabilitiesFormValid.next(this.compResponsabilityForm.compResponsabilitiesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.compResponsabilitiesService.createCompResponsability();
        this.compResponsabilitiesService.compResponsability = <CompResponsability>{};
    }

}
