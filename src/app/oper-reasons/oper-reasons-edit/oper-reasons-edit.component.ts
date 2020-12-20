import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperReasonsService} from "../oper-reasons.service";
import {ActivatedRoute} from "@angular/router";
import {OperReason} from "../oper-reason";
import {OperReasonsFormComponent} from "../oper-reasons-form/oper-reasons-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-reasons-edit',
  templateUrl: './oper-reasons-edit.component.html',
  styleUrls: ['./oper-reasons-edit.component.scss']
})
export class OperReasonsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('operReasonForm') operReasonForm: OperReasonsFormComponent;

    public id: any = null;
    public model: OperReason = null;

  constructor(
      public operReasonsService: OperReasonsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operReasonsService.editOperReason(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.operReasonForm.operReasonsForm.valueChanges.subscribe((data) => {
          this.operReasonsService.operReasonsFormValid.next(this.operReasonForm.operReasonsForm.valid);
      });
  }

}
