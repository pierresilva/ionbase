import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {SystParametersService} from "../syst-parameters.service";
import {ActivatedRoute} from "@angular/router";
import {SystParameter} from "../syst-parameter";
import {SystParametersFormComponent} from "../syst-parameters-form/syst-parameters-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-syst-parameters-edit',
  templateUrl: './syst-parameters-edit.component.html',
  styleUrls: ['./syst-parameters-edit.component.scss']
})
export class SystParametersEditComponent implements OnInit, AfterViewInit {

    @ViewChild('systParameterForm') systParameterForm: SystParametersFormComponent;

    public id: any = null;
    public model: SystParameter = null;

  constructor(
      public systParametersService: SystParametersService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.systParametersService.editSystParameter(this.id);
  }

  ngAfterViewInit() {
      this.systParameterForm.systParametersForm.valueChanges.subscribe((data) => {
          this.systParametersService.systParametersFormValid.next(this.systParameterForm.systParametersForm.valid);
      });
  }

}
