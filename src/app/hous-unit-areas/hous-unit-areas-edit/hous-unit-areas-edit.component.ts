import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {HousUnitAreasService} from "../hous-unit-areas.service";
import {ActivatedRoute} from "@angular/router";
import {HousUnitArea} from "../hous-unit-area";
import {HousUnitAreasFormComponent} from "../hous-unit-areas-form/hous-unit-areas-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-hous-unit-areas-edit',
  templateUrl: './hous-unit-areas-edit.component.html',
  styleUrls: ['./hous-unit-areas-edit.component.scss']
})
export class HousUnitAreasEditComponent implements OnInit, AfterViewInit {

    @ViewChild('housUnitAreaForm') housUnitAreaForm: HousUnitAreasFormComponent;

    public id: any = null;
    public model: HousUnitArea = null;

  constructor(
      public housUnitAreasService: HousUnitAreasService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.housUnitAreasService.editHousUnitArea(this.id);
  }

  ngAfterViewInit() {
      this.housUnitAreaForm.housUnitAreasForm.valueChanges.subscribe((data) => {
          this.housUnitAreasService.housUnitAreasFormValid.next(this.housUnitAreaForm.housUnitAreasForm.valid);
      });
  }

}
