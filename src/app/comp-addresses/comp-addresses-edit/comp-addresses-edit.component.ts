import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CompAddressesService} from "../comp-addresses.service";
import {ActivatedRoute} from "@angular/router";
import {CompAddress} from "../comp-address";
import {CompAddressesFormComponent} from "../comp-addresses-form/comp-addresses-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-comp-addresses-edit',
  templateUrl: './comp-addresses-edit.component.html',
  styleUrls: ['./comp-addresses-edit.component.scss']
})
export class CompAddressesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('compAddressForm') compAddressForm: CompAddressesFormComponent;

    public id: any = null;
    public model: CompAddress = null;

  constructor(
      public compAddressesService: CompAddressesService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.compAddressesService.editCompAddress(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.compAddressForm.compAddressesForm.valueChanges.subscribe((data) => {
          this.compAddressesService.compAddressesFormValid.next(this.compAddressForm.compAddressesForm.valid);
      });
  }

}
