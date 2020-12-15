import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CompaniesService} from "../companies.service";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../company";
import {CompaniesFormComponent} from "../companies-form/companies-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-companies-edit',
  templateUrl: './companies-edit.component.html',
  styleUrls: ['./companies-edit.component.scss']
})
export class CompaniesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('companyForm') companyForm: CompaniesFormComponent;

    public id: any = null;
    public model: Company = null;

  constructor(
      public companiesService: CompaniesService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.companiesService.editCompany(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.companyForm.companiesForm.valueChanges.subscribe((data) => {
          this.companiesService.companiesFormValid.next(this.companyForm.companiesForm.valid);
      });
  }

}
