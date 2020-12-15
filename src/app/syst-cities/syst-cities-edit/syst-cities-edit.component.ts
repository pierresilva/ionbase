import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {SystCitiesService} from "../syst-cities.service";
import {ActivatedRoute} from "@angular/router";
import {SystCity} from "../syst-city";
import {SystCitiesFormComponent} from "../syst-cities-form/syst-cities-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-syst-cities-edit',
  templateUrl: './syst-cities-edit.component.html',
  styleUrls: ['./syst-cities-edit.component.scss']
})
export class SystCitiesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('systCityForm') systCityForm: SystCitiesFormComponent;

    public id: any = null;
    public model: SystCity = null;

  constructor(
      public systCitiesService: SystCitiesService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.systCitiesService.editSystCity(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.systCityForm.systCitiesForm.valueChanges.subscribe((data) => {
          this.systCitiesService.systCitiesFormValid.next(this.systCityForm.systCitiesForm.valid);
      });
  }

}
