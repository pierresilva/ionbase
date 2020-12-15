import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CompaniesService} from "../companies.service";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../company";
import {CompaniesFormComponent} from "../companies-form/companies-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-companies-create',
    templateUrl: './companies-create.component.html',
    styleUrls: ['./companies-create.component.scss']
})
export class CompaniesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('companyForm') companyForm: CompaniesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public companiesService: CompaniesService,
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
        this.companyForm.companiesForm.valueChanges.subscribe((data) => {
            this.companiesService.companiesFormValid.next(this.companyForm.companiesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.companiesService.createCompany();
        this.companiesService.company = <Company>{};
    }

}
