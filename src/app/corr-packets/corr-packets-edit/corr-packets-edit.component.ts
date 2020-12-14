import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CorrPacketsService} from "../corr-packets.service";
import {ActivatedRoute} from "@angular/router";
import {CorrPacket} from "../corr-packet";
import {CorrPacketsFormComponent} from "../corr-packets-form/corr-packets-form.component";
import { Platform } from '@ionic/angular';
import {getFormValidationErrors} from "../../@shared/classes/form-validation-errors";
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-corr-packets-edit',
  templateUrl: './corr-packets-edit.component.html',
  styleUrls: ['./corr-packets-edit.component.scss']
})
export class CorrPacketsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('corrPacketForm') corrPacketForm: CorrPacketsFormComponent;

    public id: any = null;
    public model: CorrPacket = null;

    type: any = null;

  constructor(
      public corrPacketsService: CorrPacketsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.corrPacketsService.editCorrPacket(this.id);
      this.type = this.route.snapshot.paramMap.get('type')
  }

  ionViewWillEnter() {
      this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.corrPacketForm.corrPacketsForm.valueChanges.subscribe((data) => {
          console.log(getFormValidationErrors(this.corrPacketForm.corrPacketsForm.controls));

          this.corrPacketsService.corrPacketsFormValid.next(this.corrPacketForm.corrPacketsForm.valid);
      });
  }

}
