import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SystCitiesService} from "../syst-cities.service";
import {ActivatedRoute} from "@angular/router";
import {SystCity} from "../syst-city";
import {SystCitiesFormComponent} from "../syst-cities-form/syst-cities-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-syst-cities-create',
    templateUrl: './syst-cities-create.component.html',
    styleUrls: ['./syst-cities-create.component.scss']
})
export class SystCitiesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('systCityForm') systCityForm: SystCitiesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public systCitiesService: SystCitiesService,
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
        this.systCityForm.systCitiesForm.valueChanges.subscribe((data) => {
            this.systCitiesService.systCitiesFormValid.next(this.systCityForm.systCitiesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.systCitiesService.createSystCity();
        this.systCitiesService.systCity = <SystCity>{};
    }

}
