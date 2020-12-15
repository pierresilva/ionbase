import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {HousUnitsService} from "../hous-units.service";
import {ActivatedRoute} from "@angular/router";
import {HousUnit} from "../hous-unit";
import {HousUnitsFormComponent} from "../hous-units-form/hous-units-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-hous-units-edit',
  templateUrl: './hous-units-edit.component.html',
  styleUrls: ['./hous-units-edit.component.scss']
})
export class HousUnitsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('housUnitForm') housUnitForm: HousUnitsFormComponent;

    public id: any = null;
    public model: HousUnit = null;

  constructor(
      public housUnitsService: HousUnitsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.housUnitsService.editHousUnit(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.housUnitForm.housUnitsForm.valueChanges.subscribe((data) => {
          this.housUnitsService.housUnitsFormValid.next(this.housUnitForm.housUnitsForm.valid);
      });
  }

}
