import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CorrPacketsService} from "../corr-packets.service";
import {ActivatedRoute} from "@angular/router";
import {CorrPacket} from "../corr-packet";
import {CorrPacketsFormComponent} from "../corr-packets-form/corr-packets-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-corr-packets-edit',
  templateUrl: './corr-packets-edit.component.html',
  styleUrls: ['./corr-packets-edit.component.scss']
})
export class CorrPacketsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('corrPacketForm') corrPacketForm: CorrPacketsFormComponent;

    public id: any = null;
    public model: CorrPacket = null;

  constructor(
      public corrPacketsService: CorrPacketsService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.corrPacketsService.editCorrPacket(this.id);
  }

  ngAfterViewInit() {
      this.corrPacketForm.corrPacketsForm.valueChanges.subscribe((data) => {
          this.corrPacketsService.corrPacketsFormValid.next(this.corrPacketForm.corrPacketsForm.valid);
      });
  }

}
