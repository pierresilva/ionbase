import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SystCountriesService} from "../syst-countries.service";
import {ActivatedRoute} from "@angular/router";
import {SystCountry} from "../syst-country";
import {SystCountriesFormComponent} from "../syst-countries-form/syst-countries-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-syst-countries-create',
    templateUrl: './syst-countries-create.component.html',
    styleUrls: ['./syst-countries-create.component.scss']
})
export class SystCountriesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('systCountryForm') systCountryForm: SystCountriesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public systCountriesService: SystCountriesService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.systCountryForm.systCountriesForm.valueChanges.subscribe((data) => {
            this.systCountriesService.systCountriesFormValid.next(this.systCountryForm.systCountriesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.systCountriesService.createSystCountry();
        this.systCountriesService.systCountry = <SystCountry>{};
    }

}
