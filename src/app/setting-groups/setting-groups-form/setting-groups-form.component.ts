import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SettingGroupsService} from "../setting-groups.service";

@Component({
  selector: 'app-setting-groups-form',
  templateUrl: './setting-groups-form.component.html',
  styleUrls: ['./setting-groups-form.component.scss'],
})
export class SettingGroupsFormComponent implements OnInit {

  @ViewChild('settingGroupsForm') settingGroupsForm: FormGroup;
  public validationMessages = {
    'name': [
      {type: 'required', message: 'El campo nombre es obligatorio.'},
    ],
  };


  constructor(
      public settingGroupsService: SettingGroupsService
  ) { }

  ngOnInit() {}

}
