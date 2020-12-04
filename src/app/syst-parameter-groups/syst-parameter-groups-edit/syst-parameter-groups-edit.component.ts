import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {SystParameterGroupsService} from "../syst-parameter-groups.service";
import {ActivatedRoute} from "@angular/router";
import {SystParameterGroup} from "../syst-parameter-group";
import {SystParameterGroupsFormComponent} from "../syst-parameter-groups-form/syst-parameter-groups-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-syst-parameter-groups-edit',
  templateUrl: './syst-parameter-groups-edit.component.html',
  styleUrls: ['./syst-parameter-groups-edit.component.scss']
})
export class SystParameterGroupsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('systParameterGroupForm') systParameterGroupForm: SystParameterGroupsFormComponent;

    public id: any = null;
    public model: SystParameterGroup = null;

  constructor(
      public systParameterGroupsService: SystParameterGroupsService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.systParameterGroupsService.editSystParameterGroup(this.id);
  }

  ngAfterViewInit() {
      this.systParameterGroupForm.systParameterGroupsForm.valueChanges.subscribe((data) => {
          this.systParameterGroupsService.systParameterGroupsFormValid.next(this.systParameterGroupForm.systParameterGroupsForm.valid);
      });
  }

}
