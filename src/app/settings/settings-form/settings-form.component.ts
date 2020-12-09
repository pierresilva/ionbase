import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
})
export class SettingsFormComponent implements OnInit {

  @ViewChild('settingsForm') settingsForm: FormGroup;

  constructor() { }

  ngOnInit() {}

}
