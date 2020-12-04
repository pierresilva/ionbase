import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CompPhonesService} from "../comp-phones.service";
import {ActivatedRoute} from "@angular/router";
import {CompPhone} from "../comp-phone";
import {CompPhonesFormComponent} from "../comp-phones-form/comp-phones-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-comp-phones-edit',
  templateUrl: './comp-phones-edit.component.html',
  styleUrls: ['./comp-phones-edit.component.scss']
})
export class CompPhonesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('compPhoneForm') compPhoneForm: CompPhonesFormComponent;

    public id: any = null;
    public model: CompPhone = null;

  constructor(
      public compPhonesService: CompPhonesService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.compPhonesService.editCompPhone(this.id);
  }

  ngAfterViewInit() {
      this.compPhoneForm.compPhonesForm.valueChanges.subscribe((data) => {
          this.compPhonesService.compPhonesFormValid.next(this.compPhoneForm.compPhonesForm.valid);
      });
  }

}
