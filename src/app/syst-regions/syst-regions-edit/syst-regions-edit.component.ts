import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {SystRegionsService} from "../syst-regions.service";
import {ActivatedRoute} from "@angular/router";
import {SystRegion} from "../syst-region";
import {SystRegionsFormComponent} from "../syst-regions-form/syst-regions-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-syst-regions-edit',
  templateUrl: './syst-regions-edit.component.html',
  styleUrls: ['./syst-regions-edit.component.scss']
})
export class SystRegionsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('systRegionForm') systRegionForm: SystRegionsFormComponent;

    public id: any = null;
    public model: SystRegion = null;

  constructor(
      public systRegionsService: SystRegionsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.systRegionsService.editSystRegion(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.systRegionForm.systRegionsForm.valueChanges.subscribe((data) => {
          this.systRegionsService.systRegionsFormValid.next(this.systRegionForm.systRegionsForm.valid);
      });
  }

}
