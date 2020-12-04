import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {SystCountriesService} from "../syst-countries.service";
import {ActivatedRoute} from "@angular/router";
import {SystCountry} from "../syst-country";
import {SystCountriesFormComponent} from "../syst-countries-form/syst-countries-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-syst-countries-edit',
  templateUrl: './syst-countries-edit.component.html',
  styleUrls: ['./syst-countries-edit.component.scss']
})
export class SystCountriesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('systCountryForm') systCountryForm: SystCountriesFormComponent;

    public id: any = null;
    public model: SystCountry = null;

  constructor(
      public systCountriesService: SystCountriesService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.systCountriesService.editSystCountry(this.id);
  }

  ngAfterViewInit() {
      this.systCountryForm.systCountriesForm.valueChanges.subscribe((data) => {
          this.systCountriesService.systCountriesFormValid.next(this.systCountryForm.systCountriesForm.valid);
      });
  }

}
