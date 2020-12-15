import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {SystPositionsService} from "../syst-positions.service";
import {ActivatedRoute} from "@angular/router";
import {SystPosition} from "../syst-position";
import {SystPositionsFormComponent} from "../syst-positions-form/syst-positions-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

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
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.systPositionsService.editSystPosition(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.systPositionForm.systPositionsForm.valueChanges.subscribe((data) => {
          this.systPositionsService.systPositionsFormValid.next(this.systPositionForm.systPositionsForm.valid);
      });
  }

}
