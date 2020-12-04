import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {SystPositionsService} from "../syst-positions.service";
import {ActivatedRoute} from "@angular/router";
import {SystPosition} from "../syst-position";
import {SystPositionsFormComponent} from "../syst-positions-form/syst-positions-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-syst-positions-edit',
  templateUrl: './syst-positions-edit.component.html',
  styleUrls: ['./syst-positions-edit.component.scss']
})
export class SystPositionsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('systPositionForm') systPositionForm: SystPositionsFormComponent;

    public id: any = null;
    public model: SystPosition = null;

  constructor(
      public systPositionsService: SystPositionsService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.systPositionsService.editSystPosition(this.id);
  }

  ngAfterViewInit() {
      this.systPositionForm.systPositionsForm.valueChanges.subscribe((data) => {
          this.systPositionsService.systPositionsFormValid.next(this.systPositionForm.systPositionsForm.valid);
      });
  }

}
