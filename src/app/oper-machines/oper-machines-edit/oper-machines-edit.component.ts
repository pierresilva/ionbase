import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperMachinesService} from "../oper-machines.service";
import {ActivatedRoute} from "@angular/router";
import {OperMachine} from "../oper-machine";
import {OperMachinesFormComponent} from "../oper-machines-form/oper-machines-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-machines-edit',
  templateUrl: './oper-machines-edit.component.html',
  styleUrls: ['./oper-machines-edit.component.scss']
})
export class OperMachinesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('operMachineForm') operMachineForm: OperMachinesFormComponent;

    public id: any = null;
    public model: OperMachine = null;

  constructor(
      public operMachinesService: OperMachinesService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operMachinesService.editOperMachine(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.operMachineForm.operMachinesForm.valueChanges.subscribe((data) => {
          this.operMachinesService.operMachinesFormValid.next(this.operMachineForm.operMachinesForm.valid);
      });
  }

}
