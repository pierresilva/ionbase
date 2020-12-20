import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperReplacementsService} from "../oper-replacements.service";
import {ActivatedRoute} from "@angular/router";
import {OperReplacement} from "../oper-replacement";
import {OperReplacementsFormComponent} from "../oper-replacements-form/oper-replacements-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-oper-replacements-edit',
  templateUrl: './oper-replacements-edit.component.html',
  styleUrls: ['./oper-replacements-edit.component.scss']
})
export class OperReplacementsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('operReplacementForm') operReplacementForm: OperReplacementsFormComponent;

    public id: any = null;
    public model: OperReplacement = null;

  constructor(
      public operReplacementsService: OperReplacementsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operReplacementsService.editOperReplacement(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.operReplacementForm.operReplacementsForm.valueChanges.subscribe((data) => {
          this.operReplacementsService.operReplacementsFormValid.next(this.operReplacementForm.operReplacementsForm.valid);
      });
  }

}
