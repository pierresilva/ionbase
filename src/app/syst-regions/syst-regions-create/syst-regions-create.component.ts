import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SystRegionsService} from "../syst-regions.service";
import {ActivatedRoute} from "@angular/router";
import {SystRegion} from "../syst-region";
import {SystRegionsFormComponent} from "../syst-regions-form/syst-regions-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-syst-regions-create',
    templateUrl: './syst-regions-create.component.html',
    styleUrls: ['./syst-regions-create.component.scss']
})
export class SystRegionsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('systRegionForm') systRegionForm: SystRegionsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public systRegionsService: SystRegionsService,
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
        this.systRegionForm.systRegionsForm.valueChanges.subscribe((data) => {
            this.systRegionsService.systRegionsFormValid.next(this.systRegionForm.systRegionsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.systRegionsService.createSystRegion();
        this.systRegionsService.systRegion = <SystRegion>{};
    }

}
