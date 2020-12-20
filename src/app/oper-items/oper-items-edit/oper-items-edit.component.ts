import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperItemsService} from "../oper-items.service";
import {ActivatedRoute} from "@angular/router";
import {OperItem} from "../oper-item";
import {OperItemsFormComponent} from "../oper-items-form/oper-items-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-items-edit',
  templateUrl: './oper-items-edit.component.html',
  styleUrls: ['./oper-items-edit.component.scss']
})
export class OperItemsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('operItemForm') operItemForm: OperItemsFormComponent;

    public id: any = null;
    public model: OperItem = null;

  constructor(
      public operItemsService: OperItemsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operItemsService.editOperItem(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.operItemForm.operItemsForm.valueChanges.subscribe((data) => {
          this.operItemsService.operItemsFormValid.next(this.operItemForm.operItemsForm.valid);
      });
  }

}
