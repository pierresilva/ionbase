import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CompResponsabilitiesService} from "../comp-responsabilities.service";
import {ActivatedRoute} from "@angular/router";
import {CompResponsability} from "../comp-responsability";
import {CompResponsabilitiesFormComponent} from "../comp-responsabilities-form/comp-responsabilities-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-comp-responsabilities-edit',
  templateUrl: './comp-responsabilities-edit.component.html',
  styleUrls: ['./comp-responsabilities-edit.component.scss']
})
export class CompResponsabilitiesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('compResponsabilityForm') compResponsabilityForm: CompResponsabilitiesFormComponent;

    public id: any = null;
    public model: CompResponsability = null;

  constructor(
      public compResponsabilitiesService: CompResponsabilitiesService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.compResponsabilitiesService.editCompResponsability(this.id);
  }

  ngAfterViewInit() {
      this.compResponsabilityForm.compResponsabilitiesForm.valueChanges.subscribe((data) => {
          this.compResponsabilitiesService.compResponsabilitiesFormValid.next(this.compResponsabilityForm.compResponsabilitiesForm.valid);
      });
  }

}
