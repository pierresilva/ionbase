import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CompaniesService} from "../companies.service";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../company";
import {CompaniesFormComponent} from "../companies-form/companies-form.component";
import { Platform } from '@ionic/angular';

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
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
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
