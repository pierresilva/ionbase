import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperContractorsService} from "../oper-contractors.service";
import {ActivatedRoute} from "@angular/router";
import {OperContractor} from "../oper-contractor";
import {OperContractorsFormComponent} from "../oper-contractors-form/oper-contractors-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-contractors-edit',
  templateUrl: './oper-contractors-edit.component.html',
  styleUrls: ['./oper-contractors-edit.component.scss']
})
export class OperContractorsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('operContractorForm') operContractorForm: OperContractorsFormComponent;

    public id: any = null;
    public model: OperContractor = null;

  constructor(
      public operContractorsService: OperContractorsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operContractorsService.editOperContractor(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.operContractorForm.operContractorsForm.valueChanges.subscribe((data) => {
          this.operContractorsService.operContractorsFormValid.next(this.operContractorForm.operContractorsForm.valid);
      });
  }

}
