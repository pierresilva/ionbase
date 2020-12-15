import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CompContactsService} from "../comp-contacts.service";
import {ActivatedRoute} from "@angular/router";
import {CompContact} from "../comp-contact";
import {CompContactsFormComponent} from "../comp-contacts-form/comp-contacts-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-comp-contacts-edit',
  templateUrl: './comp-contacts-edit.component.html',
  styleUrls: ['./comp-contacts-edit.component.scss']
})
export class CompContactsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('compContactForm') compContactForm: CompContactsFormComponent;

    public id: any = null;
    public model: CompContact = null;

  constructor(
      public compContactsService: CompContactsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.compContactsService.editCompContact(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.compContactForm.compContactsForm.valueChanges.subscribe((data) => {
          this.compContactsService.compContactsFormValid.next(this.compContactForm.compContactsForm.valid);
      });
  }

}
