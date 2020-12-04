import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperContractorsService} from "../oper-contractors.service";
import {ActivatedRoute} from "@angular/router";
import {OperContractor} from "../oper-contractor";
import {OperContractorsFormComponent} from "../oper-contractors-form/oper-contractors-form.component";
import { Platform } from '@ionic/angular';

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
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operContractorsService.editOperContractor(this.id);
  }

  ngAfterViewInit() {
      this.operContractorForm.operContractorsForm.valueChanges.subscribe((data) => {
          this.operContractorsService.operContractorsFormValid.next(this.operContractorForm.operContractorsForm.valid);
      });
  }

}
